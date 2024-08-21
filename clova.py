from flask import Flask, request, jsonify, render_template, send_from_directory
from utils import clova_speech_recognition
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)

@app.route('/process_audio', methods=['POST'])
def process_audio():
    audio_file = request.files['audio']
    audio_data = audio_file.read()

    recognized_text = clova_speech_recognition(audio_data)
    if recognized_text:
        response_action = process_voice_command(recognized_text)
        return jsonify({'response': response_action})
    else:
        return jsonify({'error': 'Speech recognition failed'}), 500

def process_voice_command(command):
    command = command.strip()
    response_action = ""

    if '포장' in command:
        response_action = 'show_takeout_option'
    elif '매장' in command:
        response_action = 'show_in_store_option'
    elif '아이스 아메리카노' in command:
        response_action = 'select_menu_item|ICE 아메리카노'
    elif '아이스 라떼' in command or '아이스 카페라떼' in command:
        response_action = 'select_menu_item|ICE 카페라떼'
    else:
        response_action = 'unrecognized_command'

    return response_action

if __name__ == '__main__':
    app.run(debug=True)

import pyaudio
import wave
import requests
from flask import Flask, request, jsonify

def clova_speech_recognition(audio_file_path):
    url = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=Kor"
    headers = {
        "X-NCP-APIGW-API-KEY-ID": "0rpsgkcz90",
        "X-NCP-APIGW-API-KEY": "SSR9KxNlhQFPtYUljvhxuSVSXTbyZBKltk0SO6Or",
        "Content-Type": "application/octet-stream"
    }

    with open(audio_file_path, 'rb') as audio_file:
        audio_data = audio_file.read()
    
    # 로그 추가: 파일 데이터 크기 확인
    print(f"Debug: Audio file size is {len(audio_data)} bytes")

    if len(audio_data) == 0:
        print("Error: The audio file is empty")
        return None

    response = requests.post(url, data=audio_data, headers=headers)
    rescode = response.status_code

    if rescode == 200:
        return response.json().get('text')
    else:
        print("Error Code:", rescode)
        print("Error Message:", response.text)
        return None

# Flask 앱 생성 및 라우팅 설정
app = Flask(__name__)

@app.route('/start-recognition', methods=['POST'])
def start_recognition():
    audio_file_path = "output.wav"
    record_audio(audio_file_path, record_seconds=5)
    
    transcript = clova_speech_recognition(audio_file_path)
    
    if transcript:
        return jsonify({"transcript": transcript})
    else:
        return jsonify({"transcript": None}), 400

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
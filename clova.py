from flask import Flask, request, jsonify, render_template, send_from_directory
from utils import clova_speech_recognition
from difflib import get_close_matches

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

menuItems = [
    {"name": "ICE 메가리카노", "category": "coffee", "subcategory": "에스프레소", "price": 3000, "img": "images/1.png"},
    {"name": "ICE 아메리카노", "category": "coffee", "subcategory": "에스프레소", "price": 2000, "img": "images/2.png"},
    {"name": "할메가커피", "category": "coffee", "subcategory": "에스프레소", "price": 1900, "img": "images/3.png"},
    {"name": "왕할메가커피", "category": "coffee", "subcategory": "에스프레소", "price": 2900, "img": "images/4.png"},
    {"name": "ICE 꿀아메리카노", "category": "coffee", "subcategory": "에스프레소", "price": 2700, "img": "images/5.png"},
    {"name": "ICE 바닐라아메리카노", "category": "coffee", "subcategory": "에스프레소", "price": 2700, "img": "images/6.png"},
    {"name": "ICE 헤이즐넛아메리카노", "category": "coffee", "subcategory": "에스프레소", "price": 2700, "img": "images/7.png"},
    {"name": "HOT 아메리카노", "category": "coffee", "subcategory": "에스프레소", "price": 1500, "img": "images/8.png"},
    {"name": "HOT 꿀아메리카노", "category": "coffee", "subcategory": "에스프레소", "price": 2700, "img": "images/8.png"},
    {"name": "HOT 바닐라아메리카노", "category": "coffee", "subcategory": "에스프레소", "price": 2700, "img": "images/8.png"},
    {"name": "HOT 헤이즐넛아메리카노", "category": "coffee", "subcategory": "에스프레소", "price": 2700, "img": "images/8.png"},
    {"name": "ICE 카페라떼", "category": "coffee", "subcategory": "라떼", "price": 2900, "img": "images/12.png"},
    {"name": "ICE 바닐라라떼", "category": "coffee", "subcategory": "라떼", "price": 3400, "img": "images/13.png"},
    {"name": "ICE 연유라떼", "category": "coffee", "subcategory": "라떼", "price": 3900, "img": "images/13.png"},
    {"name": "ICE 큐브라떼", "category": "coffee", "subcategory": "라떼", "price": 4200, "img": "images/15.png"},
    {"name": "ICE 카페모카", "category": "coffee", "subcategory": "라떼", "price": 3900, "img": "images/16.png"},
    {"name": "ICE 카푸치노", "category": "coffee", "subcategory": "라떼", "price": 2900, "img": "images/17.png"},
    {"name": "HOT 카페라떼", "category": "coffee", "subcategory": "라떼", "price": 2900, "img": "images/18.png"},
    {"name": "HOT 바닐라라떼", "category": "coffee", "subcategory": "라떼", "price": 3400, "img": "images/18.png"},
    {"name": "HOT 연유라떼", "category": "coffee", "subcategory": "라떼", "price": 3900, "img": "images/20.png"},
    {"name": "HOT 카푸치노", "category": "coffee", "subcategory": "라떼", "price": 2900, "img": "images/21.png"},
    {"name": "HOT 카페모카", "category": "coffee", "subcategory": "라떼", "price": 3900, "img": "images/22.png"},
    {"name": "HOT 카라멜마끼아또", "category": "coffee", "subcategory": "라떼", "price": 3700, "img": "images/23.png"},
    {"name": "오이오이 라임 오히또", "category": "beverages", "subcategory": "에이드", "price": 3900, "img": "images/24.png"},
    {"name": "메가에이드", "category": "beverages", "subcategory": "에이드", "price": 3900, "img": "images/25.png"},
    {"name": "유니콘매직에이드(블루)", "category": "beverages", "subcategory": "에이드", "price": 3800, "img": "images/26.png"},
    {"name": "레몬에이드", "category": "beverages", "subcategory": "에이드", "price": 3500, "img": "images/27.png"},
    {"name": "블루레몬에이드", "category": "beverages", "subcategory": "에이드", "price": 3500, "img": "images/28.png"},
    {"name": "자몽에이드", "category": "beverages", "subcategory": "에이드", "price": 3500, "img": "images/29.png"},
    {"name": "청포도에이드", "category": "beverages", "subcategory": "에이드", "price": 3500, "img": "images/30.png"},
    {"name": "라임모히또", "category": "beverages", "subcategory": "에이드", "price": 3800, "img": "images/31.png"},
    {"name": "체리콕", "category": "beverages", "subcategory": "에이드", "price": 3300, "img": "images/32.png"},
    {"name": "왕메가초코", "category": "beverages", "subcategory": "논-커피 라떼", "price": 4400, "img": "images/33.png"},
    {"name": "ICE 딸기라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3700, "img": "images/34.png"},
    {"name": "ICE 오레오초코라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3900, "img": "images/35.png"},
    {"name": "ICE 곡물라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3300, "img": "images/36.png"},
    {"name": "ICE 녹차라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3500, "img": "images/37.png"},
    {"name": "ICE 토피넛라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3800, "img": "images/38.png"},
    {"name": "ICE 고구마라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3500, "img": "images/39.png"},
    {"name": "ICE 로얄밀크티라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3700, "img": "images/40.png"},
    {"name": "ICE 흑당라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3300, "img": "images/41.png"},
    {"name": "ICE 흑당밀크티라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3500, "img": "images/42.png"},
    {"name": "ICE 흑당버블 밀크티라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3800, "img": "images/43.png"},
    {"name": "핫초코", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3500, "img": "images/44.png"},
    {"name": "HOT 곡물라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3300, "img": "images/45.png"},
    {"name": "HOT 녹차라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3500, "img": "images/46.png"},
    {"name": "HOT 토피넛라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3800, "img": "images/47.png"},
    {"name": "HOT 고구마라떼", "category": "beverages", "subcategory": "논-커피 라떼", "price": 3500, "img": "images/48.png"}
]

def find_best_match(command, menu_items):
    # 전처리: 공백 제거 및 텍스트 정리
    command = command.replace(" ", "").strip()
    menu_names = [item['name'].replace(" ", "") for item in menu_items]
    
    # 유사도 비교: cutoff 값을 낮춰 유사한 항목 더 많이 찾기
    best_matches = get_close_matches(command, menu_names, n=1, cutoff=0.4)
    return best_matches[0] if best_matches else None

def extract_location_command(command):
    # 포장 또는 매장 관련 단어만 추출
    if '포장' in command:
        return '포장'
    elif '매장' in command:
        return '매장'

def process_voice_command(command):
    # 포장, 매장 명령어 우선 처리
    location_command = extract_location_command(command)
    if location_command == '포장':
        return 'show_takeout_option'
    elif location_command == '매장':
        return 'show_in_store_option'

    # 아아, 뜨아 특별 처리
    command = command.replace("아아", "ICE 아메리카노").replace("뜨아", "HOT 아메리카노")

    # 불필요한 단어 제거
    filtered_command = filter_menu_related_words(command, menuItems)
    
    # 다양한 표현을 통일하여 ICE, HOT으로 변환
    filtered_command = filtered_command.replace("아주 차가운", "ICE").replace("차가운", "ICE").replace("시원한", "ICE").replace("아이스", "ICE")
    filtered_command = filtered_command.replace("따뜻한", "HOT").replace("뜨거운", "HOT").replace("핫", "HOT")


    # 달달한 또는 단 단어가 포함된 경우 달달한 메뉴 추천
    if "달달한" in filtered_command or "단" in filtered_command:
        return 'show_sweet_recommendation'

    # 변환된 이름과 정확히 일치하는 메뉴 항목 찾기
    for item in menuItems:
        if filtered_command in item['name']:
            return f'select_menu_item|{item["name"]}'
    
    best_match = find_best_match(filtered_command, menuItems) 

    if best_match:
        return f'select_menu_item|{best_match}'
    else:
        return 'unrecognized_command'
    
def filter_menu_related_words(command, menu_items):
    command_words = command.split()
    menu_related_words = []

    for word in command_words:
        for item in menu_items:
            if word in item['name']:
                menu_related_words.append(word)
                break
    
    return " ".join(menu_related_words)

if __name__ == '__main__':
    app.run(debug=True)
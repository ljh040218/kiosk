window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if ('SpeechRecognition' in window) {
    console.log('Speech Recognition API 사용 가능');
} else {
    console.log('Speech Recognition API를 사용할 수 없는 브라우저입니다.');
}

let recognition;

function startVoiceRecognition() {
    if (!recognition) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'ko-KR';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            processVoiceCommand(transcript);
        };

        recognition.onspeechend = () => {
            if (isFriendlyMode) {
                recognition.start();  // 간편 주문 모드일 때만 재시작
            }
        };

        recognition.onerror = (event) => {
            console.error('Error occurred in recognition: ' + event.error);
            if (isFriendlyMode) {
                recognition.start();  // 간편 주문 모드일 때만 재시작
            }
        };
    }

    if (isFriendlyMode) {
        recognition.start();
    }
}

function processVoiceCommand(command) {
    command = command.trim();

    if (isFriendlyMode) {
        let menuItem = null;
        if (command.includes('아이스 아메리카노')) {
            menuItem = findMenuItemByName('ICE 아메리카노');
        } else if (command.includes('아이스 라떼')) {
            menuItem = findMenuItemByName('ICE 카페라떼');
        } else if (command.includes('아이스 카페라떼')) {
            menuItem = findMenuItemByName('ICE 카페라떼');
        } else if (command.includes('포장')) {
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('order-screen').style.display = 'block';
            showMenu('coffee', '에스프레소');
        } else if (command.includes('매장')) {
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('order-screen').style.display = 'block';
            showMenu('coffee', '에스프레소');
        } else {
            alert('명령을 인식하지 못했습니다. 다시 시도해주세요.');
        }

        if (menuItem) {
            showOptionsScreen(menuItem);
        }
}
}

function getSeasonalMenu() {
    const month = new Date().getMonth() + 1;  // JavaScript의 getMonth()는 0부터 11까지 반환하므로 +1을 해서 1부터 12로 조정합니다.

    if (month >= 3 && month <= 5) {
        // 봄: 3월부터 5월
        return ["딸기 라떼", "연유 라떼", "왕할메가커피"];
    } else if (month >= 6 && month <= 8) {
        // 여름: 6월부터 8월
        return ["메가 에이드", "청포도 에이드", "아이스 아메리카노"];
    } else if (month >= 9 && month <= 11) {
        // 가을: 9월부터 11월
        return [ "핫 초코", "핫 아메리카노", "카푸치노"];
    } else {
        // 겨울: 12월부터 2월
        return ["고구마 라떼", "핫 초코", "곡물 라떼"];
    }
}

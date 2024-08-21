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

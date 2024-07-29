window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if ('SpeechRecognition' in window) {
    console.log('Speech Recognition API 사용 가능');
} else {
    console.log('Speech Recognition API를 사용할 수 없는 브라우저입니다.');
}

let recognition;
let isFriendlyMode = false;  // 간편 주문 모드 여부

function startVoiceRecognition() {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('인식된 명령어:', transcript);  // 디버그 로그 추가
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

    if (isFriendlyMode) {
        recognition.start();
    }
}

// 음성 명령을 처리하는 함수
function processVoiceCommand(command) {
    command = command.trim();
    console.log('처리할 명령어:', command);  // 디버그 로그 추가

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

function findMenuItemByName(name) {
    return menuItems.find(item => item.name.includes(name));
}

// 특정 메뉴 항목에 대한 옵션 선택 화면을 여는 함수
function showOptionsForItem(itemName) {
    const menuItem = menuItems.find(item => item.name.includes(itemName));
    if (menuItem) {
        showOptionsScreen(menuItem);
    } else {
        console.error('메뉴 항목을 찾을 수 없습니다:', itemName);
    }
}

function selectMenu(menuType) {
    const orderScreen = document.getElementById('order-screen');
    const startScreen = document.getElementById('start-screen');
    const voiceButton = document.getElementById('start-voice-button');
    
    if (menuType === 'friendly') {
        isFriendlyMode = true;  // 간편 주문 모드 활성화
        orderScreen.classList.add('friendly');
        startScreen.classList.add('friendly');
        voiceButton.style.display = 'block'; // 음성 인식 버튼 표시
        
        startVoiceRecognition(); // 음성 인식 시작

        const h1 = startScreen.querySelector('h1');
        h1.style.fontSize = '2.5em';

        // 간편 주문 모드에서 버튼 크기 조정
        const buttons = startScreen.querySelectorAll('.order-button');
        buttons.forEach(button => {
            button.style.width = '300px';
            button.style.padding = '30px';
            button.style.fontSize = '2em';
            button.style.margin = '20px auto';
        });
    } else {
        isFriendlyMode = false;  // 간편 주문 모드 비활성화
        voiceButton.style.display = 'none'; // 음성 인식 버튼 숨기기
        if (recognition) {
            recognition.stop();  // 음성 인식 중지
        }
        orderScreen.classList.remove('friendly');
        startScreen.classList.remove('friendly');
    }
    
    document.getElementById('menu-selection-screen').style.display = 'none';
    startScreen.style.display = 'block';
}

// 포장 또는 매장 선택 화면에서도 음성 인식을 계속 유지
function startOrder(orderType) {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('order-screen').style.display = 'block';
    showMenu('coffee', '에스프레소');
    if (isFriendlyMode) {
        startVoiceRecognition();  // 간편 주문 모드에서만 음성 인식 시작
    }
}
function showMenu(category, subcategory) {
    selectedCategory = category;
    selectedSubCategory = subcategory;
    currentPage = 1;
    displayCategoryButtons();
    displaySubCategoryButtons();
    displayMenuItems();
    if (isFriendlyMode) {
        startVoiceRecognition();  // 간편 주문 모드에서만 음성 인식 시작
    }
}
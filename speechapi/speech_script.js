let recognitionTimeout;

function startVoiceRecognition() {
    // 음성 인식을 Python 서버에 요청
    fetch('/start-recognition', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        clearTimeout(recognitionTimeout); // 사용자가 응답했으므로 타이머를 초기화합니다.
        const transcript = data.transcript;
        if (transcript) {
            analyzeVoiceCommand(transcript); // 음성 명령 분석 함수 호출
        } else {
            console.log('음성 인식 실패');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

 // 음성 인식이 시작되면 20초 타이머 설정
 recognitionTimeout = setTimeout(() => {
    showSeasonalMenu(); // 20초 동안 응답이 없으면 계절별 추천 메뉴를 표시
}, 20000);
}

function showSeasonalMenu() {
    const now = new Date();
    const month = now.getMonth() + 1; // 0부터 시작하므로 +1 필요
    let season = '';

    if (month >= 5 && month <= 8) {
        season = '여름';
    } else if (month === 11 || month <= 3) {
        season = '겨울';
    } else {
        // 봄과 가을에는 추천 메뉴를 표시하지 않음
        return;
    }

    if (season === '여름') {
        showSummerMenu(); // 여름에는 에이드와 ICE가 들어간 메뉴 추천
    } else if (season === '겨울') {
        showWinterMenu(); // 겨울에는 HOT이 들어가는 메뉴 추천
    }

    document.getElementById('seasonal-recommendation').style.display = 'block'; // 추천 메뉴 화면 표시
}

function showSummerMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // 기존 메뉴 초기화
    const filteredItems = menuItems.filter(item => item.name.includes('에이드') || item.name.includes('ICE')); // 에이드와 ICE가 들어간 메뉴만 필터링

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} 원</p>
            <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
        `;
        menu.appendChild(menuItem);
    });
}

function showWinterMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // 기존 메뉴 초기화
    const filteredItems = menuItems.filter(item => item.name.includes('HOT')); // HOT이 들어간 메뉴만 필터링

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} 원</p>
            <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
        `;
        menu.appendChild(menuItem);
    });
}

function analyzeVoiceCommand(transcript) {
    const lowerTranscript = transcript.toLowerCase();

    // 달달한 메뉴를 추천하는 경우
    if (lowerTranscript.includes('달') || lowerTranscript.includes('단')) {
        if (lowerTranscript.includes('커피')) {
            showSweetCoffeeRecommendations(); // 연유라떼, 캬라멜라떼, 바닐라라떼 추천
        } else {
            askCoffeePreference('sweet'); // 커피가 좋은지, 커피가 아닌 게 좋은지 물어본 후 추천
        }
    }
    // 차가운 음료를 추천하는 경우
    else if (lowerTranscript.includes('차') || lowerTranscript.includes('찬')) {
        if (lowerTranscript.includes('커피')) {
            showIcedCoffeeRecommendations(); // 아이스 커피 종류 추천
        } else {
            askCoffeePreference('iced'); // 커피가 좋은지, 커피가 아닌 게 좋은지 물어본 후 추천
        }
    } else {
        console.log('명령어를 인식하지 못했습니다.');
    }
}

function askCoffeePreference(type) {
    const userResponse = confirm('커피가 좋으신가요, 아니면 커피가 아닌 음료가 좋으신가요?');
    
    if (userResponse) {
        if (type === 'sweet') {
            showSweetCoffeeRecommendations();
        } else if (type === 'iced') {
            showIcedCoffeeRecommendations();
        }
    } else {
        if (type === 'sweet') {
            showSweetNonCoffeeRecommendations();
        } else if (type === 'iced') {
            showIcedNonCoffeeRecommendations();
        }
    }
}

function showSweetCoffeeRecommendations() {
    const sweetCoffeeItems = menuItems.filter(item => item.name.includes('라떼') && (item.name.includes('연유') || item.name.includes('캬라멜') || item.name.includes('바닐라')));
    displayRecommendations(sweetCoffeeItems);
}

function showIcedCoffeeRecommendations() {
    const icedCoffeeItems = menuItems.filter(item => item.name.includes('ICE') && item.category === 'coffee');
    displayRecommendations(icedCoffeeItems);
}

function showSweetNonCoffeeRecommendations() {
    const sweetNonCoffeeItems = menuItems.filter(item => item.subcategory === '논-커피 라떼' && (item.name.includes('연유') || item.name.includes('캬라멜') || item.name.includes('바닐라')));
    displayRecommendations(sweetNonCoffeeItems);
}

function showIcedNonCoffeeRecommendations() {
    const icedNonCoffeeItems = menuItems.filter(item => item.name.includes('ICE') && item.category === 'beverages');
    displayRecommendations(icedNonCoffeeItems);
}

function displayRecommendations(recommendationItems) {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // 기존 메뉴 초기화

    recommendationItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} 원</p>
            <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
        `;
        menu.appendChild(menuItem);
    });

    document.getElementById('seasonal-recommendation').style.display = 'block'; // 추천 메뉴 화면 표시
}

//특정 옵션에 대한 음성 명령을 분석하고 해당 옵션을 추가
function analyzeOptionCommand(transcript) {
    const lowerTranscript = transcript.toLowerCase();
    
    // 음성 인식된 옵션에 따라 해당 옵션을 선택
    if (lowerTranscript.includes('샷 추가')) {
        selectOption('shot'); // 예: '샷 추가'라는 음성 인식 시 '샷 추가' 옵션 선택
    } else if (lowerTranscript.includes('시럽 추가')) {
        selectOption('syrup'); // 예: '시럽 추가'라는 음성 인식 시 '시럽 추가' 옵션 선택
    } else if (lowerTranscript.includes('크림 추가')) {
        selectOption('cream'); // 예: '크림 추가'라는 음성 인식 시 '크림 추가' 옵션 선택
    } else {
        console.log('인식된 옵션이 없습니다. 다시 시도해주세요.');
    }
}

function selectOption(optionId) {
    const optionElement = document.getElementById(optionId);
    if (optionElement) {
        optionElement.checked = true; // 옵션을 체크박스 또는 라디오 버튼으로 선택
    }
}

// 기존에 선택된 주문 방식에 따라 음성 인식 버튼 표시
function showOptionsScreen(orderType) {
    document.getElementById('options-selection-screen').style.display = 'block';

    if (orderType === 'friendly') { // 간편 주문 시
        document.getElementById('start-voice-option').style.display = 'inline-block';
    } else {
        document.getElementById('start-voice-option').style.display = 'none';
    }
}
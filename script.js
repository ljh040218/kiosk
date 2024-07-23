const menuItems = [
    { name: "ICE 메가리카노", category: "coffee", subcategory: "에스프레소", price: 3000, img: "C:/Users/이소정/Desktop/키오스크/1.png" },
    { name: "ICE 아메리카노", category: "coffee", subcategory: "에스프레소", price: 2000, img: "C:/Users/이소정/Desktop/키오스크/2.png" },
    { name: "할메가커피", category: "coffee", subcategory: "에스프레소", price: 1900, img: "C:/Users/이소정/Desktop/키오스크/3.png" },
    { name: "왕할메가커피", category: "coffee", subcategory: "에스프레소", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/4.png" },
    { name: "ICE 꿀아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/5.png" },
    { name: "ICE 바닐라아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/6.png" },
    { name: "ICE 헤이즐넛아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/7.png" },
    { name: "HOT 아메리카노", category: "coffee", subcategory: "에스프레소", price: 1500, img: "C:/Users/이소정/Desktop/키오스크/8.png" },
    { name: "HOT 꿀아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/8.png" },
    { name: "HOT 바닐라아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/8.png" },
    { name: "HOT 헤이즐넛아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/8.png" },
    { name: "ICE 카페라떼", category: "coffee", subcategory: "라떼", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/12.png" },
    { name: "ICE 바닐라라떼", category: "coffee", subcategory: "라떼", price: 3400, img: "C:/Users/이소정/Desktop/키오스크/13.png" },
    { name: "ICE 연유라떼", category: "coffee", subcategory: "라떼", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/13.png" },
    { name: "ICE 큐브라떼", category: "coffee", subcategory: "라떼", price: 4200, img: "C:/Users/이소정/Desktop/키오스크/15.png" },
    { name: "ICE 카페모카", category: "coffee", subcategory: "라떼", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/16.png" },
    { name: "ICE 카푸치노", category: "coffee", subcategory: "라떼", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/17.png" },
    { name: "HOT 카페라떼", category: "coffee", subcategory: "라떼", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/18.png" },
    { name: "HOT 바닐라라떼", category: "coffee", subcategory: "라떼", price: 3400, img: "C:/Users/이소정/Desktop/키오스크/18.png" },
    { name: "HOT 연유라떼", category: "coffee", subcategory: "라떼", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/20.png" },
    { name: "HOT 카푸치노", category: "coffee", subcategory: "라떼", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/21.png" },
    { name: "HOT 카페모카", category: "coffee", subcategory: "라떼", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/22.png" },
    { name: "HOT 카라멜마끼아또", category: "coffee", subcategory: "라떼", price: 3700, img: "C:/Users/이소정/Desktop/키오스크/23.png" },
    { name: "오이오이 라임 오히또", category: "beverages", subcategory: "에이드", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/24.png" },
    { name: "메가에이드", category: "beverages", subcategory: "에이드", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/25.png" },
    { name: "유니콘매직에이드(블루)", category: "beverages", subcategory: "에이드", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/26.png" },
    { name: "레몬에이드", category: "beverages", subcategory: "에이드", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/27.png" },
    { name: "블루레몬에이드", category: "beverages", subcategory: "에이드", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/28.png" },
    { name: "자몽에이드", category: "beverages", subcategory: "에이드", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/29.png" },
    { name: "청포도에이드", category: "beverages", subcategory: "에이드", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/30.png" },
    { name: "라임모히또", category: "beverages", subcategory: "에이드", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/31.png" },
    { name: "체리콕", category: "beverages", subcategory: "논-커피 라떼", price: 3300, img: "C:/Users/이소정/Desktop/키오스크/32.png" },
    { name: "왕메가초코", category: "beverages", subcategory: "논-커피 라떼", price: 4400, img: "C:/Users/이소정/Desktop/키오스크/33.png" },
    { name: "ICE 딸기라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3700, img: "C:/Users/이소정/Desktop/키오스크/34.png" },
    { name: "ICE 오레오초코라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/35.png" },
    { name: "ICE 곡물라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3300, img: "C:/Users/이소정/Desktop/키오스크/36.png" },
    { name: "ICE 녹차라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/37.png" },
    { name: "ICE 토피넛라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/38.png" },
    { name: "ICE 고구마라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/39.png" },
    { name: "ICE 로얄밀크티라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3700, img: "C:/Users/이소정/Desktop/키오스크/40.png" },
    { name: "ICE 흑당라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3300, img: "C:/Users/이소정/Desktop/키오스크/41.png" },
    { name: "ICE 흑당밀크티라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/42.png" },
    { name: "ICE 흑당버블 밀크티라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/43.png" },
    { name: "핫초코", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/44.png" },
    { name: "HOT 곡물라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3300, img: "C:/Users/이소정/Desktop/키오스크/45.png" },
    { name: "HOT 녹차라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/46.png" },
    { name: "HOT 토피넛라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/47.png" },
    { name: "HOT 고구마라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/48.png" }
];

let selectedCategory = '';
let selectedSubCategory = '';
let cart = [];
let totalPrice = 0;
let currentPage = 1;
const itemsPerPage = 12;
const itemsPerPageFriendly = 4; 
const itemsPerPageDefault = 12;


const categories = {
    coffee: ["에스프레소", "라떼"],
    beverages: ["에이드", "논-커피 라떼"]
};

function closeConfirmationModal() {
    document.getElementById('confirmation-modal').style.display = 'none';
}

function goToMenuSelection() {
    document.getElementById('initial-screen').style.display = 'none';
    document.getElementById('menu-selection-screen').style.display = 'block';
}

// 친절한 메뉴판 함수 friendly 클래스 불러옴
function selectMenu(menuType) {
    const orderScreen = document.getElementById('order-screen');
    const startScreen = document.getElementById('start-screen');
    
    if (menuType === 'friendly') {
        orderScreen.classList.add('friendly');
        startScreen.classList.add('friendly');
        
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
        orderScreen.classList.remove('friendly');
        startScreen.classList.remove('friendly');
    }
    
    document.getElementById('menu-selection-screen').style.display = 'none';
    startScreen.style.display = 'block';
}

function startOrder(orderType) {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('order-screen').style.display = 'block';
    showMenu('coffee', '에스프레소');
}

function showMenu(category, subcategory) {
    selectedCategory = category;
    selectedSubCategory = subcategory;
    currentPage = 1;
    displayCategoryButtons();
    displaySubCategoryButtons();
    displayMenuItems();
}

function displayCategoryButtons() {
    const categoryButtons = document.querySelectorAll('#category-buttons .menu-button');
    categoryButtons.forEach(button => {
        if (button.innerText === (selectedCategory === 'coffee' ? '커피' : '음료')) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function displaySubCategoryButtons() {
    const subcategoryButtons = document.getElementById('subcategory-buttons');
    subcategoryButtons.innerHTML = '';
    categories[selectedCategory].forEach(subcategory => {
        const button = document.createElement('button');
        button.classList.add('subcategory-button');
        if (subcategory === selectedSubCategory) {
            button.classList.add('active');
        }
        button.innerText = subcategory;
        button.onclick = () => showMenu(selectedCategory, subcategory);
        subcategoryButtons.appendChild(button);
    });
    subcategoryButtons.style.display = 'block';
}

function displayMenuItems() {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';
    const isFriendly = document.getElementById('order-screen').classList.contains('friendly');
    const itemsPerPage = isFriendly ? itemsPerPageFriendly : itemsPerPageDefault;
    const start = (currentPage - 1) * itemsPerPage;
    const filteredItems = menuItems.filter(item => item.category === selectedCategory && item.subcategory === selectedSubCategory);
    const itemsToShow = filteredItems.slice(start, start + itemsPerPage);

    itemsToShow.forEach(item => {
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

    document.getElementById('page-number').innerText = `${currentPage} / ${Math.ceil(filteredItems.length / itemsPerPage)}`;
    document.getElementById('pagination').style.display = filteredItems.length > itemsPerPage ? 'block' : 'none';
}

function nextPage() {
    const isFriendly = document.getElementById('order-screen').classList.contains('friendly');
    const itemsPerPage = isFriendly ? itemsPerPageFriendly : itemsPerPageDefault;
    const filteredItems = menuItems.filter(item => item.category === selectedCategory && item.subcategory === selectedSubCategory);
    if (currentPage * itemsPerPage < filteredItems.length) {
        currentPage++;
        displayMenuItems();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayMenuItems();
    }
}

function addToCart(name, price) {
    const cartItem = cart.find(item => item.name === name);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price} 원</p>
            <div class="quantity-control">
                <button class="decrease-button" onclick="decreaseQuantity('${item.name}')">-</button>
                <span>${item.quantity}</span>
                <button class="increase-button" onclick="increaseQuantity('${item.name}')">+</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('checkout-button').style.display = cart.length > 0 ? 'block' : 'none';
}

function decreaseQuantity(name) {
    const cartItem = cart.find(item => item.name === name);
    if (cartItem) {
        if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            cart = cart.filter(item => item.name !== name);
        }
    }
    updateCart();
}

function increaseQuantity(name) {
    const cartItem = cart.find(item => item.name === name);
    if (cartItem) {
        cartItem.quantity++;
    }
    updateCart();
}

function confirmOrder() {
    const confirmationDetails = document.getElementById('confirmation-details');
    const menuItems = cart.map(item => `<p>${item.name} x ${item.quantity} - ${item.price * item.quantity} 원</p>`).join('');
    confirmationDetails.innerHTML = `
        <div id="order-summary">
            <h3>주문 내역</h3>
            <div class="menu-items">
                ${menuItems}
            </div>
        </div>
        <div class="total-price-box">
            <p>총 금액: <span id="total-price">${totalPrice}</span> 원</p>
        </div>
    `;
    document.getElementById('confirmation-modal').style.display = 'block';
}

function closeConfirmationModal() {
    document.getElementById('confirmation-modal').style.display = 'none';
}

function proceedToPayment() {
    document.getElementById('confirmation-modal').style.display = 'none';
    document.getElementById('payment-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function closeReceiptModal() {
    document.getElementById('receipt-modal').style.display = 'none';
}

function payByCard() {
    paymentMethod = '신용카드';
    alert('신용카드 결제가 완료되었습니다.');
    showReceiptOption();
}

function payByCash() {
    paymentMethod = '현금';
    alert('현금 결제가 완료되었습니다.');
    showReceiptOption();
}

function payByMobile() {
    paymentMethod = '모바일 결제';
    alert('모바일 결제가 완료되었습니다.');
    showReceiptOption(); 
}

function showReceiptOption() {
    document.getElementById('payment-modal').style.display = 'none';
    document.getElementById('receipt-modal').style.display = 'block';
}

function printReceipt() {
    document.getElementById('receipt-modal').style.display = 'none';
    generateReceipt();
    showCompletionModal(true);
}

function noReceipt() {
    generateReceipt(false); // 영수증 생성, 표시하지 않음
    showCompletionModal(false);
}

function generateReceipt(show = true) {
    const orderNumberEl = document.getElementById('order-number');
    const receiptDetails = document.getElementById('receipt-details');
    orderNumber = Math.floor(Math.random() * 100000);
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    orderNumberEl.innerText = orderNumber;

    receiptDetails.innerHTML = `
        <p>메가커피 지환점</p>
        <p>주문 번호: ${orderNumber}</p>
        <p>결제 날짜: ${date}</p>
        <p>결제 시각: ${time}</p>
        <h3>주문 내역</h3>
        ${cart.map(item => `<p>${item.name} x ${item.quantity} - ${item.price * item.quantity} 원</p>`).join('')}
        <p>총 금액: ${totalPrice} 원</p>
        <p>결제 방식: ${paymentMethod}</p>
    `;

    if (show) {
        document.getElementById('receipt').style.display = 'block';
    }
}

function showCompletionModal(showReceipt) {
    const completionModal = document.getElementById('completion-modal');
    document.getElementById('order-number').innerText = orderNumber;
    if (showReceipt) {
        document.getElementById('receipt').style.display = 'block';
    }
    completionModal.style.display = 'block';
}

function completeOrder() {
    const completionModal = document.getElementById('completion-modal');
    completionModal.style.display = 'none';
    resetCart();
}

function resetCart() {
    cart = [];
    updateCart();
    closeModal();
    closeReceiptModal();
    document.getElementById('receipt').style.display = 'none';
}
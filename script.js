const menuItems = [
    { name: "ICE 메가리카노", price: 3000, img: "C:/Users/이소정/Desktop/키오스크/1.png" },
    { name: "ICE 아메리카노", price: 2000, img: "C:/Users/이소정/Desktop/키오스크/2.png" },
    { name: "할메가커피", price: 1900, img: "C:/Users/이소정/Desktop/키오스크/3.png" },
    { name: "왕할메가커피", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/4.png" },
    { name: "ICE 꿀아메리카노", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/5.png" },
    { name: "ICE 바닐라아메리카노", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/6.png" },
    { name: "ICE 헤이즐넛아메리카노", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/7.png" },
    { name: "HOT 아메리카노", price: 1500, img: "C:/Users/이소정/Desktop/키오스크/8.png" },
    { name: "HOT 꿀아메리카노", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/8.png" },
    { name: "HOT 바닐라아메리카노", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/8.png" },
    { name: "HOT 헤이즐넛아메리카노", price: 2700, img: "C:/Users/이소정/Desktop/키오스크/8.png" },
    { name: "ICE 카페라떼", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/12.png" },
    { name: "ICE 바닐라라떼", price: 3400, img: "C:/Users/이소정/Desktop/키오스크/13.png" },
    { name: "ICE 연유라떼", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/13.png" },
    { name: "ICE 큐브라떼", price: 4200, img: "C:/Users/이소정/Desktop/키오스크/15.png" },
    { name: "ICE 카페모카", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/16.png" },
    { name: "ICE 카푸치노", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/17.png" },
    { name: "HOT 카페라떼", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/18.png" },
    { name: "HOT 바닐라라떼", price: 3400, img: "C:/Users/이소정/Desktop/키오스크/18.png" },
    { name: "HOT 연유라떼", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/20.png" },
    { name: "HOT 카푸치노", price: 2900, img: "C:/Users/이소정/Desktop/키오스크/21.png" },
    { name: "HOT 카페모카", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/22.png" },
    { name: "HOT 카라멜마끼아또", price: 3700, img: "C:/Users/이소정/Desktop/키오스크/23.png" },
    { name: "오이오이 라임 오히또", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/24.png" },
    { name: "메가에이드", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/25.png" },
    { name: "유니콘매직에이드(블루)", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/26.png" },
    { name: "레몬에이드", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/27.png" },
    { name: "블루레몬에이드", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/28.png" },
    { name: "자몽에이드", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/29.png" },
    { name: "청포도에이드", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/30.png" },
    { name: "라임모히또", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/31.png" },
    { name: "체리콕", price: 3300, img: "C:/Users/이소정/Desktop/키오스크/32.png" },
    { name: "왕메가초코", price: 4400, img: "C:/Users/이소정/Desktop/키오스크/33.png" },
    { name: "ICE 딸기라떼", price: 3700, img: "C:/Users/이소정/Desktop/키오스크/34.png" },
    { name: "ICE 오레오초코라떼", price: 3900, img: "C:/Users/이소정/Desktop/키오스크/35.png" },
    { name: "ICE 곡물라떼", price: 3300, img: "C:/Users/이소정/Desktop/키오스크/36.png" },
    { name: "ICE 녹차라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/37.png" },
    { name: "ICE 토피넛라떼", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/38.png" },
    { name: "ICE 고구마라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/39.png" },
    { name: "ICE 로얄밀크티라떼", price: 3700, img: "C:/Users/이소정/Desktop/키오스크/40.png" },
    { name: "ICE 흑당라떼", price: 3300, img: "C:/Users/이소정/Desktop/키오스크/41.png" },
    { name: "ICE 흑당밀크티라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/42.png" },
    { name: "ICE 흑당버블 밀크티라떼", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/43.png" },
    { name: "핫초코", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/44.png" },
    { name: "HOT 곡물라떼", price: 3300, img: "C:/Users/이소정/Desktop/키오스크/45.png" },
    { name: "HOT 녹차라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/46.png" },
    { name: "HOT 토피넛라떼", price: 3800, img: "C:/Users/이소정/Desktop/키오스크/47.png" },
    { name: "HOT 고구마라떼", price: 3500, img: "C:/Users/이소정/Desktop/키오스크/48.png" }
];

const menuSelectionScreen = document.getElementById('menu-selection-screen');
const startScreen = document.getElementById('start-screen');
const orderScreen = document.getElementById('order-screen');
const menu = document.getElementById('menu');
const cartItems = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-button');
const pagination = document.getElementById('pagination');
const pageNumber = document.getElementById('page-number');

const confirmationModal = document.getElementById('confirmation-modal');
const confirmationDetails = document.getElementById('confirmation-details');
const receiptModal = document.getElementById('receipt-modal');
const completionModal = document.getElementById('completion-modal');
const receiptDetails = document.getElementById('receipt-details');
const orderNumberEl = document.getElementById('order-number');

let cart = [];
let totalPrice = 0;
let currentPage = 1;
const itemsPerPage = 12; // 페이지 항목 수
let orderNumber = Math.floor(Math.random() * 100000);
let paymentMethod = '';

function selectMenu(type) {
    menuSelectionScreen.style.display = 'none';
    startScreen.style.display = 'block';
    if (type === 'friendly') {
        menu.classList.add('friendly');
    } else {
        menu.classList.remove('friendly');
    }
}

function startOrder(type) {
    startScreen.style.display = 'none';
    orderScreen.style.display = 'block';
    alert(type + ' 주문을 선택하셨습니다.');
    currentPage = 1;
    displayMenuItems();
    pagination.style.display = 'block';
}

function displayMenuItems() {
    menu.innerHTML = ''; // 메뉴판 초기화
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = menuItems.slice(start, end);

    itemsToShow.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        if (menu.classList.contains('friendly')) {
            menuItem.classList.add('friendly');
        }
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} 원</p>
            <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
        `;
        menu.appendChild(menuItem);
    });

    pageNumber.innerText = `${currentPage} / ${Math.ceil(menuItems.length / itemsPerPage)}`;
}

function nextPage() {
    if (currentPage * itemsPerPage < menuItems.length) {
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
    cartItems.innerHTML = '';
    totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price} 원 x ${item.quantity}</p>
            <div class="quantity-control">
                <button onclick="decreaseQuantity('${item.name}')">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity('${item.name}')">+</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    totalPriceEl.innerText = totalPrice;
    checkoutButton.style.display = cart.length > 0 ? 'block' : 'none';
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
    confirmationDetails.innerHTML = `
        <h3>주문 내역</h3>
        ${cart.map(item => `<p>${item.name} x ${item.quantity} - ${item.price * item.quantity} 원</p>`).join('')}
        <p>총 금액: ${totalPrice} 원</p>
    `;
    confirmationModal.style.display = 'block';
}

function closeConfirmationModal() {
    confirmationModal.style.display = 'none';
}

function proceedToPayment() {
    confirmationModal.style.display = 'none';
    document.getElementById('payment-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function closeReceiptModal() {
    receiptModal.style.display = 'none';
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

function showReceiptOption() {
    document.getElementById('payment-modal').style.display = 'none';
    receiptModal.style.display = 'block';
}

function printReceipt() {
    receiptModal.style.display = 'none';
    generateReceipt();
    showCompletionModal(true);
}

function noReceipt() {
    generateReceipt(false); // 영수증 생성, 표시하지 않음
    showCompletionModal(false);
}

function generateReceipt(show = true) {
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
    document.getElementById('order-number').innerText = orderNumber;
    if (showReceipt) {
        document.getElementById('receipt').style.display = 'block';
    }
    completionModal.style.display = 'block';
}

function completeOrder() {
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
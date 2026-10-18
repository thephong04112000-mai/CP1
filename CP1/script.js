const cards = [
    { name: 'red', color: '#ff4d4d' },
    { name: 'red', color: '#ff4d4d' },
    { name: 'blue', color: '#3399ff' },
    { name: 'blue', color: '#3399ff' },
    { name: 'green', color: '#2ecc71' },
    { name: 'green', color: '#2ecc71' },
    { name: 'yellow', color: '#f1c40f' },
    { name: 'yellow', color: '#f1c40f' },
    { name: 'purple', color: '#9b59b6' },
    { name: 'purple', color: '#9b59b6' },
    { name: 'orange', color: '#e67e22' },
    { name: 'orange', color: '#e67e22' }


const defaultColor = '#2e3d49';

const gridDisplay = document.getElementById('game-grid');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message'); // Lấy thẻ hiển thị thông báo

let cardsChosen = [];     
let cardsChosenId = [];   
let cardsWon = [];        
let score = 0;            
let lockBoard = false; // Biến phụ giúp khóa bảng màu khi đang hiện thông báo lỗi

cards.sort(() => 0.5 - Math.random());

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        card.style.backgroundColor = defaultColor; 
        card.setAttribute('data-id', i);           
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

function flipCard() {
    if (lockBoard) return; // Nếu đang chờ úp thẻ sai, không cho click bậy
    const cardId = this.getAttribute('data-id');
    
    if (cardsChosenId.includes(cardId) || this.style.visibility === 'hidden') {
        return;
    }

    this.style.backgroundColor = cards[cardId].color;
    cardsChosen.push(cards[cardId].name);
    cardsChosenId.push(cardId);

    if (cardsChosen.length === 2) {
        lockBoard = true; // Khóa tạm thời không cho bấm thẻ thứ 3
        const intervalId = setInterval(() => {
            checkMatch();
            clearInterval(intervalId); 
        }, 600); 
    }
}

function checkMatch() {
    const allCards = document.querySelectorAll('#game-grid div');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    // Nếu giống màu nhau
    if (cardsChosen[0] === cardsChosen[1]) {
        allCards[optionOneId].style.visibility = 'hidden';
        allCards[optionTwoId].style.visibility = 'hidden';
        
        score += 10;
        scoreDisplay.textContent = score;
        cardsWon.push(cardsChosen);

        // Hiển thị thông báo màu xanh chúc mừng ngắn gọn
        messageDisplay.style.color = '#2ecc71'; 
        messageDisplay.textContent = 'Chính xác! +10 điểm';
    } 
    // Nếu không giống màu nhau
    else {
        // Thay vì bật alert(), ta ghi chữ trực tiếp lên màn hình
        messageDisplay.style.color = '#e74c3c'; 
        messageDisplay.textContent = 'Không khớp rồi! Hãy thử lại.';

        // Lật ngược 2 card về lại màu xám
        allCards[optionOneId].style.backgroundColor = defaultColor;
        allCards[optionTwoId].style.backgroundColor = defaultColor;
    }

    cardsChosen = [];
    cardsChosenId = [];
    lockBoard = false; // Mở khóa cho lượt chơi tiếp theo

    // Kiểm tra nếu đã chiến thắng hoàn toàn
    if (cardsWon.length === cards.length / 2) {
        messageDisplay.style.color = '#9b59b6';
        messageDisplay.textContent = 'Chúc mừng! Bạn đã tìm được tất cả các cặp màu! 🎉';
    }
}

createBoard();

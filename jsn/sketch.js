function setup() {
    angleMode(DEGREES); // 輸入角度
    setBoundary();
    createCanvas(size.w, size.h);
    setValue();
}

function update() {
    balls.forEach(ball => ball.update());
}

function draw() {
    background('#0D1117');
    axis();
    balls.forEach(ball => ball.draw());
}

function mouseWheel(event) {
    // 滑鼠滾輪滾動
    if (event.deltaY > 0) scale /= 1.1; // down
    else if (event.deltaY < 0) scale *= 1.1; // up
}

window.onload = () => {
    setInterval(update, 1);
};

let size; // 螢幕大小
const G = 9.8; // 重力
let base = 50; // 放大基準值
let scale = 2; // 放大倍率
let boundary; // 邊界
let balls = [new Ball({ isDrag: true, pathColor: '#AB5E9D' }), new Ball()];
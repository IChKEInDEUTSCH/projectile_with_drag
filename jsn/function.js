let setValue = () => balls.forEach(ball => ball.setValue());

let setBoundary = () => { // 設定座標偏移
    size = { w: windowWidth * 0.9, h: windowHeight * 0.95 };
    let temp = min(size.w, size.h);
    boundary = temp * 6 / 100;
}

let axis = () => {
    push();
    translate(boundary, size.h - boundary);

    let boardCount = size.w / (base * scale);
    if (boardCount > 12) {
        base *= 2;
        boardCount /= 2;
    } else if (boardCount < 6) {
        base /= 2;
        boardCount *= 2;
    }

    // 10 公尺軸
    stroke('rgb(80,0,0)');
    strokeWeight(1);
    for (let bx = 0; bx < size.w; bx += base / 5 * scale)
        line(bx, 0, bx, -size.h);
    for (let by = 0; by < size.h; by += base / 5 * scale)
        line(0, -by, size.w, -by);

    // 50 公尺軸
    textSize(16);
    strokeWeight(3);
    fill('#F27477');
    textAlign(CENTER);
    for (let bx = base * scale; bx < size.w; bx += base * scale) {
        stroke('rgb(160,0,0)');
        line(bx, 0, bx, -size.h);
        noStroke();
        text(round(bx / scale, 3), bx, 16);
    }
    textAlign(RIGHT, CENTER);
    for (let by = base * scale; by < size.h; by += base * scale) {
        stroke('rgb(160,0,0)');
        line(0, -by, size.w, -by);
        noStroke();
        text(round(by / scale, 3), -5, -by);
    }

    // x y 軸
    textAlign(CENTER, CENTER);
    stroke('red');
    strokeWeight(5);
    line(0, boundary, 0, -size.h);
    line(-boundary, 0, size.w, 0);
    noStroke();
    text(0, -15, 15);
    pop();
}

let drawArrow = (base, vec, color) => {
    let arrowSize = 7;
    push();
    stroke(color);
    strokeWeight(3);
    fill(color);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
}
function triangulo(x, y, triangleWidth, triangleHeight){
    const canvas = document.querySelector('#lienzo');
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + triangleWidth / 2, y + triangleHeight);
    ctx.lineTo(x - triangleWidth / 2, y + triangleHeight);
    ctx.fillStyle = '#0000cc';
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};
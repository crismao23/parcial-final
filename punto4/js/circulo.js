function circulo(x, y, radio) {
    const canvas = document.querySelector('#lienzo');
    const ctx = canvas.getContext("2d");
    if (canvas.getContext) {
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, 2*Math.PI);
        ctx.fillStyle = '#F1D92C';
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}
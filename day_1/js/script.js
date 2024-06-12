window.onload = function() {
    const canvas = document.getElementById('drawingPad');
    const context = canvas.getContext('2d');
    let drawing = false;

    function startDraw(e) {
        drawing = true;
        draw(e);
    }

    function endDraw() {
        drawing = false;
        context.beginPath();
    }

    function draw(e) {
        if (!drawing) return;
        context.lineWidth = 10;
        context.lineCap = 'round';
        context.strokeStyle = document.getElementById('colorPicker').value;

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mouseout', endDraw);
    canvas.addEventListener('mousemove', draw);
}

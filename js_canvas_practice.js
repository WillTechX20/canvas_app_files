var canvas=document.querySelector('canvas');
var canvasCTX2D=canvas.getContext('2d');
var canvasCTX2DStrokeStyle='red';

canvasCTX2D.beginPath();
canvasCTX2D.strokeStyle='red';
canvasCTX2D.lineWidth=2;
canvasCTX2D.arc(200, 200, 40, 0, 2*Math.PI);
canvasCTX2D.stroke();


function drawCircle(mouseXNum, mouseYNum){
    canvasCTX2D.beginPath();
    canvasCTX2D.lineWidth=2;
    canvasCTX2D.arc(mouseXNum, mouseYNum, 40, 0, 2*Math.PI);
    canvasCTX2D.stroke();
}

function canvasMouseDown(eventVar){
    console.log(canvasCTX2DStrokeStyle);

    var mouseXNum=eventVar.clientX-canvas.offsetLeft;
    var mouseYNum=eventVar.clientY-canvas.offsetTop;

    console.log('X: '+mouseXNum, 'Y: '+mouseYNum);
    drawCircle(mouseXNum, mouseYNum);
}

canvas.addEventListener('mousedown', canvasMouseDown);



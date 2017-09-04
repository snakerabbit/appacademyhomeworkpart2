document.addEventListener("DOMContentLoaded", function(){
  const newcanvas = document.getElementById("mycanvas");
  newcanvas.width = 500;
  newcanvas.height = 500;
  const ctx = newcanvas.getContext('2d');

  ctx.fillStyle = 'red';
  ctx.fillRect(60,50,100,80);

  ctx.beginPath();
  ctx.arc(100,75,50,0,2*Math.PI);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = 'blue';
  ctx.fill();

});

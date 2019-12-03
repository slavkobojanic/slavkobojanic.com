img = document.getElementById("logo");

const minX = 0;
const maxX = document.body.clientWidth;
const minY = 0;
const maxY = document.body.clientHeight;

let xspeed = 1;
let yspeed = 1;

let xpos = 0;
let ypos = 0;

function generateColor() {
  const colors = ["red", "blue", "green", "yellow", "purple", "teal"];
  const num = Math.round(Math.random() * colors.length);
  return colors[num];
}

function setX() {
  const imgL = img.style.marginLeft;
  const imgR = parseInt(imgL.substring(0, imgL.length - 2)) + 265;

  if (imgR == maxX) {
    xspeed = -1;
    img.style.color = generateColor();
  }

  if (parseInt(imgL.substring(0, imgL.length - 2)) == 0) {
    xspeed = 1;
    img.style.color = generateColor();
  }

  xpos = xpos + xspeed;
  img.style.marginLeft = `${xpos}px`;
}

function setY() {
  const imgT = img.style.marginTop;
  const imgB = parseInt(imgT.substring(0, imgT.length - 2)) + 78;

  if (imgB == maxY) {
    yspeed = -1;
    img.style.color = generateColor();
  }

  if (parseInt(imgT.substring(0, imgT.length - 2)) == 0) {
    yspeed = 1;
    img.style.color = generateColor();
  }

  ypos = ypos + yspeed;
  img.style.marginTop = `${ypos}px`;
}

setInterval(() => {
  setX();
  setY();
}, 5);

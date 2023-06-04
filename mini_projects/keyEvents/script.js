document.body.addEventListener("keydown", keyPress);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function keyPress(e){
  const key = e.key;
  const keyCode = e.keyCode;
  const code = e.code;
  const bgOne = getRandomInt(255);
  const bgTwo = getRandomInt(255);
  const bgThree = getRandomInt(255);
  document.body.style.backgroundColor = `rgb(${bgOne},${bgTwo},${bgThree})`;
  
  document.querySelector(".col-md-3:nth-child(1) .card-body").innerHTML = key;
  document.querySelector(".col-md-3:nth-child(2) .card-body").innerHTML = keyCode;
  document.querySelector(".col-md-3:nth-child(3) .card-body").innerHTML = code;
}
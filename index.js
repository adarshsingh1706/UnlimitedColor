function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

let colorChange;

//start
document.querySelector("#start").addEventListener("click", function () {
  colorChange = setInterval(function () {
    const grc = getRandomColor();
    document.querySelector("body").style.backgroundColor = grc;
  }, 2000);
});

//stop
document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(colorChange);
});

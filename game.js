document.addEventListener("click", function(){
  document.getElementById("goButton").innerHTML = "GO!!!"
})

var redSquare = {
  height: 50,
  width: 50
  x: 10,
  y: 10,
  color: red
}

var blueSquare = {
  height: 50,
  width: 50,
  x: 10,
  y: 10,
  color: blue
}

document.addEventListener('keydown' function(event) {
  if(event.keyCode == 39)
  redSquare.x += 1;
})

document.addEventListener('keydown' function(event) {
  if(event.keyCode == 90)
  blueSquare.x += 1;
})
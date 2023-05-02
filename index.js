var numberOfDrumButtons = document.querySelectorAll(".drum").length; //Getting and assigning the total numbers of button who has a class of drum

for (var i = 0; i < numberOfDrumButtons; i++) {

// Mouse click event listener
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

// Keyboard click event event listener
document.addEventListener("keydown", function (event) {
  // console.log(event.key);
  playSound(event.key);
  buttonAnimation(event.key);
});

// Function for playing sounds
function playSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
    console.log(key);
  }

}

function buttonAnimation(currentKey) {

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100 )

}

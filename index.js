// Create an object to map keys to sound files
const sounds = {
  w: 'sounds/tom-4.mp3',
  a: 'sounds/tom-3.mp3',
  s: 'sounds/tom-2.mp3',
  d: 'sounds/tom-1.mp3',
  j: 'sounds/snare.mp3',
  k: 'sounds/kick-bass.mp3',
  l: 'sounds/crash.mp3'
};

// Select all drums and add event listeners
document.querySelectorAll(".drum").forEach(drum => {
  drum.addEventListener("click", function() {
    let key = this.innerHTML;
    playSound(key);
    animateButton(key);
  });
});

// Add keydown event listener
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  animateButton(event.key);
});

// Function to play sound
function playSound(key) {
  if (sounds[key]) {
    let audio = new Audio(sounds[key]);
    audio.play();
  }
};

// Function to animate button
function animateButton(key) {
  let activeButton = document.querySelector("." + key);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 140);
  }
};

"use strickt"

function playSound(e) {
	const audio = document.querySelector(`audio[data-key='${e.keyCode}']`); // return the collection data-key from audio
	const key = document.querySelector(`.key[data-key='${e.keyCode}']`); // return the collection data-key from key 
	if (!audio) return(alert('choose another key-button from(a, s, d, f, g, h, j, k, l')); // if it not a audio button return string
	audio.currentTime = 0; // remove the pause in quick clicking
	audio.play(); // play sound
	key.classList.add('playing'); //add clas with transform to button
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); 
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); //add listener to a window document
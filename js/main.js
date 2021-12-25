function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it's not a transform
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
    const key = document.querySelector('div[data-key="${e.keyCode}"]');
    if (!audio) return; // stop the function from running

    key.classList.add('playing');
    audio.currentTime = 0; // rewinds the audio 
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
// The transitionend event is fired when a CSS transition has completed.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



window.addEventListener('keydown', playSound);
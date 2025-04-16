const words = document.querySelectorAll('.word-slider div');
let index = 0;

setInterval(() => {
    words[index].classList.remove('visible');
    words[index].classList.add('invisible');
    index = (index + 1) % words.length;
    words[index].classList.remove('invisible');
    words[index].classList.add('visible');
}, 2000); // change every 2 seconds
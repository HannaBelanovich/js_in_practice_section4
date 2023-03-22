'use strict';

// ПРИМЕР ДРЕВНЕЙ ПРОСТЕЙШЕЙ АНИМАЦИИ

const btn = document.querySelector('.btn');

function myAnimation() {
    const elem = document.querySelector('.box');
    let position = 0; //переменная позиции, с которой все будет стартовать

    const id = setInterval(frame, 10);

    function frame() {
        if (position == 300) { // смещаем квадратик на 300 пикселей вправо и вниз
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px'; // тут записали без интерполяции
            elem.style.left = position + 'px'; 
        }
    }
}

btn.addEventListener('click', myAnimation);
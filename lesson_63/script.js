'use strict';

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0));

// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[0].classList.contains('some')) {
//     console.log('some');
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// })

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'BUTTON') { //e.target.classList.contains('some) == 'BUTTON'
        console.log('hi');
    }
})

const btn = document.createElement('button'); //событие, назначенное выше, сработает и на этой конпке
btn.classList.add('red');
wrapper.append(btn);

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.red')) { //кнопка с классом red
        console.log('hi red');
    }
})
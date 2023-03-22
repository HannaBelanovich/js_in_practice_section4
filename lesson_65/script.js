'use strict';

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

//1 

// const timerId = setTimeout(function() {
//     console.log('HI');
// }, 2000)

// 2 
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello')

//3 
// const timerId = setTimeout(logger, 2000)

// function logger() {
//     console.log('Hi');
// }

// clearInterval(timerId); //сбросить setTimeout

// btn.addEventListener('click', function() {
//     timerId = setInterval(logger, 500);
// })

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId); 
//     }
//     console.log('Hi');
//     i++;    
// }

// иногда рекурсивный setTimeout лучше чем setInterval
// рекурсивный setTimeout:

// let id = setTimeout(function log() {
//     console.log('Hi');
//     id = setTimeout(log, 500);
// }, 500)
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector('.tabheader__items');

        function hideTabContent() {
            tabsContent.forEach(function(item) {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            })

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            })
        }

        function showTabContent(i = 0) { // B ES6 появилась возможность в аргумент прописывать его начальное значение, а не просто i
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }

        hideTabContent();
        showTabContent(); // тогда здесь при вызове не надо в аргумент писать 0

        tabsParent.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                })
            }
        })
})
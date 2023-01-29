'use strict';

// Exercise 1

// function amount() {
//     let count = 0;
//     return function inner(step){
//         count = count + step;
//         console.log(count);
//     }
// }

// let sum = amount();
// sum(3);
// sum(5);
// sum(228);




// Exercise 2

import { balance, beer, wine, pepsi, addProduct } from './shop.js';
export { amount, checkBeer, checkWine, checkPepsi };

const sel = (sel) => document.querySelector(sel);

let checkBeer = sel('#checkBeer').checked;
let checkWine = sel('#checkWine').checked;
let checkPepsi = sel('#checkPepsi').checked;
let amount = 0;

sel('.modal').classList.add('hide');

function addInfo() {
    if (checkBeer) {
        checkBeer = true;
        sel('#fieldBuy').innerHTML += `<p>Пиво: ${amount} шт.</p>`
    }
    if (checkWine) {
        checkWine = true;
        sel('#fieldBuy').innerHTML += `<p>Вино: ${amount} шт.</p>`
    }
    if (checkPepsi) {
        checkPepsi = true;
        sel('#fieldBuy').innerHTML += `<p>Пепсі: ${amount} шт.</p>`
    }
}

function changeInfo() {
    sel('#balance').innerHTML = `${balance} грн`;
    sel('#beer').innerHTML = `${beer} шт.`;
    sel('#wine').innerHTML = `${wine} шт.`;
    sel('#pepsi').innerHTML = `${pepsi} шт.`;
}

sel('#amount').addEventListener('input', function () {
    amount = sel('#amount').value;
    if (amount > 0) {
        sel('#add').disabled = false;
    }
});

sel('#add').addEventListener('click', function () {
    if (addProduct() !== false) {
        addInfo();
        sel('#amount').value = '';
        sel('#buy').disabled = false;
    } else {
        sel('.modal').classList.remove('hide');
        if (checkBeer) {
            sel('.modal-title').innerHTML = `Вибачте, але на складі залишилося beer ${beer} штук`;
        } else if (checkWine) {
            sel('.modal-title').innerHTML = `Вибачте, але на складі залишилося wine ${wine} штук`;
        } else if (checkPepsi) {
            sel('.modal-title').innerHTML = `Вибачте, але на складі залишилося pepsi ${pepsi} штук`;
        }
    }
})

sel('#buy').addEventListener('click', function () {
    sel('.third').innerHTML = sel('#fieldBuy').innerHTML;
    sel('.third').innerHTML += `<p>Баланс: ${balance} грн</p>`;
    changeInfo();
    sel('#fieldBuy').innerHTML = '';
    sel('#add').disabled = true;
    sel('#buy').disabled = true;
})


sel('#close').addEventListener('click', function () {
    sel('.modal').classList.add('hide');
    sel('#amount').value = '';
})
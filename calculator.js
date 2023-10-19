"use strict";

function calc() {



    let form = document.forms.calculator;
    let a1 = form.elements.price;
    let b1 = form.elements.count;
    let a2 = form.elements.price0;
    let b2 = form.elements.count0;
    let a3 = form.elements.price1;
    let b3 = form.elements.count1;


    let result = document.getElementById("result");
    let r = a1.value * b1.value + a2.value * b2.value + a3.value * b3.value;
    if(isNaN(r)) {
        result.innerHTML = "Поля для заполнения должны состоять из чисел";
    }
    else {
        result.innerHTML = names + " , Итого: " + r + "₽";
    }
}
window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});
let names = prompt("Введите Имя Пользователя", "ivan ivanov");
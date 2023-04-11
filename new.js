'use strict';

let money,
    time;


money = prompt("Ваш бюджет в месяц?", '');
time = prompt("Введите дату в формате YYYY-MM-DD", '');    


let mustHave = prompt("Введите обязательную статью расходов в этом месяце", '');
let howMuch = prompt("Во сколько обойдется?");

let expenses = {
    mustHave: howMuch,
}


let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: '',
    income: '',
    savings: false,

}

console.log("Бюджет на 1 месяц =", appData.budget / 30);
console.log(mustHave);

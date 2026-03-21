alert('Привет!');
console.log('Привет!');

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?(первый вариант)");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?(второй вариант)");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = 9;
let rollbackAmount = fullPrice * (rollback / 100);
let servicePercentPrice = fullPrice - rollbackAmount;

if(fullPrice >= 30000){
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000){
    console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани, стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split(", "));
console.log(`Процент отката посреднику за работу ${rollbackAmount}`);
console.log(servicePercentPrice);
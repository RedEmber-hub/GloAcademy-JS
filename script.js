let title = "GloAcademyProject";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 25000;
let rollback = 99;
let fullPrice = 1000000000;
let adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани, стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split(", "));
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`);

alert('Привет!');
console.log('Привет!');
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?(первый вариант)');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?(второй вариант)');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let rollback = 9;

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

const allServicePrices = getAllServicePrices();

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const fullPrice = getFullPrice();
let rollbackAmount = fullPrice * (rollback / 100);

function getTitle() {
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
}

function getServicePercentPrices() {
  return fullPrice - rollbackAmount;
}

const servicePercentPrice = getServicePercentPrices();

function getRollbackMessage() {
  if (fullPrice >= 30000) {
    return 'Даем скидку в 10%';
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    return 'Даем скидку в 5%';
  } else if (fullPrice < 15000 && fullPrice >= 0) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что то пошло не так';
  }
}

function showTypeOf(value) {
  return typeof value;
}

console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage());
console.log(getServicePercentPrices());

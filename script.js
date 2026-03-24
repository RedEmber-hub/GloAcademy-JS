let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 9;
let allServicePrices;
let servicePercentPrice;
let fullPrice;
let service1;
let service2;
let rollbackAmount;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt('Как называется ваш проект?', 'Человек паук новый день');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?(первый вариант)');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?(второй вариант)');
    }

    do {
      sum += +prompt('Сколько это будет стоить?');
    } while (!isNumber(sum));
  }

  return sum;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

function getTitle() {
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
}

function getServicePercentPrices() {
  return fullPrice - rollbackAmount;
}

function getRollbackMessage(price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%';
  } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%';
  } else if (price < 15000 && price >= 0) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что то пошло не так';
  }
}

const showTypeOf = function (variable) {
  return `${variable}: ${typeof variable}`;
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
rollbackAmount = fullPrice * (rollback / 100);
servicePercentPrice = getServicePercentPrices();
title = getTitle();

console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());

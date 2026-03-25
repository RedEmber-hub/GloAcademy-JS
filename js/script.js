const title = document.getElementsByTagName('h1');
const startButton = document.getElementsByClassName('handler_btn')[0];
const resetButton = document.getElementsByClassName('handler_btn')[1];
const plusButton = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const rollbackInput = document.querySelector('.rollback input');
const rollbackSpan = document.querySelector('.rollback .range-value');
const total = document.getElementsByClassName('.total-input')[0];
const totalCount = document.getElementsByClassName('.total-input')[1];
const totalCountOther = document.getElementsByClassName('.total-input')[2];
const totalFullCount = document.getElementsByClassName('.total-input')[3];
const totalCountRollback = document.getElementsByClassName('.total-input')[4];
let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 9,
  allServicePrices: 0,
  servicePercentPrice: 0,
  fullPrice: 0,
  services: {},
  rollbackAmount: 0,
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.rollbackAmount = appData.fullPrice * (appData.rollback / 100);
    appData.getServicePercentPrices();
    appData.getTitle();

    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  isText: function (str) {
    str = str.trim();
    return str !== '' && !/^\d+$/.test(str);
  },
  asking: function () {
    do {
      appData.title = prompt('Как называется ваш проект?', 'Человек паук новый день');
    } while (!appData.isText(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');
      } while (!appData.isText(name));
      let price = 0;

      do {
        price = +prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while (!appData.isText(name));
      let price = 0;

      do {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    appData.title = appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - appData.rollbackAmount;
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) return 'Даем скидку в 10%';
    if (price >= 15000 && price < 30000) return 'Даем скидку в 5%';
    if (price < 15000 && price >= 0) return 'Скидка не предусмотрена';

    return 'Что то пошло не так';
  },
  logger: function () {
    console.log(appData.title);
    console.log(`Экраны: ${appData.screens.map((screen) => screen.name).join(', ')}`);
    console.log(`Стоимость проекта: ${appData.screenPrice} рублей`);
    console.log(`Адаптив: ${appData.adaptive}`);
    console.log(`Процент отката(%): ${appData.rollback}%`);
    console.log(`Процент отката: ${appData.rollbackAmount} рублей`);
    console.log(`Сумма доп. услуг ${appData.allServicePrices} рублей`);
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log(`Стоимость проекта с доп. услугами без скидки ${appData.fullPrice} рублей`);
    console.log(
      `Стоимость проекта с доп. услугами с ${appData.rollback}% скидкой: ${appData.servicePercentPrice} рублей`
    );
  },
};
appData.start();

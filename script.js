const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 9,
  allServicePrices: 0,
  servicePercentPrice: 0,
  fullPrice: 0,
  service1: '',
  service2: '',
  rollbackAmount: 0,
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.rollbackAmount = appData.fullPrice * (appData.rollback / 100);
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();

    appData.logger();
  },
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'Человек паук новый день');
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(appData.screenPrice));

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?(первый вариант)');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?(второй вариант)');
      }

      do {
        sum += +prompt('Сколько это будет стоить?');
      } while (!isNumber(sum));
    }

    return sum;
  },
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    return appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - appData.rollbackAmount;
  },
  getRollbackMessage(price) {
    if (price >= 30000) return 'Даем скидку в 10%';
    if (price >= 15000 && price < 30000) return 'Даем скидку в 5%';
    if (price < 15000 && price >= 0) return 'Скидка не предусмотрена';

    return 'Что то пошло не так';
  },
  logger: function () {
    console.log(appData.title);
    console.log(`Экраны: ${appData.screens}`);
    console.log(`Стоимость проекта: ${appData.screenPrice} рублей`);
    console.log(`Адаптив: ${appData.adaptive}`);
    console.log(`Процент отката(%): ${appData.rollback}%`);
    console.log(`Процент отката: ${appData.rollbackAmount} рублей`);
    console.log(`Сумма доп. услуг ${appData.allServicePrices} рублей`);
    console.log(`Стоимость проекта с доп. услугами без скидки ${appData.fullPrice} рублей`);
    console.log(
      `Стоимость проекта с доп. услугами с ${appData.rollback}% скидкой: ${appData.servicePercentPrice} рублей`
    );
  },
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

appData.start();

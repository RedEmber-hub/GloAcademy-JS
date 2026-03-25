const title = document.getElementsByTagName('h1')[0];
const startButton = document.getElementsByClassName('handler_btn')[0];
const resetButton = document.getElementsByClassName('handler_btn')[1];
const plusButton = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const rollbackInput = document.querySelector('.rollback input');
const rollbackSpan = document.querySelector('.rollback .range-value');
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicePercentPrice: 0,
  fullPrice: 0,
  services: {},
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    appData.addTitle();

    startButton.addEventListener('click', appData.start);
    plusButton.addEventListener('click', appData.addScreenBlock);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    // appData.getServicePercentPrices();
    console.log(appData);
    appData.showResult();
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    totalFullCount.value = appData.fullPrice;
  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
    });
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    console.log('click');
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
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
    console.log(`Сумма доп. услуг ${appData.allServicePrices} рублей`);
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log(`Стоимость проекта с доп. услугами без скидки ${appData.fullPrice} рублей`);
    console.log(
      `Стоимость проекта с доп. услугами с ${appData.rollback}% скидкой: ${appData.servicePercentPrice} рублей`
    );
  },
};
appData.init();

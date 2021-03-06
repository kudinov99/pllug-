
//Створити функцію яка б отримувала параметром масив з елементів різних типів(строки, масиви, числа, об’єкти і т.д), 
//на виході має повернути строку у camel case(приклад строки у camel case: thisIsExampleOfTheCamelCase), 
//яка б поєднувала в собі всі елементи масиву які є строками.

const arr2 = ['one', 'two', 42, [], { a: 'ggg' }, '568', true, 'hello'];

function arrToCamelCase(arr) {
  return arr
    .filter((el) => typeof el === 'string')
    .join(' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

console.log(arrToCamelCase(arr2));

//Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і повертала б масиву у якому кожен 
//елемент масиву є літерою англійського алфавіту відповідний конкретному елементу масива
//(наприклад 1 = a, 2 = b, 3 = c, 4 = d, …).Приклад[4, 3, 22, 11] - в результаті маємо отримати[d, c, v, k]


const arr = [1, 2, 27, -5, 5.5, 3, 26];

function numberToLetter(arr) {
  return arr
    .filter(function (el) {
      return Number.isInteger(el) && el < 27 && el > 0;
    })
    .map(function (el) {
      return String.fromCharCode(el + 64);
    });
}

console.log(numberToLetter(arr));

//Створити функцію яка на параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) 
//і повертає новий об’єкт у якому відсутні всі значення які не є числом і менші 0
//(який містить тільки числа більші рівні 0).

const object = {
  a: 22,
  b: -11.35,
  c: 41.2,
  d: 'hello',
  e: 228,
  f: '228',
	g: true,
	h: []
};

Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {});

const filtered = Object.filter(
  object,
  (key) => key > 0 && typeof key == 'number'
);
console.log(filtered);

//Скрипт який виводить в консоль дату і час коли DOM побудований, але css, зображення ще не завантажились.

document.addEventListener('DOMContentLoaded', () => {
	console.log(`DOM tree is build ${new Date()}`);
});

//Скрипт який виводить в консоль дату і час коли DOM побудований і css, зображення вже завантажились.

window.onload = () => {
	console.log(`Page is loaded ${new Date()}`);
};

//Скрипт який виводить в консоль дату і час коли юзер натиснув на закрити вкладку або перезавантажити сторінку.

window.onbeforeunload = function () {
return console.log(`${new Date()}`);
};

//Скрипт який виводить повертає назву браузера та назву операційної системи через дефіс "-" як одну строку.

let OSName = 'Unknown OS';

if (navigator.appVersion.indexOf('Win') != -1) OSName = 'Windows';
if (navigator.appVersion.indexOf('Mac') != -1) OSName = 'MacOS';
if (navigator.appVersion.indexOf('X11') != -1) OSName = 'UNIX';
if (navigator.appVersion.indexOf('Linux') != -1) OSName = 'Linux';

let sBrowser = 'unknown',
  sUsrAg = navigator.userAgent;

if (sUsrAg.indexOf('Firefox') > -1) { sBrowser = 'Mozilla Firefox'; }
else if (sUsrAg.indexOf('Opera') > -1) { sBrowser = 'Opera'; }
else if (sUsrAg.indexOf('Trident') > -1) {sBrowser = 'Microsoft Internet Explorer';}
else if (sUsrAg.indexOf('Edge') > -1) {sBrowser = 'Microsoft Edge';}
else if (sUsrAg.indexOf('Chrome') > -1) {sBrowser = 'Google Chrome';}
else if (sUsrAg.indexOf('Safari') > -1) { sBrowser = 'Apple Safari';}

console.log(`${sBrowser} - ${OSName} `);

//Скрипт який змушує браузер показувати сповіщення, коли ви намагаєтесь перезавантажити сторінку, 
//видалити вкладку, чи вимкнути браузер.

window.onbeforeunload = function () {
  return false;
};

//Скрипт який виводить в консоль скільки секунд юзер перебував на сторінці, після того як юзер 
//натиснув на закрити вкладку або перезавантажити сторінку.


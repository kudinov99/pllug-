//Створити пустий об’єкт;

const object1 = {},
  object2 = new Object(),
  object3 = Object.create(Object.prototype);

//Створити пустий об’єкт без прототипу;

const object4 = Object.create(null);

//Додати до об’єкта будь які нові поля всіма відомими способами;

object1.key1 = 'value1';
object1['key2'] = 'value2';
Object.assign(object1, { key3: 'value3' });
const someObject = { key4: 'value4' };
const spredObj = { ...object1, ...someObject };

//Створити пустий масив;

const array1 = [],
  array2 = new Array(),
  array3 = array1.concat();

//Створити пустий масив довжиною 100500 елементів;

const array4 = new Array(100500),
  array5 = Array(100500),
  array6 = Array.from({ length: 100500 }),
  array7 = [...Array(100500)],
  array8 = Array.apply(null, Array(100500));

//Створити масив з декількома елементами;

const array9 = [1, 2],
  array10 = Array(2).fill(''),
  array11 = Array.from('12'),
  array12 = new Array(1, 2),
  array13 = array9.slice(),
  array14 = array9.concat(),
  array15 = [...array9];

//Зробити заповнений масив пустим;

function emptyArr(arr) {
  return [];
}
console.log(emptyArr([1, 2, 3]));

//Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з масиву за його індексом та поверне новий масив(оновлений- після видалення);

function deleteElFromArr(index, arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(deleteElFromArr(0, [1, 2, 3, 4, 5]));

//Створити функцію, яка приймає один масив у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;

function IsArrEmpty(arr) {
  if (arr.length === 0) {
    return true;
  }
  return false;
}

console.log(IsArrEmpty([]));

//Створити функцію, яка приймає один об’єкт у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;

function IsObjEmpty(obj) {
  if (obj == null) {
    return true;
  }
  if (obj.length > 0) {
    return false;
  }
  if (obj.length === 0) {
    return true;
  }
  if (typeof obj !== 'object') {
    return true;
  }
  for (let key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

console.log(IsObjEmpty({ '': '' }));

//Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;

function mergeArrays(arr1, arr2) {
  return Array.from(arr1.concat(arr2));
}

console.log(mergeArrays([1, 2], [2, 3]));

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з елементів попереднього в степені 3. Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];

function exponentiation(arr) {
  return arr.map((el) => el ** 3);
}

console.log(exponentiation([1, 2, 3]));

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з непарних елементів вхідного масиву]

function odd(arr) {
  const odd = [];
  for (let el of arr) {
    if (el % 2 === 0) {
      odd.push(el);
    }
  }
  return odd;
}

console.log(odd([1, 2, 3, 4, 6, 8, 9]));

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається тільки з цілих елементів вхідного масиву; Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];

function integers(arr) {
  const result = [];
  for (let i in arr) {
    if (Number.isInteger(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(integers([5, 3.14, 4.1, 10, 11, 20.1]));

//Створити функцію, яка нічого не повертає;

function returnUndefined() {
  return;
}

console.log(returnUndefined());

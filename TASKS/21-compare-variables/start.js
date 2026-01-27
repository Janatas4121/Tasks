/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10;
let myVariable2 = '5';

let myVariable2Num = Number(myVariable2);
console.log(myVariable2Num);
let diff = myVariable1 <= myVariable2Num ? true : false;

console.log(diff);

myVariable1 = '20';
myVariable2 = 100;

let myVariable1Num = Number(myVariable1);
console.log(myVariable1Num);

let diff1 = myVariable1Num <= myVariable2 ? true : false;
console.log(diff1);

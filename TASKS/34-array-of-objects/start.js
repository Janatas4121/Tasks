/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const infoCar = [
  { carBrand: 'Cobalt' },
  { price: 15000 },
  { isAvailableForSale: true },
];
console.log(infoCar);

infoCar.push({ color: 'white' });

console.log(infoCar);

console.log(infoCar.length);

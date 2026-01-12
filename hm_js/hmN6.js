//1 задание
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) break;
}

//2 задание
const arr2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log(i);
        break;
    }
}

//3 задание
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

//4 задание
const multiArray = [];
for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    multiArray.push(row);
}
console.log(multiArray);

//5 задание
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//6 задание
const arr6 = [9, 8, 7, 'a', 6, 5];
const sortedArr = arr6.sort();
const filteredArr = sortedArr.filter(item => typeof item === 'number');
console.log(filteredArr);

//7 задание
const arr7 = [9, 8, 7, 6, 5];
const userGuess = parseInt(prompt("Угадай число:"));
alert(arr7.includes(userGuess) ? "Угадал" : "Не угадал");

//8 задание
const str = 'abcdef';
console.log(str.split('').reverse().join(''));

//9 задание
const arr9 = [[1, 2, 3], [4, 5, 6]];
console.log([...arr9[0], ...arr9[1]]);

//10 задание
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

//11 задание
function squareArray(arr) {
    return arr.map(num => num * num);
}
console.log(squareArray([1, 2, 3, 4, 5]));

//12 задание
function stringLengths(arr) {
    return arr.map(str => str.length);
}
console.log(stringLengths(["hello", "world", "test"]));

//13 задание
function negativeNumbers(arr) {
    return arr.filter(num => num < 0);
}
console.log(negativeNumbers([-1, 2, -3, 4, -5]));

//14 задание
const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenNumbers = randomArray.filter(num => num % 2 === 0);
console.log("Исходный массив:", randomArray);
console.log("Четные числа:", evenNumbers);

//15 задание
const randomArray15 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const average = randomArray15.reduce((sum, num) => sum + num, 0) / randomArray15.length;
console.log("Массив:", randomArray15);
console.log("Среднее арифметическое:", average);

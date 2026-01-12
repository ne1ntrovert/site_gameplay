//1 задание
function min(a, b) {
    return a <= b ? a : b;
}

console.log(min(8, 4));
console.log(min(6, 6));


//2 задание
function isEven(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

console.log(isEven(4));
console.log(isEven(7));


//3 задание
function printSquare(n) {
    console.log(n * n);
}

function getSquare(n) {
    return n * n;
}

printSquare(5);
const square = getSquare(5);
console.log(square);


//4 задание
function checkAge() {
    const age = parseInt(prompt("Сколько вам лет?"));

    if (isNaN(age) || age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}

checkAge();


//5 задание
function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
    return a * b;
}

console.log(multiply(3, 4));
console.log(multiply('a', 4));


//6 задание
function cubeNumber() {
    const n = parseFloat(prompt("Введите число:"));

    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    }
    return `${n} в кубе равняется ${n ** 3}`;
}

console.log(cubeNumber());


//7 задание
const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
//1 задание
console.log("Привет");
console.log("Привет");

//2 задание
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//3 задание
for (let i = 7; i <= 22; i++) {
  console.log(i);
}

//4 задание
const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let key in obj) {
  console.log(`${key} — зарплата ${obj[key]} долларов`);
}

//5 задание
let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  num++;
}

console.log(`Результат деления: ${n}`);
console.log(`Количество итераций: ${num}`);

//6 задание
const firstFriday = 3;
let fridays = [];

for (let day = firstFriday; day <= 31; day += 7) {
  fridays.push(day);
}

fridays.forEach(day => {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
});

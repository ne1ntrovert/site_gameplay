function startGame1() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Загаданное число:", targetNumber);

    while (true) {
        let guess = prompt("Угадай число от 1 до 100.");
        guess = Number(guess);

        if (isNaN(guess)) {
            alert("Некорректный ввод. Попробуй ещё раз.");
            continue;
        }

        if (guess === targetNumber) {
            alert("Поздравляю, ты угадал число!");
            break;
        } else if (guess < targetNumber) {
            alert("Число меньше загаданного. Попробуй ещё раз.");
        } else {
            alert("Число больше загаданного. Попробуй ещё раз.");
        }
    }
}

function startGame2() {
    const operations = ['+', '-', '*', '/'];

    while (true) {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const operationIndex = Math.floor(Math.random() * operations.length);
        const operation = operations[operationIndex];
        let question;
        let correctAnswer;

        if (operation === '+') {
            question = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
        }
        else if (operation === '-') {
            question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
            correctAnswer = Math.max(num1, num2) - Math.min(num1, num2);
        }
        else if (operation === '*') {
            question = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
        }
        else if (operation === '/') {
            correctAnswer = Math.floor(Math.random() * 10) + 1;
            num1 = correctAnswer * num2;
            question = `${num1} / ${num2}`;
        }
        let userAnswer = prompt(`Решите задачу: ${question} = ?`);

        if (userAnswer === null) {
            alert("Игра завершена.");
            break;
        }

        userAnswer = Number(userAnswer);
        if (isNaN(userAnswer)) {
            alert("Некорректный ввод. Попробуйте ещё раз.");
            continue;
        }
        if (userAnswer === correctAnswer) {
            alert(`Правильно! ${question} = ${correctAnswer}`);
            break;
        }
        else {
            alert(`Неправильно. Правильный ответ: ${question} = ${correctAnswer}`);
        }
    }
}

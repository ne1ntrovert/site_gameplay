   // Задание 1:
const header1 = document.querySelector('#header1');
const toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', function() {
    if (header1.classList.contains('hidden')) {
        header1.classList.remove('hidden');
        toggleButton.textContent = 'Скрыть текст';
    } else {
        header1.classList.add('hidden');
        toggleButton.textContent = 'Показать текст';
    }
});

// Задание 2:
const colorParagraph = document.querySelector('#colorParagraph');
const colorButton = document.querySelector('#colorButton');

colorButton.addEventListener('click', function() {
    colorParagraph.classList.toggle('blue-text');
    
    if (colorParagraph.classList.contains('blue-text')) {
        colorButton.textContent = 'Вернуть исходный цвет';
    } else {
        colorButton.textContent = 'Изменить цвет текста';
    }
});

// Задание 3:
const changeableHeader = document.querySelector('#changeableHeader');
const changeTextButton = document.querySelector('#changeTextButton');

changeTextButton.addEventListener('click', function() {
    if (changeableHeader.textContent === 'Привет, мир!') {
        changeableHeader.textContent = 'Исходный текст заголовка';
        changeTextButton.textContent = 'Изменить текст заголовка';
    } else {
        changeableHeader.textContent = 'Привет, мир!';
        changeTextButton.textContent = 'Вернуть исходный текст';
    }
});

// Задание 4:
const changeAllButton = document.querySelector('#changeAllButton');

changeAllButton.addEventListener('click', function() {
    const descriptionElements = document.querySelectorAll('.description');
    
    descriptionElements.forEach(function(element) {
        element.textContent = 'Измененный текст';
    });
    
    changeAllButton.textContent = 'Текст изменен!';
    changeAllButton.disabled = true;
});

// Задание 5:
const changeDescriptionsButton = document.querySelector('#changeDescriptionsButton');

changeDescriptionsButton.addEventListener('click', function() {
    const descriptionElements = document.querySelectorAll('.description');
    
    descriptionElements.forEach(function(element) {
        element.textContent = 'Новый текст';
    });
    
    changeDescriptionsButton.textContent = 'Текст изменен!';
    changeDescriptionsButton.disabled = true;
});

// Задание 6:
const addElementButton = document.querySelector('#addElementButton');
const containerForNewElements = document.querySelector('#containerForNewElements');

addElementButton.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    newParagraph.classList.add('new-element');
    containerForNewElements.appendChild(newParagraph);
});

// Задание 7:
const removeElementButton = document.querySelector('#removeElementButton');
const removalContainer = document.querySelector('#removalContainer');

removeElementButton.addEventListener('click', function() {
    const firstDescription = removalContainer.querySelector('.description');
    
    if (firstDescription) {
        firstDescription.remove();
        
        const remainingDescriptions = removalContainer.querySelectorAll('.description');
        if (remainingDescriptions.length === 0) {
            removeElementButton.textContent = 'Элементы удалены';
            removeElementButton.disabled = true;
        } else {
            removeElementButton.textContent = `Удалить первый элемент с классом description (осталось: ${remainingDescriptions.length})`;
        }
    } else {
        removeElementButton.textContent = 'Элементы для удаления отсутствуют';
        removeElementButton.disabled = true;
    }
});
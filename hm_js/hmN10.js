        // Задание 1
        const toggleButton = document.getElementById('toggle-button');
        const heading = document.getElementById('toggle-heading');
        
        toggleButton.addEventListener('click', function() {
            if (heading.style.display === 'none') {
                heading.style.display = 'block';
                toggleButton.textContent = 'Скрыть текст';
            } else {
                heading.style.display = 'none';
                toggleButton.textContent = 'Показать текст';
            }
        });
        
        // Задание 2
        const colorButton = document.getElementById('color-button');
        const resetColorButton = document.getElementById('reset-color-button');
        const colorText = document.getElementById('color-text');
        
        colorButton.addEventListener('click', function() {
            colorText.style.color = '#2980b9';
            colorText.style.fontWeight = 'bold';
        });
        
        resetColorButton.addEventListener('click', function() {
            colorText.style.color = '';
            colorText.style.fontWeight = '';
        });
        
        // Задание 3
        const changeTextButton = document.getElementById('change-text-button');
        const resetTextButton = document.getElementById('reset-text-button');
        const dynamicHeading = document.getElementById('dynamic-heading');
        const originalText = dynamicHeading.textContent;
        
        changeTextButton.addEventListener('click', function() {
            dynamicHeading.textContent = 'Привет, мир!';
            dynamicHeading.style.color = '#e74c3c';
        });
        
        resetTextButton.addEventListener('click', function() {
            dynamicHeading.textContent = originalText;
            dynamicHeading.style.color = '';
        });
        
        // Задание 4
        const changeAllButton = document.getElementById('change-all-descriptions');
        const resetAllButton = document.getElementById('reset-all-descriptions');
        const descriptionElements = document.querySelectorAll('.description');
        const originalTexts = [];
        
        descriptionElements.forEach(el => {
            originalTexts.push(el.textContent);
        });
        
        changeAllButton.addEventListener('click', function() {
            descriptionElements.forEach(el => {
                el.textContent = 'Измененный текст';
                el.style.color = '#27ae60';
                el.style.fontWeight = 'bold';
            });
        });
        
        resetAllButton.addEventListener('click', function() {
            descriptionElements.forEach((el, index) => {
                el.textContent = originalTexts[index];
                el.style.color = '';
                el.style.fontWeight = '';
            });
        });
        
        // Задание 5
        const changeDescriptionButton = document.getElementById('change-description-text');
        
        changeDescriptionButton.addEventListener('click', function() {
            const allDescriptions = document.querySelectorAll('.description');
            allDescriptions.forEach(el => {
                el.textContent = 'Новый текст';
                el.style.backgroundColor = '#fff3cd';
                el.style.padding = '10px';
                el.style.borderRadius = '4px';
            });
        });
        
        // Задание 6
        const addElementButton = document.getElementById('add-element-button');
        const clearElementsButton = document.getElementById('clear-elements-button');
        const container = document.getElementById('new-elements-container');
        
        addElementButton.addEventListener('click', function() {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'Новый абзац, добавленный ' + new Date().toLocaleTimeString();
            newParagraph.className = 'added-element';
            newParagraph.style.backgroundColor = '#d4edda';
            newParagraph.style.padding = '10px';
            newParagraph.style.borderRadius = '4px';
            newParagraph.style.marginTop = '10px';
            container.appendChild(newParagraph);
        });
        
        clearElementsButton.addEventListener('click', function() {
            const addedElements = document.querySelectorAll('.added-element');
            addedElements.forEach(el => {
                el.remove();
            });
        });
        
        // Задание 7
        const removeButton = document.getElementById('remove-first-description');
        const restoreButton = document.getElementById('restore-elements');
        const elementsContainer = document.querySelector('.task-container:nth-child(7) .element-list');
        const originalHTML = elementsContainer.innerHTML;
        
        removeButton.addEventListener('click', function() {
            const firstDescription = document.querySelector('.description');
            if (firstDescription) {
                firstDescription.parentElement.remove();
            }
        });
        
        restoreButton.addEventListener('click', function() {
            elementsContainer.innerHTML = originalHTML;
        });

// Получаем элементы
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Функция для обновления дисплея
function updateDisplay(value) {
    display.value += value;
}

// Функция для вычисления результата
function calculateResult() {
    try {
        display.value = eval(display.value); // Используем eval для вычисления выражений
    } catch (error) {
        display.value = 'Ошибка';
    }
}

// Функция для обработки нажатия клавиш на клавиатуре
function handleKeyboardInput(event) {
    const key = event.key;

    // Обработаем цифры
    if ('0123456789'.includes(key)) {
        updateDisplay(key);
    }
    // Обработаем операторы
    else if ('+-*/.'.includes(key)) {
        updateDisplay(key);
    }
    // Обработаем клавишу "Enter" для вычисления
    else if (key === 'Enter') {
        calculateResult();
    }
    // Обработаем клавишу "Backspace" для удаления символа
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
    // Обработаем клавишу "Escape" для очистки дисплея
    else if (key === 'Escape') {
        display.value = '';
    }
}

// Добавляем обработчик событий для кнопок
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            display.value = '';
        } else {
            updateDisplay(value);
        }
    });
});

// Добавляем обработчик события нажатия клавиш
window.addEventListener('keydown', handleKeyboardInput);

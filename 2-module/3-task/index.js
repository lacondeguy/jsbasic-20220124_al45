let calculator = {
    read: (a, b) => { 
    calculator.a = a;
    calculator.b = b;
    },
    sum: () => calculator.a + calculator.b,
    mul: () => calculator.a * calculator.b,
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

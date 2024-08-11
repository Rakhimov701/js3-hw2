let a = prompt('Введите число');

let sum = 0;

for (var i = 1; i <= a; i++) {
    if (i % 2 == 0) {
        sum = sum + i;  
    }
}

console.log('Сумма всех четных чисел до ' + a + ' равна ' + sum);
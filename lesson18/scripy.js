'use strict'
/**
 1. Если переменная a равна 1 и по значению и по типу, то выведите Верно, иначе
выведите Неверно.
Проверьте работу скрипта при a, равном 1, 1, 3.
2. Если переменная item не равна true, то выведите Верно, иначе выведите Неверно.
Проверьте работу
скрипта при item, равном true, false. Напишите два варианта скрипта - с короткой записью
и с длинной.
3. Если переменная a больше нуля и меньше 4-ти, то выведите Верно;, иначе выведите
Неверно.
Проверьте работу скрипта при a, равном 4, 0, -3, 2.
4. Если переменная a больше 3-х и меньше 12-ти, или переменная b больше или равна 7-
и и меньше 15-ти, то выведите Верно, в противном случае выведите Неверно.
5. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую
пору года попадает этот месяц (зима, лето, весна, осень).
6. Выведите в консоли столбец четных чисел в промежутке от 0 до 100. (используя for или
while)
 */

 
 





//  4. Если переменная a больше 3-х и меньше 12-ти, или переменная b больше или равна 7-
// и и меньше 15-ти, то выведите Верно, в противном случае выведите Неверно.

let a;
let b;

a = 7;
b = 12;

if ( a > 3 && a < 12 || b >= 7 && b < 15 ){
    console.log('Верно');
}else{
    console.log('Неверно');
};


// 2. Если переменная item не равна true, то выведите Верно, иначе выведите Неверно.
// Проверьте работу
// скрипта при item, равном true, false. Напишите два варианта скрипта - с короткой записью
// и с длинной.

let item;


if (item != true){
    console.log('Верно');
}else{
    console.log('Неверно');
};

// 3. Если переменная a больше нуля и меньше 4-ти, то выведите Верно;, иначе выведите
// Неверно.
// Проверьте работу скрипта при a, равном 4, 0, -3, 2.

let a1;
a1 = 2;

if ( a1 > 0 && a1 < 4){
    console.log('Верно');
}else{
    console.log('Неверно');
};

// 5. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую
// пору года попадает этот месяц (зима, лето, весна, осень).

let month;
month = 6;

if ( month <= 3){
    console.log('Spring')
} else if( month > 3 && month <= 6){
    console.log('Summer')
} else if ( month > 6 && month <= 9){
    console.log('Autumn')
} else if ( month > 9 && month <= 12){
    console.log('Winter')
};

// 6. Выведите в консоли столбец четных чисел в промежутке от 0 до 100. (используя for или
//     while)

for(let i = 2; i < 100; i++){

    if( i % 2 ) {continue;}
    
    console.log(i);
}

// 1. Если переменная a равна 1 и по значению и по типу, то выведите Верно, иначе
// выведите Неверно.

let a2;
a2 = 1;

if (  Number(a2) = 1){
    console.log('Верно')
} else {( console.log('Неверно'))}
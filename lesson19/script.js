/**
 * 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно 
больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

2. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число 
и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

3. Переписать код из конструкции if в switch

var value = +prompt('value?', '');
if (value == 0) {
  alert( 0 );
}
if (value == 1) {
  alert( 1 );
}
if (value == 2 || value == 3) {
  alert( '2,3' );
}


4. Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b

Пример вызовов: 
min(3, 5) // вернет 3
min(5, -1) // вернет -1
 */



// 3. Переписать код из конструкции if в switch

var value = +prompt('value?', '');
switch (value){
    case 1: (value == 0) 
  alert( 0 );

break
case 1: (value == 1) 
  alert( 1 );
break;
case 2: (value == 2 || value == 3) 
  alert( '2,3' );
break;
}

// 4. Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b


function min(a = 5, b = -1){
    
    if( a < b){
        return a;
    }else{
        return b;
    }
    console.log(min);
}
console.log(min());

// 2. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число 
// и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven( a = 7 ){
    if(a % 2 == 0){
        return true;
    }else{
        return false;
    }
};
console.log(isEven());

// 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно 
// больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function numberIsRange( a = 11 ){
    if( a > 0 && a < 10){
        return true;
    }else{
        return false;
    }
};
console.log(numberIsRange());
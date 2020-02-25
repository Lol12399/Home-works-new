'use strict';
//first homework
function dateDifference(){
    let cookie_visit_date = 0,
        current_date = Date.parse( new Date( Date.now() ) ),
        diff_date = 0;

    if( getCookie('visit_date') == undefined ){

        setCookie('visit_date', current_date);

        console.log('Вы зашли 1 раз. Обновите страницу');

    }else{

        cookie_visit_date = getCookie('visit_date');

        diff_date = current_date - cookie_visit_date;

        diff_date = diff_date / 1000 / 60;

        console.log( diff_date );

        setCookie('visit_date', current_date);
    }
}


dateDifference();




//second homework
let list_items = document.querySelectorAll('.list li:nth-child(odd)');//1

console.log(list_items);

let news_title = document.getElementsByClassName('news-item_title');//2

for ( let ilem of news_title){
    console.log(ilem.innerHTML)
}


let new_dates = document.querySelectorAll('time');//3

let arr = [];

for ( let elem of new_dates){
    arr.push(elem.innerHTML);
    console.log(elem.innerHTML)
}








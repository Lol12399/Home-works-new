'use strict';

let list_items = document.querySelectorAll('.list li:nth-child(odd)');

console.log(list_items);

let news_title = document.getElementsByClassName('news-item_title');

for ( let ilem of news_title){
    console.log(ilem.innerHTML)
}


let new_dates = document.querySelectorAll('time');

let arr = [];

for ( let elem of new_dates){
    arr.push(elem.innerHTML);
    console.log(elem.innerHTML)
}








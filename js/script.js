'use strict';
const books=document.querySelectorAll('.books');
const book=document.querySelectorAll('.book');
book[1].after(book[0]);
book[3].before(book[4]);
books[0].append(book[2]);

const body=document.querySelector('body');

document.body.style.backgroundImage = "url('image/bg.jpg')";

const advertisment=document.querySelector('.adv');
advertisment.remove();

const addTitle=document.createElement('li');
addTitle.textContent="Глава 8: За пределами ES6";
const book6=book[2].querySelectorAll('li');
book6[9].before(addTitle);



const book2=book[0].querySelectorAll('li');


/* console.log(book2); */
book2[3].after(book2[6]);
book2[6].after(book2[8]);
const book5=book[5].querySelectorAll('li');
/* console.log(book5); */
book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[3].after(book5[4]);
book5[7].after(book5[5]);


const book3=book[4].querySelectorAll('h2');
/* console.log(book3); */
/* book3[0].innerHTML="<font color=darkkhaki>Книга 3. this и Прототипы Объектов</font>"; */
book3[0].textContent="Книга 3. this и Прототипы Объектов";




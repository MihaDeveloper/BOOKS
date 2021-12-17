'use strict';
const books=document.querySelectorAll('.books');
const book=document.querySelectorAll('.book');
const body=document.querySelector('body');
const advertisment=document.querySelector('.adv');
const addTitle=document.createElement('li');
const book6=book[2].querySelectorAll('li');
const book2=book[0].querySelectorAll('li');
const book5=book[5].querySelectorAll('li');
const book3=book[4].querySelectorAll('h2');


book[1].after(book[0]);
book[3].before(book[4]);
books[0].append(book[2]);

document.body.style.backgroundImage = "url('image/bg.jpg')";

advertisment.remove();

addTitle.textContent="Глава 8: За пределами ES6";

book6[9].before(addTitle);

/* console.log(book2); */
book2[3].after(book2[6]);
book2[6].after(book2[8]);

/* console.log(book5); */
book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[3].after(book5[4]);
book5[7].after(book5[5]);

 console.log(book3); 
 book3[0].innerHTML="<a href=https:/github.com/azat-io/you-dont-know-js-ru/blob/master/types%20%26%20grammar/README.md#you-dont-know-js-types--grammar><font color=darkkhaki>Книга 3. this и Прототипы Объектов</font></a>"; 






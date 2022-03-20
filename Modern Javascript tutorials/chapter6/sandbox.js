
// interacting with the DOM

// const para = document.querySelector('body > h1');


// console.log(para);


// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para);
// });

// console.log(paras[0]);



// const errors = document.querySelectorAll('.error');
// console.log(errors[1]);


// // get element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// // get element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);



// // get element by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);


// let para = document.querySelector('p');
// para.innerText = 'I just changed the content of the first p tag';

// console.log(para);

// let paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     para.innerText = 'changed all the p tags';
// })

// let content = document.querySelector('.content');
// // content.innerHTML = `<h1>Hi, I am Ebot</h1>`

// // console.log(content.innerHTML);



// let people = ['ebot', 'ngale', 'job', 'brian'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });


// const link = document.querySelector('a');



// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// console.log(link.getAttribute('href'));
// link.innerText = 'The net ninja website';


// const mssg = document.querySelector('p');

// mssg.setAttribute('class', 'success');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('style', 'color: red;');


// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px');

// console.log(title.style);

// title.style.margin = '15px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';

// title.style.margin = '';
// console.log(title.style.color);




// const para = document.querySelector('p')


// para.classList.remove('error');
// para.classList.add('success');
// console.log(para.classList);

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.setAttribute('class', 'error');
    }else if(para.textContent.includes('success')){
        para.setAttribute('class', 'success');
    }
} )


const title = document.querySelector('.title');

title.classList.toggle('test');



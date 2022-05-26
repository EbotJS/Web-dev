// const body = document.body
// // body.append("Hi, Ebot",' Goodluck');

// const div = document.createElement('div');
// body.append(div);

// const content = document.getElementByClassName('div');
// content.innerText = 'Hello! I am a div';

// increment a number in the DOM

/*
const number = document.getElementById('number');
const btn = document.getElementById('btn');
let count = 1;

btn.addEventListener('click', () => {
    count++;
    number.innerText = count;
});

*/


// const body = document.body;

// const div = document.createElement('div');

// body.append(div);

// // div.innerText = "hello, I am an added div";

// div.textContent = "hello,"

// const body = document.body;

// const div = document.querySelector('div');

// const spanHi = document.querySelector('#hi');
// const spanBye = document.querySelector('#bye');

// // // div.removeChild(spanHi);
// // div.append(spanHi);
// // div.append(spanBye);
// // spanBye.remove();

// console.log(spanHi.dataset);



// function setup() {
//     // Write your code here.
//     const body = document.body;
//     const btn1 = document.getElementById('remove1');
//     const btn2 = document.getElementById('remove2');
//     const divs = document.querySelectorAll('.image');
    
    
//     btn1.addEventListener("click", () =>{
//         divs[0].remove();
//     });

//     btn2.addEventListener("click", () =>{
//         divs[1].remove();
//     });
//   }
  
//   // Example case. 
//   document.body.innerHTML = `
//   <div class="image">
//     <img src="https://bit.ly/3lmYVna" alt="First">
//     <button id="remove1" class="remove">X</button>
//   </div>
//   <div class="image">
//     <img src="https://bit.ly/3flyaMj" alt="Second">
//     <button id="remove2" class="remove">X</button>
//   </div>`;
  
//   setup();
  
// //   document.getElementsByClassName("remove")[0].click();
//   console.log(document.body.innerHTML);

// const capitalize = () => {
// const input = document.getElementById('input');
// const para = document.querySelector('p');
// para.innerText = input.value;
// }
// const capitalize = () => {
  
//   const para = document.querySelector('p');
//   const input = document.getElementById('input');
//   para.innerText = input.i
// }


// const removeProperty = (obj, prop) => {
//     if(obj.hasOwnPropery(prop)){
//          return true;
//     }else{
//         return false;
//     }
// }

// const ebot = {
//     fname : 'Achale',
//     lname : 'Oma'
// }

// removeProperty(ebot, 'fname');
// console.log(obj);


// const input = document.getElementById('input');
// const para = document.querySelector('p');

// const copyFunc = () => {
//     para.innerText = input.value;
// }









/*

const number = document.querySelector('.number');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
let count = 0;
incBtn.addEventListener("click", () =>{
count = number.innerText;
    count++;
number.innerText = count;
});

decBtn.addEventListener("click", () =>{
    
    count = number.innerText
    
    count--;
    number.innerText = count;
    });

resetBtn.addEventListener("click", () => {
   number.innerText = 0;
});

*/


/*
const number = document.querySelector('.number');
let count = 0;
const incNumber = () => {
count++;
number.innerText = count;
}

const decNumber = () => {
count--;
number.innerText = count;
}

const resetNumber = () => {
    count = 0;
    number.innerText = count;
}

*/

const para = document.getElementById('para');
const input = document.getElementById('input')

const display = () => {
    para.innerText = input.value; 
}



console.log(para)



















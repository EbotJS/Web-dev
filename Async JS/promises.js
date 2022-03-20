// const posts = [
//     { title: 'Post One',
//       body: 'This is post one'
//     },
//     { title: 'Post Two',
//       body: 'This is post two'
//     }
// ];




// /////////////////////////
// const body = document.body;
// const ul = document.createElement('ul');
// body.append(ul);
// const ulList = document.querySelector('ul');
// //////////////////

// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(post => {
//             output += `<li>${post.title}</li>`;
//             ulList.innerHTML = output;
//         })
//     }, 1000);
// }

// function createPost(post){
//     return new Promise((resolve, reject) =>{

//         setTimeout(() =>{
//       posts.push(post);
      
//       const error = false;
//       if(!error) resolve();
//       else reject('Error! something went wrong');
//         }, 2000);

//     })

// }

// createPost({ title: 'Post Three', body: 'This is post three'})
//  .then(getPosts)
//  .catch(err => console.log(err));

// Async / Await

// async function init(){
//  await createPost({ title: 'Post Three', body: 'This is post three'});
// getPosts();
// }

// init();


// Async  / Await  / Fetch
// async function fetchUsers()






// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>{
//   setTimeout(resolve, 2000, 'Good bye');

// });
// const promise4 = fetch('')

// Promise.all([promise1, promise2, promise3])
// .then((values) => console.log(values));





const ebot = {
  name: 'Ebot',
  school: 'UB',
  level: 200,
  matricule: 'FE20A002'
}

function Person (name, school, level, matricule) {
  this.name = name;
  this.school = school;
  this.level = level;
  this.matricule = matricule;
}

Person.prototype.sayHello = function () {
  console.log('hello world');
};

const john = new Person('ebot', 'UB', '300', 'fefekd');

const jane = new Person('jane', 'Cuib', '400', 'dksd');

const jp = new Person('joseph', 'landmark', '500', 'dkfsdf');







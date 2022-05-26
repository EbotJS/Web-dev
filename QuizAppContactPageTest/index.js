const prevNam = document.getElementById('name');
const prevTel = document.getElementById('tel');
const prevWorries = document.getElementById('worries');


const names = prevNam.value;
const tel = prevTel.value;
const worries = prevWorries.value;


// localStorage.removeItem('c_names')
// localStorage.removeItem('c_tel')
// localStorage.removeItem('c_worries')





const submitInfo = () => {




    // if(localStorage.getItem('c_names') === null)
        localStorage.setItem('c_names', '[]');
    // if(localStorage.getItem('c_tel') === null)
        localStorage.setItem('c_tel', '[]');
    // if(localStorage.getItem('c_worries') === null)  
             localStorage.setItem('c_worries', '');
    



}
const number = '67270Y2316';
const re = /[^(\d)]/;
console.log(re.test(number))
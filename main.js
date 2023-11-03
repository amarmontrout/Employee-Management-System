const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const ssnInput = document.querySelector('#ssn');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const salaryInput = document.querySelector('#salary');
const msg = document.querySelector('.msg');
const empList = document.querySelector('#emp'); 

// console.log(`${nameInput.value} ${ssnInput.value} ${phoneInput.value} ${emailInput.value} ${salaryInput.value}`);

function onError (message) {
    msg.classList.add('error');
    msg.innerHTML = message;
    setTimeout(() => {
        msg.remove('error');
        message.innerHTML = '';
    }, 3000);
}

function onSubmit (e) {
    e.preventDefault();
    
    if( nameInput.value === '' ||
        ssnInput.value === '' ||
        phoneInput.value === '' ||
        emailInput.value === '' ||
        salaryInput.value === '')
        {
        onError('Please enter all fields')
        } 
    else
        {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} , ${ssnInput.value} , ${phoneInput.value} , ${emailInput.value} , ${salaryInput.value}`));
        
        empList.appendChild(li);
        
        nameInput.value = '';
        ssnInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        salaryInput.value = '';

        } 

}

myForm.addEventListener('submit', onSubmit);
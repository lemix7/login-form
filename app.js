let name = document.getElementById('name-input')
let email = document.getElementById('email-input')
let content = document.querySelector('.content')

let password = document.getElementById('pass-input')
let repassword = document.getElementById('repass-input')


let submitBtn = document.querySelector('.submit-btn')
let errorMessage = document.createElement('p')


let valid = false 


submitBtn.addEventListener('click' , function(e){

    updateError()
    errorMessage.classList.add('error')
    content.appendChild(errorMessage)

    validteForm()
    if(valid == false){
    e.preventDefault();
    }

})

function validteForm(){
    if(name.value === ''){
        errorMessage.textContent += ` enter your name , `
       }
    if(email.value === ''){
        errorMessage.textContent += `  enter your email ,`
       }
    if(password.value === '' && repassword.value === ''){
        errorMessage.textContent += ` enter you password`
    }
    else{
        valid = true
    }
       
}

function updateError(){
    errorMessage.textContent = ''
}


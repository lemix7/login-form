let name = document.getElementById('name-input')
let email = document.getElementById('email-input')
let content = document.querySelector('.content')

let password = document.getElementById('pass-input')
let passwordReEnter = document.getElementById('repass-input')


let submitBtn = document.querySelector('.submit-btn')
let form = document.querySelector('form')


let error = document.querySelector('.error-msg')
let errorMsgs = []



form.addEventListener('submit', (e) => {

    updateForm()

    if(name.value === ''){
        errorMsgs.push('name is required')
    }
    if(email.value === ''){
        errorMsgs.push('email is required')
    }
    if(password.value === '' || password.value.length <= 8){
        errorMsgs.push('password must be more than 8 characters')
    }
     if(passwordReEnter.value = '' ){
        errorMsgs.push(`passwords don't match`)
    }


    if(errorMsgs.length > 0){
        e.preventDefault()
        error.innerText = errorMsgs.join(', ')
    }

    // console.log(error.value.length);
    console.log(errorMsgs);
    console.log(errorMsgs.length);

})

function updateForm(){
    errorMsgs = []
}



let name = document.getElementById('name-input')
let email = document.getElementById('email-input')
let content = document.querySelector('.content')

let password = document.getElementById('pass-input')
let passwordReEnter = document.getElementById('repass-input')


let submitBtn = document.querySelector('.submit-btn')
let form = document.querySelector('form')


let error = document.querySelector('.error-msg')
let errorMsgs = []

let nameError = document.getElementById('name-error')
let emailError = document.getElementById('email-error')
let passError = document.getElementById('pass-1-error')
let pass2Error = document.getElementById('pass-2-error')



form.addEventListener('submit', (e) => {

    updateForm()

    if(name.value === ''){
        errorMsgs.push('name is required')
        nameError.textContent = 'Name is required'
    }
    if(email.value === ''){
        errorMsgs.push('email is required')
        emailError.textContent = 'Email is required'
    }
    if(password.value === '' || password.value.length <= 8){
        errorMsgs.push('password must be more than 8 characters')
        passError.textContent = 'password must be more than 8 characters'
    }
     if(passwordReEnter.value == '' || password.value !== passwordReEnter.value ){
        errorMsgs.push(`passwords don't match`)
        pass2Error.textContent = `passwords don't match`
    }

    if(errorMsgs.length > 0){
        e.preventDefault()
    }
    console.log(errorMsgs);

})

function updateForm(){
    nameError.textContent = ''
    emailError.textContent = ''
    passError.textContent = ''
    pass2Error.textContent = ''
    errorMsgs = []
}



let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let id = document.getElementById("id");
let email = document.getElementById("email");
let password = document.getElementById("password");
let comfirmPassword = document.getElementById("comfirmpassword");

// console.log(form);
// console.log(fname);
// console.log(lname);
// console.log(id);
// console.log(email);
// console.log(password);
// console.log(comfirmPassword);

function setError(element, message) {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

}

function setSuccess(element){
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

function validateInputs() {
    let fnameValue = fname.value.trim();
    let lnameValue = lname.value.trim();
    let idValue = id.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let comfirmPasswordValue = comfirmPassword.value.trim();

    if(fnameValue === ''){
        setError(fname, "First Name Required");
    }else{
        setSuccess(fname)
    }

    if(lnameValue === ''){
        setError(lname, "Last Name Required");
    }else{
        setSuccess(lname)
    }

    if(idValue === ''){
        setError(id, "ID Required");
    }else{
        setSuccess(id)
    }

    if(emailValue === ''){
        setError(email, "Email Required");
    }else{
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password, "Password Required");
    }else{
        setSuccess(password)
    }

    if(comfirmPasswordValue === ''){
        setError(comfirmPassword, "Comfirm Password Required");
    }else if(passwordValue !== comfirmPasswordValue){
        setError(comfirmPassword, " Password aren't same");
    }else{
        setSuccess(comfirmPassword)
    }
}

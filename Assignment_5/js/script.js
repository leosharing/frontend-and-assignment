let formData = document.querySelectorAll('[data-require]');
let submitBtn = document.querySelector('.submit');
let errorTxt = document.querySelectorAll('p');
let form = document.querySelector('form');
let validateData = {
    'first-name' : 'First Name',
    'last-name' : 'Last Name',
    'id' : 'ID',
    'email' : 'Email',
    'password' : 'Password', 
    'confirm-password' : 'Comfirm Password'
}

function collectData(){
    for (i = 0; i < formData.length; i++){
        let inputValue = formData[i].value;

        if(inputValue == ""){
            errorTxt[i].innerText = validateData[formData[i].getAttribute('name')] + " is required.";
        }
        else{
            console.log("this else");
        }
    }

    if(formData[5].getAttribute("name") === "confirm-password"){
        let checkPass = formData[4].value == formData[5].value;

        if(!checkPass){
            errorTxt[i].innerText = "Password didn't match";
            console.log("false");

        }else{
            console.log("true");
        }
    }
    else{
        console.log("something wrong");
    }

}
form.addEventListener('submit', e => {
    e.preventDefault();
})

submitBtn.addEventListener('click', collectData);
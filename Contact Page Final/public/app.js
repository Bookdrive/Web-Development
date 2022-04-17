console.log('Hello!')
const contactform = document.querySelector('.contact-form');

let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let message = document.querySelector('#message');

contactform.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('submit clicked');
    let formData = {
        fname: fname.value, 
        lname: lname.value,
        email: email.value,
        phone: phone.value,
        message: message.value   
    }
    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');
            fname.value = '';
            lname.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        }
        else{
            alert('Something Went Wrong !!');
        }
    }

    xhr.send(JSON.stringify(formData))


})


var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName()
{
    var name =document.getElementById('contact-name').value;

    if(name.length==0)
    {
        nameError.innerHTML="name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+/)) 
    {
        nameError.innerHTML="write full name";
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #20b123;"></i>';
    return true;
}
function validatePhone()
{
    var phone =document.getElementById('contact-phone').value;
    if(phone.length==0)
    {
        phoneError.innerHTML='Phone no is required'
        return false; 
    }
    if (!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML='Only digits please';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #20b123;"></i>';
    return true;
}
function validateEmail()
{
    var email =document.getElementById('contact-email').value;
    if(email.length==0)
    {
        emailError.innerHTML='Email is required'
        return false; 
    }
    if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[A-Za-z]{2,4}$/)){
        emailError.innerHTML='email Invalid';
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #20b123;"></i>';
    return true;

}

function validateMessage()
{
    var message =document.getElementById('contact-message').value;
    var req=30;
    var left=req-message.length;
    if(left>0)
    {
        messageError.innerHTML= left + 'more char needed';
        return false; 
    }
    
    messageError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #20b123;"></i>';
    return true;


}
function validateForm(){
    if(!validateName() || validatePhone() || validateEmail() || validateMessage())
    {
        submitError.style.display='block';
        submitError.innerHTML='please fix error';
        setTimeout(function(){
            submitError.style.display='none';
        }, 3000);
        return false;
    }
}
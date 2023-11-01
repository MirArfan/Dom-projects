let eyeicon=document.getElementById("eyeicon");
let pass=document.getElementById("password");

eyeicon.onclick=function()
{
    if(pass.type=="password"){
        pass.type="text";
        eyeicon.src="./media/eye-open.png";
    }
    else {
        pass.type="password";
        eyeicon.src="./media/eye-close.png";
    }
    
}
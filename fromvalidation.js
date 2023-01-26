 function validator()
{
    var user=document.getElementById("user")
    var error=document.getElementById("error")
    var password=document.getElementById("password")
     var reg=/^[A-Za-z]+$/g
    if(user.value=="")
    {
        error.innerHTML="username required";
        error.style.display="block"
        user.style.border="2px solid red"
        return false
    }
    if(password.value=="")
    {
        error.innerHTML="password  required";
        error.style.display="block"
        user.style.border="2px solid red"
        return false
    }
    else if(user.value.length<6)
    {
        error.innerHTML="user name should be min 6 char";
        error.style.display="block"
        user.style.border="2px solid red"
        return false
    }
    else if(password.value.length<6)
    {
        error.innerHTML="password should be min 6 char";
        error.style.display="block"
        password.style.border="2px solid red"
        return false
    }
    else if(user.value.length>10)
    {
        error.innerHTML="username should not exceed more than 10 char";
        error.style.display="block"
        user.style.border="2px solid red"
        return false
    }
    else if(reg.test(user.value)==false)
    {
        error.innerHTML="username should contain only alphabets";
        error.style.display="block"
        user.style.border="2px soild red"
        return false
    }
    else if(user.value=="username"||user.value=="")
    {
        error.innerHTML="username should not be username";
        error.style.display="block"
        user.style.border="2px solid red"
        return false 
    }
    else
    {
        alert("username accepted");
        return true;
    }
}
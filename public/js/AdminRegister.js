function validateform()
{
    var name1=document.myform.name.value;
    var n1="^[a-zA-Z]+$";
    if(name1.length == 0)
    {
        document.getElementById("name-error").style="visibility:visible";
        document.getElementById("name-error").innerHTML="Please enter your name";
        return false;
    }
    else if(name1.match(n1))
    {
        document.getElementById("name-error").style="visibility:hidden";
        document.getElementById("name-error").innerHTML="";
    }
    else{
        document.getElementById("name-error").style="visibility:visible";
        document.getElementById("name-error").innerHTML="Enter name without special characters";
        return false;
    }
    var mail= document.myform.email.value;
    var n3 ="^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,6})+$";
    if(mail.length == 0)
    {
        document.getElementById("email-error").style="visibility:visible";
        document.getElementById("email-error").innerHTML="Please enter your email";
        return false;
    }
    else if(mail.match(n3))
    {
        document.getElementById("email-error").style="visibility:hidden";
        document.getElementById("email-error").innerHTML="";
    }
    else{
        document.getElementById("email-error").style="visibility:visible";
        document.getElementById("email-error").innerHTML="Enter valid emailid";
        return false;
    }
    var p1=document.myform.password.value;
    if(p1.length == 0)
    {
        document.getElementById("p1-error").style="visibility:visible";
        document.getElementById("p1-error").innerHTML="Please enter your password";
        return false;
    }
    else if(p1.length>=8 && p1.length <=15)
    {
        document.getElementById("p1-error").style="visibility:hidden";
        document.getElementById("p1-error").innerHTML="";
    }
    else{
        document.getElementById("p1-error").style="visibility:visible";
        document.getElementById("p1-error").innerHTML="Password length must be 8 to 15 characters";
        return false;
    }
    var p2=document.myform.repassword.value;
    if(p2.length == 0)
    {
        document.getElementById("p2-error").style="visibility:visible";
        document.getElementById("p2-error").innerHTML="Please enter your password";
        return false;
    }
    else if(p2.length>=8 && p2.length <=15)
    {
        document.getElementById("p2-error").style="visibility:hidden";
        document.getElementById("p2-error").innerHTML="";
    }
    else{
        document.getElementById("p2-error").style="visibility:visible";
        document.getElementById("p2-error").innerHTML="Password length must be 8 to 15 characters";
        return false;
    }
    if(p1!=p2)
    {
        alert("Password must be same");
        return false;
    }
    else{
        if(confirm("Are You Sure ?"))
        {
            alert("Register Successfull");
            return true;
        }
        else{
            return false;
        }
    }
}
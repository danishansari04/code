function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

if(username=="danishansari"&& password=="123456")
{
    alert("login succesfully");
    
    window.open("https://drive.google.com/file/d/1fvP7GG6XJcFUeBZ3nIVn9aylFoV4PuWN/view")
  
  
    
}
else
{
    alert("login failed");
}


}
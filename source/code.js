function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

if(username=="danishansari"&& password=="999111")
{
alert("login successfully");
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
else
{
    alert("login failed");
}


}



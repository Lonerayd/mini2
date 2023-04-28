window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("scrolled", window.scrollY > 0);

    // var link1 = document.querySelector("nav-links");
    // link1.classList.toggle("change", window.scrollY > 0);
  });
  
// let landbtn=document.querySelectorAll(".landbtn");
// for(i=0;i<landbtn.length;i++)
// {
//   landbtn[i].addEventListener("click",
//     function()
//     {
      
//     }
//   )
// }
let icons = document.querySelectorAll('img');
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function() {
    document.location.href = "browse.html";
  });
}

   // Get the modal
   var modal = document.getElementById("myModal");
        
   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");
   
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];
   
   // When the user clicks the button, open the modal 
   btn.onclick = function() {
     modal.style.display = "block";
   }
   
   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     modal.style.display = "none";
   }
   
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }


   var username = [];
   var password = [];
   var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function sign()
{
  username.push(document.getElementById("username").value);
  password.push(document.getElementById("password").value);
}
function validate(){
var checkuser = document.getElementById("username").value;
var checkpass = document.getElementById("password").value;
if ( username.includes(checkuser) && password.includes(checkpass)){

window.location.href = "browse.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}


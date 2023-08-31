const checkbox = document.getElementById('check');
checkbox.addEventListener('change',() => {
  if(checkbox.checked){
    var menu = document.getElementById('menu').style.left = "0";
    

  } 

});

function menu(){
  var menu = document.getElementById('menu').style.left = "0";   
}


// Function to hide the sidebar
function hide() {
var menu = document.getElementById('menu').style.left = "-250px";
checkbox.checked = false;
}

function uncheckCheckbox() {
  const checkbox1 = document.getElementById('check');
  
  if (checkbox1 && checkbox1.type === 'checkbox' && checkbox1.checked) {
   checkbox.checked = false;
  }
}


// Add an event listener to the document that listens for clicks on the body
document.addEventListener('click', function(event) {
var sidebar = document.getElementById('menu');


// Check if the clicked element is not inside the sidebar and not the menu icon
if (!sidebar.contains(event.target)) {
  if(document.getElementById('menu').style.left == "0px"){
  hide(); // Hide the sidebar if the click is outside the sidebar and the menu icon
  uncheckCheckbox();
  }
}
});


//end of the page
function up(){
  var end = window.scrollTo(-200,0);
}
function whatsapp(){
  window.open("https:/whatsapp.com/business/","Whatsapp"," ");
}
function twitter(){
  window.open("https:/www.twitter.com/","Twitter"," ");
}
function instagram(){
  window.open("https:/www.instagram.com/","Instagram"," ");
}
function youtube(){
  window.open("https:/www.youtube.com/","Youtube"," ");
}
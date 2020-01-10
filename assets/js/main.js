// preload 
document.body.onload = function(){
  setTimeout(function() {
    var preloader = document.getElementById('bigloading');
    if( !preloader.classList.contains('ready') )
    {
      preloader.classList.add('ready');
    }
  }, 3500)
}

// dropdown 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
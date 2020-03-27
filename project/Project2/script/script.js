function slideshow(){
    var x = document.getElementById('check-class');
    if(x.style.display === "none"){
        x.style.display="block";
    } else {
        x.style.display="none";
    }
  }

var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("switch");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000); // Change image every 10 seconds
}
// section for personal review 
const slideshowImages = document.querySelectorAll(".review-slideshow li");
const nextImageDelay = 10000;
let currentImageCounter = 0; 
slideshowImages[currentImageCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay);
function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
}
//$(function(){
  //$("header").load("header.html"); 
  //$("footer").load("footer.html");
//}); 

//Nav
function navChange(x) {
    x.classList.toggle("change");
    //if (menu.style.display === "block") {
      //panel.style.display = "none";
    //} else {
      //menu.style.display = "block";
}

//Home-Game Slideshow
var slideIndex = 1;
viewSlides(slideIndex);

function shiftSlides(n) {
    viewSlides(slideIndex += n);
}

function currentSlide(n) {
    viewSlides(slideIndex = n);
}

function viewSlides(n) {

    var i;
    var slides = document.getElementsByClassName("game-slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}   
    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

//About-Team Slideshow
var slideIndexTeam = 1;
viewSlidesTeam(slideIndexTeam);

function shiftSlidesTeam(n) {
    viewSlidesTeam(slideIndexTeam += n);
}

function currentSlideTeam(n) {
    viewSlidesTeam(slideIndexTeam = n);
}

function viewSlidesTeam(n) {

    var j;
    var slidesTeam = document.getElementsByClassName("team-slide");

    if (n > slidesTeam.length) {slideIndexTeam = 1}   
    
    if (n < 1) {slideIndexTeam = slidesTeam.length}

    for (j = 0; j < slidesTeam.length; j++) {
    slidesTeam[j].style.display = "none";  
    }

    slidesTeam[slideIndexTeam-1].style.display = "grid";  
}
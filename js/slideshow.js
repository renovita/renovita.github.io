	var slideIndex = 0;
	var slides = document.getElementsByClassName("mySlides");
showSlides();
//Separate into two functions
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
	
	function plusSlides(n) {
  slideIndex+=n-1;
  if (slideIndex<0){
  slideIndex=slides.length-1;
  }
  showSlides();
}
	

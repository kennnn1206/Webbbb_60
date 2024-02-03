let slideIndexxx = 0;
showSlidesss();

function showSlidesss() {
  let i;
  const slidesss = document.getElementsByClassName("show1");
  
  for (i = 0; i < slidesss.length; i++) {
    slidesss[i].style.display = "none";
  }
  
  slideIndexxx++;
  if (slideIndexxx > slidesss.length) {
    slideIndexxx = 1;
  }
  
  slidesss[slideIndexxx - 1].style.display = "block";
  setTimeout(showSlidesss, 2000); 
}


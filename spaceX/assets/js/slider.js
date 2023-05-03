let slide_index = 1;

function nextSlide() {
  const n = 1;
  displaySlides((slide_index += n));
}

function prevSlide() {
  const n = -1;
  displaySlides((slide_index += n));
}

function displaySlides(n) {
  console.log("N value is " + n);
  let i;
  let slides = document.getElementsByClassName("showSlide");
  console.log(slides.length);
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

document.getElementById("nextSlide").addEventListener("click", nextSlide);
document.getElementById("prevSlide").addEventListener("click", prevSlide);
displaySlides(slide_index);
setInterval(nextSlide, 5000)

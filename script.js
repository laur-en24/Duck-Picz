const images = [
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg",

];

let currentIndex = 0;

    function showNextImage() {
      const img = document.getElementById("display-img");

      img.src = images[currentIndex];
      
img.alt = "Image" + (currentIndex + 1);
img.style.width = "500px";
img.style.height = "500px";
img.style.borderRadius = "10px";
img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
     
currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0; 

    }
  }
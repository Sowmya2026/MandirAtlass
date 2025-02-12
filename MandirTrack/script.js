// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Optional: Auto-scroll for Popular Temples slider
  let templeSlider = document.querySelector('.temple-slider');
  let scrollAmount = 0;
  let slideInterval = setInterval(() => {
    templeSlider.scrollLeft += 250;
    scrollAmount += 250;
    if (scrollAmount >= templeSlider.scrollWidth) {
      scrollAmount = 0;
      templeSlider.scrollLeft = 0;
    }
  }, 3000);
  

  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    // Create an Intersection Observer to trigger animation when cards are in the viewport
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');  // Add class to trigger animation
        } else {
          // Remove class if the element is no longer in the viewport
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the card is in view
  
    // Observe each card
    cards.forEach(card => {
      observer.observe(card);
    });
  
    // Trigger animation for visible elements that might already be in the viewport when page loads
    cards.forEach(card => {
      if (isElementInViewport(card)) {
        card.classList.add('is-visible');
      }
    });
  
    // Listen for scroll events and trigger the animation for any card entering the viewport
    window.addEventListener('scroll', () => {
      cards.forEach(card => {
        if (isElementInViewport(card) && !card.classList.contains('is-visible')) {
          card.classList.add('is-visible');
        }
      });
    });
  });
  
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("privacy-policy-modal");
    const btn = document.getElementById("privacy-policy-link");
    const closeBtn = document.querySelector(".close");

    btn.onclick = function () {
        modal.style.display = "block";
    };

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Update radio buttons to indicate current slide
  document.getElementById("slide1").checked = slideIndex === 1;
  document.getElementById("slide2").checked = slideIndex === 2;
  document.getElementById("slide3").checked = slideIndex === 3;
  
  // Change the slide every 3 seconds
  setTimeout(showSlides, 3000);
}

// Function to manually select a slide
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Initialize the slideshow
showSlides();

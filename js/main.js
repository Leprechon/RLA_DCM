/* =========================================
   1. Set Minimum Date for Appointment
   ========================================= */
document.getElementById('apptDate').min = new Date().toISOString().split('T')[0];

/* =========================================
   2. Handle Booking Form Submission
   ========================================= */
document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();

  const appointment = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    birthdate: document.getElementById('birthdate').value,
    service: document.getElementById('service').value,
    dentist: document.getElementById('dentist').value,
    date: document.getElementById('apptDate').value,
    time: document.getElementById('apptTime').value,
    status: 'Confirmed',
    bookedAt: new Date().toLocaleString()
  };

  // Save to localStorage
  localStorage.setItem('appointment', JSON.stringify(appointment));

  // Success message
  alert('Thank you! Your appointment has been booked successfully.\nWe will email you a confirmation soon.');
  window.location.href = '#home';
});

/* =========================================
   3. Inquiry Form Submission (Optional)
   ========================================= */
document.getElementById('inquiryForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert("Thank you! Your inquiry has been sent.");
});


// Hero Carousel Autoplay with interval

let slideIndex = 0;
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === n) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
  slideIndex = n;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlideFunc() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto play every 6 seconds
let autoSlide = setInterval(nextSlide, 6000);

// Controls
next.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prev.addEventListener("click", () => {
  prevSlideFunc();
  resetAutoSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetAutoSlide();
  });
});

// Reset autoplay when manually clicked
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 6000);
}
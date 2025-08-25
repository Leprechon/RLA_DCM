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
document.addEventListener('DOMContentLoaded', () => {
  const carouselEl = document.getElementById('heroCarousel');
  const heroTextBox = document.querySelector('.hero-text');
  const heroTitle = heroTextBox.querySelector('h1');
  const heroSubtitle = heroTextBox.querySelector('p');

  // Bootstrap carousel instance with relaxed timing + smooth fade
  const slider = new bootstrap.Carousel(carouselEl, {
    interval: 6000,   // slower autoplay (ms)
    ride: 'carousel',
    pause: 'hover',
    touch: true,
    wrap: true
  });

  // Update overlay text from data attributes on each slide
  const applyTexts = (item) => {
    const t = item.getAttribute('data-title') || '';
    const s = item.getAttribute('data-subtitle') || '';
    heroTitle.textContent = t;
    heroSubtitle.textContent = s;
  };

  // Restart the fade animation for text only


  // Init text from the first active slide
  const firstActive = carouselEl.querySelector('.carousel-item.active') || carouselEl.querySelector('.carousel-item');
  if (firstActive) {
    applyTexts(firstActive);
    playFade();
  }

  // When the slide is about to move, set next text
  carouselEl.addEventListener('slide.bs.carousel', (e) => {
    const nextItem = e.relatedTarget; // the next .carousel-item
    applyTexts(nextItem);
  });

  // When the slide transition finishes, play fade animation
  carouselEl.addEventListener('slid.bs.carousel', () => {
    playFade();
  });
});
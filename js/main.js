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

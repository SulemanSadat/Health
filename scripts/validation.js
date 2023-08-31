function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Define regular expressions for validation
  const nameRegex = /^[a-zA-Z\s]+$/; // Only allow alphabets and spaces in the name
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validate email format
  const phoneRegex = /^\d{10}$/; // Only allow exactly 10 digits in the phone number

  // Validate inputs using regular expressions
  if (!name.match(nameRegex)) {
    alert('Please enter a valid name.');
    return;
  }

  if (!email.match(emailRegex)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!phone.match(phoneRegex)) {
    alert('Please enter a valid phone number (10 digits only).');
    return;
  }

  // If all inputs are valid, you can proceed with form submission or further processing
}
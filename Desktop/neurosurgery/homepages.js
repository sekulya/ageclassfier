// Get the necessary elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');

// Event listener for the login form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Perform authentication check (dummy check in this example)
  if (username === 'admin' && password === 'password') {
    // Redirect to the dashboard or another page
    window.location.href = 'dashboard.html';
  } else {
    // Display an error message or take other actions
    alert('Invalid username or password. Please try again.');
  }
});

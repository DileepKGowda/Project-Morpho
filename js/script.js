// Simulated database for user information
const users = [];

// Function to handle login
function login(event) {
  event.preventDefault();
  const mobileNumber = document.getElementById('mobileNumber').value;
  const password = document.getElementById('password').value;

  // Check if user exists
  const user = users.find(u => u.mobileNumber === mobileNumber && u.password === password);
  if (user) {
    alert('Login successful!');
  } else {
    alert('Invalid mobile number or password.');
  }
}

// Function to handle signup
function signup(event) {
  event.preventDefault();
  const mobileNumber = document.getElementById('signupMobileNumber').value;
  const password = document.getElementById('signupPassword').value;

  // Check if user already exists
  const existingUser = users.find(u => u.mobileNumber === mobileNumber);
  if (existingUser) {
    alert('User already exists. Please login.');
  } else {
    // Add user to database
    users.push({ mobileNumber, password });
    alert('Signup successful! Please login.');
  }
}

// Event listeners for login and signup forms
document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('signupForm').addEventListener('submit', signup);

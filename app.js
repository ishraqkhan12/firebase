// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js&quot;

// Firebase configuration
const firebaseConfig = {
  //use your config here
  apiKey: "AIzaSyBOVK5cWju9hQQZ4c1cKGpgoNtlVmSPWd0",
    authDomain: "web-development-97b66.firebaseapp.com",
    projectId: "web-development-97b66",
    storageBucket: "web-development-97b66.appspot.com",
    messagingSenderId: "259808369033",
    appId: "1:259808369033:web:b3a8785abaee71373d6958",
    measurementId: "G-5Z1G50EJ7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize Analytics
const auth = getAuth();

// Signup Function
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  // Optional: Add more password validation (e.g., length, special characters)
  if (password.length < 6) {
    alert('Password should be at least 6 characters long.');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      alert('Sign up successful! Welcome, ' + user.email);
      window.location.pathname = 'logIn.html'
    })
    .catch((error) => {
      // Handle sign-up errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);

      // Display a user-friendly error message
      alert('Error: ' + errorMessage);
    });
}

// Attach event listener to button
document.getElementById('signupButton')?.addEventListener('click', signup);


function signin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Check if both fields are filled
    if (email === '' || password === '') {
      alert('Please fill out both email and password fields.');
      return;
    }
  
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Signed in successfully: ', user)
      alert('Logged in...')
      sessionStorage.setItem("user", user.email);
      window.location.pathname = './welcom.html'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
  }
  
  document.getElementById('loginButton')?.addEventListener('click', signin);
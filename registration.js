const nameInput = document.getElementById("floatingInputName");
const emailInput = document.getElementById("floatingInputEmail");
const passwordInput = document.getElementById("floatingPassword");
const confirmPasswordInput = document.getElementById("floatingConfirmPassword");
const registerForm = document.getElementById("registerForm");

let username = "";
let email = "";
let password = "";
let confirmPassword = "";

nameInput.addEventListener("input", () => {
  username = nameInput.value;
});

emailInput.addEventListener("input", () => {
  email = emailInput.value;
});
passwordInput.addEventListener("input", () => {
  password = passwordInput.value;
});
confirmPasswordInput.addEventListener("input", () => {
  confirmPassword = confirmPasswordInput.value;
});

// REGISTER FORM SUBMISSION

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    alert("Passwords Mismatch!");
    return;
  } else {
    localStorage.setItem("user", JSON.stringify({ username, email, password }));

    alert("Account Registration Completed! Go Login using Your Created Credentials.");
    window.location.href = "login.html";
  }
});

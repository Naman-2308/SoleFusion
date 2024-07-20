// Function to toggle visibility of login box
function toggleLoginBox() {
  var loginBox = document.getElementById("loginBox");
  if (loginBox.style.display === "block") {
    loginBox.style.display = "none";
  } else {
    loginBox.style.display = "block";
  }
  console.log("Toggle login box called");
  var loginBox = document.getElementById("loginBox");
}

// Function to handle login
function login() {
  var mobileNumber = document.querySelector(
    '#loginBox input[type="text"][placeholder="Mobile Number"]'
  ).value;
  var otp = document.querySelector(
    '#loginBox input[type="text"][placeholder="OTP"]'
  ).value;

  // Perform login validation and authentication
  if (mobileNumber && otp) {
    // Example: Display logged-in user information
    alert("Logged in successfully! Mobile Number: " + mobileNumber);
    // Clear input fields and hide login box
    document.querySelector('#loginBox input[type="text"]').value = "";
    document.getElementById("loginBox").style.display = "none";
  } else {
    alert("Please enter mobile number and OTP.");
  }
}

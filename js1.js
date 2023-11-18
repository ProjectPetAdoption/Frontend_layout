document.getElementsByClassName("blogin").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // You can add your authentication logic here. For example, check the username and password and perform the login action.
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Example: Check if the username and password are valid (you can replace this with your actual authentication logic)
  if (username === "your_username" && password === "your_password") {
    alert("Login successful");
    document.getElementById("popup").style.display = "none";
  } else {
    alert("Login failed. Please check your credentials.");
  }
});

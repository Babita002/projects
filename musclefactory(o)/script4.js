document.addEventListener("DOMContentLoaded", function () {
  // Check if the user is not logged in
  if (!localStorage.getItem("isLoggedIn")) {
    // Show the popup
    document.getElementById("popupContainer").style.display = "flex";
  }
  // Event listener for opening the popup manually (if needed)
  document.getElementById("loginBtn1").addEventListener("click", function () {
    document.getElementById("popupContainer").style.display = "flex";
  });
  // Event listeners for toggling between login and register forms

  document.getElementById("loginToggle").addEventListener("click", function () {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("registerForm").classList.remove("active");
    this.classList.add("active");
    document.getElementById("registerToggle").classList.remove("active");
  });

  document
    .getElementById("registerToggle")
    .addEventListener("click", function () {
      document.getElementById("registerForm").classList.add("active");
      document.getElementById("loginForm").classList.remove("active");
      this.classList.add("active");
      document.getElementById("loginToggle").classList.remove("active");
    });
    // Function to close the popup

    window.closePopup = function() {
        document.getElementById('popupContainer').style.display = 'none';
    };
  // Example function to simulate login and set the login state
  document
    .querySelector("#loginForm .input-group button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.setItem("isLoggedIn", "true");
      closePopup();
      // Additional login logic here (e.g., form submission, API call)
    });

  // Example function to simulate registration and set the login state
  document
    .querySelector("#registerForm .input-group button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.setItem("isLoggedIn", "true");
      closePopup();
      // Additional registration logic here (e.g., form submission, API call)
    });
});
//Toggle password visibility
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function() {
        // Toggle the type attribute using getAttribute and setAttribute
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the eye icon (optional, if you want to change the icon)
        this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });
});
//for forget password and remember me
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate a login process
        const username = loginForm.querySelector('input[type="text"]').value;
        const rememberMe = rememberMeCheckbox.checked;

        if (rememberMe) {
            localStorage.setItem('rememberMe', username);
        } else {
            localStorage.removeItem('rememberMe');
        }

        localStorage.setItem('isLoggedIn', 'true');
        closePopup();
        // Additional login logic here (e.g., form submission, API call)
    });

    // Handle "Forgot Password" link click
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Forgot Password functionality is not implemented yet.');
    });

    // Check if "Remember Me" is set
    const rememberedUser = localStorage.getItem('rememberMe');
    if (rememberedUser) {
        loginForm.querySelector('input[type="text"]').value = rememberedUser;
        rememberMeCheckbox.checked = true;
    }
});




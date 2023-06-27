
/* فانكشن تأكيد الدخول او تطليع رسالة غلطة */

const loginButton = document.querySelector(".submit");
loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  errorMessage.textContent = "";
  validateForm();
});

console.log("Login");

function validateForm() {
  let errorMessage = document.getElementById("errorMessage");
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log(username);
  console.log(password);


  let allowedCredentials = [
    { username: "Ahmed Khaled", password: "123" },
    { username: "Gamica", password: "123" },
    { username: "kirolos", password: "123" },
    { username: "Dr Ahmed Hesham", password: "123" },
  ];

  function showErrorMessage() {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let popUp = document.createElement("div");
    popUp.classList.add("pop-up");

    let title = document.createElement("div");
    title.classList.add("pop-up-title");
    title.textContent = "Incorrect Password";
    popUp.appendChild(title);

    let message = document.createElement("div");
    message.classList.add("pop-up-message");
    message.textContent = "Incorrect password. Please try again.";
    popUp.appendChild(message);

    let closeButton = document.createElement("button");
    closeButton.classList.add("pop-up-button");
    closeButton.textContent = "OK";
    closeButton.addEventListener("click", function () {
      overlay.classList.remove("blur");
      overlay.remove();
    });
    popUp.appendChild(closeButton);

    overlay.appendChild(popUp);
    document.body.appendChild(overlay);

    // Apply blur effect after a slight delay
    setTimeout(function () {
      overlay.classList.add("blur");
    }, 10);
  }

  let isCredentialValid = false;

  for (let i = 0; i < allowedCredentials.length; i++) {
    let credential = allowedCredentials[i];
    if (username === credential.username && password === credential.password) {
      isCredentialValid = true;
      break;
    }
  }

  if (isCredentialValid) {
    window.location.href = "welcome.html";
    return true;
  } else {
    showErrorMessage();
    return false;
  }
}

/* فانكشن اخفاء او اظهار الباسورد*/

$(document).ready(function() {
  $("#togglePassword").click(function() {
    var passwordInput = $("#password");
    var type = passwordInput.attr("type") === "password" ? "text" : "password";
    passwordInput.attr("type", type);
    $(this).toggleClass("active");
    
    if (type === "password") {
      $(this).removeClass("fa-eye-slash");
      $(this).addClass("fa-eye");
    } else {
      $(this).removeClass("fa-eye");
      $(this).addClass("fa-eye-slash");
    }
  });
});




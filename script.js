
const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Hello! My project is working successfully.";
    message.style.color = "green";
});

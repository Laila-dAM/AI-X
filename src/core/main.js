const playBtn = document.getElementById("play-btn");
const aboutBtn = document.getElementById("about-btn");
const loginBtn = document.getElementById("login-btn");

const aboutPanel = document.getElementById("about-panel");
const loginPanel = document.getElementById("login-panel");

const submitLogin = document.getElementById("submit-login");
const closeLogin = document.getElementById("close-login");

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginStatus = document.getElementById("login-status");

aboutBtn.addEventListener("click", () => {
aboutPanel.classList.toggle("hidden");
loginPanel.classList.add("hidden");
});

loginBtn.addEventListener("click", () => {
loginPanel.classList.toggle("hidden");
aboutPanel.classList.add("hidden");
});

closeLogin.addEventListener("click", () => {
loginPanel.classList.add("hidden");
loginStatus.textContent = "";
});

submitLogin.addEventListener("click", () => {
const email = emailInput.value.trim();
const password = passwordInput.value.trim();

if (!email || !password) {
loginStatus.textContent = "Enter email and password.";
return;
}

let users = JSON.parse(localStorage.getItem("aix_users")) || {};

if (!users[email]) {
users[email] = { password: password, progress: {} };
localStorage.setItem("aix_users", JSON.stringify(users));
localStorage.setItem("aix_current_user", email);
loginStatus.textContent = "Account created and logged in.";
} else {
if (users[email].password === password) {
localStorage.setItem("aix_current_user", email);
loginStatus.textContent = "Login successful.";
} else {
loginStatus.textContent = "Incorrect password.";
}
}
});

playBtn.addEventListener("click", () => {
document.getElementById("menu-ui").classList.add("hidden");
startGame();
});

function startGame() {
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#2aff87";
ctx.font = "28px Arial";
ctx.fillText("Game Engine Initialized", 50, 100);

const user = localStorage.getItem("aix_current_user");
if (user) {
ctx.fillText("Logged as: " + user, 50, 150);
} else {
ctx.fillText("Playing as Guest", 50, 150);
}
}

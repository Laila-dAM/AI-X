import { AccountSystem } from "../systems/accountSystem.js";

const accountSystem = new AccountSystem();

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

const result = accountSystem.registerOrLogin(email, password);

if (result.status === "created") {
loginStatus.textContent = "Account created successfully.";
}

if (result.status === "logged") {
loginStatus.textContent = "Login successful.";
}

if (result.status === "error") {
loginStatus.textContent = "Incorrect password.";
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
ctx.fillText("AI-X Engine Running", 50, 100);

if (accountSystem.isLoggedIn()) {
const email = accountSystem.getCurrentUserEmail();
ctx.fillText("User: " + email, 50, 150);
accountSystem.saveProgress({ scene: "forest_intro" });
} else {
ctx.fillText("User: Guest", 50, 150);
}
}

export class AccountSystem {
constructor() {
this.usersKey = "aix_users";
this.sessionKey = "aix_current_user";
}

getUsers() {
return JSON.parse(localStorage.getItem(this.usersKey)) || {};
}

saveUsers(users) {
localStorage.setItem(this.usersKey, JSON.stringify(users));
}

registerOrLogin(email, password) {
const users = this.getUsers();

if (!users[email]) {
users[email] = {
email: email,
password: password,
progress: {
scene: "menu",
quizzes: {},
lessons: {},
lastSave: Date.now()
}
};
this.saveUsers(users);
localStorage.setItem(this.sessionKey, email);
return { status: "created", user: users[email] };
}

if (users[email].password === password) {
localStorage.setItem(this.sessionKey, email);
return { status: "logged", user: users[email] };
}

return { status: "error" };
}

logout() {
localStorage.removeItem(this.sessionKey);
}

getCurrentUserEmail() {
return localStorage.getItem(this.sessionKey);
}

isLoggedIn() {
return this.getCurrentUserEmail() !== null;
}

getCurrentUser() {
const email = this.getCurrentUserEmail();
if (!email) return null;
const users = this.getUsers();
return users[email] || null;
}

saveProgress(data) {
const email = this.getCurrentUserEmail();
if (!email) return;

const users = this.getUsers();
if (!users[email]) return;

users[email].progress = {
...users[email].progress,
...data,
lastSave: Date.now()
};

this.saveUsers(users);
}

getProgress() {
const user = this.getCurrentUser();
if (!user) return null;
return user.progress;
}
}

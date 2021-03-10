class User {
    constructor(id, name, username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email
    }

    renderUser() {
        let usersDiv = document.getElementById("users-container")

        usersDiv.innerHTML += 
        `
        <ul>
        <h3>Username: ${this.username}</h3>
        <li>Name: ${this.name} - Email: ${this.email}</li>
        </ul>
        `
    }
}
document.addEventListener('DOMContentLoaded', () => {
    createForm();
    fetchUsers()
})

    const BASE_URL = "http://localhost:3000"

    //read - fetch users index

    function fetchUsers() {
        fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users) {
                let u = new User(user.id, user.name, user.username, user.email)
                u.renderUser();
            }
        })
    }

    //create - create a new user

    function createForm() {
        let usersForm = document.getElementById("users-form")

        usersForm.innerHTML +=
        `
        <form>
        Name: <input type="text" id="name"><br>
        Username: <input type="text" id="username"><br>
        Email: <input type="text" id="username"><br>
        <input type="submit" value="Create User">
        `
    }

    //delete - delete a user

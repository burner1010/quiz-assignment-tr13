import { LocalStorageDB } from "./db.js";
import {User} from "./model.js"

const register = () => {
    const registerForm = document.querySelector("#register-form")
    registerForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const data = new FormData(registerForm);

        const id = LocalStorageDB.getCollection("users").length + 1
        const username = data.get("username")
        const email = data.get("email")
        const password = data.get("password")

        const newUser = new User(id, username, email, password)
        console.log(newUser)

        // TODO: does not handle case if user already exists or has similar username

        LocalStorageDB.addItem("users", newUser)
        window.location.replace("/pages/login.html")
    })
}

const login = () => {
    const loginForm = document.querySelector("#login-form")
    loginForm?.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(loginForm);
        const email = data.get("email");
        const password = data.get("password");

        const users = LocalStorageDB.getCollection("users");
        const filtered = users.filter((u) => {
            return (u.email == email && u.password == password)
        })

        if(!filtered) {
            alert("Invalid email or password")
            throw new Error("Invalid email or password")
        }

        LocalStorageDB.setData("currentUser", filtered[0])
        window.location.replace("/pages/dashboard.html")

    })

} 

const logout = () => {
    const logoutButton = doucment.querySelector("#logout-btn") 
    logoutButton?.addEventListener("click", (e) => {
        e.preventDefault();
        LocalStorageDB.removeData("currentUser");
    })
}


const main = () => {
    register()
    login()
    logout()
}

export {main}
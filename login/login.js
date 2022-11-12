import { signInFirebase } from "../config/firebase.js"

window.login = async function(){
    const email = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value

    try{
        await signInFirebase(email,password)
        window.location.href = '../home.html'
    }catch(e){
        alert('Incorrect email or password')
    }
}
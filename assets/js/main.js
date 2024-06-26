const registerBtn = document.querySelector(".register-btn")
const signupBtn = document.querySelector(".singup-btn")
const layoutRegister = document.querySelector(".register-layout")
const registerForm = document.querySelector(".register-forms")
const usernameInput = document.querySelector("#username")
const registeredSuccess = document.getElementById("registeredSuccess")
const registeredFailed = document.getElementById("registeredFailed")

signupBtn.addEventListener("click", () => {
    layoutRegister.classList.toggle("flex");
    registerForm.classList.toggle("flex")
})

registerBtn.addEventListener("click", () => {
    layoutRegister.classList.toggle("flex");
    registerForm.classList.toggle("flex")
})

layoutRegister.addEventListener("click", () => {
    layoutRegister.classList.toggle("flex")
    registerForm.classList.toggle("flex")
})

document.querySelector(".exit").addEventListener("click", () => {
    layoutRegister.classList.toggle("flex")
    registerForm.classList.toggle("flex")
})


document.querySelector(".signup-action").addEventListener("click", () => {
    registeredCheck()
})

function registerSucess(){
    layoutRegister.classList.toggle("flex")
    registerForm.classList.toggle("flex")
}

const resetInput = () => {
    usernameInput.value = "";
        document.getElementById("password").value = "";
        document.getElementById("reenter-password").value = "";
        document.getElementById("ssn").value = "";
        document.getElementById("phone-num").value  = "";
}

function registeredCheck() {

    if(usernameInput.value.length >= 8 && document.getElementById("password").value.length >=8 && document.getElementById("password").value == document.getElementById("reenter-password").value && document.getElementById("ssn").value.length >= 9 && document.getElementById("phone-num").value.length == 10 ) {
        console.log("Accepted");
        document.querySelector(".signup-action").classList.add("disabled")
        registeredSuccess.classList.add("flex")
        registeredFailed.classList.remove("flex")
        setTimeout(resetInput, 20000)
    } else {
        console.log("Rejected");
        registeredFailed.classList.add("flex")

    }



}

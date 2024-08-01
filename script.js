let correct;
let special = false;
let i = 0;
let email;
let error = document.querySelector(".error");
let input = document.querySelector(".input-email");

let success = document.querySelector(".success")
let container = document.querySelector(".container")
let button = document.querySelector(".button");
button.addEventListener("click", () => {
    console.log("click");
    email = document.querySelector(".input-email").value;
    correct = true;
    special=false;
    let at = 0;
    let dot = 0;
    for (i = 0; i < email.length; i++) {
        let a = email.charCodeAt(i)
        if ((a >= 48 && a <= 57) || (a >= 64 && a <= 90) || (a >= 97 && a <= 122) || (a == 46)) {

        }
        else {
            special = true;
        }
        if (a == 64) {
            at++;
        }
        if (a == 46) {
            dot++;
        }
    }
    if (at == 1 && dot == 1 && special == 0) {
        correct = true;
    }
    else {
        correct = false;
    }
    if (correct) {
        success.classList.remove("hide");
        container.classList.add("hide");
        error.classList.add("hide");
        input.style.color = " black";
        input.style.background = "white"
        input.style.border = "black"
        console.log("open");
        success.children[2].innerText = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`
    }
    else {
        console.log("close");
        console.log("dasdsad");
        error.classList.remove("hide");
        input.style.color = " red";
        input.style.background = "rgba(225, 112, 112,0.5)"
        input.style.border = "red"
    }

})
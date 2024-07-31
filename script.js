let correct;
let i = 0;
let email;
let success= document.querySelector(".success")
let container= document.querySelector(".container")
let button = document.querySelector(".button");
button.addEventListener("click", () => {
    email = document.querySelector(".input-email").value;
 correct = true;
    let at = 0;
    for (i = 0; i < email.length; i++) {
        let a = email.charAt(i)
        if (typeof a === 'symbol') {
            if (a !="@" || a!=".") {
                console.log("Sdsdcmsldmcl");
                correct = false;
            }
        }
        if (a == "@") {
            at++;
        }
        if (at != 1) {
            correct = false;
        }
        console.log(a);
    }
    if(correct){
        console.log("open");
    }
    else{
        console.log("closed");
        
    }
success.children[2].innerText= `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`
 success.classList.remove("hide");
 container.classList.add("hide");

})
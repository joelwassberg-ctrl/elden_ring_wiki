const skicka = document.getElementById("button");
const mailInput = document.getElementById("mail");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

function isMail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isEmpty(input) {
    if (input.value.trim() === "") {
        return true;
    } else {
        return false;
    }
}

skicka.addEventListener("click", function(){
    let email = mailInput.value;
    if (isMail(email)) {
        if (isEmpty(subjectInput) || isEmpty(messageInput)) {
            alert("Fyll i alla information i fälten.");
            return;
        }
        alert("Ditt mejl har skickats! Vi svarar så snart vi kan.")
    } else{
        alert(email + " är inte ett giltigt e-postadress. Försök igen.");
    }
} )


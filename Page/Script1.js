let sendButton = document.getElementsByName("sendButton")[0];
let allBoxes = document.querySelectorAll('[name="name"], [name="email"], [name="feedback"]')
let name = allBoxes[0];
let email = allBoxes[1];
let feedback = allBoxes[2];
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");


let checkBoxes = function () {

    sendButton.removeAttribute("disabled")

    for (let i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].value.length == 0) {
            sendButton.disabled = true
        }
    }
};

let isEveryWordStartCapital = function (name) {
    for (let i = 0; i < name.length; i++) {
        if (name[i] == " " && name[i + 1] != name[i + 1].toUpperCase() || name[0] != name[0].toUpperCase()) {
            return false;
        }
    }
    return true;
}

let checkName = function () {

    let messages = "";
    if (name.value.trim().length == 0 || name.value.length > 30) {
        messages += "Name too short or too long (max 30 characters). "
    }
    if (!isEveryWordStartCapital(name.value)) {
        messages += "Every word must start with a capital letter. "
    }
    if (!/^[a-z/\s/]+$/i.test(name.value)) {
        messages += "Name field can contain only letters and spaces. "
    }

    nameError.textContent = messages;
    nameError.style.color = "red";
}

let checkEmail = function () {

    let messages = "";
    if (email.value.trim().length == 0) {
        messages += "Email field can not be empty. "
    }

    emailError.textContent = messages;
    emailError.style.color = "red";
}

let sendForm = function () {

    if (emailError.textContent.length == 0 && nameError.textContent.length == 0) {
        alert("Form filled properly and sent! Thank you for your feedback!");
        location.reload();
    }
}

document.addEventListener('keyup', checkBoxes);
sendButton.addEventListener('click', checkName);
sendButton.addEventListener('click', checkEmail);
sendButton.addEventListener('click', sendForm);





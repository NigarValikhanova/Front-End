var checkAccept = document.getElementById("checkAccept");
var btnRegister = document.getElementById("btnRegister");
var email = document.getElementById("email");
var Remail = document.getElementById("Remail");
var pass = document.getElementById("pass");
var Rpass = document.getElementById("Rpass");
var Fname = document.getElementById("Fname");
var phone = document.getElementById("phone");
var city = document.getElementById("city");
var country = document.getElementById("country");




checkAccept.addEventListener("change", function () {
    if (checkAccept.checked == true) {
        btnRegister.attributes.removeNamedItem("disabled")
    }
    else {
        btnRegister.attributes.setAttributes("disabled", true)
    }
})

btnRegister.addEventListener("click", function () {
    ValidateEmail(email, Remail);
    ValidatePassword(pass, Rpass);
    CheckNull(Fname);
    CheckNull(phone);
    CheckNull(city);
    CheckNull(country);
    CheckGender();
})

function CheckNull(input) {
    if (input.value.trim() == "") {
        input.style.borderColor = "red";
        input.nextElementSibling.innerHTML = "Boshdur, doldur"
        return false;
    }
    else {
        input.style.borderColor = "green";
        input.nextElementSibling.innerHTML = ""
        return false;
    }
}


function CheckSameValue(item1, item2) {
    if (item1.value != "" && item2.value != "") {
        if (item1.value == item2.value) {
            item1.style.borderColor = "green";
            item2.style.borderColor = "green";
            item1.nextElementSibling.innerHTML = ""
            item2.nextElementSibling.innerHTML = ""
        }
        else {
            item1.style.borderColor = "red";
            item2.style.borderColor = "red";
            item1.nextElementSibling.innerHTML = "Beraber deyil"
            item2.nextElementSibling.innerHTML = "Berbaer deyil"
        }
    }
    else {
        item1.style.borderColor = "red";
        item2.style.borderColor = "red";
        item1.nextElementSibling.innerHTML = "Boshdur"
        item2.nextElementSibling.innerHTML = "Boshdur"
    }
}

function ValidateEmail(input1, input2) {
    var emailInput1 = input1.value.trim();
    var emailInput2 = input2.value.trim();
    var gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;


    if (input1.value != "" && input2.value != "") {
        if (emailInput1 == emailInput2) {
            input1.style.borderColor = "green";
            input2.style.borderColor = "green";
            input1.nextElementSibling.innerHTML = ""
            input2.nextElementSibling.innerHTML = ""
            if (gmailRegex.test(emailInput1)) {
                input1.style.borderColor = "green";

            } else {
                input1.style.borderColor = "red";
                input1.nextElementSibling.innerHTML = "Invalid Gmail address. Please enter a valid Gmail address";
            }
        }
        else {
            input1.style.borderColor = "red";
            input2.style.borderColor = "red";
            input1.nextElementSibling.innerHTML = "Beraber deyil"
            input2.nextElementSibling.innerHTML = "Berbaer deyil"
        }
    }
    else {
        input1.style.borderColor = "red";
        input2.style.borderColor = "red";
        input1.nextElementSibling.innerHTML = "Boshdur"
        input2.nextElementSibling.innerHTML = "Boshdur"
    }


}

function ValidatePassword(input1, input2) {
    var passInput1 = input1.value.trim();
    var passInput2 = input2.value.trim();
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

    if (input1.value != "" && input2.value != "") {
        if (passInput1 == passInput2) {
            input1.style.borderColor = "green";
            input2.style.borderColor = "green";
            input1.nextElementSibling.innerHTML = ""
            input2.nextElementSibling.innerHTML = ""
            if (passwordRegex.test(passInput1)) {
                input1.style.borderColor = "green";

            } else {
                input1.style.borderColor = "red";
                input1.nextElementSibling.innerHTML = "Invalid Password. Please enter a valid password (at least one uppercase letter, one lowercase letter, one number, one symbol, and the password lenght should be at least 8 characters)";
            }
        }
        else {
            input1.style.borderColor = "red";
            input2.style.borderColor = "red";
            input1.nextElementSibling.innerHTML = "Beraber deyil"
            input2.nextElementSibling.innerHTML = "Berbaer deyil"
        }
    }
    else {
        input1.style.borderColor = "red";
        input2.style.borderColor = "red";
        input1.nextElementSibling.innerHTML = "Boshdur"
        input2.nextElementSibling.innerHTML = "Boshdur"
    }
}
function CheckGender() {
    var radio1 = document.getElementById("male");
    var radio2 = document.getElementById("female");

    if (radio1.checked == true) {

    }
    else if (radio2.checked == true) {

    }
    else {
        document.querySelector("text-danger-radio").innerHTML = "Boshdur";
    }
}


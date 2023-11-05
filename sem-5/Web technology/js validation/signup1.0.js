var incorrectFields = [];

var validation = [/^[A-Za-z]+$/, /^\d{10}$/, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&._])[A-Za-z\d@$!%*?&.-_]+$/];

function validateField(fieldId, validationIndex, errorMsgId, fieldName) {
    var field = document.getElementById(fieldId);
    field.style.border = "1px solid black";

    function validateValue(value) {
        return validation[validationIndex].test(value);
    }

    var errorMsg = document.getElementById(errorMsgId);
    errorMsg.innerHTML = "";

    if (field.value.trim() === "") {
        errorMsg.innerHTML = "* " + fieldName + " is required";
        field.style.border = "1px solid red";
        if (!incorrectFields.includes(fieldName)) {
            incorrectFields.push(fieldName);
        }
    } else {
        if (validateValue(field.value)) {
            errorMsg.innerHTML = "";
            if (incorrectFields.includes(fieldName)) {
                incorrectFields.splice(incorrectFields.indexOf(fieldName), 1);
            }
        } else {
            errorMsg.innerHTML = "* Enter valid " + fieldName.toLowerCase();
            field.style.border = "1px solid red";
            if (!incorrectFields.includes(fieldName)) {
                incorrectFields.push(fieldName);
            }
        }
    }
}

// Add event listeners for field validation
document.getElementById("name").addEventListener("blur", function () {
    validateField("name", 0, "n", "Name");
});

document.getElementById("mobile").addEventListener("blur", function () {
    validateField("mobile", 1, "m", "Mobile");
});

document.getElementById("email").addEventListener("blur", function () {
    validateField("email", 2, "e", "Email");
});

document.getElementById("password").addEventListener("blur", function () {
    validateField("password", 3, "p", "Password");
});

document.getElementById("confirm_password").addEventListener("blur", function () {
    validateCpassword();
});

document.getElementById("dob").addEventListener("blur", function () {
    validateDob();
});

var genderElements = document.getElementsByName("gender");
for (var i = 0; i < genderElements.length; i++) {
    genderElements[i].addEventListener("change", validateGender);
}

function validateCpassword() {
    var cpassword = document.getElementById("confirm_password");
    cpassword.style.border = "1px solid black";

    if (cpassword.value.trim() === "") {
        document.getElementById("cp").innerHTML = "* Confirm password is required";
        cpassword.style.border = "1px solid red";
        if (!incorrectFields.includes("ConfirmPassword")) {
            incorrectFields.push("ConfirmPassword");
        }
    } else {
        if (cpassword.value === document.getElementById("password").value) {
            document.getElementById("cp").innerHTML = "";
            if (incorrectFields.includes("ConfirmPassword")) {
                incorrectFields.splice(incorrectFields.indexOf("ConfirmPassword"), 1);
            }
        } else {
            document.getElementById("cp").innerHTML = "* Passwords do not match";
            cpassword.style.border = "1px solid red";
            if (!incorrectFields.includes("ConfirmPassword")) {
                incorrectFields.push("ConfirmPassword");
            }
        }
    }
}

function validateDob() {
    document.getElementById("dob").style.borderColor = "black";

    var dob = new Date(document.getElementById("dob").value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();

    if (document.getElementById("dob").value.trim() === "") {
        document.getElementById("bd").innerHTML = "* Date of Birth is required";
        document.getElementById("dob").style.borderColor = "red";
        if (!incorrectFields.includes("DateOfBirth")) {
            incorrectFields.push("DateOfBirth");
        }
    } else {
        if (age >= 18 && age < 100) {
            document.getElementById("bd").innerHTML = "";
            if (incorrectFields.includes("DateOfBirth")) {
                incorrectFields.splice(incorrectFields.indexOf("DateOfBirth"), 1);
            }
        } else {
            document.getElementById("bd").innerHTML = "Sorry, you are not eligible to access this page.";
            document.getElementById("dob").style.borderColor = "red";
            if (!incorrectFields.includes("DateOfBirth")) {
                incorrectFields.push("DateOfBirth");
            }
        }
    }
}

function validateGender() {
    var genderError = document.getElementById("g");
    var selectedGender = false;

    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            selectedGender = true;
            break;
        }
    }

    if (!selectedGender) {
        genderError.innerHTML = "* Please select a gender.";
        document.getElementById("gender").style.border = "1px solid red";
        if (!incorrectFields.includes("Gender")) {
            incorrectFields.push("Gender");
        }
    } else {
        genderError.innerHTML = "";
        document.getElementById("gender").style.border = "1px solid white";
        if (incorrectFields.includes("Gender")) {
            incorrectFields.splice(incorrectFields.indexOf("Gender"), 1);
        }
    }
}

// Function to validate all fields


// Add an event listener for the "Register" button's click event
var registerButton = document.getElementById("submit");
registerButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the form from submitting by default
    validateAllFields();
});
// Add an event listener for the "Register" button's mouseover event
var registerButton = document.getElementById("submit");
registerButton.addEventListener("mouseover", function () {
    
    // Check if there are no incorrect fields, and then align the button to the right

        validateField("name", 0, "n", "Name");
        validateField("mobile", 1, "m", "Mobile");
        validateField("email", 2, "e", "Email");
        validateField("password", 3, "p", "Password");
        validateCpassword();
        validateDob();
        validateGender();
    
        if (incorrectFields.length > 0) {
            registerButton.style.marginLeft = "auto";
        } else {
            document.forms[0].submit(); // Submit the form if all fields are valid
        }
    
});

// if (incorrectFields.length === 0) {
//     registerButton.style.marginLeft = "auto";
// }



// Add an event listener for the "Register" button's mouseout event
registerButton.addEventListener("mouseout", function () {
    // Reset the alignment of the button
    registerButton.style.marginLeft = "";
});





// var incorrectFields = [];

// var validation = [/^[A-Za-z]+$/,/^\d{10}$/, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&._])[A-Za-z\d@$!%*?&.-_]+$/];

// // Function to validate the Name field
// function validateName() {
//     var name = document.getElementById("name");
//     name.style.border = "1px solid black";

//     if (name.value.trim() === "") {
//         document.getElementById("n").innerHTML = "* Name is required";
//         name.style.border = "1px solid red";
//         if (!incorrectFields.includes("Name")) {
//             incorrectFields.push("Name");
//         }
//     } else {
//         if (name.value.match(validation[0])) {
//             document.getElementById("n").innerHTML = "";
//             if (incorrectFields.includes("Name")) {
//                 incorrectFields.splice(incorrectFields.indexOf("Name"), 1);
//             }
//         } else {
//             document.getElementById("n").innerHTML = "* Enter valid name";
//             name.style.border = "1px solid red";
//             if (!incorrectFields.includes("Name")) {
//                 incorrectFields.push("Name");
//             }
//         }
//     }
// }
// // Add an event listener for the "Name" field
// var nameField = document.getElementById("name");
// nameField.addEventListener("blur", validateName);


// var mobileField = document.getElementById("mobile");
// mobileField.addEventListener("blur", validateMobile);

// function validateMobile(){

//     var mobile = document.getElementById("mobile");
//     mobile.style.border = "1px solid black";
//     function validateMobileNumber(mobile) {
//         // Regular expression for a common mobile number format (10 digits)
//         return validation[1].test(mobile);
//     }

//     const mobileError = document.getElementById("m");
//     mobileError.innerHTML = "";
//     if (mobile.value.length === 0) {
//         mobileError.innerHTML = "* Mobile is required";
//         mobile.style.border = "1px solid red";
//         if (!incorrectFields.includes("Mobile")) {
//             incorrectFields.push("Mobile");
//         }
//     } else {
//         if (!validateMobileNumber(mobile.value)) {
//             mobile.style.border = "1px solid red";
//             mobileError.innerHTML = "* Enter a valid mobile number";
//             if (!incorrectFields.includes("Mobile")) {
//                 incorrectFields.push("Mobile");
//             }
//         }else{
//             mobileError.innerHTML = "";
//             if (incorrectFields.includes("Mobile")) {
//                 incorrectFields.splice(incorrectFields.indexOf("Mobile"), 1);
//             }
//         }
//     }
// }



// var emailField = document.getElementById("email");
// emailField.addEventListener("blur",validateEmail);

// function validateEmail(){

//     var email = document.getElementById("email");
//     email.style.border = "1px solid black";

//     function validateEmailId(email) {

//         return validation[2].test(email);
//     }

//     if (email.value.length == '0') {
//         document.getElementById("e").innerHTML = "* Email is required";
//         email.style.border = "1px solid red";
//         if (!incorrectFields.includes("Email")) {
//             incorrectFields.push("Email");
//         }
//     else {
//         if (validateEmailId(email.value)) {
//             document.getElementById("e").innerHTML = "";
//             if (incorrectFields.includes("Email")) {
//                 incorrectFields.splice(incorrectFields.indexOf("Email"), 1);
//             }
//         } else {
//             document.getElementById("e").innerHTML = "* Enter valid email ";
//             email.style.border = "1px solid red";
//             if (!incorrectFields.includes("Email")) {
//                 incorrectFields.push("Email");
//             }
//         }
//     }
// }



// var passwordField = document.getElementById("password");
// passwordField.addEventListener("blur", validatePassword)

// function validatePassword(){

//     var password = document.getElementById("password");
//     password.style.border = "1px solid black";

//     function checkpassword(password) {
//         return validation[3].test(password);
//     }

//     if (password.value.length == '0') {
//         document.getElementById("p").innerHTML = "* Password is required";
//         password.style.border = "1px solid red";
//         if (!incorrectFields.includes("Password")) {
//             incorrectFields.push("Password");
//         }
        
//     }
//     else if (password.value.length < 8) {
//         document.getElementById("p").innerHTML = "* Enter minimum 8 characters";
//         password.style.border = "1px solid red";
//         if (!incorrectFields.includes("Password")) {
//             incorrectFields.push("Password");
//         }
//     }
//     else {
//         if (checkpassword(password.value)) {
//             document.getElementById("p").innerHTML = "";
//             if (incorrectFields.includes("Password")) {
//                 incorrectFields.splice(incorrectFields.indexOf("Password"), 1);
//             }

//         } else {
//             document.getElementById("p").innerHTML = "* Enter valid Password";
//             password.style.border = "1px solid red";
//             if (!incorrectFields.includes("Password")) {
//                 incorrectFields.push("Password");
//             }
//         }
//     }
// }


// var cpasswordField = document.getElementById("confirm_password");
// cpasswordField.addEventListener("blur", validateCpassword);

// function validateCpassword (){

//     var cpassword = document.getElementById("confirm_password");
//     cpassword.style.border = "1px solid black";


//     if (cpassword.value.length == '0') {
//         document.getElementById("cp").innerHTML = "* Confirm password is required";
//         cpassword.style.border = "1px solid red";
//         if (!incorrectFields.includes("ConfirmPassword")) {
//             incorrectFields.push("ConfirmPassword");
//         }
//     } else {
//         if (cpassword.value == password.value) {
//             document.getElementById("cp").innerHTML = "";
//             if (incorrectFields.includes("ConfirmPassword")) {
//                 incorrectFields.splice(incorrectFields.indexOf("ConfirmPassword"), 1);
//             }
//         } else {
//             document.getElementById("cp").innerHTML = "* Password not match";
//             cpassword.style.border = "1px solid red";
//             if (!incorrectFields.includes("ConfirmPassword")) {
//                 incorrectFields.push("ConfirmPassword");
//             }
//         }

//     }
// }

// // Add an event listener for the "Date of Birth" field
// var dobField = document.getElementById("dob");
// dobField.addEventListener("blur", validateDob);

// function validateDob() {
//     document.getElementById("dob").style.borderColor = "black";

//     var dob = new Date(document.getElementById("dob").value);
//     var today = new Date();
//     var age = today.getFullYear() - dob.getFullYear();

//     // Check if the user's age is within the allowed range
//     if (document.getElementById("dob").value.length === 0) {
//         document.getElementById("bd").innerHTML = "* Date of Birth is required";
//         document.getElementById("dob").style.borderColor = "red";
//         if (!incorrectFields.includes("DateOfBirth")) {
//             incorrectFields.push("DateOfBirth");
//         }
//     } else {
//         if (age >= 18 && age < 100) {
//             document.getElementById("bd").innerHTML = "";
//             if (incorrectFields.includes("DateOfBirth")) {
//                 incorrectFields.splice(incorrectFields.indexOf("DateOfBirth"), 1);
//             }
//         } else {
//             document.getElementById("bd").innerHTML = "Sorry, you are not eligible to access this page.";
//             document.getElementById("dob").style.borderColor = "red";
//             if (!incorrectFields.includes("DateOfBirth")) {
//                 incorrectFields.push("DateOfBirth");
//             }
//         }
//     }
// }

// // Add an event listener for the "Gender" radio buttons
// var genderElements = document.getElementsByName("gender");
// for (var i = 0; i < genderElements.length; i++) {
//     genderElements[i].addEventListener("change", validateGender);
// }

// function validateGender() {
//     var genderError = document.getElementById("g");
//     var selectedGender = false;

//     for (var i = 0; i < genderElements.length; i++) {
//         if (genderElements[i].checked) {
//             selectedGender = true;
//             break; // Exit the loop if a gender is selected
//         }
//     }

//     if (!selectedGender) {
//         genderError.innerHTML = "* Please select a gender.";
//         document.getElementById("gender").style.border = "1px solid red";
//         if (!incorrectFields.includes("Gender")) {
//             incorrectFields.push("Gender");
//         }
//     } else {
//         genderError.innerHTML = "";
//         if (incorrectFields.includes("Gender")) {
//             incorrectFields.splice(incorrectFields.indexOf("Gender"), 1);
//         }
//     }
// }


// // var dobField = document.getElementById("dob");
// // dobField.addEventListener("blur",validateDob);


// // function validateDob (){

// //     document.getElementById("dob").style.borderColor = "black";

// //     var dob = new Date(document.getElementById("dob").value);
// //     var today = new Date();
// //     var age = today.getFullYear() - dob.getFullYear();

// //     // Check if the user's age is within the allowed range
// //     if (document.getElementById("dob").value.length == '0') {
// //         document.getElementById("bd").innerHTML = "* field is blank";
// //         document.getElementById("dob").style.borderColor = "red";
// //         incorrect_Fiels.push("DOB");
// //     } else {
// //         if (age >= 18 && age < 100) {
// //             document.getElementById("bd").innerHTML = "";
// //         } else {
// //             document.getElementById("bd").innerHTML = "Sorry, you are not eligible to access this page.";
// //             document.getElementById("dob").style.borderColor = "red";
// //             incorrect_Fiels.push("DOB");
// //         }
// //     }

// // }
// // var genderField =  

// // function validateGender(){

// //     var genderElements = document.getElementsByName("gender");
// //     var genderError = document.getElementById("g");
// //     var selectedGender = false;

// //     for (var i = 0; i < genderElements.length; i++) {
// //         if (genderElements[i].checked) {
// //             selectedGender = true;
// //             break; // Exit the loop if a gender is selected
// //         }
// //     }

// //     if (!selectedGender) {
// //         genderError.innerHTML = "* Please select a gender.";
// //         document.getElementById("gender").style.border = "1px solid red";
// //         incorrectFields.push("gender");
// //     } else {
// //         genderError.innerHTML = "";
// //     }

// // }
// // ... (your existing code for individual validation functions)

// // Function to validate all fields
// // ... (your existing code for individual validation functions)

// // Function to validate all fields
// // ... (your existing code for individual validation functions)

// // Function to validate all fields
// function validateAllFields() {
//     alert(incorrectFields);
//     validateName();
//     validateMobile();
//     validateEmail();
//     validatePassword();
//     validateCpassword();
//     validateDob();
//     validateGender();

//     // Check if there are validation errors
//     if (incorrectFields.length > 0) {
//         // Align the "Register" button to the right
//         document.getElementById("submit").style.marginLeft = "auto";
//     } else {
//         // Reset the alignment of the "Register" button
//         document.getElementById("submit").style.marginLeft = "";
//         incorrectFields = [];
//     }
// }

// // Function to reset the alignment of the "Register" button
// function resetButtonAlignment() {
//     document.getElementById("submit").style.marginLeft = "";
// }

// // Add an event listener for the "Register" button's mouseover event
// var registerButton = document.getElementById("submit");
// registerButton.addEventListener("mouseover", validateAllFields);

// // Add an event listener for the "Register" button's mouseout event
// registerButton.addEventListener("mouseout", resetButtonAlignment);


// // function showAlert() {
// //     if (incorrectFields.length > 0) {
// //         alert("Please correct the following fields:\n" + incorrectFields.join("\n"));
// //     }
// // }
var firstname = document.getElementById("first-name");
var lastname = document.getElementById("last-name")
var error = document.getElementById("error");
var form = document.getElementById("form");
var password = document.getElementById("password");
var email = document.getElementById("email");

var password2 = document.getElementById("password2");



form.addEventListener('submit', (e) => {
    if (email.value == '') {
        error.innerHTML = "Email Field can't be empty";
    } else {
        if (password.value == '' || password2.value == '') {
            error.innerHTML = "Password field can't empty."
        } else if (password.value !== password2.value) {
            error.innerHTML = "Password doesn't match";
        } else {
            if (firstname.value === '') {
                error.innerText = "First Name Field Cant be Empty";
            } else {
                if (lastname.value === '') {
                    error.style.color = "red"
                    error.innerText = "Last Name Field Cant be Empty";
                } else
                    opener.location = 'https://www.plus2net.com/html_tutorial/button-linking.php'
            }
        }
    }


    // if (password.value !== password2.value) {

    //     error.innerHTML = "Password doesn't match";

    // }


    e.preventDefault();

})

function redirect() {
    let url = opener.location = 'C:\Users\HP\Documents\Project\Werae\Phase2\views\landingpage.html';

}
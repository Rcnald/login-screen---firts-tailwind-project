let loginPasswordInput = document.getElementById('login-password');
let showPasswordButton = document.getElementById('show-password');

showPasswordButton.addEventListener('click',function(){
    if (loginPasswordInput.type === "password") {
        loginPasswordInput.type = "text";
    } else {
        loginPasswordInput.type = "password";
    }

    showPasswordButton.classList.toggle("fa-eye")
    showPasswordButton.classList.toggle("px-[1px]")
});

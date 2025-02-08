document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة

        let valid = true;

        // التحقق من الاسم الأول
        const firstName = document.getElementById("firstName");
        const firstNameError = document.getElementById("firstNameError");
        if (firstName.value.trim() === "") {
            firstNameError.classList.remove("d-none");
            valid = false;
        } else {
            firstNameError.classList.add("d-none");
        }

        // التحقق من الاسم الثاني
        const secondName = document.getElementById("secondName");
        const secondNameError = document.getElementById("secondNameError");
        if (secondName.value.trim() === "") {
            secondNameError.classList.remove("d-none");
            valid = false;
        } else {
            secondNameError.classList.add("d-none");
        }

        // التحقق من البريد الإلكتروني
        const email = document.getElementById("emailAddress");
        const emailError = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            emailError.classList.remove("d-none");
            valid = false;
        } else {
            emailError.classList.add("d-none");
        }

        // التحقق من كلمة المرور
        const password = document.getElementById("inputPassword");
        const passwordError = document.getElementById("passwordError");
        if (password.value.trim().length < 8) {
            passwordError.classList.remove("d-none");
            valid = false;
        } else {
            passwordError.classList.add("d-none");
        }

        // إذا كانت البيانات صحيحة
        if (valid) {
            alert("Form submitted successfully!");
        }
    });


});

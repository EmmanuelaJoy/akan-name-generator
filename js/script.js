window.addEventListener("DOMContentLoaded", function () {
    console.log("Content Loaded");

    let submitBtn = document.querySelector("#submitBtn");
    let akanForm = document.querySelector("#akanForm");
    let akanTBody = document.querySelector("#akanTBody");

    akanForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted")

        let birthdateInput = document.querySelector("#date");

    })
})
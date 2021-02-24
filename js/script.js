window.addEventListener("DOMContentLoaded", function () {
    console.log("Content Loaded");

    let akanForm = document.querySelector("#akanForm");
    //let submitbtn = document.querySelector("#submitBtn");

    akanForm.addEventListener("submit", function (event) {
        event.preventDefault();
        //console.log("Form submitted")

        let birthdateInput = document.querySelector("#birthdate").value;
        const gender = document.querySelector("#gender").value;

        let dayBorn = new Date(birthdateInput);
        dob = dayBorn.getDay();

        if (dob == [0]) {
            alert("You were born on a Sunday.");
        }

        else if (dob == [1]) {
            alert("You were born on a Monday.");
        }

        else if (dob == [2]) {
            alert("You were born on a Tuesday.");
        }

        else if (dob == [3]) {
            alert("You were born on a Wednesday.");
        }

        else if (dob == [4]) {
            alert("You were born on a Thursday.");
        }

        else if (dob == [5]) {
            alert("You were born on a Friday.");

        }

        else if (dob == [6]) {
            alert("You were born on a Saturday.");
        }

        let akanNames = new Array();
        let akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

        if (gender == "male") {
            akanNames.push(akanMaleName[dob]);
            showAkanName();
        } else if (gender == "female") {
            akanNames.push(akanFemaleName[dob]);
            showAkanName();
        } else {
            alert("Select your gender in order to get your Akan name.");
        }

        function showAkanName() {
            akanNames.forEach(function (name) {
                alert("Your Akan name is: " + name);

            });
        }

        document.getElementById("akanForm").reset()
    });
});
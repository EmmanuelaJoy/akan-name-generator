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

        let nameList = new Array();
        let akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

        if (gender == "male") {
            nameList.push(akanMaleName[dob]);
            showAkanName();
        } else if (gender == "female") {
            nameList.push(akanFemaleName[dob]);
            showAkanName();
        } else {
            alert("Kindly select your gender first");
        }

        function showAkanName() {
            nameList.forEach(function (name) {
                alert("Your Akan name is:" + name);

            });
        }


    });
});
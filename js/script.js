window.addEventListener("DOMContentLoaded", function () {
    console.log("Content Loaded");

    let submitBtn = document.querySelector("#submitBtn");
    let akanForm = document.querySelector("#akanForm");
    let akanTBody = document.querySelector("#akanTBody");

    akanForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted")

        let birthdateInput = document.querySelector("#date").value;
        const gender = document.querySelector("#gender").value;

        let dayBorn = newDate(birthdateInput);
        dayBorn.getDay() = dob

        let akanNameRow = document.createElement("tr");
        akanNamesData = document.createElement("td");
        akanTbody.appendChild(nameRow);

        let akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

        if (gender == "Male") {
            nameList.push(akanMaleName[dob]);
            showAkanName();
        } else if (gender == "Female") {
            nameList.push(akanFemaleName[dob]);
            showAkanName();
        } else {
            alert("Kindly select your gender first");
        }

        function showAkanName() {
            nameList.forEach(function (name) {
                namesData.textContent = name;
                nameRow.appendChild(akanNamesData);
                nameTbody.appendChild(akanNameRow);
            });
        }
    });
});
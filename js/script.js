window.addEventListener("DOMContentLoaded", function () {
    console.log("Content Loaded");

    var day = document.querySelector("form select[name=day]");
    var month = document.querySelector("form select[name=month]");
    var year = document.querySelector("form input[name=year]").getFullYear();
    var gender = document.getElementById("gender").value;

})
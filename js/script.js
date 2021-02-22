var day = document.querySelector("form select[name=day]");
var month = document.querySelector("form select[name=month]");
var year = document.querySelector("form input[name=year]");
var gender = document.getElementById("gender").value;

month.addEventListener("input", updateDay);
year.addEventListener("input", updateDay);

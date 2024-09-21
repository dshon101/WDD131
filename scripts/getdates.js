// The current year.
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")

// use the date object
const today = new Date();

let year = today.getFullYear();
currentYear.innerHTML = year;

lastModified.innerHTML = "Last Modified: " + document.lastModified;
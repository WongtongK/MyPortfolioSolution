// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function () {
    let aboutSection = document.getElementById("about");
    let button = document.querySelector(".btn-dark-pink");

    button.addEventListener("click", function (e) {
        e.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

function toggleSection(id) {
    var section = document.getElementById(id);
    if (section.classList.contains("show")) {
        section.classList.remove("show");
        setTimeout(() => (section.style.display = "none"), 500);
    } else {
        section.style.display = "block";
        setTimeout(() => section.classList.add("show"), 10);
    }
}


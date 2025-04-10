document.addEventListener("DOMContentLoaded", function () {

    const icons = document.querySelectorAll(".social-media a");



    icons.forEach(icon => {

        icon.addEventListener("mouseover", () => {

            icon.style.transform = "rotate(10deg) scale(1.2)";

        });



        icon.addEventListener("mouseout", () => {

            icon.style.transform = "scale(1)";

        });

    });

});
document.addEventListener("DOMContentLoaded", function () {
    let currentStep = 0;
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const progressSteps = document.querySelectorAll(".step");

    function updateFormSteps() {
        formSteps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep);
        });

        progressSteps.forEach((step, index) => {
            step.classList.toggle("active", index <= currentStep);
        });
    }

    nextBtns.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentStep < formSteps.length - 1) {
                currentStep++;
                updateFormSteps();
            }
        });
    });

    prevBtns.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                updateFormSteps();
            }
        });
    });

    document.getElementById("regForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Registration Successful!");
    });

    updateFormSteps();
});
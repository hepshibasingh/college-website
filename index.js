// Scroll to Features Section
function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

// Hover Effect for Feature Boxes (optional fallback for JS-enabled only)
document.querySelectorAll(".feature-box").forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
    });

    box.addEventListener("mouseout", () => {
        box.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    });
});

// Sidebar Toggle for Desktop
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-50%" : "0px";
}

// Redirect Buttons
function openSearch() {
    window.location.href = "search.html"; 
}

function openAccount() {
    window.location.href = "register.html"; 
}

// Mobile Menu Slide Toggle
function openMenu() {
    document.getElementById("menu-bar").style.left = "0"; 
}

function closeMenu() {
    document.getElementById("menu-bar").style.left = "-250px"; 
}

// Toggle class on body for open/close menu styling
function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

// Exam Item Toggle (active on click)
document.addEventListener("DOMContentLoaded", function () {
    const examItems = document.querySelectorAll(".exam-item");
    examItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

    // College Card Selection
    const collegeCards = document.querySelectorAll('.college-card');
    collegeCards.forEach(card => {
        card.addEventListener('click', () => {
            collegeCards.forEach(c => c.classList.remove('clicked'));
            card.classList.add('clicked');
        });
    });
});
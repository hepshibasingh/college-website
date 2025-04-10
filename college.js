let collegePage = 0;
const collegesPerPage = 4; // Number of colleges shown per page
const colleges = [
    { name: "IIT Delhi", location: "New Delhi", ranking: "#2", fees: "₹2.5L/year", courses: "B.Tech, M.Tech, PhD" },
    { name: "IIT Bombay", location: "Mumbai", ranking: "#3", fees: "₹2.3L/year", courses: "B.Tech, MBA, PhD" },
    { name: "NIT Trichy", location: "Tamil Nadu", ranking: "#8", fees: "₹1.8L/year", courses: "B.Tech, M.Tech, MCA" },
    { name: "BITS Pilani", location: "Rajasthan", ranking: "#6", fees: "₹4L/year", courses: "B.Tech, M.Sc, MBA" },
    { name: "Delhi University", location: "New Delhi", ranking: "#10", fees: "₹50K/year", courses: "B.A, B.Sc, B.Com" },
    { name: "Anna University", location: "Tamil Nadu", ranking: "#12", fees: "₹75K/year", courses: "B.Tech, M.Tech, PhD" },
    { name: "IIM Ahmedabad", location: "Gujarat", ranking: "#1", fees: "₹24L/course", courses: "MBA, Executive MBA" },
    { name: "AIIMS Delhi", location: "New Delhi", ranking: "#1 (Medical)", fees: "₹1.5K/year", courses: "MBBS, MD, B.Sc Nursing" }
];

function showColleges() {
    let collegeContainer = document.getElementById("colleges-grid");
    collegeContainer.innerHTML = ""; // Clear previous content

    let start = collegePage * collegesPerPage;
    let end = start + collegesPerPage;
    let displayedColleges = colleges.slice(start, end);

    displayedColleges.forEach(college => {
        let collegeBox = document.createElement("div");
        collegeBox.className = "college-box";
        collegeBox.innerHTML = `<h3>${college.name}</h3>
                                <p><strong>Location:</strong> ${college.location}</p>
                                <p><strong>Ranking:</strong> ${college.ranking}</p>
                                <p><strong>Fees:</strong> ${college.fees}</p>
                                <p><strong>Courses:</strong> ${college.courses}</p>`;
        collegeContainer.appendChild(collegeBox);
    });

    updateCollegeButtons();
}

function nextCollegePage() {
    if ((collegePage + 1) * collegesPerPage < colleges.length) {
        collegePage++;
        showColleges();
    }
}

function prevCollegePage() {
    if (collegePage > 0) {
        collegePage--;
        showColleges();
    }
}

function updateCollegeButtons() {
    document.getElementById("prev-college-btn").disabled = collegePage === 0;
    document.getElementById("next-college-btn").disabled = (collegePage + 1) * collegesPerPage >= colleges.length;
}

// Load first page of colleges
document.addEventListener("DOMContentLoaded", showColleges);
document.addEventListener("DOMContentLoaded", function () {
    console.log("College page loaded");

    // Smooth scrolling for branch links
    document.querySelectorAll(".branch-box").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
document.getElementById("backToHome").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
  });
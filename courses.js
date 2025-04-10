let coursePage = 0;
const coursesPerPage = 4;

const courses = [
  { name: "B.Tech", duration: "4 years", fees: "₹2-4L/year", branches: "CSE, ECE, ME, CE", info: "Bachelor of Technology in engineering fields" },
  { name: "MBA", duration: "2 years", fees: "₹5-25L total", branches: "Finance, Marketing, HR", info: "Master of Business Administration" },
  { name: "B.Com", duration: "3 years", fees: "₹20K-2L/year", branches: "General, Hons, Accounts", info: "Bachelor of Commerce" },
  { name: "M.Tech", duration: "2 years", fees: "₹1-2L/year", branches: "CSE, ECE, ME", info: "Master of Technology for engineering grads" },
  { name: "BBA", duration: "3 years", fees: "₹50K-3L/year", branches: "General, Finance", info: "Bachelor of Business Administration" },
  { name: "MBBS", duration: "5.5 years", fees: "₹5-20L/year", branches: "General Medicine", info: "Bachelor of Medicine and Surgery" },
  { name: "BA", duration: "3 years", fees: "₹10K-1L/year", branches: "English, Political Science", info: "Bachelor of Arts" },
  { name: "B.Sc", duration: "3 years", fees: "₹15K-2L/year", branches: "Physics, Chemistry, Math", info: "Bachelor of Science" }
];

function showCourses() {
  let courseContainer = document.getElementById("courses-grid");
  courseContainer.innerHTML = "";

  let start = coursePage * coursesPerPage;
  let end = start + coursesPerPage;
  let displayed = courses.slice(start, end);

  displayed.forEach(course => {
    let div = document.createElement("div");
    div.className = "course-box";
    div.setAttribute("data-info", course.info);
    div.onclick = function () { speakText(this); };
    div.innerHTML = `
      <h3>${course.name}</h3>
      <p><strong>Duration:</strong> ${course.duration}</p>
      <p><strong>Branches:</strong> ${course.branches}</p>
      <p><strong>Fees:</strong> ${course.fees}</p>
    `;
    courseContainer.appendChild(div);
  });

  updateCourseButtons();
}

function nextCoursePage() {
  if ((coursePage + 1) * coursesPerPage < courses.length) {
    coursePage++;
    showCourses();
  }
}

function prevCoursePage() {
  if (coursePage > 0) {
    coursePage--;
    showCourses();
  }
}

function updateCourseButtons() {
  document.getElementById("prev-course-btn").disabled = coursePage === 0;
  document.getElementById("next-course-btn").disabled = (coursePage + 1) * coursesPerPage >= courses.length;
}

function speakText(element) {
  let text = element.getAttribute("data-info");
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1;
  speechSynthesis.speak(speech);
}

document.addEventListener("DOMContentLoaded", showCourses);
document.getElementById("backToHome").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});
document.addEventListener("DOMContentLoaded", function () {
    const exams = [
        { name: "NEET (UG)", info: "National Eligibility cum Entrance Test for MBBS, BDS, and other medical courses.", link: "https://neet.nta.nic.in/" },
        { name: "AIIMS MBBS", info: "Admission to AIIMS medical colleges (Now merged with NEET).", link: "https://www.aiimsexams.ac.in/" },
        { name: "JIPMER MBBS", info: "Admission to JIPMER Medical Institute (Now merged with NEET).", link: "https://www.jipmer.edu.in/" },
        { name: "PGIMER", info: "Postgraduate medical entrance exam for PG courses.", link: "https://pgimer.edu.in/" },
    ];

    const examListContainer = document.getElementById("exam-list");

    exams.forEach(exam => {
        const examBox = document.createElement("div");
        examBox.classList.add("exam-box");
        examBox.innerHTML = `
            <h3>${exam.name}</h3>
            <p>${exam.info}</p>
            <a href="${exam.link}" target="_blank">More Details</a>
        `;
        examListContainer.appendChild(examBox);
    });
});
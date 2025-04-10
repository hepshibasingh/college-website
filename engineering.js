document.addEventListener("DOMContentLoaded", function() {
    const exams = [
        { name: "JEE Main", info: "For NITs, IIITs & Govt. Colleges", link: "https://jeemain.nta.ac.in/" },
        { name: "JEE Advanced", info: "For Admission to IITs", link: "https://jeeadv.ac.in/" },
        { name: "BITSAT", info: "For BITS Pilani, Goa, Hyderabad", link: "https://bitsadmission.com/" },
        { name: "VITEEE", info: "For VIT University Admission", link: "https://viteee.vit.ac.in/" },
        { name: "MHT CET", info: "For Maharashtra Colleges", link: "https://cetcell.mahacet.org/" },
        { name: "WBJEE", info: "For West Bengal Engineering Colleges", link: "https://wbjeeb.nic.in/" },
        { name: "KCET", info: "For Karnataka Colleges", link: "https://kea.kar.nic.in/" },
    ];

    const examListContainer = document.getElementById("exam-list");

    exams.forEach(exam => {
        const examBox = document.createElement("div");
        examBox.classList.add("exam-box");
        examBox.innerHTML = `
            <h3>${exam.name}</h3>
            <p>${exam.info}</p>
            <a href="${exam.link}" target="_blank">Official Website</a>
        `;
        examListContainer.appendChild(examBox);
    });
});
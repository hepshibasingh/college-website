// Array of engineering colleges
const engineeringColleges = [
    {
      name: "IIT Delhi",
      location: "New Delhi",
      website: "https://home.iitd.ac.in/",
      ranking: "#2 in India",
      fees: "₹2.5 Lakh per year",
      courses: ["B.Tech", "M.Tech", "PhD"]
    },
    {
      name: "IIT Bombay",
      location: "Mumbai",
      website: "https://www.iitb.ac.in/",
      ranking: "#3 in India",
      fees: "₹2.3 Lakh per year",
      courses: ["B.Tech", "M.Tech", "PhD"]
    },
    {
      name: "IIT Madras",
      location: "Chennai",
      website: "https://www.iitm.ac.in/",
      ranking: "#1 in India",
      fees: "₹2.4 Lakh per year",
      courses: ["B.Tech", "M.Tech", "PhD"]
    },
    {
      name: "BITS Pilani",
      location: "Pilani, Rajasthan",
      website: "https://www.bits-pilani.ac.in/",
      ranking: "#6 in India",
      fees: "₹2.2 Lakh per year",
      courses: ["B.E.", "M.E.", "PhD"]
    },
    {
      name: "NIT Trichy",
      location: "Tiruchirappalli, Tamil Nadu",
      website: "https://www.nitt.edu/",
      ranking: "#8 in India",
      fees: "₹1.9 Lakh per year",
      courses: ["B.Tech", "M.Tech", "PhD"]
    },
    {
      name: "VIT Vellore",
      location: "Vellore, Tamil Nadu",
      website: "https://vit.ac.in/",
      ranking: "#12 in India",
      fees: "₹1.7 Lakh per year",
      courses: ["B.Tech", "M.Tech", "PhD"]
    }
  ];
  
  // Get the container
  const container = document.getElementById("collegesContainer");
  
  // Create and append each college box
  engineeringColleges.forEach(college => {
    const box = document.createElement("a");
    box.className = "college-box";
    box.href = college.website;
    box.target = "_blank"; // Opens in new tab
  
    box.innerHTML = `
      <h3>${college.name}</h3>
      <p><strong>Location:</strong> ${college.location}</p>
      <p><strong>Ranking:</strong> ${college.ranking}</p>
      <p><strong>Fees:</strong> ${college.fees}</p>
      <p><strong>Courses:</strong> ${college.courses.join(", ")}</p>
    `;
  
    container.appendChild(box);
  });
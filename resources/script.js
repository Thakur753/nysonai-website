// --- RESOURCES SECTION LOGIC ---
const resourceGrid = document.getElementById('resource-container');

if (resourceGrid) {
    const resources = [
        { 
            title: "Polytechnic CS Syllabus", 
            icon: "fas fa-scroll", 
            desc: "Complete 2026 semester syllabus PDF."
        },
        { 
            title: "Python Masterclass", 
            icon: "fab fa-python", 
            desc: "E-Book for Python from Basic to Pro."
        },
        { 
            title: "Last 5 Years Papers", 
            icon: "fas fa-file-alt", 
            desc: "Solved papers for RGPV/Polytechnic exams."
        },
        { 
            title: "Web Dev Cheatsheet", 
            icon: "fas fa-code", 
            desc: "HTML, CSS & JS quick reference guide."
        },
         { 
            title: "SQL Database Notes", 
            icon: "fas fa-database", 
            desc: "Handwritten notes for Exam preparation."
        }
    ];

    resourceGrid.innerHTML = resources.map(res => `
        <div class="res-card">
            <div class="res-icon"><i class="${res.icon}"></i></div>
            <h3>${res.title}</h3>
            <p>${res.desc}</p>
            <a href="#" class="btn-download" onclick="alert('Downloading ${res.title}...')">
                Download <i class="fas fa-arrow-down"></i>
            </a>
        </div>
    `).join('');
}
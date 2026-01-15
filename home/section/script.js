document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NAVIGATION TAB LOGIC ---
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all
            menuItems.forEach(i => i.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked
            item.classList.add('active');
            const sectionId = item.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // --- 2. POPULATE NOTES TABLE ---
    const notesData = [
        { id: 1, title: "Python Fundamentals", desc: "Core concepts, variables, and data types." },
        { id: 2, title: "HTML5 Structure", desc: "Semantic tags and modern web architecture." },
        { id: 3, title: "Advanced CSS3", desc: "Flexbox, Grid, and Keyframe Animations." },
        { id: 4, title: "JavaScript ES6", desc: "Arrow functions, Promises, and DOM." },
        { id: 5, title: "MySQL Database", desc: "Relational mapping and complex joins." }
    ];
    const tableBody = document.getElementById('notes-table-body');
    if (tableBody) {
        tableBody.innerHTML = notesData.map(note => `
            <tr>
                <td>${note.id}</td>
                <td style="font-weight: 600; color: #3b82f6;">${note.title}</td>
                <td style="color: #8b949e;">${note.desc}</td>
                <td><button class="btn-click" onclick="alert('Opening: ${note.title}')">Click</button></td>
            </tr>
        `).join('');
    }

    // --- 3. POPULATE PRACTICE SECTION ---
    const practiceGrid = document.getElementById('practice-container');
    if (practiceGrid) {
        const problems = [
            { title: "Sum of Two Numbers", desc: "Write a program to add two integers.", level: "Easy", class: "easy" },
            { title: "Palindrome Check", desc: "Check if a string is palindrome or not.", level: "Medium", class: "medium" },
            { title: "Binary Search", desc: "Implement binary search algorithm.", level: "Hard", class: "hard" },
            { title: "Fibonacci Series", desc: "Print first N numbers of series.", level: "Easy", class: "easy" }
        ];
        practiceGrid.innerHTML = problems.map(prob => `
            <div class="practice-card">
                <div class="practice-info">
                    <h3>${prob.title}</h3>
                    <p style="color: #888; font-size: 13px; margin: 5px 0;">${prob.desc}</p>
                    <span class="difficulty ${prob.class}">${prob.level}</span>
                </div>
                <a href="#" class="btn-solve" onclick="alert('Starting Challenge: ${prob.title}')">Solve</a>
            </div>
        `).join('');
    }

    // --- 4. POPULATE RESOURCES SECTION ---
    const resourceGrid = document.getElementById('resource-container');
    if (resourceGrid) {
        const resources = [
            { title: "Polytechnic CS Syllabus", icon: "fas fa-scroll", desc: "Complete 2026 semester syllabus PDF." },
            { title: "Python Masterclass", icon: "fab fa-python", desc: "E-Book for Python from Basic to Pro." },
            { title: "Last 5 Years Papers", icon: "fas fa-file-alt", desc: "Solved papers for RGPV/Polytechnic exams." },
            { title: "Web Dev Cheatsheet", icon: "fas fa-code", desc: "HTML, CSS & JS quick reference guide." },
            { title: "SQL Database Notes", icon: "fas fa-database", desc: "Handwritten notes for Exam preparation." }
        ];
        // Correction: Class names now match style.css (resource-card, download-btn)
        resourceGrid.innerHTML = resources.map(res => `
            <div class="resource-card">
                <div class="res-icon"><i class="${res.icon}"></i></div>
                <h3 style="color:white; font-size: 16px; margin-bottom: 5px;">${res.title}</h3>
                <p style="color:#888; font-size: 13px; margin-bottom: 15px;">${res.desc}</p>
                <a href="#" class="download-btn" onclick="alert('Downloading ${res.title}...')">
                    Download <i class="fas fa-arrow-down"></i>
                </a>
            </div>
        `).join('');
    }

    // Initialize Video UI
    refreshUI();
});

// --- VIDEO LOGIC (Outside DOMContentLoaded) ---
let myProgress = JSON.parse(localStorage.getItem('nys_study_progress')) || [];

function changeVid(el, id, title) {
    const iframe = document.getElementById('vidIframe');
    const titleEl = document.getElementById('vidTitle');

    if(iframe) iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    if(titleEl) titleEl.innerText = title;

    document.querySelectorAll('.topic-card-box').forEach(c => c.classList.remove('active'));
    el.classList.add('active');

    const pid = el.getAttribute('data-id');
    if (!myProgress.includes(pid)) {
        myProgress.push(pid);
        localStorage.setItem('nys_study_progress', JSON.stringify(myProgress));
    }
    refreshUI();
}

function refreshUI() {
    const cards = document.querySelectorAll('.topic-card-box');
    cards.forEach(c => {
        if (myProgress.includes(c.getAttribute('data-id'))) {
            c.classList.add('done');
            const label = c.querySelector('.status-label-text');
            if (label) label.innerHTML = '<i class="fas fa-check"></i> Finished';
        }
    });
    const p = cards.length > 0 ? Math.round((myProgress.length / cards.length) * 100) : 0;
    const bar = document.getElementById('p-bar');
    const text = document.getElementById('p-text');
    if (bar) bar.style.width = p + "%";
    if (text) text.innerText = p + "%";
}
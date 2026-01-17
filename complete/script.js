document.addEventListener('DOMContentLoaded', () => {
    animateProgress();
    initNavigation();
    loadNotes();
    loadResources();
    loadPractice();
    loadVideos();
    checkAutoTheme();
});

/* --- 1. NOTES SECTION --- */
function loadNotes() {
    const notesData = [
        // Yahan 'file' property me apni PDF ka link ya path daalo
        { id: 1, topic: "Python Fundamentals", desc: "Variables, Loops", file: "files/python-notes.pdf" },
        { id: 2, topic: "HTML5 Mastery", desc: "Tags, Forms, SEO", file: "https://www.w3schools.com/html/" },
        { id: 3, topic: "CSS3 Flexbox", desc: "Layouts", file: "#" }, // '#' mtlb khali link
        { id: 4, topic: "JavaScript ES6+", desc: "Promises, Async", file: "#" },
        { id: 5, topic: "React JS", desc: "Components, Hooks", file: "#" },
        { id: 6, topic: "Node.js", desc: "API Development", file: "#" },
        { id: 7, topic: "SQL Database", desc: "Queries & Joins", file: "#" },
        { id: 8, topic: "DSA Basics", desc: "Arrays, Stack", file: "#" }
    ];
    
    const table = document.getElementById('notes-table-body');
    if (table) {
        // Yahan humne <button> ko <a> tag bana diya hai taaki link open ho sake
        table.innerHTML = notesData.map(n => `
            <tr>
                <td>${n.id}</td>
                <td style="font-weight:600; color:#3b82f6;">${n.topic}</td>
                <td style="color:var(--text-dim);">${n.desc}</td>
                <td>
                    <a href="${n.file}" target="_blank" class="btn-click" style="text-decoration:none; display:inline-block;">View</a>
                </td>
            </tr>
        `).join('');
    }
}

/* --- 2. RESOURCES SECTION --- */
function loadResources() {
    const resData = [
        // Yahan 'link' property me URL daalo
        { icon: "fas fa-file-pdf", title: "CS Syllabus 2026", type: "PDF", link: "files/syllabus.pdf" },
        { icon: "fas fa-code", title: "JS Cheatsheet", type: "Image", link: "https://example.com/js-cheat.png" },
        { icon: "fas fa-database", title: "SQL Commands", type: "PDF", link: "#" },
        { icon: "fab fa-react", title: "React Roadmap", type: "Link", link: "https://react.dev" },
        { icon: "fas fa-laptop-code", title: "Interview Q&A", type: "PDF", link: "#" },
        { icon: "fas fa-book", title: "Clean Code Book", type: "E-Book", link: "#" }
    ];

    const grid = document.getElementById('resource-container');
    if (grid) {
        grid.innerHTML = resData.map(r => `
            <div class="resource-card" onclick="window.open('${r.link}', '_blank')">
                <div class="res-icon"><i class="${r.icon}"></i></div>
                <h3>${r.title}</h3>
                <p style="color:var(--text-dim); font-size:12px; margin-bottom:10px;">Type: ${r.type}</p>
                <a href="${r.link}" target="_blank" class="download-btn">Download</a>
            </div>
        `).join('');
    }
}

/* --- 3. PRACTICE SECTION --- */
function loadPractice() {
    const pracData = [
        // Yahan 'url' property me coding problem ka link daalo (e.g. LeetCode/HackerRank)
        { title: "Sum of Array", level: "Easy", color: "#2ecc71", url: "https://leetcode.com/problems/two-sum/" },
        { title: "Reverse String", level: "Easy", color: "#2ecc71", url: "https://leetcode.com/problems/reverse-string/" },
        { title: "Binary Search", level: "Medium", color: "#f1c40f", url: "#" },
        { title: "Find Duplicate", level: "Medium", color: "#f1c40f", url: "#" },
        { title: "Linked List Cycle", level: "Medium", color: "#f1c40f", url: "#" },
        { title: "Merge Sort", level: "Hard", color: "#e74c3c", url: "#" },
        { title: "Graph BFS/DFS", level: "Hard", color: "#e74c3c", url: "#" },
        { title: "Dynamic Prog.", level: "Hard", color: "#e74c3c", url: "#" }
    ];

    const grid = document.getElementById('practice-container');
    if (grid) {
        grid.innerHTML = pracData.map(p => `
            <div class="practice-card">
                <div style="width:100%">
                    <h3>${p.title}</h3>
                    <span style="font-size:12px; font-weight:bold; color:${p.color}; border:1px solid ${p.color}; padding:2px 6px; border-radius:4px;">${p.level}</span>
                </div>
                <a href="${p.url}" target="_blank" class="btn-click" style="background:transparent; border:1px solid #3b82f6; color:#3b82f6; width:100%; margin-top:10px; text-align:center; text-decoration:none; display:inline-block;">Solve</a>
            </div>
        `).join('');
    }
}

/* --- 4. VIDEOS SECTION (No Change Required) --- */
function loadVideos() {
    const vidData = [
        { id: "u_v9fA0bF8I", title: "Web Dev Basics" },
        { id: "W6NZfCO5SIk", title: "HTML Structure" },
        { id: "1PnVor36_40", title: "CSS Flexbox" },
        { id: "dQw4w9WgXcQ", title: "JS Logic Building" },
        { id: "TNhaWiYaCc4", title: "React Hooks" },
        { id: "9emXNzqCKyg", title: "Backend Intro" }
    ];

    const grid = document.getElementById('video-list-container');
    if (grid) {
        grid.innerHTML = vidData.map((v, index) => `
            <div class="topic-card-box ${index === 0 ? 'active' : ''}" onclick="changeVid(this, '${v.id}')">
                <div style="font-size:20px; color:#3b82f6; margin-bottom:10px;"><i class="fas fa-play-circle"></i></div>
                <h4>${v.title}</h4>
            </div>
        `).join('');
    }
}

/* --- FUNCTIONALITY --- */
function initNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    const sidebar = document.getElementById('sidebar');

    function activateSection(id) {
        if (window.innerWidth < 992) {
            sidebar.classList.remove('active');
        }
        sections.forEach(s => s.classList.remove('active'));
        menuItems.forEach(i => i.classList.remove('active'));

        const targetSec = document.getElementById(id);
        if (targetSec) targetSec.classList.add('active');

        const sidebarLink = document.querySelector(`.menu-item[data-section="${id}"]`);
        if (sidebarLink) sidebarLink.classList.add('active');
    }

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            activateSection(sectionId);
        });
    });

    window.openSection = activateSection;
    window.toggleSidebar = () => sidebar.classList.toggle('active');
}

function animateProgress() {
    const progressBar = document.querySelector(".circular-progress");
    const valueContainer = document.querySelector(".value-container");
    if (!progressBar || !valueContainer) return;

    let progressValue = 0;
    let progressEndValue = 68;
    let speed = 20;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(#ffffff ${progressValue * 3.6}deg, rgba(255, 255, 255, 0.1) ${progressValue * 3.6}deg)`;
        if (progressValue == progressEndValue) clearInterval(progress);
    }, speed);
}

function changeVid(el, id) {
    const iframe = document.getElementById('vidIframe');
    if (iframe) iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    document.querySelectorAll('.topic-card-box').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

/* --- AUTO THEME --- */
function checkAutoTheme() {
    const hour = new Date().getHours();
    const body = document.body;
    // 6 AM to 6 PM -> Light Mode
    if (hour >= 6 && hour < 18) {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
}
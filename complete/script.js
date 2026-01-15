document.addEventListener('DOMContentLoaded', () => {
    animateProgress();
    initNavigation();
    loadNotes();
    loadResources();
    loadPractice();
    loadVideos();
});

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

function loadNotes() {
    const notesData = [
        { id: 1, topic: "Python Fundamentals", desc: "Variables, Loops, Functions" },
        { id: 2, topic: "HTML5 Mastery", desc: "Semantic Tags, Forms, SEO" },
        { id: 3, topic: "CSS3 Flexbox & Grid", desc: "Modern Layout Techniques" },
        { id: 4, topic: "JavaScript ES6+", desc: "Arrow Fn, Promises, Async/Await" },
        { id: 5, topic: "React JS Basics", desc: "Components, Props, State" },
        { id: 6, topic: "Node.js & Express", desc: "Backend API Development" },
        { id: 7, topic: "SQL & Databases", desc: "MySQL Queries & Joins" },
        { id: 8, topic: "Data Structures (DSA)", desc: "Arrays, Linked Lists, Stack" }
    ];
    const table = document.getElementById('notes-table-body');
    if (table) {
        table.innerHTML = notesData.map(n => `
            <tr><td>${n.id}</td><td style="font-weight:600; color:#3b82f6;">${n.topic}</td><td style="color:#aaa;">${n.desc}</td><td><button class="btn-click">View</button></td></tr>
        `).join('');
    }
}

function loadResources() {
    const resData = [
        { icon: "fas fa-file-pdf", title: "CS Syllabus 2026", type: "PDF" },
        { icon: "fas fa-code", title: "JS Cheatsheet", type: "Image" },
        { icon: "fas fa-database", title: "SQL Commands", type: "PDF" },
        { icon: "fab fa-react", title: "React Roadmap", type: "Link" },
        { icon: "fas fa-laptop-code", title: "Interview Q&A", type: "PDF" },
        { icon: "fas fa-book", title: "Clean Code Book", type: "E-Book" }
    ];
    const grid = document.getElementById('resource-container');
    if (grid) {
        grid.innerHTML = resData.map(r => `
            <div class="resource-card"><div class="res-icon"><i class="${r.icon}"></i></div><h3>${r.title}</h3><p style="color:#666; font-size:12px; margin-bottom:10px;">Type: ${r.type}</p><a href="#" class="download-btn">Download</a></div>
        `).join('');
    }
}

function loadPractice() {
    const pracData = [
        { title: "Sum of Array", level: "Easy", color: "#2ecc71" },
        { title: "Reverse String", level: "Easy", color: "#2ecc71" },
        { title: "Binary Search", level: "Medium", color: "#f1c40f" },
        { title: "Find Duplicate", level: "Medium", color: "#f1c40f" },
        { title: "Linked List Cycle", level: "Medium", color: "#f1c40f" },
        { title: "Merge Sort", level: "Hard", color: "#e74c3c" },
        { title: "Graph BFS/DFS", level: "Hard", color: "#e74c3c" },
        { title: "Dynamic Prog.", level: "Hard", color: "#e74c3c" }
    ];
    const grid = document.getElementById('practice-container');
    if (grid) {
        grid.innerHTML = pracData.map(p => `
            <div class="practice-card">
                <div style="width:100%">
                    <h3>${p.title}</h3>
                    <span style="font-size:12px; font-weight:bold; color:${p.color}; border:1px solid ${p.color}; padding:2px 6px; border-radius:4px;">${p.level}</span>
                </div>
                <button class="btn-click" style="background:transparent; border:1px solid #3b82f6; color:#3b82f6; width:100%; margin-top:10px;">Solve</button>
            </div>
        `).join('');
    }
}

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

function changeVid(el, id) {
    const iframe = document.getElementById('vidIframe');
    if (iframe) iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    document.querySelectorAll('.topic-card-box').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}
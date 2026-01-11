document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Logic
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menuItems.forEach(i => i.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            item.classList.add('active');
            const target = document.getElementById(item.dataset.section);
            if (target) target.classList.add('active');
        });
    });

    // 2. Initialize Video Progress
    refreshUI();
});

// Video Logic
let myProgress = JSON.parse(localStorage.getItem('nys_study_progress')) || [];

function changeVid(el, id, title) {
    document.getElementById('vidIframe').src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    document.getElementById('vidTitle').innerText = title;

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
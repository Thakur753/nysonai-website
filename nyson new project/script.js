document.addEventListener('DOMContentLoaded', () => {
  animateProgress();
  initNavigation();
  checkAutoTheme();
  fetchAchievementsData();
  initScrollSpy();
});

/* Smooth scroll */
function scrollToSection(id) {
  const target = document.getElementById(id);
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');
  
  if (!target) return;

  const navHeight = 70;
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

  window.scrollTo({ top, behavior: 'smooth' });

  if (window.innerWidth < 992 && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
    mainContent.classList.remove('shrink');
  }
}

/* Sidebar toggle */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');
  
  sidebar.classList.toggle('active');
  mainContent.classList.toggle('shrink');
}

/* Nav click listener */
function initNavigation() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = item.getAttribute('data-section');
      scrollToSection(sectionId);
    });
  });
}

/* SCROLL SPY */
function initScrollSpy() {
  const sections = document.querySelectorAll('.section');
  const menuItems = document.querySelectorAll('.menu-item');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    menuItems.forEach(li => {
      li.classList.remove('active');
      if (li.getAttribute('data-section') === current) {
        li.classList.add('active');
      }
    });
  });
}

/* Video Change */
function changeVid(el, id) {
  const iframe = document.getElementById('vidIframe');
  if (iframe) {
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  }
  document.querySelectorAll('.topic-card-box').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

/* Progress Bar */
function animateProgress() {
  const progressBar = document.querySelector('.circular-progress');
  const valueContainer = document.querySelector('.value-container');
  
  if (!progressBar || !valueContainer) return;

  let progressValue = 0;
  const progressEndValue = 68;
  const speed = 25;

  const progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `
      conic-gradient(
        #00e0ff ${progressValue * 3.6}deg,
        rgba(255, 255, 255, 0.1) ${progressValue * 3.6}deg
      )
    `;
    if (progressValue >= progressEndValue) clearInterval(progress);
  }, speed);
}

/* Theme Check */
function checkAutoTheme() {
  const hour = new Date().getHours();
  const body = document.body;
  if (hour >= 6 && hour < 18) {
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
  }
}

/* Data Fetch */
function fetchAchievementsData() {
  const mockDatabaseResponse = {
    totalStudents: 1250,
    avgScore: 88,
    totalBatches: 450,
    badges: [
      { name: "Code Master", icon: "fa-fire", type: "gold" },
      { name: "Logic King", icon: "fa-bullseye", type: "blue" },
      { name: "100% Quiz", icon: "fa-check-circle", type: "green" },
      { name: "Early Bird", icon: "fa-dove", type: "blue" },
      { name: "Fast Learner", icon: "fa-bolt", type: "gold" }
    ]
  };

  setTimeout(() => { 
    document.getElementById('totalStudentsValue').textContent = mockDatabaseResponse.totalStudents.toLocaleString() + "+";
    document.getElementById('avgScoreValue').textContent = mockDatabaseResponse.avgScore + "%";
    document.getElementById('batchesEarnedValue').textContent = mockDatabaseResponse.totalBatches;

    const badgesListContainer = document.getElementById('badgesList');
    badgesListContainer.innerHTML = ''; 

    mockDatabaseResponse.badges.forEach(badge => {
      const badgeHTML = `
        <div class="badge badge-${badge.type}">
          <i class="fas ${badge.icon}"></i>
          <span>${badge.name}</span>
        </div>
      `;
      badgesListContainer.insertAdjacentHTML('beforeend', badgeHTML);
    });
    
  }, 1000); 
}
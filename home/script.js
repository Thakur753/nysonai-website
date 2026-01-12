document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();

    // Sample AI History Data
    const historyData = [
        "How to use Flexbox in CSS?",
        "Explain JavaScript Closures...",
        "What is DOM manipulation?"
    ];

    const historyList = document.getElementById('ai-history-list');

    // Load History
    historyData.forEach(item => {
        const div = document.createElement('div');
        div.className = "p-4 bg-gray-50 rounded-xl text-sm text-gray-600 border border-gray-100 hover:border-blue-300 transition cursor-pointer";
        div.innerText = item;
        historyList.appendChild(div);
    });
});

// Function to handle card clicks
function handleCardClick(type) {
    alert(`Thakur, aapne ${type} section select kiya hai!`);
}
// script.js
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    loadAIHistory();

    // 1. Home Icon functionality
    const homeBtn = document.querySelector('[data-lucide="home"]').parentElement;
    homeBtn.onclick = () => location.reload(); // Home par click karne se dashboard wapas aa jayega

    // 2. Profile Icon functionality
    const profileBtn = document.querySelector('.profile-icon');
    profileBtn.onclick = () => {
        renderPage('Profile Section', 'Thakur Shaurya Pratap Singh <br> Branch: Computer Science <br> College: Kalaniketan Polytechnic');
    };

    // 3. Notification Icon
    const bellBtn = document.querySelector('.notification-btn');
    bellBtn.onclick = () => {
        alert("Thakur, abhi koi naya notification nahi hai!");
    };
});

// Function to handle Card Clicks (Notes, Videos etc.)
function handleCardClick(type) {
    let content = "";
    if(type === 'Notes') content = "Yahan tumhare Computer Science ke saare PDF notes milenge.";
    if(type === 'Videos') content = "C++, Java aur Web Development ke lectures yahan load honge.";
    if(type === 'Resources') content = "Programming Cheat-sheets aur Roadmap yahan hain.";
    if(type === 'Practice') content = "Daily Coding Challenges start karo!";

    renderPage(`${type} Section`, content);
}

// UI ko update karne wali function
function renderPage(title, description) {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center space-y-4">
            <h2 class="text-3xl font-bold text-gray-800">${title}</h2>
            <p class="text-gray-600">${description}</p>
            <button onclick="location.reload()" class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Back to Dashboard
            </button>
        </div>
    `;
}

function loadAIHistory() {
    const historyData = ["How to use Flexbox?", "JS Closures", "DOM Logic"];
    const historyList = document.getElementById('ai-history-list');
    if(historyList) {
        historyList.innerHTML = ''; 
        historyData.forEach(item => {
            const div = document.createElement('div');
            div.className = "p-4 bg-gray-50 rounded-xl text-sm text-gray-600 border border-gray-100 hover:border-blue-300 transition cursor-pointer";
            div.innerText = item;
            div.onclick = () => alert("Opening Chat History: " + item);
            historyList.appendChild(div);
        });
    }
}
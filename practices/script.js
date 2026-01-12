// --- PRACTICE SECTION LOGIC ---
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
                <p>${prob.desc}</p>
                <span class="difficulty ${prob.class}">${prob.level}</span>
            </div>
            <a href="#" class="btn-solve" onclick="alert('Starting Challenge: ${prob.title}')">Solve</a>
        </div>
    `).join('');
}
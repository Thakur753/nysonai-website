document.addEventListener('DOMContentLoaded', () => {
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
});
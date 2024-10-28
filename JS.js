// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.add(theme);
        document.getElementById('theme-toggle').checked = theme === 'dark';
    }
});

document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark');
    let theme = 'light';
    if (document.body.classList.contains('dark')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

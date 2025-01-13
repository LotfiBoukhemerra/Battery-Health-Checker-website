// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Load theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-theme')) {
        icon.classList.remove('bi-brightness-high-fill');
        icon.classList.add('bi-moon-stars-fill');
    } else {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-brightness-high-fill');
    }
}

// Copy SHA256 to clipboard
function copyToClipboard() {
    const shaText = document.getElementById('sha256').textContent;
    navigator.clipboard.writeText(shaText).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy SHA256';
        }, 2000);
    });
}

// Initialize theme icon on page load
document.addEventListener('DOMContentLoaded', updateThemeIcon);
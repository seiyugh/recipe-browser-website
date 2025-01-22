const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search');
const burger = document.getElementById('burger');
const closeBtn = document.getElementById('close');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Initially hide the search box
searchInput.style.display = 'none';

// Toggle search box visibility
searchBtn.addEventListener('click', () => {
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'inline-block';
        searchInput.focus();
    } else {
        handleSearch();
        searchInput.style.display = 'none';
    }
});

// Handle search functionality
function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) {
        alert('Please enter a search term!');
    } else {
        alert(`Searching for: ${query}`);
        searchInput.value = '';
    }
}

// Submit search on Enter key press
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
        searchInput.style.display = 'none';
    }
});

// Toggle sidebar visibility
burger.addEventListener('click', () => {
    sidebar.style.display = 'flex';
    overlay.style.display = 'block';
});

// Close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
});

// Hide sidebar when clicking on overlay
overlay.addEventListener('click', () => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
});

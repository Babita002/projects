// scripts.js
document.getElementById('navbar-toggle').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
});
// Side bar display
document.addEventListener('DOMContentLoaded', function() {
    var sidebaricon = document.getElementById('sidebaricon');
    var closeBtn = document.getElementById('closeBtn');
    var sidebar = document.getElementById('sidebar');

    sidebaricon.addEventListener('click', function() {
        sidebar.style.width = '350px';
    });

    closeBtn.addEventListener('click', function() {
        sidebar.style.width = '0';
    });

    // Optional: Close the sidebar when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === sidebar) {
            sidebar.style.width = '0';
        }
    });
});

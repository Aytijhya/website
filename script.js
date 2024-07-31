function showTab(tabName) {
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';

    // Collapse the menu after selection on mobile devices
    if (window.innerWidth <= 768) {
        toggleMenu();
    }
}

function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
    } else {
        navLinks.classList.add('nav-active');
    }
}


  
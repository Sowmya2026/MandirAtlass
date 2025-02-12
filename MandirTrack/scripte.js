function toggleMenu() {
    document.getElementById("menuDrawer").classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    let menu = document.getElementById("menuDrawer");
    let menuIcon = document.querySelector(".menu-icon");

    // If clicked outside menu and not on the menu button
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("open");
    }
});
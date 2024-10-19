function toggleNavbar() {
    var navbar = document.getElementById("navbar");

    for (const child of navbar.children) {
        if (child.className === "toggle-hide") {
            child.className = "toggle-show";
        } else {
            child.className = "toggle-hide";
        }
    }
}

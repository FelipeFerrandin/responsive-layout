let showMenu = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
menuToggle.addEventListener('click', () => {
    document.body.style.overflow = showMenu ? "hidden" : "initial"
    menuSection.classList.toggle("on", showMenu)
    showMenu = !showMenu
})

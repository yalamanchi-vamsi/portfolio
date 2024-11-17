const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
document.addEventListener("DOMContentLoaded", () => {
    const heroName = document.querySelector("#hero h1:nth-child(2) span");
    const profession = document.querySelector("#hero h1:nth-child(3) span");

    // Set values dynamically if needed
    heroName.textContent = "Yalamanchi Vamsi Krishna";
   
    // Optional: Add fade-in effect
    heroName.classList.add("fade-in");
    profession.classList.add("fade-in");
});


menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
const downloadButton = document.querySelector('.cta[href$=".pdf"]');
downloadButton.addEventListener('click', () => {
    console.log('Resume download initiated.');
});

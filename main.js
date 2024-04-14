const cursorDot = document.querySelector("[data-cursor-dot]");

window.addEventListener("mousemove", function (e) {
	const posX = e.clientX;
	const posY = e.clientY;

	cursorDot.style.left = `${posX}px`;
	cursorDot.style.top = `${posY}px`;
});

const tabList = document.querySelector(".skill-list");
const tabItems = tabList.querySelectorAll(".skill-item");
const tabContents = document.querySelectorAll(".skill-title");
const tabTexts = document.querySelectorAll(".skill-text");

tabItems.forEach((item) => {
	item.addEventListener("click", function () {
		// Remove active class from all tab list items
		tabItems.forEach((item) => item.classList.remove("active"));

		// Add active class to the clicked item
		item.classList.add("active");

		// Hide all tab content divs
		tabContents.forEach((content) => content.classList.remove("active"));
		tabTexts.forEach((text) => text.classList.remove("active"));

		// Get the index of the clicked item within the list
		const clickedIndex = Array.from(item.parentElement.children).indexOf(item);

		// Show the corresponding tab content and text
		tabContents[clickedIndex].classList.add("active");
		tabTexts[clickedIndex].classList.add("active");
	});
});


window.onscroll = function () {
	const scrollY = window.scrollY;  // Get scroll position
	const element = document.getElementById("hero-center");
	const baseTranslateZ = -0.5;  // Starting translateZ value
	const translateZStep = 0.5;   // Amount to increase translateZ per scroll unit

	const newTranslateZ = baseTranslateZ - Math.min(scrollY / 100, 6) * translateZStep;  // Calculate translateZ based on scroll

	element.style.transform = `translateZ(${newTranslateZ}px)`;
};

particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":700}},"color":{"value":"#868686"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"top","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
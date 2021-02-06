
	window.addEventListener("scroll", function(){
		var header = document.querySelector("header");
		header.classList.toggle("sticky", window.scrollY > 0);
	})


function toggleMenu(){
	var menuToggle = document.querySelector('.toggle');
	var menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');

}


// * scroll */
	const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL banner*/
sr.reveal('.banner__title',{}); 


/*scroll cabinet*/
sr.reveal('h2',{});
sr.reveal('.subtitle',{});
sr.reveal('h3',{delay: 200}); 
sr.reveal('.scrollp',{delay: 400}); 




/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 
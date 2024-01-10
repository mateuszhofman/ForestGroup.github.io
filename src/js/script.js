const navItems = document.querySelector('.nav-items');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-item');

const section = document.querySelectorAll('.section');
const navLink = document.querySelectorAll('.nav-list a');

const footerYear = document.querySelector('.footer-year')

const showNav = () => {
	navItems.classList.toggle('active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navItems.classList.remove('active');
		});
	});
};

window.onscroll = () => {
	section.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop -90;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLink.forEach((link) => {
				link.classList.remove('active');
				document.querySelector('.nav-list a[href*='+id+']').classList.add('active');
			});
		}

	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

navBtn.addEventListener('click', showNav);




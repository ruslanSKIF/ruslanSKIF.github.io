const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active'); /*добавляет класс к элементу li*/
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

// Burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// dropdown elements

const dropBtn = document.querySelector('.drop-btn');
const dropSubMenu = document.querySelector('.drop-sub-menu');

function dropMenuActivate() {
	dropSubMenu.classList.toggle('show');
}
dropBtn.addEventListener('click', dropMenuActivate);

//right block

const dropBtnR = document.querySelector('.drop-btn-r');
const dropSubMenuR = document.querySelector('.drop-sub-menu-r');

function dropMenuActivateR() {
	dropSubMenuR.classList.toggle('show-r');
}
dropBtnR.addEventListener('click', dropMenuActivateR);

// Email / registration

const mailId = document.getElementById('mailFormId');
const mailBtn = document.querySelector('.mail-button')

mailId.onblur = function () {
	if (!mailId.value.includes('@')) { // не email
		mailBtn.classList.add('_error');
		//alert('Пожалуйста, введите правильный email.')
	}
};

mailBtn.onfocus = function () {
	if (this.classList.contains('_error')) {
		// удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
		this.classList.remove('_error');
		//error.innerHTML = "";
	}
};

//output
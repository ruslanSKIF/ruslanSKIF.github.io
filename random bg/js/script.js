const btnClick = document.querySelector('.btnclick');

btnClick.addEventListener('click', btnevent => {
	document.body.style.backgroundColor =
		'#' + Math.floor(Math.random() * 16777215).toString(16)
});
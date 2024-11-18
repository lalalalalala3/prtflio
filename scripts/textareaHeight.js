let textarea = document.querySelector('textarea');
textarea.addEventListener('input', autoResizeTextarea);

function autoResizeTextarea() {
	this.style.height = 'auto';
	this.style.height = this.scrollHeight + 'px';
}

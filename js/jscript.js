function buttonClick() {
	document.getElementById('btn').style.backgroundColor='#ef939a';
	
}
function display() {
var x, y, z;
	 x = document.getElementById('dropdown');
		x.style.display="block";
	document.getElementById('first').style.display="none";
	document.getElementById('second').style.display="block";
}
function hide() {
	
	document.getElementById('dropdown').style.display="none";
	document.getElementById('first').style.display="block";
	document.getElementById('second').style.display="none";
}
function slidein() {
var x, y, z;
	 x = document.getElementById('position');
		x.style.display="block";
	document.getElementById('firstsam').style.display="none";
	document.getElementById('secondsam').style.display="block";
}
function slideout() {
	
	document.getElementById('position').style.display="none";
	document.getElementById('firstsam').style.display="block";
	document.getElementById('secondsam').style.display="none";
}
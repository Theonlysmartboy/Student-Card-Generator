const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev() {
	let inName = document.getElementById("inName").value;
	let inBirth = document.getElementById("inBirth").value;
	let inField = document.getElementById("inField").value;
	let inYear = document.getElementById("inYear").value;
	let inNum = document.getElementById("inNum").value;

	const name = document.getElementById("name");
	const birth = document.getElementById("birth");
	const course = document.getElementById("course");
	const fieldYear = document.getElementById("fieldYear");
	const num = document.getElementById("num");

	name.innerHTML = inName;
	birth.innerHTML = inBirth;
	course.innerHTML = inField;
	fieldYear.innerHTML = "Y" + inYear + "S" + inYear;
	num.innerHTML = inNum;

	ctx.fillStyle = "#159";
	ctx.rect(0, 0, 300, 56);
	ctx.fill();
	ctx.fillStyle = "#fff";
	ctx.fillText("Maseno University", 10, 25);
	ctx.font = "16px Arial";
	ctx.fillText("Student Id Card", 15, 45);
	ctx.drawImage(logo, 230, 3, 50, 50);
	ctx.fillStyle = "#000";
	ctx.fillText(name.innerHTML, 105, 90);
	ctx.fillText(birth.innerHTML, 105, 115);
	ctx.fillText(fieldYear.innerHTML, 105, 140);
	ctx.fillText("Adm No:  " + num.innerHTML, 105, 165);
	ctx.drawImage(image, 10, 65, 80, 110);
}

function loadImage(event) {
	const image = document.getElementById("imgDisplayed");
	image.src = URL.createObjectURL(event.target.files[0]);
}

const download = document.getElementById("down");
download.addEventListener("click", function () {
	if (window.navigator.msSaveBlob) {
		window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
	} else {
		const a = document.createElement("a");
		document.body.appendChild(a);
		a.href = canvas.toDataURL();
		a.download = "Card.png";
		a.click();
		document.body.removeChild(a);
	}
});

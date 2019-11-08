function calculateDollar() {
	var rub = document.getElementById("rub");
	var dol = document.getElementById("dollar");

	dol.value = Number((rub.value / 60).toFixed(2)) || null;
}

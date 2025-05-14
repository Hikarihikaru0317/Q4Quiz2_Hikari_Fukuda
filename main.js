function displayLevelInfo(){
	var levelEntry = Number(document.getElementById('levelInput').value);

	switch (levelEntry) {
	case 1:
		document.getElementById("displayLevel").innerHTML=
		"Level; Easy Mode";
		break;

	case 2:
		document.getElementById("displayLevel").innerHTML=
		"Level; normal Mode";
		break;

	case 3:
		document.getElementById("displayLevel").innerHTML=
		"Level; Difficult Mode";
		break;

	default:
		window.alert("your grade is very bad study more");
		}


}
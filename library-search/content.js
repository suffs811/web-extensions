function search() {
	var selection = textArea.value;
	var url = "https://liberty.summon.serialssolutions.com/search?type=articles&q=libraries#!/search?ho=t&include.ft.matches=t&fvf=ContentType,Journal%20Article,f%7CContentType,Magazine%20Article,f&l=en&q=" + selection
	if(selection.length > 0) {
	window.open(url)
	}
}

var textArea = document.getElementById("text");
var button = document.getElementById("button");
button.addEventListener("click", (e) => search())
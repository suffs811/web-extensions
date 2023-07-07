// get search text from textarea and search url
function search() {
	var selection = textArea.value;
	var url = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C11&&btnG=&q=" + selection
	if(selection.length > 0) {
	window.open(url)
	}
}

// get elements and listen for button click
var textArea = document.getElementById("text");
var button = document.getElementById("button");
button.addEventListener("click", (e) => search())

// get text and search library
function search() {
	var selection = textArea.value;
	var url = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C11&&btnG=&q=" + selection
	if(selection.length > 0) {
		window.open(url);
		window.close();
	}
};

// get textarea and upon pressing 'enter' key, exec search()
var textArea = document.getElementById("text");
textArea.focus();
textArea.addEventListener("keypress", function(event){if(event.key === "Enter"){search()}});

// get button and upon button press, exec search()
var button = document.getElementById("button");
button.addEventListener("click", (e) => search());

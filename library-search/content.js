// author: suffs811
// Copyright (c) 2023 suffs811
// https://github.com/suffs811/web-extensions.git
// read the README.md file for more details; the software is distributed under the MIT license.
/*
Changing the academic database: 
to have the extension search a different academic database,
click the "settings" icon in the extension's popup and paste the URL into the prompt box.
on the next search, the extension will search your inputted URL.
*/

// get text and search library
function search() {
	// get input text
	var selection = textArea.value;

	// get url from local storage, if none, use default
	chrome.storage.local.get("url").then((result) => {
		if(result["url"] == undefined) {
			var url = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C11&&btnG=&q="
  			window.open(url+selection);
  		} else {
  			var url = result["url"];
  			window.open(url+"&q="+selection);
		};
  	}
	)
};


// open settings window and set new search url in local storage
function setting() {
	var newUrl = window.prompt("Change search URL to:")
	chrome.storage.local.set({ "url": newUrl }).then(() => {
		console.log("url is set");
	});
};


// get textarea and upon pressing 'enter' key, exec search()
var textArea = document.getElementById("text");
textArea.focus();
textArea.addEventListener("keypress", function(event){if(event.key === "Enter"){search()}});

// get button and upon button press, exec search()
var button = document.getElementById("button");
button.addEventListener("click", (e) => search());

// get settings button and upon button press, exec settings()
var settings = document.getElementById("settings");
settings.addEventListener("click", (e) => setting());


// sample academic search engines:
/*
https://scholar.google.com/scholar?hl=en&as_sdt=0%2C11&&btnG=&q=
https://liberty.summon.serialssolutions.com/search?type=articles&q=libraries#!/search?ho=t&include.ft.matches=t&fvf=ContentType,Journal%20Article,f%7CContentType,Magazine%20Article,f&l=en&q=
*/

// popup.js
console.log("It worked!")
chrome.browserAction.onClicked.addListener(function(tab){
	console.log(tab.url);
	chrome.tabs.executeScript({
		code: 'document.body.style.backgroundColor="red"'
	});
});



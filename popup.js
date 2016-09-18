// popup.js


var details = {
	file: 'recipeparser.js'
};
var callback = function(result) {
	console.log(result);
};
chrome.tabs.executeScript(details, callback);



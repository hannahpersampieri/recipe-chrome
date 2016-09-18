// popup.js
var details = {
	file: 'recipeparser.js'
};
var callback = function(results) {
	var ingredients = results[0];
	var list = document.getElementById("ingredientsList");
	list.remove(); // Clear loading element
	for(i = 0; i < ingredients.length; i++){
		var itemstr = ingredients[i]["amount"] + " " + ingredients[i]["unit"]+" "+ingredients[i]["food"];
		document.write("<li>"+itemstr+"</id>");
	}
};
chrome.tabs.executeScript(details, callback);



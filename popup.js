// popup.js
var details = {
	file: 'recipeparser.js'
};
var callback = function(results) {
	var ingredients = results[0];
	var list = document.getElementById("ingredientsList");
	document.write("<h1 style=\"color:#3399ff; font-family:\"Helvetica\"> Recipe: Add this meal </h1>");
	for(i = 0; i < ingredients.length; i++){
		var itemstr = ingredients[i]["amount"] + " " + ingredients[i]["unit"]+" "+ingredients[i]["food"];
		document.write("<input type=\"checkbox\"/><label>"+itemstr+"</label><br>");
	}
	document.write("<input type= \"submit\" value = \"submit\">")
};
chrome.tabs.executeScript(details, callback);



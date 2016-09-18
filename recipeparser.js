// recipeparser.js
var info = document.getElementsByTagName("body")[0].innerHTML;
// We need to get ingredients, recipe yield for our purposes
var ingredients_div = document.querySelectorAll('[itemprop = "ingredients"]');
var ingredients = [];

function isUnit(word){
	var measurement = ["cups", "cup", "teaspoon", "teaspoons","tablespoon", "tablespoons", "ounces", "oz", "pounds", "lb", "pound", "oz"]
	for(k = 0; k < measurement.length; k++){
		if(measurement[k] == word){
			return true;
		}
	}
	return false;
}

for(i = 0; i < ingredients_div.length; i++){
	var info = {};
	var inner_text = ingredients_div[i].innerText.split(" ");
	for(j = 0; j < inner_text.length; j++){
		if (parseInt(inner_text[j])){
			if(j > 0 && parseInt(inner_text[j-1])){
				info["amount"] = info["amount"]+ " "+inner_text[j];
			}
			else {
				info["amount"] = inner_text[j];
			}
		}
		else if (isUnit(inner_text[j])){
			info["unit"] = inner_text[j];
		}
		else {
			info["food"] = inner_text[j];
		}

	}
	ingredients.push(info);
}
/* TO - DO
	- push to popup
*/
console.log(ingredients);


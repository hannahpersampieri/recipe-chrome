// recipeparser.js
var info = document.getElementsByTagName("body")[0].innerHTML;
// We need to get ingredients, recipe yield for our purposes
var ingredients_div = document.querySelectorAll('[itemprop = "ingredients"]');
var ingredients = [];
for(i = 0; i < ingredients_div.length; i++){
	ingredients.push(ingredients_div[i].innerText);
}
/* TO - DO
	- remove measurements
	- remove , and any details after
	- push to popup
*/
console.log(ingredients);


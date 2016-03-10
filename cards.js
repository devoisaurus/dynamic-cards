var button = document.getElementById("create");
button.addEventListener("click", cardTest);


function cardTest() {
	var cardInput = document.getElementById("cardValue").value;
	var cardOutput = document.getElementById("cards");
	return cardOutput.innerHTML += "<article>" + cardInput + "<button id='delete'>Remove me</button>" +"</article>";
};

var deleteButton = document.getElementById("delete");
cards.addEventListener("click", deletionTest);

function deletionTest() {
var node = event.target.parentNode;
	if (event.target.id === "delete") {
   var node = event.target.parentNode;
   cards.removeChild(node);
}
 };


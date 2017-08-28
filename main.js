
function runThisAfterDogsLoads(){
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
	// domString(data.dogs);
}

function shitsBroke(){
	console.log("WHAT DID YOU DO?");
}

var myDawgs = new XMLHttpRequest();
myDawgs.addEventListener("load", runThisAfterDogsLoads);
myDawgs.addEventListener("error", shitsBroke);
myDawgs.open("GET", "dogs.json");
myDawgs.send();
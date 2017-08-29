
function runThisAfterDogsLoads(){
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
}

function runThisAfterBreedsLoads(){
	var data = JSON.parse(this.responseText).breeds;
	console.log("breeds", data);
}

function shitsBroke(){
	console.log("WHAT DID YOU DO?");
}

var myDawgs = new XMLHttpRequest();
myDawgs.addEventListener("load", runThisAfterDogsLoads);
myDawgs.addEventListener("error", shitsBroke);
myDawgs.open("GET", "dogs.json");
myDawgs.send();

var myBreedz = new XMLHttpRequest();
myBreedz.addEventListener("load", runThisAfterBreedsLoads);
myBreedz.addEventListener("error", shitsBroke);
myBreedz.open("GET", "breeds.json");
myBreedz.send();
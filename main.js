// 1. XHR to dogs.json
// 2. Call helper function that sets up the XHR to breeds and passes dogs
// 3. Put XHR breeds.json load function inside helper function
// 4. Call combinedArray


function runThisAfterDogsLoads(){
	var dogsData = JSON.parse(this.responseText).dogs;
	getBreedz(dogsData);
}

function shitsBroke(){
	// console.log("WHAT DID YOU DO?");
}

var myDawgs = new XMLHttpRequest;
myDawgs.addEventListener("load", runThisAfterDogsLoads);
myDawgs.addEventListener("error", shitsBroke);
myDawgs.open("GET", "dogs.json");
myDawgs.send();

function getBreedz(dogz){
	var myBreedz = new XMLHttpRequest;
	myBreedz.addEventListener("load", runThisAfterBreedsLoads);
	myBreedz.addEventListener("error", shitsBroke);
	myBreedz.open("GET", "breeds.json");
	myBreedz.send();

	function runThisAfterBreedsLoads(){
		var breedsData = JSON.parse(this.responseText).breeds;
		combinedArray(dogz, breedsData);
	}
}


function combinedArray(dogsArray, breedsArray){
	//loop through the dogs and look at breed_id
	dogsArray.forEach(function(dog){
		var currentBreedId = dog["breed-id"];
		// console.log("dog breed_id", currentBreedId);
		breedsArray.forEach(function(breed){
			if(currentBreedId === breed.id){
				// console.log("one breed", breed);
				dog["dogBreed"] = breed.name;
				dog["basePrice"] = breed["base-price"];
				dog["description"] = breed.description;
				dog["finalPrice"] = dog.basePrice + dog["add-on-price"];
			}
		});
	});
	//loop through breeds and find matching breed_id
	//make final price
	console.log("all the dogs", dogsArray);
	domString(dogsArray);
}

function domString(dogs){
	var reallyLongDomString = "";
	//usual stuff - fat FOR loop
	for(var i = 0; i < dogs.length; i++){
		reallyLongDomString += `<div>`;
		
		reallyLongDomString += `</div>`;
	}
	writeToDom(reallyLongDomString);
}

function writeToDom(strang){
	//put in the DOM

}


























var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var goalPic = document.createElement("img");
var treePic = document.createElement("img");
var flagPic = document.createElement("img");

var picsToLoad = 0; // set automatically based on imageList in loadImages();

function countLoadedImagesAndLaunchIfReady(){
	picsToLoad--;
	console.log(picsToLoad)
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName){
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}


function loadImages(){
	var imageList = [
	{varName: carPic, theFile : "car.png" },
	{varName: roadPic, theFile : "TRACK_Road.png" },
	{varName: wallPic, theFile : "TRACK_Wall.png" },
	{varName: goalPic, theFile : "finishline.png" },
	{varName: treePic, theFile : "TREES.png" },
	{varName: flagPic, theFile : "Flag.png" }
	];

picsToLoad = imageList.length;
	

	for(var i=0; i<imageList.length; i++){
		beginLoadingImage(imageList[i].varName, imageList[i].theFile);
	
	}
}
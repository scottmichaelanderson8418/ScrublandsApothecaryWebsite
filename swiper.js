function next() {
	var myImage = new Array();
	myImage[0] = "01_SCRUBLANDS_WEBPAGE_SMA/SOAP_PICS/MARINE_GREEN_PNG/MarineGreen01.png";
	myImage[1] = "desert.jpg";
	myImage[2] = "jellyfish.jpg";
	myImage[3] = "flower.jpg";

	ImageCnt++;

	document.getElementById("whiteBox").style.background = "url(myImage[ImageCnt])";
}

function urlset(url){
		document.getElementById('content_iframe').src =url;
		var iFrameID = document.getElementById('content_iframe');
	
	}
	
function iframeLoaded() {
	var iFrameID = document.getElementById('content_iframe');
	if(iFrameID) {
	// here you can make the height, I delete it first, then I make it again
		iFrameID.height = "300px";
		iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
		window.alert(iFrameID.height);
	}   
}
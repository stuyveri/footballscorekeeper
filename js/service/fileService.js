document.addEventListener("deviceready", onDeviceReadyForFile, false);
var FileSystem = null;
var FileEntry = null;
var FileWriter = null;
var FileReader = null;

function onDeviceReadyForFile() {
	console.log("onDeviceReadyForFile called.");
	
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function gotFS(fileSystem) {
	console.log("gotFS called.");
	FileSystem = fileSystem;
	FileSystem.root.getFile(variables.fileName, {create: true, exclusive: false}, gotFileEntry, fail);
}

//Settings file section
function gotFileEntry(entry) {
	console.log("gotFileEntry called.");
	FileEntry = entry;
	FileEntry.createWriter(gotFileWriter, fail);
	FileEntry.file(gotFile, fail);
}

function gotFileWriter(writer) {
	console.log("gotFileWriter called.");
	FileWriter = writer;
	FileWriter.onerror = fail;
}

function gotFile(file) {
	console.log("gotFile called.");
	var reader = new FileReader();
	reader.onloadend = function(evt) {
		console.log("Read File as text");

		var data = evt.target.result;
		console.log("data1: " + data);

		if( data != "" ) {
			var dataObj = evt.target.result;
			variables.savedData = dataObj;
			console.log("savedData: " + variables.savedData);

			//TODO: Save Data
			//Create team
			//Add match
			//		Undefined scoring player
			//fix for period
		}

		//launch event
		window.location = "#/";
	};
	reader.readAsText(file);
}

function clearFile() {
	variables.FileWriter.truncate(0);
}





function fail(evt) {
	//TODO: alert or something like that
    console.log("error during file processing. Code: " + evt.code);
}

function fileSuccess(evt) {
	//TODO: alert or something like that
    console.log("success during file processing. Code: " + evt.code);
}
document.addEventListener("deviceready", onDeviceReadyForFile, false);
var FileSystem = null;
var FileEntry = null;
var FileEntryBackup = null;
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
	FileSystem.root.getFile(variables.backupFileName, {create: true, exclusive: false}, gotFileEntryBackup, fail);
}

//Settings file section
function gotFileEntry(entry) {
	console.log("gotFileEntry called.");
	FileEntry = entry;
	FileEntry.createWriter(gotFileWriter, fail);
	FileEntry.file(gotFile, fail);
}

//Settings file section
function gotFileEntryBackup(entry) {
	console.log("gotFileEntryBackup called.");
	FileEntryBackup = entry;
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
			var dataObj = angular.fromJson(evt.target.result);
			//console.log("data2: " + dataObj.settings);
			//angular.fromJson(settingsString)
			variables.savedData = dataObj;
		} else {
			console.log("Init savedData var");
			variables.savedData = new SavedData();
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
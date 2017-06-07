var application = require("application");

var observableArrayModule = require("data/observable-array");

var fs = require('file-system');
var documents = fs.knownFolders.currentApp();

// MOVE ALL THESE OPERATIONS to VIEWMODEL shortly

// NOTE - Google Maps API for IOS key = AIzaSyDW3AQS3tXR7xffUFxkRoWYAUK4gUhWQRc


// Read the User Settings
// ######################
userjsonFile = documents.getFile('shared/resources/userdata.json');
userarray = [];
userridelength = "";

userjsonFile.readText()
    .then(function (content) {
    //try {
        //console.log(JSON.stringify(content));
        console.log('Pre USERjsonData');
        var userjsonData = JSON.parse(content);
         //console.dump(userjsonData);

        userarray = new observableArrayModule.ObservableArray(userjsonData);
        userridelength = userjsonData[0].ridelength;
        console.log('USER RIDE IS :::: ' + userridelength);
});


// Read the Selected RIDE CUE SHEET
// ################################
// Note - leave as global to pass to the Cue Sheet page
// difficulty reading in prior to load from withing page code
ridejsonFile = documents.getFile('shared/resources/115K.json');
ridemapFile = documents.getFile('shared/resources/maps/115K.png');
ridearray = [];
 //jsonData = [];
 //jsonData;
   ridejsonFile.readText()
.then(function (content) {
    //try {
        //console.log(JSON.stringify(content));
        console.log('Pre jsonData');


        var ridejsonData = JSON.parse(content);
        console.log('Inside Array loop');
        //console.dump(jsonData);

        ridearray = new observableArrayModule.ObservableArray(ridejsonData);

        //console.log('Inside Array loop' + content);

        //console.dump(ridearray);

        // var arrayLength = content.length;
        // console.log('Content Length ' + arrayLength);
});


application.start({ moduleName: "pages/home/home" });

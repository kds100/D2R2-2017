var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;

var layout = require("ui/layouts/grid-layout");

var listViewModule = require("ui/list-view");
//var webViewModule = require("ui/web-view");
//var buttonModule = require("ui/button");
var labelModule = require("ui/label");
var observableArrayModule = require("data/observable-array");

var fs = require('file-system');

var view = require("ui/core/view");



//var gridLayout = new layout.GridLayout();

 

var HomePage = function() {
    //############ Working myItems array (although only seeing 3)
    //  var myItems = [];
    //     myItems.push(
    //         {
    //             itemName: "Arcade Fire",
    //             itemDesc: "Funeral"
    //         },
    //         {
    //             itemName: "Bon Iver",
    //             itemDesc: "For Emma, Forever Ago"
    //         },
    //         {
    //             itemName: "Daft Punk",
    //             itemDesc: "Random Access Memories"
    //         },
    //         {
    //             itemName: "Elbow",
    //             itemDesc: "Build a Rocket Boys!"
    //         }
    //     )

 

        

        // for (var i = 0; i < arrayLength; i++) {
        //     console.log(jsonData[i].CUE+':'+jsonData[i].TOTAL);
        //     //Do something
        // }

        // content.forEach( function(s) { 
        //     // ... do something with s ...
        //     console.log('S = ' + s);
        // } );
//     } catch (err) {
//         throw new Error('Could not parse JSON file');
//     }
// }, function (error) {

//     throw new Error('Could not read JSON file');
//console.dump(array);



// for(var i=0; i<arrLen; i++){
//     console.log(array[i][0]);
// }


// documents = fs.knownFolders.currentApp();
//  jsonFile = documents.getFile('shared/resources/115K.json');
//  array = [];
//  jsonData = [];
//  //jsonData;
//    jsonFile.readText()
// .then(function (content) {
//     //try {
//         //console.log(JSON.stringify(content));
//         console.log('Pre jsonData');


//         jsonData = JSON.parse(content);
// console.log('Inside Array loop');
//         //console.dump(jsonData);

//         array = new observableArrayModule.ObservableArray(jsonData);

//         //console.log('Inside Array loop' + content);

//         console.dump(array);

//         var arrayLength = content.length;
//         console.log('Content Length ' + arrayLength);
// });

  //this.viewModel.set("myItems", [{"cue":"2016 D2R2 115K cue Sheet   7PM time limit","total":"","BLANK":"","INSTR":""}]);

// var myItems = array;
// var arrLen = array.length;
console.log('#################### array');
//console.dump(jsonData);
  this.viewModel.set("myItems", ridearray);
  this.viewModel.set("titletext", 'Cue Sheet - ' + userridelength);
  this.viewModel.set("myText", '115K Cue Sheet!!');
};

HomePage.prototype = new BasePage();
HomePage.prototype.constructor = HomePage;

// Place any code you want to run when the home page loads here.
HomePage.prototype.contentLoaded = function() {

    // console.log('## LOADED Content Length ');
    // var items = ['Apple', 'Banana'];

    //HomePage.prototype.bindcontext = myItems;
    //HomePage.prototype.items = items;
}

HomePage.prototype.fun = function(args) {
  var page = topmost().currentPage;
var itemIndex = args.index;
  //this.style.backgroundColor="red";
  this.backgroundColor="red";
  console.log("ListItem TAP" + args.type);
  //console.dump(args);
  //var logo = page.getViewById("logo");
  // logo.animate({
  //   rotate: 3600,
  //   duration: 3000
  // }).then(function() {
  //   logo.rotate = 0;
  // });
}
//(itemTap)="onItemTap($event)"
HomePage.prototype.onItemTap = function(args){
  console.log('onItem Selected' + args.index);

}

module.exports = new HomePage();

exports.onItemTap = function(args){

  console.log('ITEM IS ' + args.index);
}

// exports.pageLoaded = function(args) {
//     var items = [];
//     items.push(
//         {
//             itemName: "Arcade Fire",
//             itemDesc: "Funeral"
//         },
//         {
//             itemName: "Bon Iver",
//             itemDesc: "For Emma, Forever Ago"
//         },
//         {
//             itemName: "Daft Punk",
//             itemDesc: "Random Access Memories"
//         },
//         {
//             itemName: "Elbow",
//             itemDesc: "Build a Rocket Boys!"
//         }
//     )
//     var page = args.object;
//     var listview = view.getViewById(page, "listview");
//     listview.items = items;
// }
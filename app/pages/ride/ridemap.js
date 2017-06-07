var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;

var layout = require("ui/layouts/grid-layout");

var listViewModule = require("ui/list-view");
var imageModule = require("ui/image");
//var buttonModule = require("ui/button");
var labelModule = require("ui/label");
var observableArrayModule = require("data/observable-array");

var fs = require('file-system');

var view = require("ui/core/view");

var HomePage = function() {

// var myItems = array;
// var arrLen = array.length;
console.log('#################### MAP');
//console.dump(jsonData);
  this.viewModel.set("mapImage", ridemapFile);
  
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
//var itemIndex = args.index;
  //this.style.backgroundColor="red";
 //this.backgroundColor="red";
  //console.log("ListItem TAP" + args.type);
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
  //console.log('onItem Selected' + args.index);

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
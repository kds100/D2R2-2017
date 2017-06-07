var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;
var Observable = require("data/observable").Observable;
var observableArrayModule = require("data/observable-array");
var labelModule = require("ui/label");
var frameModule = require("ui/frame");


var fs = require("file-system");
// var observableArray = require("data/observable-array");
  //var array = new Observable.ObservableArray();

//   array.push({title: "About the D2R2"});
//   array.push({title: "RIDE!"});
//   array.push({title: "Change Settings"});


var AboutPage = function() {
    //var colors = ["red", "brown","green2","white","blue","yellow"];
    var sa = ['About D2R2', 'Courses', 'Start Times','Camping / Lodging','Restaurants','Directions'];
    var array = new observableArrayModule.ObservableArray(sa);
    console.log("ARRAY SET");
      //this.viewModel.set("blackBackground", true);

    this.viewModel.set("title", array);

};

AboutPage.prototype = new BasePage();
AboutPage.prototype.constructor = AboutPage;

// var listView = new listViewModule.ListView();
// var colors = ["red", "green", "blue"];
// listView.items = colors;
// listView.on(listViewModule.ListView.itemLoadingEvent, function (args: listViewModule.ItemEventData) {
//     if (!args.view) {
//         // Create label if it is not already created.
//         args.view = new labelModule.Label();
//     }
//     //(<labelModule.Label>args.view).text = colors[args.index];

// });

AboutPage.prototype.onItemTap = function(args) {
  //var page = topmost().currentPage;
  var tappedView = args.view;
        //the View will have a bindingContext 
        // set to the individual item from the list
 var tappedItem = tappedView.bindingContext;

//var myindex = page.getViewById("ListView").index;
console.log("TAPPED LIST ITEM" + tappedItem);
//if(tappedItem == 'start'){
    //var topmost = frameModule.topmost();
    //var myPage = topmost.currentPage;
    //var documents = fs.knownFolders.documents();
    
// WORKING Navigation from this point
//topmost().navigate("pages/about/stub1");

    //console.log('Page = ' + normalizedPath);
    //topmost.navigate('stub1');
//}

//Instead of IF, try using Name and swap spaces
// for dashes
var pathWithDash = tappedItem.replace(" ", "-");

try {
    topmost().navigate("pages/about/" + pathWithDash);
} catch (error) {
    alert("Error - Unable to locate page");
}
console.log('Path would be '+pathWithDash);
}

module.exports = new AboutPage();


// function pageLoaded(args) {
//   var page = args.object;
//   var array = new observableArray.ObservableArray();

//   array.push({title: "About the D2R2"});
//   array.push({title: "RIDE!"});
//   array.push({title: "Change Settings"});

//   page.bindingContext = {myItems: array};

//   console.log("PAGE LOAD ABOUT");
// }
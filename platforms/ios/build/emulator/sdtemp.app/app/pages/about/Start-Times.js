var frameModule = require("ui/frame");
var topmost = require("ui/frame").topmost;
var observableArray = require("data/observable-array");

function onPageLoaded(args) {
}

exports.onItemTap =  function(args){
    // Get the Index selected
    var index = args.index; 
    console.log(index);
}

exports.onPageLoaded = onPageLoaded;

function onBack(args) {
    console.log("BACK action item tapped.");
    // Return to the ABOUT page with Listview
    topmost().navigate("pages/about/about");
}

exports.onBack = onBack;
var frameModule = require("ui/frame");
var topmost = require("ui/frame").topmost;


var observableArray = require("data/observable-array");
function onPageLoaded(args) {
  // var page = args.object;
  // var array = new observableArray.ObservableArray();

  // array.push({title: "About the D2R2"});
  // array.push({title: "RIDE!"});
  // array.push({title: "Change Settings"});

  // page.bindingContext = {myItems: array};
}

exports.onItemTap =  function(args){
      var index = args.index; //will get the index of the element
    //var obj = array.getItem(index); /** you get the viewWmodel's element by ID if it's an Array (which surely is)**/

console.log(index);

if(index == 1){
    var topmost = frameModule.topmost();
    topmost().navigate('views/html/html');
}
// var tappedView = args.view,
        //the View will have a bindingContext 
        // set to the individual item from the list
        //tappedItem = tappedView.bindingContext;
        //console.log(tappedItem.index);
}

exports.onPageLoaded = onPageLoaded;

function onBack(args) {
    console.log("BACK action item tapped.");
    //var topmost = frameModule.topmost();
    topmost().navigate("pages/about/about");
    //topmost.navigate("about");
    // var navigationEntry = {
    // moduleName: "about",
    // animated: true,
    // transition: {
    //     name: "slide",
    //     duration: 380,
    //     curve: "easeIn"
    // }
//};
//topmost().navigate(navigationEntry);
}
exports.onBack = onBack;
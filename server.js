// var express = require("express");


// var app = new express();

// app.use(express.static(__dirname + '/public'));

// app.listen(3000, function(){
//     console.log("listening on port 3000");
// })

var Button = function(content) { 
    this.content = content;
  };
  Button.prototype.click = function() {
    console.log(this.content + ' clicked');
  }
  
  var myButton = new Button('OK');
  myButton.click();


  var looseClick = { content : "hello" };
  looseClick.click = myButton.click;
  looseClick.click(); // not bound, 'this' is not myButton - it is the global object

  var boundClick = myButton.click.bind(myButton);
  boundClick(); // bound, 'this' is myButton
  
  

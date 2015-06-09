/*Create an endpoint using app.get that sends a JSON object. You can assume it's in a server.js
file that has a similar setup to what we used in class. Add comments explaining what each part of
the code is doing.

Share your code via gist.github.com or a GitHub repo. Paste the link here.*/

/*the first three lines create an express app and tell our system what port to listen on for
our server*/
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;


/*line one tells the server that when it gets a get request, to run the callback funciton*/
app.get("/", function(req,res){
  /*line two says that the servers response when the function is run will be a json object
  and that json object is the key name with the value "Dylan"*/
  res.json( { name: "Dylan"};
})


/*line one works as a document.ready function and gets our document ready to run jquery*/
$(function(){
  /*line two selects our button element and tells it to run the callback function when clicked*/
  $('button').on('click', function(){
    /*line three says when the get request hits the '/' to run the callback function with the data the
    servers get function has as the parameter*/
    $.get("/", function(response){
      /*line four puts the json data our server is giving us and appends it to any p in our html file*/
      $("p").html(response);
    })
  })
});

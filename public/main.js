/* global $ */

//global var


//*on click hide || show

//danish league
var hideDen = function () {
  $('#denLogo').click(function() {
  $('.wholePage').hide( 1, function() {
    // alert( "Animation complete." );
    $('.backButton').show();
  });
});
};

//scottish league

var hideScot = function () {
  $('#scotLogo').click(function() {
  $('.wholePage').hide( 1, function() {
    // alert( "Animation complete." );
    $('.backButton').show();
  });
});
};

//news on main page API

var news = function (data) {
  $.ajax({
      type: 'GET',
      url:'https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035',
      success: function(data){
          console.log('success', data);
          console.log(data);

          var latNewsOne = data.articles[0].description;
          var latNewsTwo = data.articles[1].description;
          var latNewsThree = data.articles[2].description;
          var latNewsFour = data.articles[3].description;
          var latNewsFive = data.articles[4].description;

          document.getElementById("latestNewsOne").innerHTML = latNewsOne ;
          document.getElementById("latestNewsTwo").innerHTML = latNewsTwo ;
          document.getElementById("latestNewsThree").innerHTML = latNewsThree ;
          document.getElementById("latestNewsFour").innerHTML = latNewsFour ;
          document.getElementById("latestNewsFive").innerHTML = latNewsFive ;
      }
      }); 
  
};

var liveScore = function (data) {
  $.ajax({
      type: 'GET',
      url:'https://api.soccerama.pro/v1.2/livescore?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0',
      success: function(data){
          console.log('success', data);
          console.log(data);

          // var denScore = data;
          // var scotScore = data;
          //
          // document.getElementById("").innerHTML =  ;
      }
      });

};

//

var allTeams = function (data) {
  $.ajax({
      type: 'GET',
      url:'https://api.soccerama.pro/v1/teams/season/2016?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0',
      success: function(data){
          console.log('success', data);
          console.log(data);

          // var denScore = data;
          // var scotScore = data;
          //
          // document.getElementById("").innerHTML =  ;
      }
      });

};

var highlights = function (data) {
  $.ajax({
      type: 'GET',
      url:'https://api.soccerama.pro/v1.1/videos/match/{152}?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0',
      success: function(data){
          console.log('success', data);
          console.log(data);

          // var denScore = data;
          // var scotScore = data;
          //
          // document.getElementById("").innerHTML =  ;
      }
      });

};

$(document).ready(function() {
  
    $('.backButton').hide();
    news();
    hideDen();
    hideScot();
    liveScore();
    highlights();
    allTeams();
});
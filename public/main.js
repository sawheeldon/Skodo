/* global $ */


var latestNews = function (data) {
  $.ajax({
      type: 'GET',
      url:'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035',
      success: function(data){
          console.log('success', data);
          console.log(data);

          // var denCurrent = data.data[0].currentSeason.name;

          // document.getElementById("currentLeagues").innerHTML = denCurrent ;
      }
  })
};

// $(function(data) {
//         $.ajax({
//             type: 'GET',
//             url:'https://api.soccerama.pro/v1.1/competitions?api_token=3VIR2AoOrayqSFUUhMuVJBWclkzbtXrH712ilcavqLqIboT6qo3Gatc8QYk0&include=country,currentSeason',
//             success: function(data){
//                 console.log('success', data);
//                 console.log(data.data[0].currentSeason);

//                 var denFlag = data.data[0].country;

//                 document.getElementById("currentLeagues").innerHTML = denFlag ;
//             }
//             });
// });
// function displayLeagues(event) {
//         var buildTheHtmlOutput = "";

//         $.each(event, function (match, result) {
//             // buildTheHtmlOutput += "<li>";
//             // buildTheHtmlOutput += "<p>" + videoArrayValue.snippet.title + "</p>"
//             // buildTheHtmlOutput += "<a href='https://www.youtube.com/watch?v=" + videoArrayValue.id.videoId + "' target='_blank'>";
//             // buildTheHtmlOutput += "<img src='" + videoArrayValue.snippet.thumbnails.high.url + "'/>";
//             // buildTheHtmlOutput += "</a>";
//             // buildTheHtmlOutput += "</li>";

//         });
//         $("#currentLeagues ul").html(buildTheHtmlOutput);
//     }


$(document).ready(function() {
    
    latestNews();
    
});
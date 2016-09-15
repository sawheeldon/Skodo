/* global $ */

//global var

var userName;
var userID;

//login user


function loginUser(username, password) {
    $('p.error').empty();
    var q_string = {
        'username':username,
        'password':password
    };
    $.ajax({
            type:"POST",
            url:"/login",
            data: q_string,
            dataType:'json',
        })
        .done(function (result) { //this waits for the ajax to return with a succesful promise object
            //When successful, set globals from result object
            userName = result.username;
            userID = result._id;
            if(result) {
                    //go to main page
                    mainDisplay(result);
            } else {
                    //Doesn't have a team yet, go to team builder so they can create a team
                    mainDisplay(result);
            }
        })
        .fail(function (jqXHR, error) {
                //User login was unsuccessful, due to pw/username combination was wrong
                $('p.loginErr').text("We're sorry, that username and password combination was incorrect.");
        });
}

// new user set up

function newUser(username, password) {
    $('p.error').empty();
    var q_string = {
        'username':username,
        'password':password
    };    
    $.ajax({
            type:"POST",
            url:"/users/create",
            data: q_string,
            dataType:'json',
        })
        .done(function (result) {
            //If successful, set some globals instead of using result object
            userName = result.username;
            userID = result._id;
            //TODO - Don't think we can ever get here, if we get a result back, it's always successful by default? Maybe a similar username was already chosen? - TEST THIS
            if(result.username) {
                mainDisplay(result);
            } else {
                $('p.newLoginErr').text("Sorry, that is taken, try another username");
            }
        })
        .fail(function (jqXHR, error) { //this waits for the ajax to return with an error promise object
                $('p.newLoginErr').text("We're sorry, there was a system error, try again.");
        });
}


       function mainDisplay(result) {
        $('main.container-main').css('display', 'block');
}



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
  
  //existing user
  
    $('#existingUser').submit(function (event) {
          event.preventDefault();
          var username = $('input#username').val();
          var password = $('input#password').val();
          loginUser(username,password);
  });
  
   //new user
   
    $('#newUser').submit(function (event) {
        event.preventDefault();
        var username = $('input#username').val();
        var password = $('input#password').val();
        if(!username && password) {
            $('p.error').text("Must enter a username/password for a new user signup.");
        } else {
            newUser(username, password);
        }
});
  
    $('.backButton').hide();
    news();
    hideDen();
    hideScot();
    liveScore();
    highlights();
    allTeams();
});
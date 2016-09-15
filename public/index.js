// /* global $ */

// var userName;
// var userID;

// //login user


// function loginUser(username, password) {
//     $('p.error').empty();
//     var q_string = {
//         'username':username,
//         'password':password
//     };
//     $.ajax({
//             type:"POST",
//             url:"/login",
//             data: q_string,
//             dataType:'json',
//         })
//         .done(function (result) { //this waits for the ajax to return with a succesful promise object
//             //When successful, set globals from result object
//             console.log("worked", result);
//             userName = result.username;
//             userID = result._id;
//             if(result) {
//                     //go to main page
//                     mainDisplay(result);
//             } else {
//                     //Doesn't have a team yet, go to team builder so they can create a team
//                     mainDisplay(result);
//             }
//         })
//         .fail(function (jqXHR, error) {
//                 //User login was unsuccessful, due to pw/username combination was wrong
//                 $('p.loginErr').text("We're sorry, that username and password combination was incorrect.");
//         });
// }

// // new user set up

// function newUser(username, password) {
//     $('p.error').empty();
//     var q_string = {
//         'username':username,
//         'password':password
//     };    
//     $.ajax({
//             type:"POST",
//             url:"/users/create",
//             data: q_string,
//             dataType:'json',
//         })
//         .done(function (result) {
//             //If successful, set some globals instead of using result object
//             console.log("worked", result);
//             userName = result.username;
//             userID = result._id;
//             //TODO - Don't think we can ever get here, if we get a result back, it's always successful by default? Maybe a similar username was already chosen? - TEST THIS
//             if(result.username) {
//                 mainDisplay(result);
//             } else {
//                 $('p.newLoginErr').text("Sorry, that is taken, try another username");
//             }
//         })
//         .fail(function (jqXHR, error) { //this waits for the ajax to return with an error promise object
//                 $('p.newLoginErr').text("We're sorry, there was a system error, try again.");
//         });
// }


//       function mainDisplay(result) {
//           alert('here');
//         $('main.container-main').css('display', 'block');
// }

// $(document).ready(function() {
    
    
//      //existing user
  
//     $('#existingUser').submit(function (event) {
//           event.preventDefault();
//           var username = $('input#username').val();
//           var password = $('input#password').val();
//           loginUser(username,password);
//   });
  
//   //new user
// //   $('.unanswered-getter').submit(function (event) {
// //         //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
// //         event.preventDefault();
// //         // zero out results if previous search has run
// //         $('.results').html('');
// //         // get the value of the tags the user submitted
// //         var tags = $(this).find("input[name='tags']").val();
// //         //run the API search with the user input above
// //         getUnanswered(tags);
// //     });
    
//     $('#newUser').submit(function (event) {
//         // alert("here!!!");
//         event.preventDefault();
//         // var username = $('#username').val();
//         // var password = $('#password').val();
//         var username = $(this).find("input[name='username']").val();
//         var password = $(this).find("input[name='password']").val();
//         // console.log(password);
//         if(!username && password) {
//             $('p.error').text("Must enter a username/password for a new user signup.");
//         } else {
//             newUser(username, password);
//         }
// });
    
    
// });
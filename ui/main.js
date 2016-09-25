// Counter code
var button = document.getElementById('counter');

button.onclick = function() {

    //Create a request object
    var request = new XMLHttpRequest();

   //Capture the reponse and store it in a variable
   request.onreadystatechange = function() {
    if(request.readystate === XMLHttpRequest.DONE) {
      //Take some action
      if(request.status === 200) {
      var counter = request.reponseText;
      var span = document.getElementById('count');
      span.innerHTML = counter.toString();
       }
     } 
     //Not done yet
};

// Make the request
request.open('GET', 'http://dhanikms.imad.hasura-app.io/counter',true);
request.send(null);
};

// Sumbit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    // Make a request to the server and sendthe name
  
    // Capture a list of name and render it as a list
      var names = ['name1','name2','name3','name4'];
      var list = '';
      for (var i=0;i<names.length;i++) {
          list += '<li>' + names[i] + '</li>';
      }
      var ul = document.getElementById('namelist');
      ul.innerHTML = list;
};
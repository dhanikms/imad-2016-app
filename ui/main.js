// Counter code
var button = document.getElementById('counter');

button.onclick = function() {

    //create a request object
    var request = new XMLHttpRequest();

   //Capture the reponse and store it in a variable
   request.onreadystatechange = function() {
    if(request.readystate===XMLHttpRequest.DONE) {
      //Take some action
      if(request.status===200) {
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
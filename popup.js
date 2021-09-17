/*let changeColor = document.getElementById("changeColor");
   // document.getElementById("submit").innerHTML = "Hello World";

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});*/
chrome.storage.onChanged.addListener(function(changes, namespace) {
     console.log("change recived!");
     //var logDiv = document.getElementById("NotLoggedIn");
     document.getElementById('NotLoggedIn').style.display = 'none';

    });

function saveItem(item){
    chrome.storage.sync.set(item, function() {
      console.log('Item saved');
    });
}

function readItem(item){
    chrome.storage.sync.get(item, function(items) {
      console.log('Item retrieved', items);
    });
}

var baseUrl = 'https://www.kiwikruise.com.ng/app';
function GetUrl(url){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", baseUrl + url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // JSON.parse does not evaluate the attacker's scripts.
      console.log(xhr);
      var resp = JSON.parse(xhr.responseText);
    }
  }
  xhr.send();
}

function FormPost(furl,fparams){
    var http = new XMLHttpRequest();
    var url = baseUrl + furl;
    var params = fparams;
    var response;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    console.log(http);
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
            response = http.responseText;
            console.log('Post Successful')
        }
    }
    http.send(params);
    console.log(response);
    return response;
}
function inputVal(id){
   var val = document.getElementById(id).value;
   return val;
}


$('#submit').on('click', function () {
  alert('clicked');
  Auth();
})
function Auth(){
  alert('sdsd');
  var userLog = new Array();
   userLog['username'] = $('#username').val();
   userLog['password'] = $('#password').val();
  console.log(userLog);
}

function UserLogin(){
    var userLog = Array();
    userLog['username'] = inputVal("username");
    userLog['password'] = inputVal("password");
    console.log(userLog);
    var http = new XMLHttpRequest();
    var url = baseUrl + '/login.php';
    var params = userLog;
    http.open('POST', url, true); http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    console.log(http);
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
            response = JSON.parse(http.responseText);
            console.log('Post Successful');
            saveItem(response);
        }
    }
    http.send(params);
}

window.onload=function(){
    //GetUrl('https://www.google.com');
    document.getElementById("submit").addEventListener("click", function() {
      UserLogin();
    });
    
}

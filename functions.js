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
  var savedItem;
    chrome.storage.sync.get(item, function(items) {
      console.log('Item retrieved', items);
      savedItem = items;
    });
  return savedItem;
}

var baseUrl = '';

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


function inputVal(id){
   var val = document.getElementById(id).value;
   return val;
}

function registerAction(id, action, actionFunction){
    document.getElementById(id).addEventListener(action, function() {
      actionFunction();
    });
}

window.onload=function(){
  login();
  authStatus();
  registerAction('submit','click', login);    
}

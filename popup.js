let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
function GetUrl(url){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // JSON.parse does not evaluate the attacker's scripts.
      console.log(xhr);
      var resp = JSON.parse(xhr.responseText);
    }
  }
  xhr.send();
}

//GetUrl('https://www.google.com');

$('#submit').on('click', function () {
  alert('clicked');
  Auth();
})
function Auth(){
  var userLog = new Array();
   userLog['username'] = $('#username').val();
   userLog['password'] = $('#password').val();
  console.log(userLog);
}

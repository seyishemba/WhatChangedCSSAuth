function login(){
    var userLog = Array();
    userLog['username'] = inputVal("username");
    userLog['password'] = inputVal("password");
    console.log(userLog);
    var http = new XMLHttpRequest();
    var url = baseUrl + 'login.json';
    var params = userLog;
    http.open('POST', url, true); http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    console.log(http);
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            response = JSON.parse(http.responseText);
            console.log('Post Successful');
            console.log(response);
            saveLogin(response);
        }
    }
    http.send(params);
}

function authStatus(){
	var storedUser = readItem("username");
	var storedauthKey = readItem("authKey");
	console.log(storedUser);
	console.log(storedauthKey);
}

function saveLogin(response){
	if(response.message == 'OK'){
		saveItem(response);
	}
}

function logout(){

}

function loadCSS(){

}

function saveCSS(){

}

function applyCSS(){

}

function compareCSS(){

}
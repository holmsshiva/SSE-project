var es  = new EventSource("http://127.0.0.1:8000/");

es.onmessage = function(event){
	console.log(event.data);

	var fs = document.getElementById("fromServer");
	fs.innerHTML += event.data+'</br>';
}
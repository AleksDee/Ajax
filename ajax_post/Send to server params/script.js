window.onload = function(){

	var inp_email = document.querySelector('input[name=email]');
	var inp_phone = document.querySelector('input[name=phone]');
	var inp_name = document.querySelector('input[name=name]');


	document.querySelector("#send").onclick = function(){
		var params = 'email=' + inp_email.value + '&' + 'phone=' + inp_phone.value + '&' + 'name=' + inp_name.value;
		ajaxPost(params);
		alert(params);
	}
}

function ajaxPost(params){
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if(request.readyState == 4){
			document.querySelector("#result").innerHTML = 'Форма отправлена!';
			document.querySelector('form').style.display = 'none';
		}
	}

	request.open('POST', 'app.php');
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send(params); 
}
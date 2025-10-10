window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	console.log(queryString);
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
    console.log(username);
	const password = urlParams.get('password')
    console.log(password);
	if(document.forms["myLogin"]["username"].value === username && document.forms["myLogin"]["password"].value === password){
        alert("Login Successfully");
        return true;
    } else{
        alert("Login Failed");
        document.forms["myLogin"]["username"].value = "";
        document.forms["myLogin"]["password"].value = "";
        return false;
    }
}

			
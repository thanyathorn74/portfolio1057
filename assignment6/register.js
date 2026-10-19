window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
    form["firstname"].required = true;
    form["lastname"].required = true;
    form["gender"][0].required = true;
    form["gender"][1].required = true;
    form["gender"][2].required = true;
    form["bday"].required = true;
    form["email"].required = true;
    form["username"].required = true;
    form["password"] [0] .required = true;
    form["password"] [1] .required = true;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms["myRegister"]["password"] [0].value;
    var repassword = document.forms["myRegister"]["password"] [1].value;
    if (password != repassword){
        alert("Password not match");
        document.forms["myRegister"]["password"] [0].value = "";
        var repassword = document.forms["myRegister"]["password"] [1].value = "";
        document.getElementById("errormsg").innerHTML = "*Password not match";
        return false;
    } else{
        alert("Register Successfully");
        return true;
    }
}
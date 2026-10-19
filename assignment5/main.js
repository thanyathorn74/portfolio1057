window.onload = function(){
    document.getElementById("top").innerHTML = "Welcome to the Forum";
}
let postClickCount = 0;
function postFunction(){
    postClickCount++;
    if (postClickCount==1){
    var message = document.getElementById("message").value ;
    document.getElementById("topic").innerHTML = message;
    }else if (postClickCount==2){
    var message = document.getElementById("message").value ;
    document.getElementById("reply1").innerHTML = message;
    }
    else if (postClickCount==3){
    var message = document.getElementById("message").value ;
    document.getElementById("reply2").innerHTML = message;
    }
}
function clearFunction(){
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
}
sighIn = () =>{
    let email = "Swagat@gmail.com";
    let password = "Password@123";
    if(document.getElementById("email").value == email && document.getElementById("password").value == password ){
        window.open("../");
    }
    else{
        document.getElementById("text").innerHTML = "Wrong Input";
    }
}
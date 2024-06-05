function signup(){
    let un= document.getElementById("username").value;
    let pw= document.getElementById("password").value;
    localStorage.setItem("user",un);
    localStorage.setItem("psword",pw);
    alert("Username registered successfully!")  
}

function login(){
    let unm=document.getElementById("uname").value;
    let pwd=document.getElementById("pword").value;

    if(unm==localStorage.getItem("user") && pwd==localStorage.getItem("psword")){
        alert("Credentials Verified. User Login Successful");
    }
    else{
        alert("Login Failed! Check credentials")
    }
    

}
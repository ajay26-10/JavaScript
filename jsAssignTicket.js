function movies(){
    let a=document.getElementById("name").value;
    let b=document.getElementById("movie").value;
    let c= parseInt(document.getElementById("tickets").value);

    localStorage.setItem("Name",a);
    localStorage.setItem("Movie",b);
    localStorage.setItem("Ticket",c);

    let details={
        n:"name",
        m:"movie",
        t:"ticket"
    }


    details.n=localStorage.getItem("Name");
    details.m=localStorage.getItem("Movie");
    details.t=localStorage.getItem("Ticket");

    document.getElementById("na").innerHTML= details.n;
    document.getElementById("mv").innerHTML= details.m;
    document.getElementById("tk").innerHTML= details.t;
}
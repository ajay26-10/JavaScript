function sum()
{
    let a = document.getElementById("fn").value;  //currently the value of a is stored as string and not number
    let b = document.getElementById("sn").value;  //currently the value of b is stored as string and not number
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    let c = a+b;
    document.getElementById("sm").innerHTML=c;
}

function mul()
{
    let a = document.getElementById("fn").value;  //currently the value of a is stored as string and not number
    let b = document.getElementById("sn").value;  //currently the value of b is stored as string and not number
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    let c = a*b;
    document.getElementById("ml").innerHTML=c;
}

function div()
{
    let a = document.getElementById("fn").value;  //currently the value of a is stored as string and not number
    let b = document.getElementById("sn").value;  //currently the value of b is stored as string and not number
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    let c = a/b;
    document.getElementById("dv").innerHTML=c;
}


    
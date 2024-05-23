square=()=>{
    let a=document.getElementById("num").value;
    a=Number.parseInt(a);
    let sq=a**2;
    document.getElementById("sqr").innerHTML=sq;
}

cube=()=>{
    let a=document.getElementById("num").value;
    a=Number.parseInt(a);
    let c=a**3;
    document.getElementById("cub").innerHTML=c;
}

si=()=>{
    let p=document.getElementById("prin").value;
    p=Number.parseInt(p);
    let r=document.getElementById("rate").value;
    r=Number.parseInt(r);
    let t=document.getElementById("time").value;
    t=Number.parseInt(t);

    let i=(p*r*t)/100;
    document.getElementById("sint").innerHTML=i;
}

ci=()=>{
    let p=document.getElementById("prin2").value;
    p=Number.parseInt(p);
    let r=document.getElementById("rate2").value;
    r=Number.parseFloat(r);
    let t=document.getElementById("time2").value;
    t=Number.parseInt(t);
    let n=document.getElementById("ncomp").value;
    n=Number.parseInt(n);

    let a=(p(*(1+(r/n))**(n*t)));
    let i= a-p;
    document.getElementById("cint").innerHTML=i;
}

fruit=()=>{
    let n=document.getElementById("fruit").value;
    let f= fruits[n-1];
    document.getElementById("fr").innerHTML=f;
}
function periC(x,y)
{
    p=2*x*y;
    return p;
}

function periR(x,y)
{
    p=2*(x+y);
    return p;
}

function periS(x)
{
    p=4*x;
    return p;
}

function areaC(x,y)
{
    a=x*y*y;
    return a;
}

function areaR(x,y)
{
    a=x*y;
    return a;
}

function areaS(x)
{
    a=x*x;
    return a;
}

function fullName()
        {
            let x=document.getElementById("fname").value;
            let y=document.getElementById("lname").value;
            let z=x+" "+y;
            document.getElementById("fullname").innerHTML=z;
        }

function detail()
        {
            
            let a=document.getElementById("fname2").value;
            let b=document.getElementById("lname2").value;
            let z=a+" "+b;
            let c=document.getElementById("ph").value;
            let d=document.getElementById("dob").value;
            document.getElementById("fullname2").innerHTML=z;
            document.getElementById("phone").innerHTML=c;
            document.getElementById("db").innerHTML=d;
        }

function submit()
{
    let a=document.getElementById("cid").value;
    let b=document.getElementById("cname").value;
    let c=document.getElementById("gr").value;
    let d=document.getElementById("cd").value;
    console.log("Certificate Id:" +a);
    console.log("Candidate Name:" +b);
    console.log("Grade: " +c);
    console.log("Date of Issue: " +d);
}
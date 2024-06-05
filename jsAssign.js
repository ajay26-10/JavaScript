function studname() {
    let n = document.getElementById("no").value;
    let p = students[n-1];
    document.getElementById("name1").innerHTML = p;
}

function swap(){
    let a=parseInt(document.getElementById("num1").value);
    let b=parseInt(document.getElementById("num2").value);

    a=a+b;

    b=a-b;

    a=a-b;

    document.getElementById("a").innerHTML=a;
    document.getElementById("b").innerHTML=b;
}

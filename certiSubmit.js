function submit()
{
    let a=document.getElementById("cid").value;
    let b=document.getElementById("cname").value;
    let c=document.getElementById("gr").value;
    let d=document.getElementById("cd").value;
    let e=document.getElementById("cr").value;

    localStorage.setItem("id",a);
    localStorage.setItem("name",b);
    localStorage.setItem("grade",c);
    localStorage.setItem("date",d);
    localStorage.setItem("course",e);
    
    let v=localStorage.getItem("id");
    let w=localStorage.getItem("name");
    let x=localStorage.getItem("grade");
    let y=localStorage.getItem("date");
    let z=localStorage.getItem("course");
    console.log("Course:" ,z);
    console.log("Certificate ID:" ,v);
    console.log("Name:" ,w);
    console.log("Grade:" ,x);
    console.log("Date of Issue:" ,y);
}
function studname() {
    let n = document.getElementById("no").value;
    let p = students[n-1];
    document.getElementById("name1").innerHTML = p;
}
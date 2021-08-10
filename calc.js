
//function for displaying values
function dis(val)
{
document.getElementById("edu").value+=val;
 }
//function for evaluation
function solve()
{
let x = document.getElementById("edu").value;
let y = eval(x);
document.getElementById("edu").value = y;
}
//function for factorial
function factorial(){
    let a = document.getElementById("fact").value;
    if(a == 0 || a == 1){
        return 1;
    }

    while (n > 1) {
        a *= (n-1);
        n--;
    }
    let ans = a;
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = "";
}
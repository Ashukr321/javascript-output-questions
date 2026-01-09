var a = 1; // hoisted in nature 
function b() {
    a = 10;
    return;
    function a() {} // here compiler not reach
}
b(); // here a = 10 ; value return from function b 
console.log(a); //  ✅
// var is the hoisted in nature  and function declaration is also hoisted in nature 
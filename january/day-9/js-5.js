var a = 5; // hoisted in nature 
// iife : immediate invokation function expression this call just after
(function() {
    console.log(a);// undefiend
    var a = 10;
    console.log(a); // 10  ✅
})();

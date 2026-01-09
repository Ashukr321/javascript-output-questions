
//  function declaration : hoisted with body  at compilation of the code 
// in 2 phase js code execute 
// 1 compilation phase ( memory allocation )
// 2. execution phase 

// fd ( function declaration )

function foo() {

    return bar(); // second
    // function expression
    var bar = function() {
        return "First";
    };
    //function declaraiton : hoisted inside the foo function declartion
    function bar() {
        return "Second";
    }
}
console.log(foo()); // output second
   
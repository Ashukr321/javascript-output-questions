let x = 20; // this is  also hoisted but they goes into the tdz ( temporal dead zone );

// function declaration 
function checkHoisting() {
    console.log(x); // undeifned or error ✅ 
    let x = 10; // new variable 
}
checkHoisting(); // 10

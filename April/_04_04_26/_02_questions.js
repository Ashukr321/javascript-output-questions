// function outer() {
//     let count = 0;
  
//     return function inner() {
//       count++;
//       console.log(count);
//     };
//   }
  
//   const fn1 = outer();
//   const fn2 = outer();
  
//   fn1();
//   fn1();
//   fn2();
//   fn1();
//   fn2();



const fetchUser = (userId)=>{
    setTimeout(()=>{
        console.log(userId)
    },1000);
}

fetchUser(34);// call and fetchUser finished
//  when it call it add to queue : and after 1s async operation done :  at that time userId IS ACCESS 
// 
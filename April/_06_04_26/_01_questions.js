

// const user = {
//     name :"Ashutosh"
// }

// var name = "ashu";

// // fd : 
// function sayHi(){
//     console.log(`good morning ${this.name}`);
// }
// sayHi.call(user);
// sayHi();



const userData = {
   name : "Ashutoh",
   getName: ()=>{
    console.log(this.name);
   }

}
// bec arrow function does has it's own this keywords 
userData.getName();


const obj = {
    name : "Ashu",
    greet(){
        function inner(){
           console.log(this.name);
        }
        inner();// inner function just call as normal function in this case : this output will be the as expected undefined right 
    }
}



obj.greet();
// undefined

// call , apply and bind are the methods through which we can se the set explicitly the context of the  this keywords : 


call(); //  we pass the reference of the object  this will execute the code imediialty 
apply(); // passing the parameters in the object form :object, array of params
bind();// take the object or arguments reference it return the function we can  call it later as per our requirement 

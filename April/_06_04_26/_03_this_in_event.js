
const btn = document.getElementById("btn");

btn.addEventListener("click",function(e){
    e.target.style.backgroundColor= "orange";
    // e.target : it return that element trigger the event 
})

// here we call the normal function so we can get the value of the this 
// in arrow function case  we  this point to the parent or outer scope 


// in the normal function the value of this is point to the element that 
// trigger the event 
// but in the case of the arrow function this point to the outer scope 

// e, this both look same but not name 
// e is pass by browser
// this basically return the where event is attached but 
// e is return 
// // e is use 
// actual click element 

// e  is widely use during the form submitted why 

// e is object pass via a browser that contains all the detials information 
// form info 
// submit actions 
// target element 
// default behaviro 

// e.preventDefault 
// by default the when we submit the form it reload the page form and lost all the data 

// to stop the default behavior we have to use the e.preventDefault();

// in the function first , we get as desc. first is event , object 
// because of industries convention everyone use e keywords 

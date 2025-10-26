
 const data= document.querySelector("#demo");
// console.log(data);

data.innerText = "hi";// here we try to update it 
console.log(data.innerText); // hi  
// console.log(document.querySelector("#text").innerText);



// innerText return those content which is visible on the screen this respect the css also 
// if we apply display:node in that it does' return it 
// textContent it return everything , either text is visible on screen or not 


// innerHtml  // html + data
// innerText // ony visible data text 
// innerContent  // this return text either it's visible on screen or not 

//selector 
// getElementById()
// querySelector(".") // in the class 
// querySelector("#") //  # is basically use for the id selector 


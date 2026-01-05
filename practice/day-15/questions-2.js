// working of  the spread operator 
// spread operator is use to expand the elements  at any place 
// where we use the three dots ... 


// what it does basically where we use it it pics all the elements from that object or array 
// and expands at that place simple every element 


const data1 = ["apple","banana","mango"];
const data2=[...data1,"orange","grapes"];


console.log(data2);
// ? is spread operator do shallow copy or deep copy
// spread operator do shallow copy 
// it means if we have an array of objects and we use spread operator to copy that array 
// then the new array will have the reference of the original object inside the array
// spread operator do sahllow copy not deep copy 

// in react in obejct we moslty use 
// shallow  spread operator only copy the first level of the object
// if  we have nested object inside the object then it will still have the reference of the orignal array 

const handleChange = (e)=>{
    
    const {name,value}= e.target;
    setFormData((prevData)=>({
            ...prevData, // copy and return  and set to the new state 
            [name]:value // [] is basically use for the dynamic key value 
            // name is came from e.target

    }))
}

// why we use () in arrow function  this automatically return the object 
// this is the rule of the javascript when we use it () 
// it retrun a object

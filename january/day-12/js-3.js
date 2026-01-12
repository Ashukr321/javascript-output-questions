// js string split methods 

// const { cacheSignal } = require("react");


// split methods basically split the data based on the passing parameters and return a new array 
const data = "Ashutosh";

const arrayData = data.split("");


console.log(arrayData);
console.log(data);
// How Split methods works
// split methods is the string methdos : take pattern as value and search in the string  list of subString search 
// if they found based on the pattern put into array and return  the array 

// 2 version of the split methods 
//1, split methods with only sperator : goes of the end of the string 
//2. split(sperator ,limit)
// limit is the non negative number that specify the number of limit  to be inclued means reuturn from array 

const myString = "Hello world How are you!";
const splits = myString.split(" ",3); // Hello world How
console.log(splits.length);

// Real applicaiton of the split methods 
// we have complete url path 

// extract the query path 
const urlPath = "https://myshop.com/product/p12345";
// output : p12345;

// convert all into the array  by / 
const parts = urlPath.split("/");
console.log(parts);
const queryPath = parts[parts.length-1];
console.log(queryPath); // p12345;

// 2nd real applications of the split methods 
const url = "https://api.example.com/products?page=2&limit=10&search=laptop";
const queryString = url.split("?")[1];//page=2&limit=10&search=laptop
const pairs = queryString.split("&");
console.log(pairs); //["page=2","limit=10","search=laptop"];
//  convert into queryParams 

// create the object literals 

const queryParams = {};

pairs.forEach((pair)=>{
    const [key,value]=pair.split("=");
    queryParams[key]=value;
})

console.log(queryParams);

// join back to the parts formate 
const queryParts = Object.entries(queryParams).map(([key,value])=>`${key}=${value}`).join("&");
console.log(queryParts);

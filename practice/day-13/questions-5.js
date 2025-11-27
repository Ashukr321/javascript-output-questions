let obj = { a: 1 };
// ? options 
console.log(obj.b?.c);// undefiend
// ?. this is know as optional chaining 
// if the value is not present then it gives not gives the error
// it's refer to optional value typically use in the typescript
// this safely access the value, it not throw error or break the ui 
// in place it will give the undefined

// real world application 
// api response we use this syntax 
// it help us to prevent the app crashes ( running application )
// reading the nested data at that time we also use this concept 
// dealing with dom element we also use this ?. chaining

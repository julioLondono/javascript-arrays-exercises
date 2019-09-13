let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
var result = par.replace(/\s+/g, '')
// console.log(result);
let low = result.toLowerCase(); //convert to lower case
// console.log(low);
let stringArray = low.split('');//convert each letter into an Array element
// console.log(stringArray);

for (let i = 0; i < stringArray.length; i++) {
  let character= stringArray[i];
  let counter=0;
  for(let j = 0; j < stringArray.length; j++) {
    if (character === stringArray[j]) {
      counter= counter + 1;
      // console.log(counter);
      counts[character]=counter;
    }
    // console.log(counter);
  }
}

console.log(counts);
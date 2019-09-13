var arr = [45,67,87,23,5,32,60];

//Your code here.
var newArray=[];
var n=arr.length-1
for(var i=0;i<arr.length;i++) {
  newArray.push(arr[n]);
  n--;
}

console.log(newArray);
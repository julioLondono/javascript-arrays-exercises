function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();
//Your code here


var n = myStupidArray.length-1;
var theLastOne = myStupidArray[n];
console.log(theLastOne);
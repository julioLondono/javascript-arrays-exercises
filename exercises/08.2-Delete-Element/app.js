var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
	//your code here
    // console.log(personName);
	let newPeople = [];
	people.forEach((i) => {
	  if(i!==personName) {
	    newPeople.push(i);
	  }
});
return newPeople;
}
console.log(deletePerson('daniella'));
// console.log(deletePerson('juan'));
// console.log(deletePerson('emilio'));
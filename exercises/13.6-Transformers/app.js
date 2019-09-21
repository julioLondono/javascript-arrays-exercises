let incomingAJAXData = [
	{ name: 'Mario', lastName: 'Montes' },
	{ name: 'Joe', lastName: 'Biden' },
	{ name: 'Bill', lastName: 'Clon' },
	{ name: 'Hilary', lastName: 'Mccafee' },
	{ name: 'Bobby', lastName: 'Mc birth' }
];

//your code here
let transformedData = incomingAJAXData.map(item => {
  return (item.name + " " + item.lastName);
})
console.log(transformedData);
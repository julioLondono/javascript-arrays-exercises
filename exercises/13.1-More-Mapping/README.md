#13.1 More mapping

The array.map method calls a function for each value in an array and then outputs a new array with the modified values.

incrementByOne = function (number) {
  return number + 1;
}

var myArray = [1, 2, 3, 4];

myArray.map(incrementByOne); //returns [2, 3, 4, 5]

More information about mapping:
Mapping Arrays (3:44)
Understanding The Javascript Map

Instructions:

Create a function named myFunction that will multiply each number by 3.
Use the Array.map function to run the myFunction function through each value in the array.
  4. Store the new array in a variable named newArray and console.log() the new array.

Hint:
The function will take a parameter with the original item being transformed and added into the new array.
Remember that your function must return each of the new items to be stored into the new array.
const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

it('the variable theLastOne should exist', function () {

    //then I import the index.js (which should have the alert() call inside)
    let _app = rewire('./app');
    const theLastOne = _app.__get__("theLastOne");

    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    //make sure that you call your variable "theLastOne"

    expect(theLastOne).toEqual(expect.anything()); //anything but null or undefined

});

it('theLastOne should be equal to the last element of myStupidArray', function () {

    //then I import the index.js (which should have the alert() call inside)
    let _app = rewire('./app');
    const myStupidArray = _app.__get__("myStupidArray");
    const theLastOne = _app.__get__("theLastOne");

    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    //make sure that you call your variable "theLastOne"

    expect(theLastOne).toBe(myStupidArray[myStupidArray.length - 1]);

});
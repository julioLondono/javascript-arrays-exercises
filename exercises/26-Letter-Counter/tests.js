const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

// it('the object counts should exist', function () {

//     //then I import the index.js (which should have the alert() call inside)
//     let _app = rewire('./app');
//     const object = _app.__get__("counts");

//     //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
//
//     expect(object).toEqual(expect.anything()); //anything but null or undefined

// });

it('use a nested loop to count the characters on the string', function () {

    //then I import the index.js (which should have the alert() call inside)
    let _app = rewire('./app');

    const object = _app.__get__("counts");

    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)

    expect(object).toBe({ l: 6, o: 6,r: 14,e: 18,m: 7,i: 19,p: 4,s: 14,u: 14,d: 4,t: 16,a: 8,c: 11,n: 10,g: 3,b: 4,q: 1,v: 1 });

});
const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

it('the Array should have 15 elements', function () {

    //then I import the index.js (which should have the alert() call inside)
    let _app = rewire('./app');
    const arr = _app.__get__("arr");

  expect(arr.length).toEqual(15); //make sure that the array lenght is 15

});


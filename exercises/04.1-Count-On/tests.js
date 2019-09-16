const fs = require('fs');
const path = require('path');
var rewire = require("rewire");


it('include all type objects from the provided array', function () {

    //then I import the index.js (which should have the alert() call inside)
    let _app = rewire('./app');

    const object = _app.__get__("hello");

    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)

    expect(object).toEqual([ [ 2, 1 ], { name: 'juan' } ]);

});
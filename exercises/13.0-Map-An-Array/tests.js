const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text );

describe('Look for the string match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('use a separate function to calculate the age and then call it on the return', function () {

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./app.js");

        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);

        //Do not change the elements of the provided array
        //This test was made on 09/21/2019, the current date might affect the results, modify the DOB on the array to match the expected results
        expect(_buffer).toBe("Hello, my name is Joe and I am 32 years old,"+"Hello, my name is Bob and I am 44 years old,"+"Hello, my name is Erika and I am 30 years old,"+"Hello, my name is Dylan and I am 19 years old,"+"Hello, my name is Steve and I am 16 years old");

    });

});
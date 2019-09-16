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

    it('add a ! to multiples of 5 and LIFTOFF', function () {

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./app.js");

        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(21);

        //Do not change the elements of the provided array
        expect(_buffer).toBe( "20!"+"19"+"18"+"17"+"16"+"15!"+"14"+"13"+"12"+"11"+"10!"+"9"+"8"+"7"+"6"+"5!"+"4"+"3"+"2"+"1"+"LIFTOFF");

    });

});
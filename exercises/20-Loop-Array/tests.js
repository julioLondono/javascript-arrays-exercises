const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text );

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('should loop the entire length of the array', function () {

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./app.js");

        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(55);

        //Do not change the elements of the provided array
        expect(_buffer).toBe("232"+"32"+"1"+"4"+"55"+"4"+"3"+"32"+"3"+"24"+"5"+"5"+"5"+"34"+"2"+"3"+"5"+"5365743"+"52"+"34"+"3"+"55"+"33"+"435"+"4"+"6"+"54"+"63"+"45"+"4"+"67"+"56"+"47"+"1"+"34"+"54"+"32"+"54"+"1"+"78"+"98"+"0"+"9"+"8"+"98"+"76"+"7"+"54"+"2"+"3"+"42"+"456"+"4"+"3321"+"5");

    });

});
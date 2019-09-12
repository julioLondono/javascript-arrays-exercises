const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('should loop from 1 to 17', function () {

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./app.js");

        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(17);

        //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
        expect(_buffer).toBe("1\n" + "2\n" + "3\n" + "4\n" + "5\n" + "6\n" + "7\n" + "8\n" + "9\n" + "10\n" + "11\n" + "12\n" + "13\n" + "14\n" + "15\n" + "16\n" + "17\n");

    });

});
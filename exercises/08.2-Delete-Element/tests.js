const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

it('the printed array should have one less element', function () {

    //then I import the index.js (which should have the alert() call inside)
    let _app = rewire('./app');
    const deletePerson = _app.__get__("deletePerson");
    const people = _app.__get__("people");

    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    //make sure that you call your variable "theLastOne"

    expect(deletePerson.length).toEqual(people.length - 1); //anything but null or undefined

});

it('deletePerson should be deleted from the array', function () {

    //then I import the index.js (which should have the alert() call inside)
    let _app = rewire('./app');
    const personName = _app.__get__("personName");
    const deletePerson = _app.__get__("deletePerson");

    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)

    expect(deletePerson).not.toContain(personName);

});
// We use the assert standard library to make assertions
const assert = require('assert')
const {evaluateResult} = require('../src/utils/getResult');


// We do not need to import the test functions since
// they are made global variables by test.js
test('should return', async () => {
    const jsonCode = '{"a":1}';
    const jsCode = 'console.log(SESSION.a);';
    assert.equal(await evaluateResult(jsonCode, jsCode), '1');
})


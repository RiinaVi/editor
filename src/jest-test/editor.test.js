const {evaluateResult} = require('../utils/getResult');

describe('result evaluation ', ()=>{
    it('should return ', async function () {
    const jsonCode = '{"a":1}';
    const jsCode = 'console.log(SESSION.a);';
        expect(await evaluateResult(jsonCode, jsCode)).toBe('1')
    });
})

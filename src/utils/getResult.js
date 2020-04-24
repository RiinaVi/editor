let logs = [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
function customLog(code) {
    logs.push(code);
}

function duplicateConsoleLog(code) {
    code = code.replace(/console\.log/g, 'customLog');
    return code;
}

async function evaluateResult(jsonCode, jsCode) {
    // @typescript-eslint/no-unused-vars
    // eslint-disable-next-line no-unused-vars
    let SESSION = JSON.parse(jsonCode);
    // eslint-disable-next-line no-eval
    await eval(`${duplicateConsoleLog(jsCode)}`);
    return logs.join('\n')
}


async function runCode(setError, setRes,
    jsonCode, jsCode) {
    setError(false);
    try {
        setRes(await evaluateResult(jsonCode, jsCode));
        logs = [];

    } catch (e) {
        setError(true);
        setRes(`Error!\n${e}`);
        console.log(e.message, e)
    }
}

module.exports = {
    evaluateResult,
    runCode
};

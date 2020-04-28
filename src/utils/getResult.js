let logs = [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
function customLog() {
    let str = [];
    for (let i = 0; i < arguments.length; i++) {
        str.push(JSON.stringify(arguments[i]));
    }
        logs.push(str.join(', '))
}

function duplicateConsoleLog(code) {
    code = code.replace(/console\.log/g, 'customLog');
    return code;
}

export async function evaluateResult(jsonCode, jsCode) {
    // @typescript-eslint/no-unused-vars
    // eslint-disable-next-line no-unused-vars
    let SESSION = JSON.parse(jsonCode);
    // eslint-disable-next-line no-eval
    await eval(`${duplicateConsoleLog(jsCode)}`);
    return logs.join('\n')
}


export async function runCode( setRes,
    jsonCode, jsCode) {
    try {
        setRes(await evaluateResult(jsonCode, jsCode));
        logs = [];

    } catch (e) {
        setRes(`Error!\n${e}`);
        console.log(e.message, e)
    }
}



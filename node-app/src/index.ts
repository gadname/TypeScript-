cosnt promptInput = async (text: string) => {
    printLine(`\n${text}\n>`, false )
    const input: string = await new Promise((resolve) => ProcessingInstruction.stdin.once('data', (data)=>
    resolve(data.toString())))
}

const printLine = (text: string, breakLine: boolean = true) => {
    process.stdout.write(text + (breakLine ? '\n' : ''))
}
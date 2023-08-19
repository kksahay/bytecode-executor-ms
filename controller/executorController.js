import fs from 'fs/promises'

const solutionChecker = async (req, res) => {
    const result = {
        passed: 0,
        failed: 0
    } 
    try {
        const files = await fs.readdir("./solution-output");
        for (const file of files) {
            const solOutput = await fs.readFile(`./solution-output/${file}`, 'utf-8')
            const actualOutput = await fs.readFile(`./output/${file}`, 'utf-8')

            if(solOutput === actualOutput) {
                result.passed++;
            } else {
                result.failed++;
            }
        }
    } catch (err) {
        console.error(err)
    }
    res.send(result)
}
export default solutionChecker
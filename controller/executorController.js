import fs from 'fs/promises'

const solutionChecker = async (req, res) => {
    const resultArr = []
    try {
        const files = await fs.readdir("./solution-output");
        for (const file of files) {
            const solOutput = await fs.readFile(`./solution-output/${file}`, 'utf-8')
            const actualOutput = await fs.readFile(`./output/${file}`, 'utf-8')

            if(solOutput === actualOutput) {
                resultArr.push(1)
            } else {
                resultArr.push(0)
            }
        }
    } catch (err) {
        console.error(err)
    }
    res.send(resultArr)
}
export default solutionChecker
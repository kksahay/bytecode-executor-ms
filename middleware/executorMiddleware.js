import { compiler, downloadFiles, cleanUp, runner } from '../helper/executorHelper.js'

export const codeCompiler = async (req, res, next) => {
    const buffer = req.files.file.data;
    try {
        await cleanUp()
        await compiler(buffer)
    } catch (error) {
        return res.status(400).send({
            message: "Compilation Error"
        })
    }
    next()
}

export const getTestCases = async (req, res, next) => {
    const { id } = req.params
    const tests = req.body.tests
    try {
        await downloadFiles(id, tests)
    } catch (error) {
        return res.status(400).send({
            message: "Server Unavailable"
        })
    }
    next()
}

export const codeRunner = async (req, res, next) => {
    const tests = parseInt(req.body.tests)
    try {
        await runner(tests)
    } catch (error) {
        return res.status(400).send({
            message: "Time Limit Exceeded"
        })
    }
    next()
}


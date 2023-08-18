import { compiler, downloadFiles } from '../helper/executorHelper.js'

export const getTestCases = async (req, res, next) => {
    const { id } = req.params
    const tests = req.body.tests
    const pid = parseInt(id)

    try {
        await downloadFiles(pid, tests)
        req.download_success = true
    } catch (error) {
        return res.send(error)
    }
    next()
}
export const codeRunner = async (req, res, next) => {
    const download_success = req.download_success;
    const tests = req.body.tests
    if (!download_success) {
        return res.status(500).send({
            message: "Cannot download testcases"
        });
    }
    
    try {
        const buffer = req.files.file.data;
        await compiler(buffer, tests)
        res.send({ ok: true })
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Error processing the file" })
    }
    next()
}


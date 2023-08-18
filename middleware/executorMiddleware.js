import { compiler, downloadFiles } from '../helper/executorHelper.js'

export const getTestCases = async (req, res, next) => {
    const { id } = req.params
    const { tests } = req.body
    const testcases = parseInt(tests)
    const pid = parseInt(id)

    try {
        await downloadFiles(pid, testcases)
        req.download_success = true
    } catch (error) {
        return res.send(error)
    }
    next()
}
export const codeRunner = async (req, res, next) => {
    const download_success = req.download_success
    if(!download_success) {
        return res.status(500).send({
            message: "Cannot download testcases"
        })
    }
    try {
        const { tests } = req.body
        const testcases = parseInt(tests)
        const buffer = req.files.file.data;
        await compiler(buffer, testcases)
        res.send({ ok: true })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error processing the file" });
    }
    next();
};


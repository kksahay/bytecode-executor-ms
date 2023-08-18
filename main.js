import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { getTestCases, codeRunner } from './middleware/executorMiddleware.js'
import solutionChecker from './controller/executorController.js'
import fileUpload from 'express-fileupload'
dotenv.config()

const app = express()
app.use(cors())
app.use(fileUpload())
app.use(express.json());
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send({
        success: true
    })
})

app.post('/submit/:id', solutionChecker)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
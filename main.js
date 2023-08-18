import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { getTestcase, codeRunner } from './middleware/executorMiddleware.js'
import solutionChecker from './controller/solutionChecker.js'

dotenv.config()

const app = express()
app.use(cors())

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send({
        success: true
    })
})

app.post('/submit/:id', getTestcase, codeRunner, solutionChecker)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
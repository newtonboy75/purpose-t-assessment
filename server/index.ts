import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import router from './router'

const PORT = 5001

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(compression())

app.use('/', router())

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})
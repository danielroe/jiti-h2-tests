import express from 'express'
import bodyParser from 'body-parser'
// @ts-ignore
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

app.get('/csrf', (_req, res) => {
  res.cookie('XSRF-TOKEN', 'xsrf-token')
  res.status(204)
  res.send()
})

export default app

import express from 'express'
import expressOasGenerator from 'express-oas-generator'

const app: express.Express = express()

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Get
const router: express.Router = express.Router()
router.get('/', (req: express.Request, res: express.Response) => {
  res.send("Hello World 4")
})
router.get('/hello', (req: express.Request, res: express.Response) => {
  res.send("hello world ")
})
app.use(router)

// express-oas-generator : OpenAPIドキュメントの自動生成
expressOasGenerator.init(app, {})

// 3000番ポートでAPIサーバ起動
app.listen(3000, () => { console.log('Example app listening on port 3000!') })

import express, { urlencoded } from "express"
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDb from "./config/db"
import { NODE_ENV, PORT, APP_ORIGIN } from "./constants/env"

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
)
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send(200).json({ status: "health" })
})

app.listen(PORT, async () => {
  console.log(`server listen to ${PORT} in ${NODE_ENV} environment`)
  await connectDb()
})

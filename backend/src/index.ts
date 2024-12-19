import express, { urlencoded } from "express"
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import { StatusCodes } from "http-status-codes"
import connectDb from "./config/db"
import { NODE_ENV, PORT, APP_ORIGIN } from "./constants/env"
import errorHandler from "./middleware/errorHandler"

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

app.get("/", async (req, res, next) => {
  try {
    res.send(StatusCodes.OK).json({ status: "health" })
  } catch (error) {
    next(error)
  }
})

app.use(errorHandler)

app.listen(PORT, async () => {
  console.log(`server listen to ${PORT} in ${NODE_ENV} environment`)
  await connectDb()
})

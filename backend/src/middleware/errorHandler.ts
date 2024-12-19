import { ErrorRequestHandler } from "express"

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`path : ${req.path} ${error}`)
  res.status(500).json({ msg: error.message })
}

export default errorHandler

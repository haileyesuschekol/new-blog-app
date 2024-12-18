import mongoose from "mongoose"
import { MONGO_URI } from "../constants/env"
const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("successfully connected to DB")
  } catch (err) {
    console.log("Error while connecting to DB", err)
    process.exit(1)
  }
}

export default connectDb

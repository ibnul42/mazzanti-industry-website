const path = require("path")
const express = require("express")
require("dotenv").config()
const color = require("colors")
const cors = require("cors")
const connectDB = require("./config/db")
const { errorHandler } = require("./middleware/errorMiddleware")

connectDB()

const port = process.env.PORT || 6501

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', (req, res) => {
  res.status(200).json({ msg: 'Hello, world!' })
})
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/admin", require("./routes/adminRoutes"))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
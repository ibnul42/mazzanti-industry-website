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

app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/admin", require("./routes/adminRoutes"))

// const fs = require("fs")

// server frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")))
//   app.use(express.static('/'))

//   app.use((req, res) =>
//     res.sendFile(path.join(__dirname, "../", "frontend", "dist", "index.html"))

//   )
// } else {
//   app.get("/", (req, res) => res.send("please setup production server before"))
// }

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
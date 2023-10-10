const cors = require("cors");
const express = require("express")

const app = express()
app.use(express.json())
app.use(cors())


app.listen(4000, () => {
    console.log("server is runing")
} )

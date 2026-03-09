const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

//health route
app.get("/", (req, res)=> {
    res.send("API Tester Backend Running")
})

app.post("/api/request", async(req,res)=> {
    try {
        const { url, method, headers, body } = req.body
        const response = await axios({
            url,
            method,
            headers,
            data:body
        })

        res.json({
            status: response.status,
            data: response.data
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})
const PORT = 5000

app.listen(PORT, () => {
    console.log('Backend running on port http://localhost:5000')
})
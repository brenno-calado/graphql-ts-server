import express from "express"
const app = express()
const PORT = 9001

app.get("/health", (_req, res) => res.status(200).send("Server is running!"))

app.listen(PORT)
console.log(`server is listening on port ${PORT}...\n`)

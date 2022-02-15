import express from 'express'

const app = express()

app.get("/health", (_req, res) => res.status(200).send("Server is running!"))

export { app }

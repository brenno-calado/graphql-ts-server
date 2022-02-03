import express from 'express'
import { properties } from '@test/mock'

const app = express()

app.use(express.json())

app.get("/health", (_req, res) => res.status(200).send("Server is running!"))
app.get("/properties", (_req, res) => res.status(200).json(properties))
app.patch("/properties/:id/cancel", (req, res) => {
  for (let i = 0; i < properties.length; i += 1) {
    if (properties[i].id === req.params.id) {
      return res.status(200).json({
        status: 'successfully deleted',
        property: properties.splice(i, 1)
      })
    }
  }
  return res.status(404).json({ status: 'property not found' })
})

export { app }

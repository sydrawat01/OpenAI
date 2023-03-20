import express from 'express'
import { question } from '../controllers/question.controller'

const router = express.Router()

router.get('/ask', question)

export { router as askRoute }

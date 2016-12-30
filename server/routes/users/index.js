import express from 'express'
import { signup } from '../../shared/validations'

let router = express.Router()

router.post('/', (req, res) => {
  console.log('User Post:', req.body)
  const {errors, isValid } = signup.validateInput(req.body)

  if(!isValid) {
    res.status(400).json(errors)
  } else {
    res.json({ success: true , data: req.body })
  }
})

export default router
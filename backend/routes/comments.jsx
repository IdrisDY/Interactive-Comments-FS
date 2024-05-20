const express = require('express')
const router = express.Router()

const {getAllComments} = require('../controllers/commentControllers')

router.get('/', getAllComments)

module.exports = router
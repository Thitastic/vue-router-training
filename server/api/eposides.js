const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()


const uri = 'mongodb+srv://thitastic:ten96nctu@popcorn-main.5rlgx.mongodb.net/?retryWrites=true&w=majority'

router.get('/g/:genre', async (req, res)=>{
    res.send(await findGenre(req.params.genre))
} )
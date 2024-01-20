const express = require ('express')
const { user } = require('../model/userInfo')

const router = express.Router()

router.post('/', async (req, res) => {
    try{
        const newUser = new user(req.body)
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch(error){
        res.status(400).json({ error: error.message})
    }
})

router.get('/', async (req, res) => {
    const users = await user.find({})
    console.log(users)
    res.status(200).json({
        data: users
    })
})

router.get('/:userName', async (req,res) => {
    try {
        const user = await user.findById(req.params.userName)
        if(!user){
            return res.status(404).json({ msg: "User not found..."})
        }
        res.status(200).json({ data: user})
    } catch(error){
        res.status(400).json({ error: error.message})
    }
})

module.exports = router;
router = require('express').Router();

const Reply = require('./reply-model');


router.get('/', async (req, res) => {
    try{
        replies = await Reply.find();
        res.status(200).json(replies)
    }catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try{
        reply = await Reply.findById(req.params.id);
        res.status(200).json(reply)
    }catch(error){
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) => {
    try{
        replies = await Reply.add(req.body)
        res.status(200).json(replies)
    } catch(error){
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        count = await Reply.destroy(req.params.id)
    
        if (count > 0){
            res.status(200).json("The Reply has been deleted")
        } else {
            res.status(401).json("There has been an error deleting the reply")
        }
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;
router = require('express').Router();

const Comment = require('./comment-model');


router.get('/', async (req, res) => {
    try{
        comments = await Comment.find();
        res.status(200).json(comments)
    }catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try{
        comment = await Comment.findById(req.params.id);
        res.status(200).json(comment)
    }catch(error){
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) => {
    try{
        comment = await Comment.add(req.body)
        res.status(200).json(comment)
    } catch(error){
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        count = await Comment.destroy(req.params.id)
    
        if (count > 0){
            res.status(200).json("The comment has been deleted")
        } else {
            res.status(401).json("There has been an error deleting the comment")
        }
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;
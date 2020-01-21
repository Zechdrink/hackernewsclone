router = require('express').Router();

const Post = require('./post-model');


router.get('/', async (req, res) => {
    try{
        posts = await Post.find();
        res.status(200).json(posts)
    }catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;
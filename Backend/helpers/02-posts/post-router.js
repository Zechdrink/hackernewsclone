router = require('express').Router();

const Post = require('./post-model');
const User = require('../01-users/user-model')


router.get('/', async (req, res) => {
    try{
        posts = await Post.find();
        res.status(200).json(posts)
    }catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try{
        posts = await Post.findById(req.params.id);
        res.status(200).json(posts)
    }catch(error){
        res.status(500).json(error);
    }
})

router.post('/:user_id', async (req, res) => {
    try{
        user = await User.findById(req.params.user_id)
        posts = await Post.add({title: req.body.title, link: req.body.link, author: user.username, user_id: req.params.user_id})
        res.status(200).json(posts)
    } catch(error){
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        count = await Post.destroy(req.params.id)
    
        if (count > 0){
            res.status(200).json("The post has been deleted")
        } else {
            res.status(401).json("There has been an error deleting the post")
        }
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;
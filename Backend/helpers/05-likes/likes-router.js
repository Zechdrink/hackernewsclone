router = require('express').Router();

const Like = require('./likes-model');
const Post = require('../02-posts/post-model')


router.get('/', async (req, res) => {
    try{
        likes = await Like.find();
        res.status(200).json(likes)
    }catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try{
        like = await Like.findById(req.params.id);
        res.status(200).json(like)
    }catch(error){
        res.status(500).json(error);
    }
})

//To post a like we need to ensure one doesnt already exist.
//Need to check to see if there is already a like with matching user, if so unlike (delete like).
//Else the post gets liked

router.post('/:user_id', async (req, res) => {
    try{
        existing = await Like.findBy(req.params.user_id, req.body.post_id)
        // hasnt been liked yet so the like gets added to DB
        if (!existing){
            const post = await Post.findById(req.body.post_id)
            const likes = await Like.add({post_id: req.body.post_id, user_id: req.params.user_id})
            console.log(post.likes)

            update = await Post.likeUpdater(req.body.post_id, post.likes + 1)

            res.status(200).json({likes: likes, update: post.likes + 1})
        }
        // has already been liked so now it is being unliked/removed from DB
        else {
            count = await Like.destroy(existing.id)
            if (count > 0){
                const post = await Post.findById(req.body.post_id)
                update = await Post.likeUpdater(req.body.post_id, post.likes - 1)
                res.status(200).json({message: "the post has been unliked!", update: post.likes - 1})
            } else {
                res.status(401).json("There has been an error unliking the post")
            }
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        count = await Like.destroy(req.params.id)
    
        if (count > 0){
            res.status(200).json("The post has been unliked")
        } else {
            res.status(401).json("Issues unliking the post.")
        }
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;
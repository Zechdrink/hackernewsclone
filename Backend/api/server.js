const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

const { authenticate } = require('../helpers/00-auth/auth-middleware');

const authRouter = require('../helpers/00-auth/auth-router')
const userRouter = require('../helpers/01-users/user-router');
const postRouter = require('../helpers/02-posts/post-router')
const commentRouter = require('../helpers/03-comments/comment-router')
const replyRouter = require('../helpers/04-replies/reply-router')
const likeRouter = require('../helpers/05-likes/likes-router')


server.use(cors())
server.use(express.json());
server.use(helmet());

server.use('/auth', authRouter);
server.use('/users', userRouter);
server.use('/posts', postRouter)
server.use('/comments', commentRouter);
server.use('/replies', replyRouter);
server.use('/likes', likeRouter);

server.get('/', (req, res) => {
    res.send("Server is up and running")
});

module.exports = server;
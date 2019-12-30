const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// GETS POSTS
router.get('/', async (req,res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch(err) {
        res.json({message: err});
    }
});

router.post('/', async (req,res) => {
    try {
        console.log(req);
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        });
        console.log(post)
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err });
    }
});


// SUBMITS A POST
router.get('/:postId', async (req, res) => {
    try{
        console.log(req.params.postId);
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
            res.json( {message: err});
    }
});

router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId })
        res.json(removedPost)
    } catch {
        res.json( { message:err} )
    }
});

router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: { title: req.body.title }}
        );
        res.json(updatedPost);
    }catch(err){
        res.json( {message: err});
    }
});
router.patch
module.exports = router;

import express, { Router } from 'express'
import { getRepository } from 'typeorm'
import Post from '../models/Post'

var router: Router = express.Router();

router.post('/', function (req, res) {
    const post = req.body;
    const PostRepository = getRepository(Post);
    PostRepository.save(post);
    res.send(post);
});
export default router;
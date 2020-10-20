"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Post_1 = __importDefault(require("../models/Post"));
var router = express_1.default.Router();
router.post('/', function (req, res) {
    const post = req.body;
    const PostRepository = typeorm_1.getRepository(Post_1.default);
    PostRepository.save(post);
    res.send(post);
});
exports.default = router;

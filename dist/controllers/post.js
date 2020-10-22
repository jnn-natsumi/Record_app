"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
router.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const PostRepository = typeorm_1.getRepository(Post_1.default);
        const posts = yield PostRepository.find();
        res.send(posts);
    });
});
// 記録詳細
router.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const PostRepository = typeorm_1.getRepository(Post_1.default);
        const posts = yield PostRepository.find();
        res.send(posts);
    });
});
exports.default = router;

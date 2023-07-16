const PostDto = require("../dtos/PostDto");
const Post = require("../models/Post");
const { validationResult } = require("express-validator");
const tokenService = require("../service/TokenService");
const ApiError = require("../exceptions/api-error");

class PostController {
  async createPost(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при добавлении поста", errors });
      }
      const post = new Post(req.body);
      const postData = new PostDto(await post.save())

      res.json(postData);
    } catch (e) {
      console.log(e);
    }
  }

  async getPosts(req, res) {
    try {
      const userData = req.user;
      const posts = await Post.find({author: userData.id});
      const newPosts = posts.map((post) => new PostDto(post));
      res.json(newPosts);
    } catch (e) {
      console.log(e);
    }
  }

  async getFilteredPosts(req, res) {
    const { mood = 'all', searchString = '' } = req.query;
    const userData = req.user;
    console.log(req.query)
    const filteredQuery = {};
    if (mood !== "all") {
      filteredQuery.mood = mood;
    }
    if (searchString !== "") {
      filteredQuery.$text = { $search: searchString };
    }
    const posts = await Post.find({author: userData.id, ...filteredQuery});
    const newPosts = posts.map((post) => new PostDto(post));
    res.json(newPosts);
  }
}

module.exports = new PostController();

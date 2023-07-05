const PostDto = require("../dtos/PostDto");
const Post = require("../models/Post");
const { validationResult } = require("express-validator");

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
      const posts = await Post.find();
      const newPosts = posts.map((post) => new PostDto(post));
      res.json(newPosts);
    } catch (e) {
      console.log(e);
    }
  }

  async getFilteredPosts(req, res) {
    const { mood, searchString } = req.body;
    const filterdQuery = {};
    if (mood !== "all") {
      filterdQuery.mood = mood;
    }
    if (searchString !== "") {
      filterdQuery.$text = { $search: searchString };
    }
    const posts = await Post.find(filterdQuery);
    res.json(posts);
  }
}

module.exports = new PostController();

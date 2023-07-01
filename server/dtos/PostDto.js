module.exports = class PostDto {
  id;
  title;
  content;
  image;
  mood;
  author;

  constructor(model) {
    this.title = model.title;
    this.id = model._id;
    this.content = model.content;
    this.image = model.image;
    this.mood = model.mood;
    this.author = model.author;
  }
};

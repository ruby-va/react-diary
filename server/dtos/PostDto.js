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
    this.image = this.filenameToStaticUrl(model.image);
    this.mood = model.mood;
    this.author = model.author;
  }

  filenameToStaticUrl(filename) {
    return filename !== null ? process.env.API_URL + `/${filename}` : null;
  }
};

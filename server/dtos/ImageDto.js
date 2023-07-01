module.exports = class PostDto {
  title;
  url;
  id;
  filename;

  constructor(model) {
    this.title = model.title;
    this.id = model._id;
    this.filename = model.filename;
    this.url = this.filenameToStaticUrl(this.filename);
  }

  filenameToStaticUrl(filename) {
    return process.env.API_URL + `/${filename}`;
  }
};

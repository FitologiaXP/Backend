const Post = require("../models/Post");
const myMongo = require('mongoose-serverless');

module.exports = {
  async index( req, res ) {

    try {
      await myMongo.connectToDatabase(process.env.DATABASE_URL);
      const posts = await Post.find();
        
      return res.send(posts);    
    } catch (err) {
      return res.status(500).json({ 
        error: "Não foi possível recuperar os posts",
        detail: err 
      })
    }

  },

  async store( req, res ) {
    const { name, content, category } = req.body;

    await myMongo.connectToDatabase(process.env.DATABASE_URL);

    try {
      const post = await Post.create({
        name,
        content,
        category
      });

      return res.status(200).json(post);
    } catch (err) {
      return res.status(500).json({ 
        error: "Não foi possível cadastrar um post",
        detail: err 
      })
    }

  }
}
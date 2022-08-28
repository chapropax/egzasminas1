const express = require('express');
const cors = require('cors');

require('dotenv').config();

const connectMongoDB = require('./config/db.js');
const Post = require('./models/post.model.js');

const app = express();
const PORT = process.env.PORT || 5000;
// -- Connecting DB
connectMongoDB();
// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.DOMAIN || 'http://127.0.0.1:5501',
  })
);

// Routes

app.get('/clients', async (req, res) => {
  try {
    const posts = await Post.find();

    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});
app.get('/clients/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) res.status(404).json({ message: 'Post not found.' });

    res.json(post);
  } catch (error) {
    console.log(error);
  }
});
app.post('/register/', async (req, res) => {
  try {
    const data = req.body;

    const isDataValid = new Post(data);

    const savedData = await isDataValid.save();

    res.status(201).json(savedData);
  } catch (error) {
    console.log(error);
  }
}); // PUT single post based on id
app.put('/clients/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updateDate = req.body;
    console.log(id);
    await Post.findByIdAndUpdate(id, updateDate);
    const updatedPost = await Post.findById(id);

    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/clients/:id', async (req, res) => {
  try {
    const id = req.params.id;

    await Post.findByIdAndDelete(id);

    res.json({ message: 'Post deleted.' });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

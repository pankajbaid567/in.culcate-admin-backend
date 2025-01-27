const articleShortService = require('../services/Article_short');

// Fetch all short articles
const fetchShortArticles = async (req, res) => {
  try {
    const articles = await articleShortService.getAllArticles();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch single short article by ID
const fetchShortArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await articleShortService.getArticleById(id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new short article
const addShortArticle = async (req, res) => {
  const { title, content, shortDescription, categoryId, image } = req.body;
  try {
    const newArticle = await articleShortService.createArticle({
      title, content, shortDescription, categoryId, image
    });
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a short article
const editShortArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, shortDescription, categoryId, image } = req.body;
  try {
    const updatedArticle = await articleShortService.updateArticle(id, {
      title, content, shortDescription, categoryId, image
    });
    if (!updatedArticle) return res.status(404).json({ message: 'Article not found' });
    res.json(updatedArticle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a short article
const removeShortArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArticle = await articleShortService.deleteArticle(id);
    if (!deletedArticle) return res.status(404).json({ message: 'Article not found' });
    res.json({ message: 'Article deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get count of short articles
const getTotalShortArticlesCount = async (req, res) => {
  try {
    const count = await articleShortService.getArticlesCount();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  fetchShortArticles,
  fetchShortArticleById,
  addShortArticle,
  editShortArticle,
  removeShortArticle,
  getTotalShortArticlesCount,
};
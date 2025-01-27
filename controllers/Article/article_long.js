const articleLongService = require('../services/Article_long');

// Fetch all long articles
const fetchLongArticles = async (req, res) => {
  try {
    const articles = await articleLongService.getAllArticles();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch single long article by ID
const fetchLongArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await articleLongService.getArticleById(id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new long article
const addLongArticle = async (req, res) => {
  const { title, content, categoryId } = req.body;
  try {
    const newArticle = await articleLongService.createArticle({
      title, content, categoryId
    });
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a long article
const editLongArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryId } = req.body;
  try {
    const updatedArticle = await articleLongService.updateArticle(id, {
      title, content, categoryId
    });
    if (!updatedArticle) return res.status(404).json({ message: 'Article not found' });
    res.json(updatedArticle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a long article
const removeLongArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArticle = await articleLongService.deleteArticle(id);
    if (!deletedArticle) return res.status(404).json({ message: 'Article not found' });
    res.json({ message: 'Article deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get count of long articles
const getTotalLongArticlesCount = async (req, res) => {
  try {
    const count = await articleLongService.getArticlesCount();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  fetchLongArticles,
  fetchLongArticleById,
  addLongArticle,
  editLongArticle,
  removeLongArticle,
  getTotalLongArticlesCount,
};

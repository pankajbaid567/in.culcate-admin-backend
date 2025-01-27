const express = require("express");
const router = express.Router();
const articleShortController = require("../controllers/Article/article_short");  // import updated controller

// Route for getting all short articles
router.get("/get_all_the_Article", articleShortController.fetchShortArticles);  // Updated route

// Route for getting a single short article by ID
router.get("/:id", articleShortController.fetchShortArticleById);  // No changes needed

// Route for creating a new short article
router.post("/create_article", articleShortController.addShortArticle);  // Updated route

// Route for updating a short article by ID
router.patch("/update_article/:id", articleShortController.editShortArticle);  // Updated route

// Route for deleting a short article by ID
router.delete("/delete_article/:id", articleShortController.removeShortArticle);  // Updated route

module.exports = router;

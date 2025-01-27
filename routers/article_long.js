const express = require("express");
const router = express.Router();
const articleLongController = require("../controllers/Article/article_long");  // import long article controller

// Route for getting all long articles
router.get("/get_all_the_Article", articleLongController.fetchLongArticles);  // Updated route

// Route for getting a single long article by ID
router.get("/:id", articleLongController.fetchLongArticleById);  // No changes needed

// Route for creating a new long article
router.post("/create_article", articleLongController.addLongArticle);  // Updated route

// Route for updating a long article by ID
router.patch("/update_article/:id", articleLongController.editLongArticle);  // Updated route

// Route for deleting a long article by ID
router.delete("/delete_article/:id", articleLongController.removeLongArticle);  // Updated route

module.exports = router;

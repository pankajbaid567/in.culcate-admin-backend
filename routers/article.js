const express = require("express");
const router = express.Router();
const article = require("../controllers/Article/article_short");

router.get("/get_all_the_Article", articleController.fetchArticles);  // updated route
router.get("/:id", articleController.fetchArticleById);  // no change needed, it still works for fetching a single article
router.post("/create_article", articleController.addArticle);  // updated route
router.patch("/update_article/:id", articleController.editArticle);  // updated route
router.delete("/delete_article/:id", articleController.removeArticle);  // updated route

module.exports = router;

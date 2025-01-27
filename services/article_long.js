const prisma = require('../prisma');

// Service to get all long articles
const getAllArticles = async () => {
  return await prisma.article.findMany({
    where: {
      content: {
        length: {
          gte: 1000,  // You can customize the condition to define long articles
        }
      }
    },
    include: {
      category: true,
      tags: true,
    },
  });
};

// Service to get a single long article by its ID
const getArticleById = async (id) => {
  return await prisma.article.findUnique({
    where: { id: parseInt(id) },
    include: {
      category: true,
      tags: true,
    },
  });
};

// Service to create a long article
const createArticle = async ({ title, content, categoryId }) => {
  return await prisma.article.create({
    data: {
      title,
      content,
      categoryId,
    },
  });
};

// Service to update a long article
const updateArticle = async (id, { title, content, categoryId }) => {
  return await prisma.article.update({
    where: { id: parseInt(id) },
    data: { title, content, categoryId }
  });
};

// Service to delete a long article
const deleteArticle = async (id) => {
  return await prisma.article.delete({
    where: { id: parseInt(id) }
  });
};

// Service to get total count of long articles
const getArticlesCount = async () => {
  return await prisma.article.count({
    where: {
      content: {
        length: {
          gte: 1000,  // Long articles condition
        },
      },
    },
  });
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getArticlesCount
};

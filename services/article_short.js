const prisma = require('../prisma');

// Service to get all short articles
const getAllArticles = async () => {
  return await prisma.article.findMany({
    where: {
      content: {
        length: {
          lt: 1000,  // You can customize the condition to define short articles
        }
      }
    },
    include: {
      category: true,
      tags: true,
    },
  });
};

// Service to get a single short article by its ID
const getArticleById = async (id) => {
  return await prisma.article.findUnique({
    where: { id: parseInt(id) },
    include: {
      category: true,
      tags: true,
    },
  });
};

// Service to create a short article
const createArticle = async ({ title, content, shortDescription, categoryId, image }) => {
  return await prisma.article.create({
    data: {
      title,
      content,
      shortDescription,
      categoryId,
      image
    },
  });
};

// Service to update a short article
const updateArticle = async (id, { title, content, shortDescription, categoryId, image }) => {
  return await prisma.article.update({
    where: { id: parseInt(id) },
    data: { title, content, shortDescription, categoryId, image }
  });
};

// Service to delete a short article
const deleteArticle = async (id) => {
  return await prisma.article.delete({
    where: { id: parseInt(id) }
  });
};

// Service to get total count of short articles
const getArticlesCount = async () => {
  return await prisma.article.count({
    where: {
      content: {
        length: {
          lt: 1000,  // Short articles condition
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

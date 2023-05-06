const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories, include its associated Products
  try {
    const categoriesData = await Category.findAll({
      include: [{model: Product}]
    });
    if (!categoriesData) {
      res.status(200).json({message: 'No categories found'});
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value, include its associated Products
  try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categoryById) {
      res.status(200).json({message: 'No categories found'});
      return;
      }
      res.status(200).json(categoryById)
  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', async (req, res) => {
  // create a new category
  try {} catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {} catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {} catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;

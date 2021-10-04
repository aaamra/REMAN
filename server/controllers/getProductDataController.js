const { productDataQuery } = require('../database/queries');

const getProductData = (req, res) => {
  productDataQuery(req.params.id).then((data) => res.json(data));
};

module.exports = getProductData;

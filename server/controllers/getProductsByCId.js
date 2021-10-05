const {productByCategory} = require('../database/queries');



const getProductByCId = (req, res) => {
    const category_id = req.params;

    productByCategory(categoryId)
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ status: 500, msg: 'Server Error' }));
};

module.exports = {getProductByCId};

const Product = require('../models/Product');
const { mongoosesToObject } = require('../util/mongoose');


class CategoryController{
    //[GET/PRODUCT]
    index(req, res, next){
        Product.find({})
            .then(products => {
                res.render('category', {
                    products: mongoosesToObject(products)
                })
            })
            .catch(next);
    }
}

module.exports = new CategoryController;
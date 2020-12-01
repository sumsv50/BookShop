const Product = require('../models/Product');
const { mongooseToObject } = require('../util/mongoose');

class ProductController {
    //[GET /product/:slug]
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then(product => {
                if (product) {
                    res.render('product-detail', {
                        product: mongooseToObject(product)
                    })
                }
                else (res.render('404'));
            })
            .catch(next)
    }

   
}
module.exports = new ProductController;
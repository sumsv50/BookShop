const siteRouter = require('./site');
const categoryRouter = require('./category');
const productsRouter = require('./products');

function route(app){

    app.use('/', siteRouter);
    app.use('/category', categoryRouter);
    app.use('/products', productsRouter);

    //cath 404
    app.use(function(req, res, next){
        res.status(404).render('404');
    });
}

module.exports = route;
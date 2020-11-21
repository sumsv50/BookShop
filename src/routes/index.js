const siteRouter = require('./site');

function route(app){
    app.use('/', siteRouter);

    //cath 404
    app.use(function(req, res, next){
        res.status(404).render('404');
    });
}

module.exports = route;
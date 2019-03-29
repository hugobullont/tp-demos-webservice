module.exports = (app) => {
    const pages = require('../controllers/pages.controllers.js');

    app.post('/pages',pages.set);
    app.get('/pages',pages.get);
}
module.exports = (app) => {
    const ble = require('../controllers/ble.controllers.js');

    //Crear una Clase
    app.post('/ble',ble.set);

    // Retrieve all Clases
    app.get('/ble', ble.get);

};
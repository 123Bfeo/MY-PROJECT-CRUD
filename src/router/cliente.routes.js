const express = require('express');
const route = express.Router();
const controllers = require('../controllers/clienteControllers');
//utilizacion de Multer
const multer = require('multer');
const multerDiskStorage = require('../middleware/multer.middleware');
const fileUpload = multer({ storage: multerDiskStorage })
// requiro las validaciones 
const validationCreate = require('../middleware/createValidation');


route.get('/', controllers.home);
route.get('/list', controllers.listCustomer);
route.get('/create', controllers.createCustomer);
route.post('/create', fileUpload.single("avatar"), validationCreate, controllers.newCustomer);
route.post('/search', controllers.searchCustomer);
route.get('/edit/:id', controllers.editCustomer);
route.put('/edit/:id', controllers.updateCustomer)
route.delete('/delete/:id', controllers.deleteCustomer);


module.exports = route;

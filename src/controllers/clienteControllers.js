const db = require('../../database/models');
const { validationResult } = require('express-validator');
const { render } = require('express/lib/response');
const mainControllers = {

    //Home
    home: (req, res) => {
        res.render('Home')
    },

    //Listar todos Los Cliente
    listCustomer: (req, res) => {
        db.Cliente.findAll().then(function (clientes) {
            res.render('listCustomers', { clientes })
        })
    },


    //Crear un Cliente
    createCustomer: (req, res) => {
        res.render('createCustomer')
    },
    newCustomer: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('createCustomer', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        db.Cliente.create(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                ocupacion: req.body.ocupacion,
                address: req.body.address,
                phone: req.body.phone,
                description: req.body.descripcion,
                avatar: req.file.filename
            }).then(function () {
                res.redirect('/list');
            })

    },


    //Editar un Cliente
    editCustomer: (req, res) => {
        db.Cliente.findByPk(req.params.id).then(function (cliente) {
            res.render('editCustomer', { cliente });
        })
    },
    updateCustomer: (req, res) => {

        db.Cliente.update(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                ocupacion: req.body.ocupacion,
                address: req.body.address,
                phone: req.body.phone,
                description: req.body.descripcion,

            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.redirect('/list');
    },

    //Eliminar un Cliente
    deleteCustomer: (req, res) => {
        db.Cliente.destroy(
            {
                where:
                {
                    id: req.params.id
                }
            }
        );
        res.redirect("/list");
    },


    //Buscar un Cliente
    searchCustomer: (req, res) => {
        const valueSearch = req.body.search;
        const arraySearch = (valueSearch.split(" "));
        if (arraySearch) {
            if (arraySearch[0] == undefined) {
                res.redirect("/list")
            }
            else if (arraySearch[1] == undefined) {
                res.redirect("/list")
            }
            else if (arraySearch[0] == undefined && arraySearch[1] == undefined) {
                res.redirect("/list")
            }
            else {
                db.Cliente.findAll({
                    where: {
                        firstname: arraySearch[0],
                        lastname: arraySearch[1]
                    }
                }).then(function (cliente) {

                    if (cliente[0] == undefined) {
                        res.redirect("/list")
                    }
                    else {
                        res.render("searchCustomer", { cliente })

                    }

                })
            }
        }

    }





}

module.exports = mainControllers;
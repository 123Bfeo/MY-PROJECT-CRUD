const path = require('path');
const { body } = require('express-validator');
const validaciones = [
    body('firstname').notEmpty().withMessage('¡Escribe un Nombre para el cliente.!').bail()
        .toUpperCase(0).isLength({ max: 10 }).withMessage('Max 10 caracteres Min 4'),
    body('lastname').notEmpty().withMessage('¡Escribe el Apellido para el cliente.!').bail()
        .isLength({ max: 10 }).withMessage('Max 10 caracteres Min 4'),
    body('ocupacion').notEmpty().withMessage('Indique la ocupación del cliente'),
    body('address').notEmpty().withMessage('¡Escribe una dirección de Domicilio para el cliente.!'),
    body('phone').notEmpty().withMessage('¡Escribe un número de teléfono para el cliente.!').bail()
        .isLength({ max: 10 }).withMessage('Tu teléfono solo debe contener Max 10 dígitos'),
    body('descripcion').notEmpty().withMessage('¡Escribe una reseña para el cliente.!').bail()
        .isLength({ max: 94 }).isLength({ min: 94 }),
    body('avatar').custom((value, { req }) => {
        const file = req.file;
        const acceptedExtensions = ['.jpg', '.png', '.gif']
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        }
        else {
            const fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Extensiones permitidas ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })


]

module.exports = validaciones;
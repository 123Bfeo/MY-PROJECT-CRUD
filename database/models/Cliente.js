module.exports = (sequelize, dataTypes) => {
    const alias = 'Cliente';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: dataTypes.STRING,
            notNull: true,
        },
        lastname: {
            type: dataTypes.STRING,
            notNull: true,
        },
        address: {
            type: dataTypes.STRING,
            notNull: true
        },
        phone: {
            type: dataTypes.STRING,
            notNull: true
        },
        ocupacion: {
            type: dataTypes.STRING,
            notNull: true
        },
        description: {
            type: dataTypes.STRING,
            notNull: true
        },
        avatar: {
            type: dataTypes.STRING,
            notNull: true
        }

    };
    const config = {
        tableName: 'cliente',
        timestamps: false,
    };
    const Cliente = sequelize.define(alias, cols, config);
    return Cliente;
};

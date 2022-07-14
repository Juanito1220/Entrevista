module.exports = (sequelize, dataTypes) => {
    let alias = 'user';
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        phone: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },

       date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        direction: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },


    };
    let config = {
        tableName: 'users',
        timestamps: false,

    }
    const user = sequelize.define(alias, cols, config);

    return user
};

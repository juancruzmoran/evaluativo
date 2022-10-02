module.exports = (sequelize, DataTypes) => {

    const alias = "Category"

    const cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull  : false,
            unique : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING(255),
            allowNull : false,
        }

    }

    const config = {
        tablename :'categories',
        timestamps : true,
        underscored : true,
    }

    const Category = sequelize.define(alias,cols,config)

    return Category

}
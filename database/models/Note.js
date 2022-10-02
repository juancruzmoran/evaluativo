module.exports = (sequelize, DataTypes) => {

    const alias = "Note"

    const cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull  : false,
            unique : true,
            autoIncrement : true
        },
        title : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        creation_date : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
        modify_date : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        category_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue : null,
        },
        description : {
            type : DataTypes.TEXT,
            allowNull: false,
        },
        remove : {
            type: dataTypes.BOOLEAN,
        }
    }

    const config = {
        tablename :'notes',
        timestamps : true,
        underscored : true,
    }

    const User = sequelize.define(alias,cols,config)

    return User
}
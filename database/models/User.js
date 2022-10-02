module.exports = (sequelize, DataTypes) => {

    const alias = "User"

    const cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull  : false,
            unique : true,
            autoIncrement : true
        },
        first_name : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        email : {
            type : DataTypes.STRING(255),
            allowNull : false,
            unique : true
        },
        note_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue : null,
        }
    }

    const config = {
        tablename :'users',
        timestamps : true,
        underscored : true,
    }

    const User = sequelize.define(alias,cols,config)

    return User
}
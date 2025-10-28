module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id : {
            type : DataTypes.INTEGER,
            primarykey: true,
            autoIncremenet: true
        },

        judul : {
            type : DataTypes.STRING,
            allowNull : false
        },
        
        penulis : {
            data : DataTypes.STRING,
            allowNull : false
        },

        deskripsi : {
            data : DataTypes.TEXT,
            allowNull : false
        }
    }, {
        tableName : 'komik', 
        timestamps: true,
        freezeTableName: true 
    });
    return Komik;
}
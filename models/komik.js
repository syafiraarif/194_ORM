module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },

        penulis: {
            type: DataTypes.STRING,
            allowNull: false
        },

        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'komik',
        timestamps: true,
        freezeTableName: true
    });
    return Komik;
}
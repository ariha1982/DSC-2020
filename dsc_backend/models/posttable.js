module.exports = (sequelize, DataTypes) => {
  const PostTable = sequelize.define('PostTable', {
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    timestamp: true,
  })

  PostTable.associate = (db) => {

  }

  return PostTable;
}

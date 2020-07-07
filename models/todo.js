module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: DataTypes.STRING,
    complete: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: false
      }
  });
  return Todo;
};
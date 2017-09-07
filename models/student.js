'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        msg: "Error"
      }
    },
    full_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
    // instanceMethods: {
    //   get_fullname: function() {
    //       return this.first_name + ' ' + this.last_name
    //   }
    // }
  });

  Student.prototype.get_full_name = function () {
    return this.first_name + ' ' + this.last_name
  }




  return Student;
};

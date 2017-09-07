'use strict';
const models = require('../models')

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    // models.Student.findAll()
    //   .then(data_students => {
    //
    //     models.Student.bulkCreate(data_students)
    //       .then(() => {
    //       return models.Student.update(
    //
    //         { status: 'inactive' }, /* set attributes' value */,
    //         { where: { subject: 'programming' }} /* where criteria */
    //       );
    //     }).spread((affectedCount, affectedRows) => {
    //       // .update returns two values in an array, therefore we use .spread
    //       // Notice that affectedRows will only be defined in dialects which support returning: true
    //
    //       // affectedCount will be 2
    //       return models.Student.findAll();
    //     }).then(tasks => {
    //       console.log(tasks) // the 'programming' tasks will both have a status of 'inactive'
    //     })




        // data_students.forEach(student => {
        //   student.full_name = student.first_name + ' '+ student.last_name;
        // })
        // // res.send(data_students);
        // let data = []
        // for(let i = 0; i < data_students.length; i++){
        //   data.push({full_name: data_students[i].full_name})
        // }
        // res.send(data)
        return queryInterface.bulkInsert('Students', data, {});

      })
      .catch(err => {
        console.log(err);
      })

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

let express = require('express');
let router = express.Router();
const models = require('../models')

router.get('/', (req, res)=>{
  models.Student.findAll()
    .then(data_students => {
      res.render('students', {data_students: data_students})
    })
    .catch(err => {
      console.log(err);
    })
})

router.get('/', (req, res)=>{
  res.render('students')
})

router.get('/add', (req, res)=>{
  res.render('student_add') // form
})

router.post('/add', (req, res)=>{
  models.Student.create({
    first_name: `${req.body.first_name}`,
    last_name: `${req.body.last_name}`,
    email: `${req.body.email}`.toLowerCase(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(student => {
    res.redirect('/students')
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:id/', (req, res) => {
  models.Student.destroy({
    where: {
      id: `${req.params.id}`
    }
  })
  .then((row_deleted) => {
      console.log('DELETE SUCCESS');
      res.redirect('/students')
  })
  .catch(err => {
    console.log(err);

  })
})


// edit
router.get('/edit/:id/', (req, res) => {
  models.Student.findAll({
    where: {
      id: `${req.params.id}`
    }
  })
  .then( student => {
    res.render('student_edit',{student: student})
    // res.send(student)
  })
  .catch(err => {
    console.log(err);
  })

})

router.post('/edit/:id', (req, res) => {
  models.Student.update({
    first_name: `${req.body.first_name}`,
    last_name: `${req.body.last_name}`,
    email: `${req.body.email}`.toLowerCase(),
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    where: {id: `${req.params.id}`}

  })
  .then(student => {
    res.redirect('/students')
  })
  .catch(err => {
    console.log(err);
  })
})

// router.get('/coba', (req, res) => {
//   models.Student.findAll()
//     .then(data_students => {
//       // res.send(data_students)
//       for(let i = 0; i < data_students.length; i++){
//         console.log(data_students[i].get_full_name());
//       }
//
//     })
//     .catch(err => {
//       console.log('error' + err);
//     })
//
// })

  // models.Student.findAll()
  //   .then(data_students => {
  //     data_students.forEach(student => {
  //       student.full_name = student.first_name + ' '+ student.last_name
  //
  //     })
  //     // res.send(data_students);
  //     let data = []
  //     for(let i = 0; i < data_students.length; i++){
  //       data.push({full_name: data_students[i].full_name})
  //     }
  //
  //     res.send(data)
  //
  //     return queryInterface.bulkInsert('Students', data, {});
  //
  //
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })






module.exports = router

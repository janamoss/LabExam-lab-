var express = require('express');
var student_my = require('../models/student');
var router = express.Router();

router.get('/', function (req, res, next) {
    student_my.find()
        .then((result) => {
            res.render('student', { data: result });
        })
        .catch((err) => {
            console.log(err);
        });
});


router.get('/add', function (req, res, next) {
    res.render('student');
});

router.get('/portfolio', function (req, res, nect) {
    const port = [
        { name: 'Patcharapon Kaewyong', contact: { email: 'patcharapon.k@kkumail.com', linkedin: 'https://linkedin.com/in/PatcharaponKaewyong' } }
    ]
    res.render('portfolio', { ports: port });
})

router.get('/resume', function (req, res, next) {
    res.render('resume');
});

router.post('/insert', (req, res) => {
    const stu = new student_my(req.body)
    stu.save()
        .then((result) => {
            res.redirect('/student')
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/delete/:id', (req, res) => {
    const sid = req.params.id
    student_my.findByIdAndDelete(sid)
        .then(result => {
            res.redirect('/student')
        })
        .catch(err => {
            console.log(err)
        })

})

router.get('/edit/:id', async (req, res) => {
    const sid = req.params.id
    const datass = await student_my.find()
    student_my.findById(sid)
        .then((result) => {
            res.render('editForm',{datas:result,datass});
        });
})

router.post('/update/:id', (req, res) => {
    const sid = req.params.id
    student_my.findByIdAndUpdate(sid, {
        Student_ID: req.body.Student_ID,
        Name: req.body.Name,
        Year_os: req.body.Year_os,
        Email: req.body.Email,
    }).then((result) => {
        res.redirect('/student');
    });
})

module.exports = router;
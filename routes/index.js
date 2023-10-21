var express = require('express');
var router = express.Router();
var myBlog = require('../models/blog');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add-blog',(req,res) =>{
  const blog = new myBlog({
    title: 'new Blog',
    snippet: 'about my blog',
    body: 'more about'
  })
  blog.save()
  .then((result) =>{
    res.send(result)
  })
  .catch((err) =>{
    console.log(err)
  })
})

module.exports = router;

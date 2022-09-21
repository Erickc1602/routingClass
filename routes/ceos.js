const express = require('express'),
 router = express.Router();

 const db = require('../models/data')

 router.get ('/', (req, res) => {
    res.render('template', {
      locals: {
         title: 'Apple CEOs',
         data: db
      },
      partials:{
         index: 'partial-ceos'
      }
   })
 })

 router.get('/:slug', (req, res) =>{
   
 })


 module.exports = router
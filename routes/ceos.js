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

 // single page CEOS
 router.get('/:slug', (req, res) =>{
   const {slug} = req.params;
    cEo= db.find(co => co.slug === slug )
    res.render('template', {
      locals: {
         title: 'Aple CEO',
         data: db
      }, partials:{
         index: 'ceo-page'
      }
   })

 })


 module.exports = router
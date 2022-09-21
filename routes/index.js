const express = require('express');
const router = express.Router();


router.get ('/', (req, res) => {
    res.render("template",{
        locals: {
            title: "My first Template"
        },
        partials: {
            index: 'index'
        }
    })
    })

    module.exports= router
const express = require("express");
const port = 3001;
const es6Renderer = require('express-es6-template-engine')
const app = express ();
const rootControler = require('./routes/index') 

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');




app.use('/', rootControler);

app.use('/ceos', require('./routes/ceos'));





app.listen(port, () => {
    console.log(`Yo Joe! Coming in hot at http://localhost:${port}`)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //? what preceeds the question mark is not required
    // app.get("/ab?cd", (req, res) => {
    //     res.send('ab?cd')
    // })
    
    
    //+ lets preceeding letter be duplicated
    // app.get("/ab+cd", (req, res) => {
    //     res.send('ab+cd')
    // })
    
    
    // app.get("/ab*cd", (req, res) => {
    //     res.send('ab*cd')
    // })
    
    
    // *acha com uma palavra na url
    //  app.get("/*fly*", (req, res) => {
    //      res.send('This is superfly')
    //  })
    
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3501

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/attendanceApp', {useUnifiedTopology:true, useNewUrlParser:true}, console.log('DB Connected'));


// //declare routes
const routes     = require('./routes/routes');

// //use routes
app.use(routes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`))




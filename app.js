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

const url = 'mongodb+srv://highbridge:higbridgehomes@highbridge.ijlem.mongodb.net/highbridge?retryWrites=true&w=majority'

const dbConnect = async () => {
    await mongoose.connect('mongodb+srv://highbridge:higbridgehomes@highbridge.ijlem.mongodb.net/highbridge?retryWrites=true&w=majority', {useUnifiedTopology:true, useNewUrlParser:true}, console.log('DB Connected'))
};

dbConnect();

// //declare routes
const routes     = require('./routes/routes');

// //use routes
app.use(routes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`))




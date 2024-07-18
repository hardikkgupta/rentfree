const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
require('dotenv').config()
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test okay')
});

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;

    try{
        const userDoc = await User.create({
            name, 
            email, 
            password:bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    } catch(e){
        res.status(e).json(e)
    }
    
    
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc)
        if (passOk) {
            jwt.sign({email:userDoc.email, id:userDoc._id})
            res.cookie('token', '').json('password correct')
        } else {
            res.status(422).json('password incorrect')
        }
    } else {
        res.json('not found')
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
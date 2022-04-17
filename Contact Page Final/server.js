const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/contact.html')
})

app.post('/', (req, res)=>{
    console.log(req.body) 

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'haidermohd9250@gmail.com',
            pass: 'Haider@@3011'
        }
    })

    const mailOptions = {
        from: `${req.body.email}`,
        to: 'haidermohd9250@gmail.com',   
        subject: `Query Regarding Website`,
        text: `Name: ${req.body.fname} ${req.body.lname} \nPhone: ${req.body.phone} \nEmail: ${req.body.email} \nMessage: ${req.body.message}`
    }

    transporter.sendMail(mailOptions,(error, infor)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log('Email Sent: ' + infor.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})
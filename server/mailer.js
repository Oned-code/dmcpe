const express = require('express')
const nodemailer = require('nodemailer');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/registration', (req, res) => {

   const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user : 'wandile.chamane@gmail.com',
           pass : 'BonganiZulu123@'
       }
   })

    const mailOptions = {
        from: 'info@dmcpe.co.za',
        to: req.body ? req.body['toAddress'] : 'wandile.chamane@gmail.com',
        subject: 'Welcome!! Registration successful, Please verify your email',
        text: "happy"
    }

    transporter.sendMail(mailOptions, function (error, info){
       if (error) {
           console.log(error);
       } else {
           console.log('Email sent: '+ info.response);
       }
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

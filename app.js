const express = require('express')
const cors = require('cors')
const nodeMailer = require('nodemailer')
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'webdevnaoki@gmail.com',
        pass: 'byhoyxpwpbbtkjqc'
    }
})

app.post('/form', (req,res)=> {
    const formData = req.body
    let {name, email, subject, msg} = formData
    console.log(formData)

    var mailOptions = {
      from: email,
      to: 'webdevnaoki@gmail.com',
      subject: subject,
      replyTo: email,
      text: msg
    };  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });  

    console.log({name,email,subject,msg})
})

app.listen(port, ()=> {
    console.log(`On port ${port}`)
})
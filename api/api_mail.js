const nodemailer = require('nodemailer');
require('dotenv').config()

let emailAccount = {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
};

//Функция сборки данных из полей в текст для отправки                            
function compileMessage(data){
    
}

async function sendToEmail(email){
    console.log(email)
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email.user,
        pass: email.pass,
    },
    });

    //Заменить text 
    let result = await transporter.sendMail({
        from: '"B_es Production" <Suka@mail.ru>',
        to: 'sebe@mail.ru',
        subject: 'Message from Russia',
        text: 'Sent and dead',
        html: 'This <b>ras</b> was sent from <strong>bas js</strong> server.'
    });

    console.log(result)
}

sendToEmail(emailAccount).catch(console.error);

//https://ethereal.email/messages
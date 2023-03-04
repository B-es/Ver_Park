const nodemailer = require('nodemailer');


let emailAccount = {user: process.env.EMAIL,
                            pass: process.env.PASSWORD};

//Функция сборки данных из полей в текст для отправки                            
function compileMessage(data){
    
}

async function sendToEmail(email){
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
    port: 465,
    secure: false,
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
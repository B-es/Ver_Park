const nodemailer=require('nodemailer');require('dotenv').config()
function compileMessage(data){return{from:'"Сайт Танзания"',to:`${process.env.EMAIL}`,subject:'Заявка',text:`Имя - ${data.name}\nНомер - ${data.number}\nДата - ${data.date}\n\nВозраст - ${data.age_r}\nКоличество - ${data.count_r}\n`+`Продолжительность - ${data.time_r}`}}
async function sendToEmail(data){let emailAccount={user:process.env.EMAIL,pass:process.env.PASSWORD};let transporter=nodemailer.createTransport({service:'gmail',auth:{user:emailAccount.user,pass:emailAccount.pass,},});let result=await transporter.sendMail(compileMessage(data));console.log(result)}
module.exports.sendToEmail=sendToEmail
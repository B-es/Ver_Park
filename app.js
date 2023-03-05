//Подключение основных библиотек 
const 
    express = require('express'),
    path = require('path'),
    app = express();
    api_mail = require('./api/api_mail.js');

require('dotenv').config()

//Назначаем папку для статических элементов
app.use(express.static(path.join(__dirname, "/public")));

//Создаём парсер, который будет читать данные из документа
const urlencodedParser = express.urlencoded({extended: true});

//Запускаем функцию post с необходимыми параметрами
app.post("/req", urlencodedParser, (req, res) => {   
    
    let age_r = (req.body.age_r)[1] === '' ? (req.body.age_r)[0] : req.body.age_r;

    const request = {
        age_r: age_r,
        count_r: req.body.count_r,
        time_r: req.body.time_r,
        date: req.body.inputDate,
        name: req.body.name,
        number: req.body.number
    };

    console.log(request);

    api_mail.sendToEmail(request);

    res.redirect("/")
});

//Прослушиваем
app.listen(process.env.PORT, process.env.HOST, () => {
    let s = process.env.HOST + ':' + String(process.env.PORT);
    console.log("Server was dead before we've started on "+s);
});

//Подключение основных библиотек 
const 
    express = require('express'),
    path = require('path'),
    app = express();

require('dotenv').config()

//Назначаем папку для статических элементов
app.use(express.static(path.join(__dirname, "/public")));

//Создаём парсер, который будет читать данные из документа
const urlencodedParser = express.urlencoded({extended: true});

//Запускаем функцию post с необходимыми параметрами
app.post("/req", urlencodedParser, (req, res) => {   
    console.log("Отправка заявки...");
    console.log([req.body.name, req.body.seminame, req.body.number, req.body.email]);
    res.redirect("/")
});

//Прослушиваем
app.listen(process.env.PORT, process.env.HOST, () => {
    let s = process.env.HOST + ':' + String(process.env.PORT);
    console.log("Server was dead before we've started on "+s);
});

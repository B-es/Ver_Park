//Подключение основных библиотек 
const 
    express = require('express'),
    path = require('path'),
    host = '127.0.0.1',
    port = 5500,
    app = express();

//Назначаем папку для статических элементов
app.use(express.static(path.join(__dirname, "/public")));

//Создаём парсер, который будет читать данные из документа
const urlencodedParser = express.urlencoded({extended: true});

//Запускаем функцию post с необходимыми параметрами
app.post("/", urlencodedParser, (req, res) => {   
    console.log("Отправка заявки...");
    console.log([req.body.name, req.body.seminame, req.body.number, req.body.email]);
    res.redirect("/")
});

//Прослушиваем
app.listen(port, host, () => {
    console.log("Server was dead before we've started");
});

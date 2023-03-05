require('dotenv').config();
const TGBot = require('node-telegram-bot-api');
const bot = new TGBot(process.env.TOKEN, {polling:true});
let reqs = [];

function compileMessage(data){
    return `Заявка\n\nИмя - ${data.name}\nНомер - ${data.number}\nДата - ${data.date}\n\nВозраст - ${data.age_r}\nКоличество - ${data.count_r}\n`+
	`Продолжительность - ${data.time_r}`
}

async function sendToBot(data){
	let chaiID = "1134730803";
	reqs.push(data);
	await bot.sendMessage(chaiID, compileMessage(data));
}

function hasNumbers(t)
{
	var regex = /\d/g;
	return regex.test(t);
}    

bot.onText(/\/reqs/, (msg, match) => {
	
	const chatId = "1134730803";
	let ms = match.input;
	let ms2 = ms.split(' ')[1]

	if(ms2 === "count"){
		bot.sendMessage(chatId, reqs.length);
		return;
	}

	if(hasNumbers(ms)){
		if(Number(ms2) > reqs.length || Number(ms2) < 1) return;
		bot.sendMessage(chatId, compileMessage(reqs.at(Number(ms2)-1)));
	}	
	else
		for(let i = 0; i < reqs.length; i++){
			setTimeout(()=>{bot.sendMessage(chatId, compileMessage(reqs.at(i)))},1000);
		}
  });

module.exports.sendToBot = sendToBot;

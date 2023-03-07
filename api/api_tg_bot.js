require('dotenv').config();
const TGBot = require('node-telegram-bot-api');
const bot = new TGBot(process.env.TOKEN);
bot.getUpdates();
let reqs = [];
console.log("Ну и прикол")

function compileMessage(data){
    return `Заявка\n\nИмя - ${data.name}\nНомер - ${data.number}\nДата - ${data.date}\n\nВозраст - ${data.age_r}\nКоличество - ${data.count_r}\n`+
	`Продолжительность - ${data.time_r}`
}

async function sendToBot(data){
	let chatID = process.env.chatID;
	reqs.push(data);
	await bot.sendMessage(chatID, compileMessage(data));
}  

bot.onText(/\/id/, (msg, match) =>
{
	console.log("ID:");
	console.log(msg.chat.id);
});

bot.onText(/\/reqs (.+)/, (msg, match) => {
	
	const chatId = process.env.chatID;
	let ms = match.input;
	let ms2 = ms.split(' ')[1]

	if(ms2 === "count"){
		bot.sendMessage(chatId, reqs.length);
		return;
	}

	if(ms2 === "all" && reqs.length > 0){
		let reqs_str = [];
		reqs.forEach((req)=>{
			reqs_str.push(compileMessage(req));
		})
		let message = reqs_str.join('\n\n'+('------------------').repeat(4)+'\n\n');
		bot.sendMessage(chatId, message);
		return;
	}

});

bot.startPolling({clean:false, verbose:false});

module.exports.sendToBot = sendToBot;

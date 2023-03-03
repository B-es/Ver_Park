const TGBot = require('node-telegram-bot-api')
const token = "6267822915:AAHd4MyEr6eMc-2eekjzYIxuCuA1JCoTPcc"
const bot = new TGBot(token, {polling:true})

bot.onText(/\/req (.+)/, (msg, match) => {

	const chatId = msg.chat.id
	const resp = match[1]

	bot.sendMessage(chatId, resp)
    console.log(msg)
})
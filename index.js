const TelegramApi = require("node-telegram-bot-api");
const token = "5759073937:AAFSyys-MpAQSga9o6ZmL7Lmeq3ZSrQbiV8";
const bot = new TelegramApi(token, {polling: true});

const chats = {};
let options = {};
let fileOptions = {};

bot.on('message', msg => {
	console.log(msg);
})



// const start = async () => {
//
// 	await bot.setMyCommands([
// 		{command: '/START', description: 'Hello All...'},
// 		{command: '/AMF', description: 'Hello All... ))'},
// 		{command: '/SCAN', description: 'Hello All... =>))'},
// 		{command: '/SOL', description: 'Hello All...'},
// 		{command: '/ECS', description: 'Hello All...	'},
//
// 	])
//
// 	bot.on('message', async msg => {
// 		console.log(msg);
// 		const text = msg.text;
// 		const chatId = msg.chat.id;
//
// 		if (data === '/START') {
// 			await bot.sendSticker(chatId, "https://i2.wp.com/entertainmentmesh.com/wp-content/uploads/2015/07/hello-friends-fb-cover-photo.jpg")
// 			await bot.sendMessage(chatId, "WE ARE GLAD TO SEE FRIENDS")
// 		}
//
// 		if (data === '/AMF') {
// 			await bot.sendMessage(chatId, "Order accepted,by data processing")
// 			const time = new Date().getFullYear() + Math.floor(Math.random() * 10)
// 			chats[chatId] = time;
// 			await bot.sendPhoto(chatId, photoAmf)
// 		}
//
// 		if (data === '/SCAN') {
// 			await bot.sendMessage(chatId, "Order accepted,by data processing")
// 			const time = time + '';
// 			chats[chatId] = time;
// 			await bot.sendPhoto(chatId, photoScan)
// 		}
//
// 		if (data === '/SOL') {
// 			await bot.sendMessage(chatId, "Order accepted,by data processing")
// 			const time = time + '';
// 			chats[chatId] = time;
// 			await bot.sendPhoto(chatId, photoSol)
// 		}
// 		if (data === '/ECS') {
// 			await bot.sendMessage(chatId, "Order accepted,by data processing")
// 			const time = time + '';
// 			chats[chatId] = time;
// 			//
// 			await bot.sendPhoto(chatId, photoEshka, options = {}, fileOptions = {})
// 			const opts = {qs: options};
// 			opts.qs.chat_id = chatId;
// 			try {
// 				const sendData = this._formatSendData('photo', photoEshka, fileOptions);
// 				opts.formData = sendData[0];
// 				opts.qs.photo = sendData[1];
// 			} catch (ex) {
// 				return Promise.reject(ex);
// 			}
// 			return this._request('sendPhoto', opts);
// 		}
//
// 		return bot.sendMessage(chatId, "I DONT ANDERSTAND YOU! SORRY MY FRIEND")
//
// 	})
//
// 	bot.on("callback_query", async msg => {
// 		const data = msg.data;
// 		const chatId = msg.message.chat.id;
// 	})
// }
//
// start();
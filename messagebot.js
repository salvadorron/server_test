import TelegramBot from 'node-telegram-bot-api';

export const sendTelegramMessageBot = (msg) => {
const token = '6391585644:AAEnhGfkoBgMS_-0eAn8YQ-aXx-XCXmylIo';
const chatId = 1316829775;
let bot = new TelegramBot(token, {polling: false});

bot.sendMessage(chatId, msg);
}

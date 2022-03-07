let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bot.mp3'
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /the zen-o-bot|The Zen-O-Bot|tzob|TZOB|Zen-O-Bot|zen-o-bot|Zen Bot|Bot Zen|Hola Bot|hola bot|Hola bot|hola bot/
handler.command = new RegExp
module.exports = handler

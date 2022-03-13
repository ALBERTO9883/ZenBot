let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
heum = await fetch(`https://api-alc.herokuapp.com/api/nsfw/yaoi?&apikey=ConfuMods`)
json = await heum.buffer()
conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', '*©Cᴏᴍᴘᴀɴʏ Zᴇɴ-O-Bᴏᴛ*', 'SIGUIENTE', `${usedPrefix + command}`, m, false)}
handler.command = /^(yaoi)$/i
module.exports = handler

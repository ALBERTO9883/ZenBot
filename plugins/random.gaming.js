let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/gaming?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '🎮🎮🎮', '*©Cᴏᴍᴘᴀɴʏ Zᴇɴ Bᴏᴛ*', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(wpgaming|fondogaming)$/i
module.exports = handler

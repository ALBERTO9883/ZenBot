let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/pubg?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*🔫 Un juego increíble!!*', '*©Cᴏᴍᴘᴀɴʏ Zᴇɴ Bᴏᴛ*', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.help = ['pubg']
handler.tags = ['images']
handler.command = /^(pubg|Pubg|pugb)$/i
module.exports = handler

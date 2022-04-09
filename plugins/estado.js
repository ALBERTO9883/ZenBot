let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let os = require('os')
let { isBanned, welcome, antivirtex, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.DATABASE.data.chats[m.chat]
  await conn.send2Button(m.chat, `
*━━━━━━━━━━━━━━━━*
 *PORFAVOR ELIJA UNA OPCIÓN* 
   
   ${welcome ? '✅' : '❌'} Welcome
   
`.trim(), '*©Cᴏᴍᴘᴀɴʏ Zᴇɴ Bᴏᴛ*', '*✅Activar✅*', `${usedPrefix}enable welcome`, '*❕Desactivar❕*', `${usedPrefix}disable welcome`)
}
handler.command = /^(welcome|Welcome|Bienvenida|bienvenida)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

handler.exp = 0

module.exports = handler
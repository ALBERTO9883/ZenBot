let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let os = require('os')
let { isBanned, welcome, antivirtex, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.DATABASE.data.chats[m.chat]
  await conn.send2Button(m.chat, `
*╭══〘🍁BIENVENIDA🍁〙══╮*
*┃*
*┣ ►PORFAVOR ELIJA UNA OPCIÓN* 
*┣ ►Actualmente está ${welcome ? 'Activado✅' : 'Desactivado❌'}*
*╰══ৡৢ͜͡✦══╡🍁╞══ৡৢ͜͡✦══╯*  
`.trim(), '*©Cᴏᴍᴘᴀɴʏ Zᴇɴ Bᴏᴛ*', '✅Activar✅', `${usedPrefix}enable welcome`, '❕Desactivar❕', `${usedPrefix}disable welcome`)
}
handler.help = ['bienvenida']
handler.tags = ['group']
handler.command = /^(welcome|Welcome|Bienvenida|bienvenida)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

handler.exp = 0

module.exports = handler

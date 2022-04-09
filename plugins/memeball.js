let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let os = require('os')
  await conn.send3Button(m.chat, `
━━━━━━━━━━━━━━━━━━━
             🔹 *AUDIOS RANDOM* 🔹 ━━━━━━━━━━━━━━━━━━━
➥ *Hola Que Tengas Lindo Dia O Noche :D*
➥ *A Continuación Se Te Mostraran Los Menús De Audios.*
  ━━━━━━━━━━━━━━━━━━━
             ✥ *_ELIJA LA CATEGORIA_* ✥
                                     ⇣
`.trim(), '*©Cᴏᴍᴘᴀɴʏ Zᴇɴ Bᴏᴛ*', '🐉ＭEME BALL🐉', `${usedPrefix}memeball700`, '🀄AUDIOS VARIADOS🀄', `${usedPrefix}audios700`, '🔊AUDIOS GENERALES🔊', `${usedPrefix}menuaudios`)
}
handler.help = ['menuaudios']
handler.tags = ['main']
handler.command = /^(menuaudios|Menuaudios|audiosrandom)$/i

handler.exp = 0

module.exports = handler

let fs = require ('fs')

let handler  = async (m, { conn, text, participants }) => {
  await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { quoted: m })
  }
  
handler.help = ['reenviar']
handler.tags = ['tools']
handler.command = /^(reenviar|reenviarmsg)$/i
handler.rowner = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
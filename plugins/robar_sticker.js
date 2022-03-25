const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Etiqueta un sticker!'
    let img = await m.quoted.download()
    let stiker = await sticker(false, img, packname || global.packname, author || global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Ocurrió un error al enviar el sticker'
  }
}
handler.help = ['take']
handler.tags = ['sticker']
handler.command = /^(wm|take)$/i

module.exports = handler

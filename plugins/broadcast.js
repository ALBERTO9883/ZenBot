let fs = require ('fs')

let handler  = async (m, { conn, text, participants }) => {
  let teks = m.quoted ? m.quoted : m.quoted
  if (!teks) throw 'Etiqueta un mensaje para enviar a todos los chats!'
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let faketumb = fs.readFileSync('./storage/image/menu2.jpg')
  let fakereply = { key : { participant: `0@s.whatsapp.net`, }, message: { orderMessage: { itemCount : 2022, status: 1, surface : 1, message: '↷✦╎Anuncio lolibot╎💌˖ ⸙', orderTitle: "↷✦╎Anuncio lolibot╎💌˖ ⸙", thumbnail: faketumb, sellerJid: '0@s.whatsapp.net' } } }
  //let content = (/bcgc|broadcastgroup|bcgrup|bcgrup|broadcastgc/i.test(text) ? text : text + '\n' + readMore + '「 ' + conn.getName(conn.user.jid) + ' Mensaje de difusion en grupos 」')
  for (let id of chats) await conn.copyNForward(id, await conn.loadMessage(m.chat, m.quoted.id), false, { quoted: fakereply })
  //conn.sendMessage(id, content, m.mtype, m.msg.contextInfo ? { contextInfo: m.msg.contextInfo } : {})
  conn.reply(m.chat, `El mensaje se envío a *${chats.length} chats*!`, m)
}

handler.help = ['bc']
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


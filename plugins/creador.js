let handler = async function (m, { conn }) {
  let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
    let name = this.getName(global.owner[0] + '@s.whatsapp.net')
    list.push({
      "displayName": name,
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Creador de la loli bot xD\nEND:VCARD`
    })
  }
  await conn.sendMessage(m.chat, {
    "displayName": `${list.length} Contact`,
    "contacts": list
  }, 'contactsArrayMessage', { quoted: m })
}

handler.help = ['creador']
handler.tags = ['info']
handler.command = /^(creador|owner|creator)$/i

module.exports = handler

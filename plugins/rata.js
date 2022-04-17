let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Quien es *${command.replace('how', '').toUpperCase()}*`
  conn.reply(m.chat, `
_*${text}* *es* *${Math.floor(Math.random() * 500)}%* *🐁 ${command.replace('how', '').toUpperCase()} come queso 🧀*_
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['rata'].map(v => 'how' + v + ' *@user*')
handler.tags = ['game']
handler.command = /^(rata)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

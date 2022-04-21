//made by kanna
//Dan gw ganti bbrp doang:v

let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  conn.reply(m.chat, wait, m)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', '*✅ Chico*', m)
  await conn.sendFile(m.chat, json.result.female, '', '*✅ Chica*', m)
}
handler.help = ['par']
handler.tags = ['internet']
handler.command = /^(par)$/i

module.exports = handler

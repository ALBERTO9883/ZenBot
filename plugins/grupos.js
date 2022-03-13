let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Zen-O-Bot*

*_➤ Grupos oficiales del Bot:_*
*_1.-_* *https://chat.whatsapp.com/KJIZ8iUZC8ABHMYZfJQ3Dh*

*_2.-_* *https://chat.whatsapp.com/LryjgOvojxkF23yROg5Iq8*

*_3.-_* *https://chat.whatsapp.com/D2kkLywqKa0G3IfIm7eNf2*

*_4.-_* *https://chat.whatsapp.com/GIpq7HI0Ee3ASPdjouwyh5*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 THE ZEN-O-BOT🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler

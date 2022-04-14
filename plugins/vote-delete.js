let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) {
        await conn.reply(m.chat, `No hay ninguna votación, escribe ${usedPrefix}startvote para iniciar una!`, m)
        throw false
    }
    delete conn.vote[id]
    m.reply(`Se eliminó la votación!`)

}

handler.help = ['delvote']
handler.tags = ['vote']
handler.command = /^(deletevote|delvote|hapusvote)$/i
handler.group = true
handler.admin = true

module.exports = handler

let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `No hay ninguna votación, escribe ${usedPrefix}startvote para iniciar una!`
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Ya has votado!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`Votación exitosa!\n\nEscriba ${usedPrefix}cekvote para ver los votos`)

}
handler.help = ['vote']
handler.tags = ['vote']
handler.command = /^(up|de)?vote$/i
handler.group = true

module.exports = handler

let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `Todavía no hay ningún voto, escriba ${usedPrefix}startvote para iniciar una votación!`
    
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    let vt = `*Motivo:* ${reason}

*Votos a favor (✅)*
Total: ${upvote.length} votos
${upvote.map(u => '- @' + u.split('@')[0]).join('\n')}

*Votos en contra (❌)*
Total: ${devote.length} votos
${devote.map(u => '- @' + u.split('@')[0]).join('\n')}`
let _vote = conn.prepareMessageFromContent(m.chat, {
"listMessage":  {
"title": "\t\t\t*‧ 🗳️ VOTACIÓN 🗳️ ‧*",
"description": `\n${vt}\n\nSi quiere eliminar la votación\nescriba *${usedPrefix}delvote*`,
"buttonText": "Opciones",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": '✅ Si',
"rowId": `${usedPrefix}upvote`
},
{
"title": '❌ No',
"rowId": `${usedPrefix}devote`
}
]}]}}, { quoted: m, contextInfo: { mentionedJid } })
conn.relayWAMessage(_vote)
//conn.send2Button(m.chat, vt, ``, ', ``, ', , m, { contextInfo: { mentionedJid } })
}

handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^(cekvote)$/i
handler.group = true

module.exports = handler

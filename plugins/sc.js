//Codigo by ZenBot
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://imgur.com/O1J4KJ7.jpg')).buffer()
let kai = await(await fetch('https://imgur.com/O1J4KJ7.jpg')).buffer()
let text = `*https://github.com/ALBERTO9883/ZenBot*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: 'ππ΄πΏπΎππΈππΎππΈπΎ π³π΄π» π±πΎπ',
body: 'AΚΚα΄Κα΄α΄ Κ AsΚΚΚπΉ',
thumbnail: pp
}}})}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^script|repositorio|repobot|scbot$/i
module.exports = handler

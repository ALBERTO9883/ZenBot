let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './RPG.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
*┏ 〓〓〓ZEN-O-BOT〓〓〓 ┓*
┋ ➤ *✨𝗛ola, ${username}!*
┋┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┋➥ ❖⃟⚔ _${usedPrefix}adventure_
┋➥ ❖⃟🏹 _${usedPrefix}apostar_
┋➥ ❖⃟⚔ _${usedPrefix}cd_
┋➥ ❖⃟🏹 _${usedPrefix}cooldown_
┋➥ ❖⃟⚔ _${usedPrefix}daily_
┋➥ ❖⃟🏹 _${usedPrefix}feed_ *<mascota>*
┋➥ ❖⃟⚔ _${usedPrefix}inventario_
┋➥ ❖⃟🏹 _${usedPrefix}lb_
┋➥ ❖⃟⚔ _${usedPrefix}mining_
┋➥ ❖⃟🏹 _${usedPrefix}monthly_
┋➥ ❖⃟⚔ _${usedPrefix}open_
┋➥ ❖⃟🏹 _${usedPrefix}shop_
┋➥ ❖⃟⚔ _${usedPrefix}transferir_
┋➥ ❖⃟🏹 _${usedPrefix}use_
┋➥ ❖⃟⚔ _${usedPrefix}weekly
┗━━━━━━━━━━━━━┛`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '*©Cᴏᴍᴘᴀɴʏ Zᴇɴ Bᴏᴛ*', ` '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(|menurpg|rpgmenu|MENURPG)$/i
handler.fail = null
handler.rowner=true
module.exports = handler
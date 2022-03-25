//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

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
┋➥ ❖⃟⚔ _${usedPrefix}weekly_
┗━━━━━━━━━━━━━┛`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '*©Cᴏᴍᴘᴀɴʏ Zᴇɴ Bᴏᴛ*', 'MENU', `#menu`, 'MENU AUDIOS', `#audiosrandom`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menurpg|rpgmenu)$/i
handler.fail = null
handler.rowner=true
module.exports = handler
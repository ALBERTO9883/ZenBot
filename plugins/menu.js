//Codigo by ZenBot
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://imgur.com/O1J4KJ7.jpg')).buffer()
let kai = await(await fetch('https://imgur.com/O1J4KJ7.jpg')).buffer()
//let vn = './media/mariana.mp3'
let username = conn.getName(who)
let text = `
━━━━━━━━━━━━━━
  *🔥*©Cᴏᴍᴘᴀɴʏ Zᴇɴ Bᴏᴛ*🔥*
━━━━━━━━━━━━━━
➤ *⚜Hola,${username}!⚜*

➢ *Bot Creado Por @50499698072*

*[📲] Sistema operativo:* *${conn.user.phone.device_manufacturer}*
*[🔋] Bateria:* *${conn.battery ? `${conn.battery.value}%* *${conn.battery.live ? '🔌 Cargando...*' : '⚡ Desconectado*'}` : 'Desconocido*'}
*[🪀] version de WhatsApp*: *${conn.user.phone.wa_version}*
http://ຯ❏͜ᰰ⚡۪۪ị¡-ZenBot.li
http://ຯ❏͜ᰰ⚡۪۪ị¡Alberto.li
http://ຯ❏͜ᰰ⚡۪۪ị¡-Makey.li
http://ຯ❏͜ᰰ⚡۪۪ị¡-FabiKpo.li ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
━━━━━━━━━━━━━━
          ℹ️️ *✥  _MENÚS_  ✥* ℹ️️
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}menu_ 𖤍*
*⚡⃟➥ _${usedPrefix}menuaudios_ 𖤍*
*⚡⃟➥ _${usedPrefix}menuowner_ 𖤍*
*⚡⃟➥ _${usedPrefix}audiosrandom_ 𖤍*
*⚡⃟➥ _${usedPrefix}menurpg_ 𖤍*
*⚡⃟➥ _${usedPrefix}labiblia_ 𖤍*
━━━━━━━━━━━━━━
  ℹ️️ *✥  _INFORMACIÓN_  ✥* ℹ️️
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}sc_ 𖤍*
*⚡⃟➥ _${usedPrefix}donar_ 𖤍*
*⚡⃟➥ _${usedPrefix}infobot_ 𖤍*
*⚡⃟➥ _${usedPrefix}grupos_ 𖤍*
*⚡⃟➥ _${usedPrefix}instalarbot_ 𖤍*
*⚡⃟➥ _${usedPrefix}reglas_ 𖤍*
*⚡⃟➥ _${usedPrefix}estado_ 𖤍*
*⚡⃟➥ _¿Qué es un Bot?_ 𖤍*
*⚡⃟➥ _Codigos para audios_ 𖤍*
*⚡⃟➥ _Terminos y Condiciones_ 𖤍*
━━━━━━━━━━━━━━
📬 *✥  _REPORTAR FALLAS_  ✥*📬
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}bug_ 𖤍*
*⚡⃟➥ _${usedPrefix}report_ 𖤍*
━━━━━━━━━━━━━━
🤖 *✥  _UNE UN BOT A TU GRUPO_  ✥* 🤖
━━━━━━━━━━━━━━ 
*⚡⃟➥ _${usedPrefix}join_ 𖤍*
*⚡⃟➥ _${usedPrefix}bots_ 𖤍*
━━━━━━━━━━━━━━
          🎖️*✥  _TOPS_  ✥*🎖️
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}top10gays_ 𖤍*
*⚡⃟➥ _${usedPrefix}toplind@s_ 𖤍*
*⚡⃟➥ _${usedPrefix}topput@s_ 𖤍*
*⚡⃟➥ _${usedPrefix}toppajer@s_ 𖤍*
*⚡⃟➥ _${usedPrefix}topotakus_ 𖤍*
━━━━━━━━━━━━━━
     👻 *✥  _CREADOR_  ✥* 👻
----------------------------------------------
 *⚡⃟➥ _${usedPrefix}owner_ 𖤍*
━━━━━━━━━━━━━━
      🕹 *✥  _JUEGOS_  ✥* 🕹
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}math_ 𖤍*
*⚡⃟➥ _${usedPrefix}ttt_ 𖤍*
*⚡⃟➥ _${usedPrefix}delttt_ 𖤍*
*⚡⃟➥ _${usedPrefix}2gay_ 𖤍*
*⚡⃟➥ _${usedPrefix}gay_ 𖤍*
*⚡⃟➥ _${usedPrefix}lesbi_ 𖤍*
*⚡⃟➥ _${usedPrefix}pajero_ 𖤍*
*⚡⃟➥ _${usedPrefix}pajera_ 𖤍*
*⚡⃟➥ _${usedPrefix}puta_ 𖤍*
*⚡⃟➥ _${usedPrefix}puto_ 𖤍*
*⚡⃟➥ _${usedPrefix}rata_ 𖤍*
*⚡⃟➥ _${usedPrefix}manco_ 𖤍*
*⚡⃟➥ _${usedPrefix}manca_ 𖤍*
*⚡⃟➥ _${usedPrefix}formarpareja_ 𖤍*
*⚡⃟➥ _${usedPrefix}dado_ 𖤍*
*⚡⃟➥ _${usedPrefix}simsimi_ 𖤍*
*⚡⃟➥ _${usedPrefix}formartrio_ 𖤍*
*⚡⃟➥ _${usedPrefix}love_ 𖤍*
*⚡⃟➥ _${usedPrefix}amigorandom_ 𖤍*
*⚡⃟➥ _${usedPrefix}slots_ 𖤍*
*⚡⃟➥ _${usedPrefix}ppt_ 𖤍*
*⚡⃟➥ _${usedPrefix}prostituto_ 𖤍*
*⚡⃟➥ _${usedPrefix}prostituta_ 𖤍*
━━━━━━━━━━━━━━
   📥 *✥  _DESCARGAS_  ✥* 📥
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}imagen_ 𖤍*
*⚡⃟➥ _${usedPrefix}ytsearch_ 𖤍*
*⚡⃟➥ _${usedPrefix}dlaudio_ 𖤍*
*⚡⃟➥ _${usedPrefix}dlvid_ 𖤍*
*⚡⃟➥ _${usedPrefix}ytmp3_ 𖤍*
*⚡⃟➥ _${usedPrefix}ytmp4_ 𖤍*
*⚡⃟➥ _${usedPrefix}play_ 𖤍*
*⚡⃟➥ _${usedPrefix}play2_ 𖤍*
*⚡⃟➥ _${usedPrefix}play3_ 𖤍*
*⚡⃟➥ _${usedPrefix}play4_ 𖤍*
*⚡⃟➥ _${usedPrefix}letra_ 𖤍*
*⚡⃟➥ _${usedPrefix}google_ 𖤍*
*⚡⃟➥ _${usedPrefix}googlef_ 𖤍*
*⚡⃟➥ _${usedPrefix}wikipedia_ 𖤍*
*⚡⃟➥ _${usedPrefix}pinterest_ 𖤍*
*⚡⃟➥ _${usedPrefix}pinterestvideo_ 𖤍*
*⚡⃟➥ _${usedPrefix}tiktokaudio_ 𖤍*
*⚡⃟➥ _${usedPrefix}tiktok_ 𖤍*
*⚡⃟➥ _${usedPrefix}spotify_ 𖤍*
*⚡⃟➥ _${usedPrefix}acortar_ 𖤍*
*⚡⃟➥ _${usedPrefix}xnxx_ 𖤍*
*⚡⃟➥ _${usedPrefix}xnxxsearch_ 𖤍*
*⚡⃟➥ _${usedPrefix}ssweb_ 𖤍*
*⚡⃟➥ _${usedPrefix}igstory_ 𖤍*
*⚡⃟➥ _${usedPrefix}igstalck_ 𖤍*
*⚡⃟➥ _${usedPrefix}animeinfo_ 𖤍*
*⚡⃟➥ _${usedPrefix}twvid_ 𖤍*
━━━━━━━━━━━━━━
       💎 *✥  _GRUPOS_  ✥* 💎
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}admins_ 𖤍*
*⚡⃟➥ _${usedPrefix}añadir_ 𖤍*
*⚡⃟➥ _${usedPrefix}sacar_ 𖤍*
*⚡⃟➥ _${usedPrefix}save_ 𖤍*
*⚡⃟➥ _${usedPrefix}daradmin_ 𖤍*
*⚡⃟➥ _${usedPrefix}quitaradmin_ 𖤍*
*⚡⃟➥ _${usedPrefix}grupo abrir/cerrar_ 𖤍*
*⚡⃟➥ _${usedPrefix}enable welcome_ 𖤍*
*⚡⃟➥ _${usedPrefix}disable welcome_ 𖤍*
*⚡⃟➥ _${usedPrefix}enable antilink_ 𖤍*
*⚡⃟➥ _${usedPrefix}disable antilink_ 𖤍*
*⚡⃟➥ _${usedPrefix}enable antilink2_ 𖤍*
*⚡⃟➥ _${usedPrefix}disable antilink2_ 𖤍*
*⚡⃟➥ _${usedPrefix}enable delete_ 𖤍*
*⚡⃟➥ _${usedPrefix}disable delete_ 𖤍*
*⚡⃟➥ _${usedPrefix}link_ 𖤍*
*⚡⃟➥ _${usedPrefix}notificar_ 𖤍*
*⚡⃟➥ _${usedPrefix}setname_ 𖤍*
*⚡⃟➥ _${usedPrefix}setdesc_ 𖤍*
*⚡⃟➥ _${usedPrefix}infogrupo_ 𖤍*
*⚡⃟➥ _${usedPrefix}invocar_ 𖤍*
*⚡⃟➥ _${usedPrefix}del_ 𖤍*
*⚡⃟➥ _${usedPrefix}fantasmas_ 𖤍*
*⚡⃟➥ _${usedPrefix}banchat_ 𖤍*
*⚡⃟➥ _${usedPrefix}unbanchat_ 𖤍*
━━━━━━━━━━━━━━
    🧧 *✥  _CREADORES_  ✥* 🧧
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}s_ 𖤍*
*⚡⃟➥ _${usedPrefix}sticker_ 𖤍*
*⚡⃟➥ _${usedPrefix}semoji_ 𖤍*
*⚡⃟➥ _${usedPrefix}wasted_ 𖤍*
*⚡⃟➥ _${usedPrefix}stonks_ 𖤍*
*⚡⃟➥ _${usedPrefix}trash_ 𖤍*
*⚡⃟➥ _${usedPrefix}rainbow_ 𖤍*
*⚡⃟➥ _${usedPrefix}circle_ 𖤍*
*⚡⃟➥ _${usedPrefix}trigger_ 𖤍*
*⚡⃟➥ _${usedPrefix}stickermaker_ 𖤍*
*⚡⃟➥ _${usedPrefix}attp_ 𖤍*
*⚡⃟➥ _${usedPrefix}style_ 𖤍*
*⚡⃟➥ _${usedPrefix}attp2_ 𖤍*
*⚡⃟➥ _${usedPrefix}stickerfilter_ 𖤍*
*⚡⃟➥ _${usedPrefix}trigger @tag_ 𖤍*
*⚡⃟➥ _${usedPrefix}mp3_ 𖤍*
*⚡⃟➥ _${usedPrefix}img_ 𖤍*
*⚡⃟➥ _${usedPrefix}blur_ 𖤍*
*⚡⃟➥ _${usedPrefix}swm_ 𖤍*
*⚡⃟➥ _${usedPrefix}gif_ 𖤍*
*⚡⃟➥ _${usedPrefix}tovideo_ 𖤍*
━━━━━━━━━━━━━━
 👾 *✥  _RANDOM|EXTRAS_  ✥* 👾
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}frase_ 𖤍*
*⚡⃟➥ _${usedPrefix}futbol_ 𖤍*
*⚡⃟➥ _${usedPrefix}Messi_ 𖤍*
*⚡⃟➥ _${usedPrefix}animal_ 𖤍*
*⚡⃟➥ _${usedPrefix}meme_ 𖤍*
*⚡⃟➥ _${usedPrefix}meme2_ 𖤍*
*⚡⃟➥ _${usedPrefix}meme3_ 𖤍*
*⚡⃟➥ _${usedPrefix}cat_ 𖤍*
*⚡⃟➥ _${usedPrefix}dog_ 𖤍*
*⚡⃟➥ _${usedPrefix}pikachu_ 𖤍*
*⚡⃟➥ _${usedPrefix}waifu_ 𖤍*
*⚡⃟➥ _${usedPrefix}blackpink_ 𖤍*
*⚡⃟➥ _${usedPrefix}reto_ 𖤍*
*⚡⃟➥ _${usedPrefix}verdad_ 𖤍*
*⚡⃟➥ _${usedPrefix}imagenrandom_ 𖤍*
*⚡⃟➥ _${usedPrefix}neko_ 𖤍*
*⚡⃟➥ _${usedPrefix}lolivid_ 𖤍*
*⚡⃟➥ _${usedPrefix}iqtest_ 𖤍*
*⚡⃟➥ _${usedPrefix}kpopitzy_ 𖤍*
*⚡⃟➥ _${usedPrefix}navidad_ 𖤍*
*⚡⃟➥ _${usedPrefix}loli_ 𖤍*
*⚡⃟➥ _${usedPrefix}gawrgura_ 𖤍*
*⚡⃟➥ _${usedPrefix}miku_ 𖤍*
*⚡⃟➥ _${usedPrefix}nyan_ 𖤍*
*⚡⃟➥ _${usedPrefix}pat_ 𖤍*
*⚡⃟➥ _${usedPrefix}itachi_ 𖤍*
*⚡⃟➥ _${usedPrefix}slap_ 𖤍*
*⚡⃟➥ _${usedPrefix}pat_ 𖤍*
*⚡⃟➥ _${usedPrefix}perfil_ 𖤍*
*⚡⃟➥ _${usedPrefix}scan_ 𖤍*
*⚡⃟➥ _${usedPrefix}kpop_ 𖤍*
*⚡⃟➥ _${usedPrefix}qr_ 𖤍*
*⚡⃟➥ _${usedPrefix}afk_ 𖤍*
*⚡⃟➥ _${usedPrefix}CristianoRonaldo_ 𖤍*
*⚡⃟➥ _${usedPrefix}pregunta_ 𖤍*
*⚡⃟➥ _${usedPrefix}mention_ 𖤍*
*⚡⃟➥ _${usedPrefix}spamchat_ 𖤍*
*⚡⃟➥ _${usedPrefix}traducir_ 𖤍*
*⚡⃟➥ _${usedPrefix}zodiac_ 𖤍*
*⚡⃟➥ _${usedPrefix}readmore_ 𖤍*
*⚡⃟➥ _${usedPrefix}calc_ 𖤍*
*⚡⃟➥ _${usedPrefix}spamwa_ 𖤍*
*⚡⃟➥ _${usedPrefix}readqr_ 𖤍*
*⚡⃟➥ _${usedPrefix}anime_ 𖤍*
*⚡⃟➥ _${usedPrefix}subirestado_ 𖤍*
━━━━━━━━━━━━━━
🎤 *✥  _EFECTOS PARA AUDIOS_  ✥* 🎤
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}bass_ 𖤍*
*⚡⃟➥ _${usedPrefix}deep_ 𖤍*
*⚡⃟➥ _${usedPrefix}earrape_ 𖤍*
*⚡⃟➥ _${usedPrefix}fast_ 𖤍*
*⚡⃟➥ _${usedPrefix}fat_ 𖤍*
*⚡⃟➥ _${usedPrefix}nightcore_ 𖤍*
*⚡⃟➥ _${usedPrefix}reverse_ 𖤍*
*⚡⃟➥ _${usedPrefix}robot_ 𖤍*
*⚡⃟➥ _${usedPrefix}slow_ 𖤍*
*⚡⃟➥ _${usedPrefix}smooth_ 𖤍*
*⚡⃟➥ _${usedPrefix}vibración_ 𖤍*
━━━━━━━━━━━━━━
📳 *✥  _CHAT ANONIMO_  ✥* 📳
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}start_ 𖤍*
*⚡⃟➥ _${usedPrefix}next_ 𖤍*
*⚡⃟➥ _${usedPrefix}leave_ 𖤍*
━━━━━━━━━━━━━━
🏷 *✥  _CONVIERTETE EN BOT_  ✥* 🏷
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}jadibot_ 𖤍*
*⚡⃟➥ _${usedPrefix}stop_ 𖤍*
*⚡⃟➥ _${usedPrefix}getcode_ 𖤍*
━━━━━━━━━━━━━━
         📝️ *✥  _LOGOS_  ✥* 📝️
━━━━━━━━━━━━━━
*⚡⃟➥ _${usedPrefix}logos_ 𖤍*
*⚡⃟➥ _${usedPrefix}lolice_ 𖤍*
*⚡⃟➥ _${usedPrefix}simpcard_ 𖤍*
*⚡⃟➥ _${usedPrefix}hornycard_ 𖤍*
*⚡⃟➥ _${usedPrefix}lblackpink_ 𖤍*
*⚡⃟➥ _${usedPrefix}coffe_ 𖤍*
*⚡⃟➥ _${usedPrefix}tahta_ 𖤍*
*⚡⃟➥ _${usedPrefix}nulis_ 𖤍*
*⚡⃟➥ _${usedPrefix}nulis2_ 𖤍*
*⚡⃟➥ _${usedPrefix}lolice_ 𖤍*
*⚡⃟➥ _${usedPrefix}simpcard_ 𖤍*
*⚡⃟➥ _${usedPrefix}logotaza_ 𖤍*
*⚡⃟➥ _${usedPrefix}logotaza2_ 𖤍*
*⚡⃟➥ _${usedPrefix}logocesped_ 𖤍*
*⚡⃟➥ _${usedPrefix}flaming_ 𖤍*
*⚡⃟➥ _${usedPrefix}logofire_ 𖤍*
*⚡⃟➥ _${usedPrefix}logosky_ 𖤍*
*⚡⃟➥ _${usedPrefix}logocorazon_ 𖤍*
*⚡⃟➥ _${usedPrefix}logorandom_ 𖤍*
*⚡⃟➥ _${usedPrefix}neonfire_ 𖤍*
*⚡⃟➥ _${usedPrefix}technology_ 𖤍*
*⚡⃟➥ _${usedPrefix}playa_ 𖤍*
*⚡⃟➥ _${usedPrefix}lovemessages_ 𖤍*
*⚡⃟➥ _${usedPrefix}cementerio_ 𖤍*
*⚡⃟➥ _${usedPrefix}romanticdouble_ 𖤍*
*⚡⃟➥ _${usedPrefix}romanticmessages_ 𖤍*
━━━━━━━━━━━━━━
`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: '©Cᴏᴍᴘᴀɴʏ Zᴇɴ-O-Bᴏᴛ',
body: 'Aʟʙᴇʀᴛᴏ Y Asʜʟʏ🌹',
thumbnail: pp
}}})}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler

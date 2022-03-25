let { MessageType } = require('@adiwajshing/baileys')

const cooldown = 300000

let handler = async (m, { conn, usedPrefix, command }) => {
let user = global.DATABASE._data.users[m.sender]
let ranrpg = pickRandom(['0', '11', '0', '0', '0', '10', '0'])
let ranmap = pickRandom(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])
let _ranmap = pickRandom(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])
let __ranmap = pickRandom(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])
let ___ranmap = pickRandom(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])

let healt = (Math.floor(Math.random() * 10) + 7)
let exp = (Math.floor(Math.random() * 400) + 70)
let wood = (Math.floor(Math.random() * 5) + 1)
let stone = (Math.floor(Math.random() * 4) + 1)
let mob = (user.mob == 1 ? 'Slime' : '????' || user.mob == 2 ? 'Orco' : '????')
let hmob = (user.mob == 1 ? '40' : '0' || user.mob == 2 ? '60' : '0')
let _potion = (Math.floor(Math.random() * 2) + 1)
let potion = (user.healt == 0 ? _potion : '0')

let __timers = (new Date - global.DATABASE._data.users[m.sender].energy)
let _timers = (cooldown - __timers)
let timers = clockString(_timers)

if (user.rpg == 1) {
	let dueloo = `
*${mob}*
- Vida: ${user.hmob}

*Jugador*
- Vida: ${user.healt}
`.trim()

let _dueloo = conn.prepareMessageFromContent(m.chat, {
"listMessage":  {
"title": "\t\t*‧ 🌳 Tienes un duelo pendiente! 🌳 ‧*",
"description": dueloo,
"buttonText": "Opciones",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": "Atacar 🔪",
"rowId": `${usedPrefix}selec atacar`
},
{
"title": "Escapar 💨",
"rowId": `${usedPrefix}selec escapar`
}
]}]}}, { quoted: m })
conn.relayWAMessage(_dueloo)
}

if (user.healt >= 100) {
	if (user.rpg == 1) return 
		if (new Date - global.DATABASE._data.users[m.sender].energy > 100) {
let str = `
*Al explorar en el bosque encontraste*

◦Exp: ${exp} 
◦Madera: ${wood}
◦Piedra: ${stone}${user.healt == 0 ? '\n◦Pocion: ' + potion + '' : ''}
`.trim()

global.DATABASE._data.users[m.sender].exp += exp * 1
global.DATABASE._data.users[m.sender].wood += wood * 1
global.DATABASE._data.users[m.sender].stone += stone * 1
global.DATABASE._data.users[m.sender].potion += potion * 1
global.DATABASE._data.users[m.sender].energy = new Date * 1

conn.reply(m.chat, str, m)
} else conn.reply(m.chat, 'Te quedaste sin energía vuelve dentro de *' + timers + '*', m)
} else conn.reply(m.chat, 'Mínimo 30 de vida para poder ir a explorar', m)
//rpg mobs
if (ranrpg == 11) {
global.DATABASE._data.users[m.sender].rpg = 1
global.DATABASE._data.users[m.sender].mob = 2
global.DATABASE._data.users[m.sender].hmob = hmob * 1
let duelo = `
*${mob}*
- Vida: ${user.hmob}

*Jugador*
- Vida: ${user.healt}
`.trim()
let _duelo = conn.prepareMessageFromContent(m.chat, {
"listMessage":  {
"title": '\t\t\t*‧ 🌳 Un ' + mob + ' a aparecido! 🌳 ‧*',
"description": duelo,
"buttonText": "Opciones",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": "Atacar 🔪",
"rowId": `${usedPrefix}selec atacar`
},
{
"title": "Escapar 💨",
"rowId": `${usedPrefix}selec escapar`
}
]}]}}, { quoted: m })
conn.relayWAMessage(_duelo)
}



if (ranmap == 0) {
	if (user.map == 0) {
global.DATABASE._data.users[m.sender].map += 1
conn.reply(m.chat, '*Acabas de encontrar la Villa Papunika!*\n\n- Una villa, genial -', m)
}
}

if (_ranmap == 1) {
	if (user.map == 1) {
global.DATABASE._data.users[m.sender].map += 1
conn.reply(m.chat, '*Te encontraste con una cueva!*\n\n- Esto me da mala espina -', m)
}
}

if (__ranmap == 2) {
	if (user.map == 2) {
global.DATABASE._data.users[m.sender].map += 1
conn.reply(m.chat, '*Te encontraste con una Mina abandonada!*\n\n- Hora de buscar un pico -', m)
}
}

if (___ranmap == 3) {
	if (user.map == 3) {
global.DATABASE._data.users[m.sender].map += 1
conn.reply(m.chat, '*Acabas de encontrar una Aldea!*\n\n- Será el fin del viaje? -', m)
}
}


}


handler.help = ['explorar']
handler.tags = ['rpg']
handler.command = /^(aventura|adventure|explorar)$/i

module.exports = handler


function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(seconds) {
  d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  m = Math.floor((seconds / (1000 * 60)) % 60);
  s = Math.floor((seconds / 1000) % 60);
  
  dDisplay = d > 0 ? d + (d == 1 ? " dia," : " Dias,") : "";
  hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
 

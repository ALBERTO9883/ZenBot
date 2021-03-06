const cooldowns = {
    lastadventure: {
        name: 'adventure',
        cooldown: require('./adventure').cooldown
    },
    lastclaim: {
        name: 'claim',
        cooldown: require('./daily').cooldown
    },
    lastweekly: {
        name: 'weekly',
        cooldown: require('./weekly').cooldown
    },
    lastmonthly: {
        name: 'monthly',
        cooldown: require('./monthly').cooldown
    }
}
let handler = async (m, { conn, usedPrefix }) => {
    const user = global.DATABASE._data.users[m.sender]
    let str = `\t\t*â§ ð°ï¸ Tiempo de Espera ð°ï¸ â§*\n\n${Object.entries(cooldowns).map(([d, { name, cooldown }]) => `*${name}:* ${new Date() - user[d] >= cooldown ? 'â' : 'â'}`).join('\n')}`
    conn.sendButton(m.chat, str, `*Â©Cá´á´á´á´É´Ê Zá´É´ Bá´á´*`, null, [
        ['Inventario ð', usedPrefix + 'inv'],
        ['Perfil ð¤', usedPrefix + 'profile']
    ], { quoted: m })
}
handler.help = ['cd', 'cooldown']
handler.tags = ['rpg']
handler.command = /^(cd|cooldown)$/i
module.exports = handler

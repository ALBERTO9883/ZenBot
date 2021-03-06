let fs = require ('fs')
let path = require('path')
let os = require('os')
let { performance } = require('perf_hooks')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let neww = performance.now()
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'es'
    let weton = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves','Viernes','Sábado'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let tags = {
      'main': '•🎋MENÚS🎋•',
      'info': '•ℹ️INFORMACIÓN ℹ️•', 
      'bug': '•📬REPORTAR FALLAS📬•',
      'premium': '•🍂PREMIUM🍂•',
      'top': '•🎖️TOPS🎖️',
      'rpg': '•⚔️ RPG ⚔️•',
      'game': '•🕹JUEGOS🕹•',
      'downloader': '•📥DESCARGAS📥•',
      'admin': '•🎴ADMINS🎴•',
      'group': '•💎GRUPOS💎•',
      'sticker': '•🌿STICKERS🌿•',
      'images' : '•🏞️IMÁGENES🏞️•',
      'tools': '•⚙️HERRAMIENTAS⚙️•',
      'audio': '•🎤EFECTO DE AUDIOS🎤•',
      'anonymous': '•📳CHAT ANÓNIMO📳•',
      'advanced': '•📲AVANZADO📲•',
      'vote': '•🗳️VOTACIONES🗳️•',
      'jadibot': '•👤JADI BOT👤•',
      'logo': '•📝️LOGOS📝️•',
      'database': '•📦CAJA FUERTE📦•',
      'owner': '•👑OWNER👑•',
      '': 'No Category',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    function monospace(string) {
    let _3 = '`'.repeat(3)
    return _3 + string + _3
}
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
*╭═〘🌴 THE ZEN-O-BOT 🌴〙═╮*
⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯
➤ *Hola %name!*
*Que tengas un lindo verano🏖️*
⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯
 🎋 𝗫𝗣: %exp
 📆𝗙𝗲𝗰𝗵𝗮: %date
 ⌚𝗛𝗼𝗿𝗮: %time
 🕐𝘁𝗶𝗲𝗺𝗽𝗼 𝗱𝗲 𝗮𝗰𝘁𝗶𝘃𝗶𝗱𝗮𝗱: %uptime
 📁𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲: %totalreg numeros
 🔋𝗕𝗮𝘁𝗲𝗿𝗶𝗮: *${conn.battery ? `${conn.battery.value}%* *${conn.battery.live ? '🔌 Cargando...*' : '⚡ Desconectado*'}` : 'Desconocido*'}
 📲𝗦𝗶𝘀𝘁𝗲𝗺𝗮: ${conn.user.phone.device_manufacturer}
*╰┅ৡৢ͜͡✦═╡ZEN-BOT╞═┅ৡৢ͜͡✦┅╯*
%readmore`
    let header = conn.menu.header || '*╭〘%category〙╮*'
    let body   = conn.menu.body   || '*🍹⃟➜⃓* %cmd%islimit'
    let footer = conn.menu.footer || '*╰═ৡৢ͜͡✦══╡🍉╞══ৡৢ͜͡✦═╯*\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, limit, name, weton, week, date, time, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    conn.sendFile(m.chat, './Menu2.jpg', '', text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.help = ['menu','ayuda','?']
handler.tags = ['main']
handler.command = /^(menu|ayuda|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

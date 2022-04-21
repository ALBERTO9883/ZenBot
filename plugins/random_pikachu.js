//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
 try {
    let res = await fetch('https://some-random-api.ml/img/pikachu')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
©The ZenBot
`.trim()
    conn.sendFile(m.chat, json.link, '', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['pikachu']
handler.tags = ['images']
handler.command = /^pikachu$/i

handler.fail = null

module.exports = handler

let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*╭┅〘🛑 𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 🛑〙*
*▌║✙*❌𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐 𝒍𝒍𝒂𝒎𝒂𝒓 𝒂𝒍 𝒃𝒐𝒕📲
*▌║✙*❌𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐 𝒔𝒑𝒂𝒎 𝒂𝒍 𝒃𝒐𝒕☢
*▌║✙*❌𝑵𝒐 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒂𝒍 𝒃𝒐𝒕 𝒂 𝒈𝒓𝒖𝒑𝒐𝒔♻
*╰═┅ৡৢ͜͡✦═╡ZENBOT╞═┅ৡৢ͜͡✦═╯*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 THE ZEN-O-BOT🔥*', 'status@broadcast')
}
handler.command = /^(reglas|normas)$/i

module.exports = handler
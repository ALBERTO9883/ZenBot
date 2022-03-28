let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━━━━━━━━━━━┓
┋▰▰▰▰▰▰▰▰▰▰▰▰
┋ *_AUDIOS VARIADOS_*
┋▰▰▰▰▰▰▰▰▰▰▰▰
┋➥❖⃟🤠 _Analiza_
┋➥❖⃟🤠 _Venid_
┋➥❖⃟🤠 _Tengo miedo_
┋➥❖⃟🤠 _Salieron de San Isidro_
┋➥❖⃟🤠 _Probablemente_
┋➥❖⃟🤠 _Me pican los cocos_
┋➥❖⃟🤠 _Morra castrosa_
┋➥❖⃟🤠 _Ig de la minita_
┋➥❖⃟🤠 _Despierten_
┋➥❖⃟🤠 _Al rato_
┋➥❖⃟🤠 _Claro_
┋➥❖⃟🤠 _En efecto_
┋➥❖⃟🤠 _La familia es primero_
┋➥❖⃟🤠 _Talvez_
┋➥❖⃟🤠 _Sapu_
┋➥❖⃟🤠 _Que pro_
┋➥❖⃟🤠 _Porque_
┋➥❖⃟🤠 _No sirve el bot_
┋➥❖⃟🤠 _Nunca_
┋➥❖⃟🤠 _Nose_
┋➥❖⃟🤠 _Nieguenmelo_
┋➥❖⃟🤠 _Confirmo_
┋➥❖⃟🤠 _Te invoco_ *(persona)*
┋➥❖⃟🤠 _Obligame_
┋➥❖⃟🤠 _Algo anda mal_
┋➥❖⃟🤠 _A eso se le llama estrategia_
┋➥❖⃟🤠 _Diablos señorita_
┗━━━━━━━━━━━━┛
▰▰▰▰▰▰▰▰▰▰▰▰
*_₪AGRADECIMIENTO DE AUDIOS₪_*
▰▰▰▰▰▰▰▰▰▰▰▰
➤ *_Alberto_*
➤ *_Valdillo_*
➤ *_Makey_*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥━Tʜᴇ Zᴇɴ-O-Bᴏᴛ━🔥*', 'status@broadcast')
}
handler.command = /^(audios700)$/i

module.exports = handler
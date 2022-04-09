function handler(m) {
  this.sendContact(m.chat, '50499698072 ', 'OWNER - CREADOR - OFICIAL', m)
  this.sendContact(m.chat, '51933449515 ', 'ZEN N1 - SUB-CREADOR - OFICIAL', m)
  this.sendContact(m.chat, '50246028932', 'ZEN N2 - SUB-CREADOR - OFICIAL', m)
  this.sendContact(m.chat, '19045209846', 'ZEN N3 - SUB-CREADOR - OFICIAL', m)
  }
handler.help = ['creador']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler

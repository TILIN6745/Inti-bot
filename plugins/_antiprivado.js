export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] ¡HOLA! @${m.sender.split`@`[0]}, Esta prohibido mandame mensaje ya que soy un bot si quieres comprar Bots para grupos o plataformas mandale mensaje a mi dueño https://wa.me/+528336105471
    *`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}

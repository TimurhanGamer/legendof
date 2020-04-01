const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'r!'
module.exports = client => {
  
  const aktiviteListesi = [
    ` 🎉 Ł3G3NÐ ØFFİCİΛŁ | No Samimiyet Yes Łegend `,
    ` 🎉 Ł3G3NÐ ØFFİCİΛŁ | Kralınıza Tacı Biz Verdik?`,
    ` 🎉 Ł3G3NÐ ØFFİCİΛŁ | #ZİRVE `
  ]

  client.user.setStatus('dnd')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
}
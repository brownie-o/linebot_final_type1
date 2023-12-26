import 'dotenv/config'
import linebot from 'linebot'
import villagers from './commands/villagers.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// message = 收到訊息時
bot.on('message', event => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }

  if (event.message.text.includes('說明')) {
    event.reply({
      type: 'text',
      text:
`您可以在狸端機入口站👾查找島民的個人資訊。

查詢方式: 
直接輸入島民的 "姓名" 即可！`
    })
  } else if (event.message.type === 'text') {
    villagers(event)
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

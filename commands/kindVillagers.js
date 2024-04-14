import axios from 'axios'
import fs from 'node:fs'
import kind from './kind_for.js'
import _ from 'lodash'

export default async (event) => {
  try {
    const { data } = await axios.post('https://animalcrossing.soopoolleaf.com/tw/acnh/animalsearch/load_data.php', {
      // Payload
      Category: '',
      Category_Per: '',
      Category_B: '',
      Hobby: '',
      Sub_type: '',
      Greetings_type: '',
      Sociability: '',
      BGM: '',
      toptop: '',
      Umbrella: '',
      Style_1: '',
      Style_2: '',
      Color_1: '',
      Color_2: '',
      Wallpaper: '',
      Flooring: '',
      Search: '',
      Initial_phrase: '',
      Favorite_saying: '',
      OnlyNew: false,
      page: 1,
      pageLimit: 500
    }, {
      headers: {
        // indicate the media type of the resource
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // 騙對方發請求的是瀏覽器
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    })

    let id = event.message.text.trim()
    if (event.message.text.trim() === '無尾熊') {
      id = '考拉'
    } else if (event.message.text.trim() === '猴子') {
      id = '猴'
    } else if (event.message.text.trim() === '貓') {
      id = '猫'
    } else if (event.message.text.trim() === '倉鼠') {
      id = '仓鼠'
    } else if (event.message.text.trim() === '小鹿') {
      id = '鹿'
    } else if (event.message.text.trim() === '綿羊') {
      id = '羊'
    } else if (event.message.text.trim() === '豬') {
      id = '猪'
    } else if (event.message.text.trim() === '食蟻獸') {
      id = '食蚁兽'
    } else if (event.message.text.trim() === '馬') {
      id = '马'
    } else if (event.message.text.trim() === '河馬') {
      id = '河马'
    } else if (event.message.text.trim() === '猩猩') {
      id = '大猩猩'
    } else if (event.message.text.trim() === '大象') {
      id = '象'
    } else if (event.message.text.trim() === '鴕鳥') {
      id = '鸵鸟'
    } else if (event.message.text.trim() === '老虎') {
      id = '虎'
    } else if (event.message.text.trim() === '母牛') {
      id = '牛'
    } else if (event.message.text.trim() === '獅子') {
      id = '狮子'
    } else if (event.message.text.trim() === '鴨子') {
      id = '鸭'
    } else if (event.message.text.trim() === '章魚') {
      id = '章鱼'
    } else if (event.message.text.trim() === '河馬') {
      id = '河马'
    } else if (event.message.text.trim() === '企鵝') {
      id = '企鹅'
    } else if (event.message.text.trim() === '鱷魚') {
      id = '鳄鱼'
    } else if (event.message.text.trim() === '鳥') {
      id = '鸟'
    } else if (event.message.text.trim() === '雞') {
      id = '鸡'
    } else if (event.message.text.trim() === '鵰') {
      id = '鹰'
    }
    const replies = []
    kind(data, id, replies)

    if (replies.length > 12) {
      const number = Math.ceil(replies.length / 2)
      const result = await event.reply(_.chunk(replies, number).slice(0, 2).map((replies) => {
        return {
          type: 'flex',
          altText: `${event.message.text.trim()}的資訊`,
          contents: {
            type: 'carousel',
            contents: replies
          }
        }
      }))

      console.log(result)
    } else {
      const result = await event.reply({
        type: 'flex',
        altText: `${event.message.text.trim()}的資訊`,
        contents: {
          type: 'carousel',
          contents: replies
        }
      })
      console.log(result)
    }

    if (process.env.DEBUG === 'true') {
      fs.writeFileSync('./dump/kindVillagers.json', JSON.stringify(replies, null, 2))
    }
  } catch (error) {
    console.log(error)
  }
}

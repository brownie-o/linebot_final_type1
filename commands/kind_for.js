import * as cheerio from 'cheerio'
import villagersTemplate from '../templates/villagers.js'

export default async (data, id, replies) => {
  try {
    for (const villager of data.data) {
      let $ = cheerio.load(villager.Kind)
      if (id === $('a').text()) {
        const 種類 = $('a').text()
        console.log(種類)
        $ = cheerio.load(villager.名字)
        const 名字 = $('a').text()
        $ = cheerio.load(villager.性格)
        let 性格 = $('a').text()
        if (性格 === '运动') {
          性格 = '運動'
        } else if (性格 === '悠闲') {
          性格 = '悠閒'
        } else if (性格 === '元气') {
          性格 = '元氣'
        } else if (性格 === '自恋') {
          性格 = '自戀'
        }
        $ = cheerio.load(villager.性别)
        let 性別 = $('span').text()
        if ($('span').text() === '♂♂') {
          性別 = '雄'
        } else 性別 = '母'
        $ = cheerio.load(villager.生日)
        const 生日 = $('a').text()
        $ = cheerio.load(villager.初始口頭禪 || '')
        const 口頭禪 = $('span').text() || '無'
        $ = cheerio.load(villager.樣式 || '')
        const 樣式 = $('span').text()
        $ = cheerio.load(villager.樣式2 || '')
        const 樣式2 = $('span').text()
        const 樣式3 = `${樣式}/${樣式2}`
        $ = cheerio.load(villager.顏色 || '')
        let 顏色 = $('span').text()
        $ = cheerio.load(villager.顏色2 || '')
        let 顏色2 = $('span').text()
        const 顏色3 = `${顏色 = (顏色 === '紅') ? '紅色' : 顏色}/${顏色2 = (顏色2 === '紅') ? '紅色' : 顏色2}`
        if (名字 === '阿一') {
          villager.Img = 'https://soopool.art/image/acnh/animal/Kid%20Cat.png'
        }
        if (名字 === '阿二') {
          villager.Img = 'https://soopool.art/image/acnh/animal/Agent%20S.png'
        }
        if (名字 === '阿三') {
          villager.Img = 'https://soopool.art/image/acnh/animal/Big%20Top.png'
        }
        if (名字 === '山姆') {
          villager.Img = 'https://soopool.art/image/acnh/animal/Wart%20Jr..png'
        }
        const Img = villager.Img

        const template = villagersTemplate()
        template.hero.url = Img
        template.body.contents[0].text = 名字
        template.body.contents[1].contents[0].contents[0].contents[1].text = 性格
        template.body.contents[1].contents[0].contents[1].contents[1].text = `"${口頭禪}"`
        template.body.contents[1].contents[1].contents[0].contents[1].text = 性別
        template.body.contents[1].contents[1].contents[1].contents[1].text = 生日
        template.body.contents[1].contents[4].contents[1].text = 顏色3
        template.body.contents[1].contents[5].contents[1].text = 樣式3

        replies.push(template)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

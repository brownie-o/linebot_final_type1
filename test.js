import axios from 'axios'
import * as cheerio from 'cheerio'

const main = async () => {
  try {
    const { data } = await axios.post('https://animalcrossing.soopoolleaf.com/tw/acnh/animalsearch/load_data.php', {
      // Payload: view parsed
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

    for (const villager of data.data) {
      let $ = cheerio.load(villager.名字)
      const 名字 = $('a').text()
      $ = cheerio.load(villager.性格)
      const 性格 = $('a').text()

      console.log({ 名字, 性格 })
    }
  } catch (error) {
    console.log(error)
  }
}

main()

export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
      size: 'full',
      aspectRatio: '20:15',
      aspectMode: 'fit',
      align: 'center',
      margin: 'sm'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'Name',
          weight: 'bold',
          size: 'xl'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      text: '個性',
                      color: '#aaaaaa',
                      size: 'sm',
                      flex: 3
                    },
                    {
                      type: 'text',
                      wrap: true,
                      color: '#666666',
                      size: 'sm',
                      flex: 5,
                      text: '普通'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      text: '口頭禪',
                      color: '#aaaaaa',
                      size: 'sm',
                      flex: 3
                    },
                    {
                      type: 'text',
                      wrap: true,
                      color: '#666666',
                      size: 'sm',
                      flex: 5,
                      text: '"你好"'
                    }
                  ]
                }
              ]
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      text: '性別',
                      color: '#aaaaaa',
                      size: 'sm',
                      flex: 3
                    },
                    {
                      type: 'text',
                      wrap: true,
                      color: '#666666',
                      size: 'sm',
                      flex: 5,
                      text: '雄'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      text: '生日',
                      color: '#aaaaaa',
                      size: 'sm',
                      flex: 3
                    },
                    {
                      type: 'text',
                      wrap: true,
                      color: '#666666',
                      size: 'sm',
                      flex: 5,
                      text: '1月1號'
                    }
                  ]
                }
              ]
            },
            {
              type: 'separator'
            },
            {
              type: 'text',
              text: '適合送禮的：',
              size: '15px',
              margin: '10px',
              color: '#666666',
              weight: 'bold'
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '顏色',
                  color: '#aaaaaa',
                  size: 'sm'
                },
                {
                  type: 'text',
                  text: '白色/紅色',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '風格',
                  color: '#aaaaaa',
                  size: 'sm'
                },
                {
                  type: 'text',
                  text: '可愛/簡約',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
            // {
            //   type: 'box',
            //   layout: 'baseline',
            //   spacing: 'sm',
            //   contents: [
            //     {
            //       type: 'text',
            //       color: '#aaaaaa',
            //       size: 'sm',
            //       text: '你可以考慮：',
            //       align: 'start',
            //       weight: 'bold'
            //     }
            //   ],
            //   margin: 'md'
            // }
          ]
        }
      ]
    }
    // footer: {
    //   type: 'box',
    //   layout: 'horizontal',
    //   contents: [
    //     {
    //       type: 'image',
    //       url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    //       position: 'relative',
    //       aspectMode: 'cover'
    //     },
    //     {
    //       type: 'image',
    //       url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    //       aspectMode: 'cover',
    //       position: 'relative'
    //     }
    //   ],
    //   flex: 0
    // }
  }
}

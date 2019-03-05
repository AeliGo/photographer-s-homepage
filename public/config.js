var config = {
    data:[
      // {
      //     id:'album_001',     //每个相册独一无二的id
      //     name:'Fang Ren for Wrong Space',  //相册名称
      //     statement:[   //注意书写格式,如需分段
      //         `paragraph 1`,
      //         `paragraph 2`,
      //         `paragraph 2`,
      //     ],
      //     children:[ //相册下的每一张图片
      //         {
      //             id:'photo_001', //图片独一无二的id
      //             name:'photo_001', //图片名称
      //             url:'http://www.aeligo.com/resources/album1_img1.jpg', //图片地址
      //             parentId:'album_001', //属于哪个相册，填写相册的id
      //         },
      //         {
      //             id:'photo_002',
      //             name:'photo_002',
      //             url:'http://www.aeligo.com/resources/album1_img2.jpg',
      //             parentId:'album_001',
      //         },
      //         {
      //             id:'photo_003',
      //             name:'photo_003',
      //             url:'http://www.aeligo.com/resources/album1_img3.jpg',
      //             parentId:'album_001',
      //         }
      //     ]
      // },
      {
          id:'album_001',
          name:'Fang Ren for Wrong Space',
          statement:[
              `Fang Ren for Wrong Space Fang Ren for Wrong Space Fang Ren for Wrong Space Fang Ren for Wrong Space`,
              `Fang Ren for Wrong Space Fang Ren for Wrong Space Fang Ren for Wrong Space Fang Ren for Wrong Space`,
              `Fang Ren for Wrong Space Fang Ren for Wrong Space Fang Ren for Wrong Space Fang Ren for Wrong Space`,
          ],
          children:[
              {
                  id:'photo_001',
                  name:'photo_001',
                  url:'http://www.aeligo.com/resources/album1_img1.jpg',
                  parentId:'album_001',
              },
              {
                  id:'photo_002',
                  name:'photo_002',
                  url:'http://www.aeligo.com/resources/album1_img2.jpg',
                  parentId:'album_001',
              },
              {
                  id:'photo_003',
                  name:'photo_003',
                  url:'http://www.aeligo.com/resources/album1_img3.jpg',
                  parentId:'album_001',
              }
          ]
      },
      {
          id:'album_002',
          name:'Vietnam',
          statement:[
              `Vietnam Vietnam Vietnam Vietnam1`,
              `Vietnam Vietnam Vietnam Vietnam2`,
              `Vietnam Vietnam Vietnam Vietnam3`,
          ],
          children:[
              {
                  id:'photo_001',
                  name:'photo_001',
                  url:'http://www.aeligo.com/resources/album2_img1.jpg',
                  parentId:'album_002'
              },
              {
                  id:'photo_002',
                  name:'photo_002',
                  url:'http://www.aeligo.com/resources/album2_img2.jpg',
                  parentId:'album_002'
              },
              {
                  id:'photo_003',
                  name:'photo_003',
                  url:'http://www.aeligo.com/resources/album2_img3.jpg',
                  parentId:'album_002'
              },
              {
                  id:'photo_004',
                  name:'photo_004',
                  url:'http://www.aeligo.com/resources/album2_img4.jpg',
                  parentId:'album_002'
              },
              {
                  id:'photo_005',
                  name:'photo_005',
                  url:'http://www.aeligo.com/resources/album2_img5.jpg',
                  parentId:'album_002'
              },
          ]
      },
      {
          id:'album_003',
          name:'Still Life',
          statement:[
              `At the Care Fest, Leigh-Cheri is approached by a beautiful blonde who claims she is from the planet Argon.`,
              `She informs Leigh-Cheri that redheads are considered evil on her planet and that red hair is caused by "sugar and lust."`,
              `As it turns out, the Woodpecker has a passion for tequila that inadvertently causes him to bomb a UFO conference instead
              of his intended target.`,
              `After the UFO conference is destroyed, a number of people see lights in the sky which seems to
              prove that the ambassadors from Argon were real.`
          ],
          children:[
              {
                  id:'photo_001',
                  name:'photo_001',
                  url:'http://www.aeligo.com/resources/album3_img1.jpg',
                  parentId:'album_003'
              },
              {
                  id:'photo_002',
                  name:'photo_002',
                  url:'http://www.aeligo.com/resources/album3_img2.jpg',
                  parentId:'album_003'
              },
              {
                  id:'photo_003',
                  name:'photo_003',
                  url:'http://www.aeligo.com/resources/album3_img3.jpg',
                  parentId:'album_003'
              },
              {
                  id:'photo_004',
                  name:'photo_004',
                  url:'http://www.aeligo.com/resources/album3_img4.jpg',
                  parentId:'album_003'
              }
          ]
      },
      {
          id:'album_004',
          name:'Portraits',
          statement:[
              `Portraits Life Portraits Life Portraits Life Portraits Life Portraits Life Portraits Life Portraits Life Portraits`,
              `Portraits Life Portraits`,
          ],
          children:[
              {
                  id:'photo_001',
                  name:'photo_001',
                  url:'http://www.aeligo.com/resources/album4_img1.jpg',
                  parentId:'album_004'
              },
              {
                  id:'photo_002',
                  name:'photo_002',
                  url:'http://www.aeligo.com/resources/album4_img2.jpg',
                  parentId:'album_004'
              },
              {
                  id:'photo_003',
                  name:'photo_003',
                  url:'http://www.aeligo.com/resources/album4_img3.jpg',
                  parentId:'album_004'
              },
              {
                  id:'photo_004',
                  name:'photo_004',
                  url:'http://www.aeligo.com/resources/album4_img4.jpg',
                  parentId:'album_004'
              },
              {
                  id:'photo_005',
                  name:'photo_005',
                  url:'http://www.aeligo.com/resources/album4_img5.jpg',
                  parentId:'album_004'
              },
          ]
      },
      {
          id:'album_005',
          name:'LandSpace',
          statement:[
              `LandSpace LandSpace LandSpace LandSpace LandSpace LandSpace`,
          ],
          children:[
              {
                  id:'photo_001',
                  name:'photo_001',
                  url:'http://www.aeligo.com/resources/album5_img1.jpg',
                  parentId:'album_005'
              },
              {
                  id:'photo_002',
                  name:'photo_002',
                  url:'http://www.aeligo.com/resources/album5_img2.jpg',
                  parentId:'album_005'
              },
              {
                  id:'photo_003',
                  name:'photo_003',
                  url:'http://www.aeligo.com/resources/album5_img3.jpg',
                  parentId:'album_005'
              },
              {
                  id:'photo_004',
                  name:'photo_004',
                  url:'http://www.aeligo.com/resources/album5_img4.jpg',
                  parentId:'album_005'
              },
            
          ]
      }
  ]
}
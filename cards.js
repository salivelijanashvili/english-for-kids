const cards = [
    [
      "Action (set A)",
      "Action (set B)",
      "Animal (set A)",
      "Animal (set B)",
      "Clothes",
      "Emotions",
      "Nature",
      "Colors",
    ],
    [
      {
        word: "cry",
        translation: "плакать",
        georgian: "ტირილი",
        image: "https://sarahockwellsmith.files.wordpress.com/2015/01/cry.jpeg",
        audioSrc: "audio/cry.mp3"
      },
      {
        word: "dance",
        translation: "танцевать",
        georgian: "ცეკვა",
        image: "https://cdn.theculturetrip.com/wp-content/uploads/2018/02/sukhishvili_dancers_3.jpg",
        audioSrc: "audio/dance.mp3"
      },
      {
        word: "dive",
        translation: "нырять",
        georgian: "ყვინთვა",
        image: "https://i.pinimg.com/564x/8b/e1/36/8be13658603732729897454610f125ca.jpg",
        audioSrc: "audio/dive.mp3"
      },
      {
        word: "draw",
        translation: "рисовать",
        georgian: "ხატვა",
        image: "https://i1.wp.com/www.comfortinganxiouschildren.com/wp-content/uploads/2018/12/little-girl-coloring.jpg?fit=700%2C525&ssl=1",
        audioSrc: "audio/draw.mp3"
      },
      {
        word: "fish",
        translation: "ловить рыбу",
        georgian: "თევზი",
        image: "https://cdn.images.express.co.uk/img/dynamic/130/750x445/1259607.jpg",
        audioSrc: "audio/fish.mp3"
      },
      {
        word: "fly",
        translation: "летать",
        georgian: "ფრენა",
        image: "https://i1.pickpik.com/photos/143/244/899/fly-eagle-wild-animal-action-preview.jpg",
        audioSrc: "audio/fly.mp3"
      },
      {
        word: "hug",
        translation: "обнимать",
        georgian: "ჩახუტება",
        image: "https://selecthealth.org/-/media/selecthealth/blogs/post/2020/05/mom_daughter_hugging_blog_lg.ashx",
        audioSrc: "audio/hug.mp3"
      },
      {
        word: "jump",
        translation: "прыгать",
        georgian: "ახტომა",
        image: "https://media.istockphoto.com/photos/full-length-body-size-side-profile-photo-jumping-high-beautiful-she-picture-id1132930261?k=20&m=1132930261&s=612x612&w=0&h=fCuq6LaEiTRbZ166m1ZFc8myc-TQoVxoBUqOekQyGqE=",
        audioSrc: "audio/jump.mp3"
      }
    ],
    [
      {
        word: "open",
        translation: "открывать",
        georgian: "გაღება",
        image: "https://media-exp1.licdn.com/dms/image/C561BAQH30b2nodkceg/company-background_10000/0/1520084138528?e=2159024400&v=beta&t=XuQr5Lrb2HsroGkeLIKWdb7FDTkspRyWbS7DO_N32J4",
        audioSrc: "audio/open.mp3"
      },
      {
        word: "play",
        translation: "играть",
        georgian: "თამაში",
        image: "https://mksallc.com/wp-content/uploads/2017/12/kid-playing.jpg",
        audioSrc: "audio/play.mp3"
      },
      {
        word: "point",
        translation: "указывать",
        georgian: "მიუთითო",
        image: "https://thumb.mp-farm.com/345602/thumb.jpg",
        audioSrc: "audio/point.mp3"
      },
      {
        word: "ride",
        translation: "ездить",
        georgian: "ტარება",
        image: "https://learnenglishkids.britishcouncil.org/sites/kids/files/RS1087_Ride%20a%20bike%20col-web.jpg",
        audioSrc: "audio/ride.mp3"
      },
      {
        word: "run",
        translation: "бегать",
        georgian: "სირბილი",
        image: "data:image/jpeg;base64,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",
        audioSrc: "audio/run.mp3"
      },
      {
        word: "sing",
        translation: "петь",
        georgian: "იმღერო",
        image: "https://thumbs.dreamstime.com/b/happy-cute-little-kid-girl-sing-song-177077218.jpg",
        audioSrc: "audio/sing.mp3"
      },
      {
        word: "skip",
        translation: "пропускать, прыгать",
        georgian: "გამოტოვება",
        image: "https://media.istockphoto.com/vectors/reaching-to-the-top-while-skipping-steps-concept-vector-id1153833125?k=20&m=1153833125&s=612x612&w=0&h=nzsvVLZpuAIJCQAK9rilwcoC5LO4xNZpCooIAaxSpTk=",
        audioSrc: "audio/skip.mp3"
      },
      {
        word: "swim",
        translation: "плавать",
        georgian: "ცურვა",
        image: "https://cdn-japantimes.com/wp-content/uploads/2021/01/np_file_61745.jpeg",
        audioSrc: "audio/swim.mp3"
      }
    ],
    [
      {
        word: "cat",
        translation: "кот",
        georgian: "კატა",
        image: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
        audioSrc: "audio/cat.mp3"
      },
      {
        word: "chick",
        translation: "цыплёнок",
        georgian: "წიწილა",
        image: "https://media.wired.com/photos/5926ea678d4ebc5ab806be8c/master/w_2560%2Cc_limit/GettyImages-79312712-sa.jpg",
        audioSrc: "audio/chick.mp3"
      },
      {
        word: "chicken",
        translation: "курица",
        georgian: "ვარია",
        image: "https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1200-80.jpg",
        audioSrc: "audio/chicken.mp3"
      },
      {
        word: "dog",
        translation: "собака",
        georgian: "ძაღლი",
        image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        audioSrc: "audio/dog.mp3"
      },
      {
        word: "horse",
        translation: "лошадь",
        georgian: "ცხენი",
        image: "data:image/jpeg;base64,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",
        audioSrc: "audio/horse.mp3"
      },
      {
        word: "pig",
        translation: "свинья",
        georgian: "ღორი",
        image: "https://m.media-amazon.com/images/I/61WdixjupoL._AC_SL1024_.jpg",
        audioSrc: "audio/pig.mp3"
      },
      {
        word: "rabbit",
        translation: "кролик",
        georgian: "კურდღელი",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2ODk1NjU4NHx8ZW58MHx8fHw%3D&w=1000&q=80",
        audioSrc: "audio/rabbit.mp3"
      },
      {
        word: "sheep",
        translation: "овца",
        georgian: "ცხვარი",
        image: "https://www.aces.edu/wp-content/uploads/2018/11/iStock-182344013.jpg",
        audioSrc: "audio/sheep.mp3"
      }
    ],
    [
      {
        word: "bird",
        translation: "птица",
        georgian: "ჩიტი",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg",
        audioSrc: "audio/bird.mp3"
      },
      {
        word: "fish",
        translation: "рыба",
        georgian: "თევზი",
        image: "https://www.liveaquaria.com/images/articles/a-161-feed-different-food-083106-203.jpg",
        audioSrc: "audio/fish.mp3"
      },
      {
        word: "frog",
        translation: "жаба",
        georgian: "ბაყაყი",
        image: "https://ichef.bbci.co.uk/images/ic/1232x1232/p09ttryr.jpg",
        audioSrc: "audio/frog.mp3"
      },
      {
        word: "giraffe",
        translation: "жирафа",
        georgian: "ჟირაფი",
        image: "https://images.ctfassets.net/81iqaqpfd8fy/3r4flvP8Z26WmkMwAEWEco/870554ed7577541c5f3bc04942a47b95/78745131.jpg?w=1200&h=1200&fm=jpg&fit=fill",
        audioSrc: "audio/giraffe.mp3"
      },
      {
        word: "lion",
        translation: "лев",
        georgian: "ლომი",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
        audioSrc: "audio/lion.mp3"
      },
      {
        word: "mouse",
        translation: "мышь",
        georgian: "თაგვი",
        image: "https://media.istockphoto.com/photos/wood-mouse-in-front-of-a-white-background-picture-id889651718?k=20&m=889651718&s=170667a&w=0&h=dZqEA6e65juTpVCkWxAHi0u0KIIJXswCtT7-RhvgYM4=",
        audioSrc: "audio/mouse.mp3"
      },
      {
        word: "turtle",
        translation: "черепаха",
        georgian: "კუ",
        image: "https://www.sonotronics.com/wp-content/uploads/2018/11/turtule.jpg",
        audioSrc: "audio/turtle.mp3"
      },
      {
        word: "dolphin",
        translation: "дельфин",
        georgian: "დელფინი",
        image: "https://d.newsweek.com/en/full/1837953/dolphin.jpg?w=1600&h=1200&q=88&f=7815dd2a1bf746d6bd01b230b93818ac",
        audioSrc: "audio/dolphin.mp3"
      }
    ],
    [
      {
        word: "skirt",
        translation: "юбка",
        georgian: "ქვედაბოლო",
        image: "https://assets.burberry.com/is/image/Burberryltd/d6e2f775f98b3f5d48b3bca7ccb3f3ad00906450.jpg?$BBY_V2_SL_1x1$&wid=2500&hei=2500",
        audioSrc: "audio/skirt.mp3"
      },
      {
        word: "pants",
        translation: "брюки",
        georgian: "შარვალი",
        image: "https://www.helikon-tex.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
        audioSrc: "audio/pants.mp3"
      },
      {
        word: "blouse",
        translation: "блузка",
        georgian: "ბლუზა",
        image: "https://www.zimmermann.com/media/catalog/product/1/_/1.1901tmae.mif.mint-floral-flat.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=645&width=500&canvas=500:645",
        audioSrc: "audio/blouse.mp3"
      },
      {
        word: "dress",
        translation: "платье",
        georgian: "კაბა",
        image: "https://m.media-amazon.com/images/I/61NyMVjbUrS._UY550_.jpg",
        audioSrc: "audio/dress.mp3"
      },
      {
        word: "boot",
        translation: "ботинок",
        georgian: "ბათინკი",
        image: "https://images.streetstylestore.com/1/4/5/8/8/9/145889.jpg",
        audioSrc: "audio/boot.mp3"
      },
      {
        word: "shirt",
        translation: "рубашка",
        georgian: "პერანგი",
        image: "data:image/jpeg;base64,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",
        audioSrc: "audio/shirt.mp3"
      },
      {
        word: "coat",
        translation: "пальто",
        georgian: "ქურთუკი",
        image: "https://ae01.alicdn.com/kf/Hf9c265f4ea0e464e88ed991b068fa206w/2020-Trench-Coat-Mens-Overcoat-Casual-Slim-Fit-Windbreak-Plus-Size-Solid-Long-Coat-Men-Fashion.jpg_640x640.jpg",
        audioSrc: "audio/coat.mp3"
      },
      {
        word: "shoe",
        translation: "туфли",
        georgian: "ფეხსაცმელი",
        image: "https://cdn.shopify.com/s/files/1/1104/4168/products/TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_d2d37940-b8b8-49b9-b579-befc6f7dd60a_300x300.png?v=1610063508",
        audioSrc: "audio/shoe.mp3"
      }
    ],
    [
      {
        word: "sad",
        translation: "грустный",
        georgian: "სევდიანი",
        image: "https://www.nawpic.com/media/2020/sad-nawpic-1.png",
        audioSrc: "audio/sad.mp3"
      },
      {
        word: "angry",
        translation: "сердитый",
        georgian: "გაბრაზებული",
        image: "data:image/jpeg;base64,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",
        audioSrc: "audio/angry.mp3"
      },
      {
        word: "happy",
        translation: "счастливый",
        georgian: "ბედნიერი",
        image: "https://images.theconversation.com/files/304963/original/file-20191203-66982-1rzdvz4.jpg?ixlib=rb-1.1.0&rect=31%2C71%2C5330%2C2665&q=45&auto=format&w=1356&h=668&fit=crop",
        audioSrc: "audio/happy.mp3"
      },
      {
        word: "tired",
        translation: "уставший",
        georgian: "დაღლილი",
        image: "https://www.irishtimes.com/polopoly_fs/1.4110928.1575988375!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
        audioSrc: "audio/tired.mp3"
      },
      {
        word: "surprised",
        translation: "удивлённый",
        georgian: "გაკვირვებული",
        image: "https://media.istockphoto.com/photos/shocked-young-girl-looking-at-camera-with-mouth-wide-open-oh-my-god-picture-id1150254159?k=20&m=1150254159&s=612x612&w=0&h=jBeZ8SAO1sAKgJDPNIOti0LGYAKJCH3YMgLDDZZPd7c=",
        audioSrc: "audio/surprised.mp3"
      },
      {
        word: "scared",
        translation: "испуганный",
        georgian: "შეშინებული",
        image: "https://www.cranbournenorthdental.com.au/wp-content/uploads/2017/08/scared-Medium.jpg",
        audioSrc: "audio/scared.mp3"
      },
      {
        word: "smile",
        translation: "улыбка",
        georgian: "ღიმილი",
        image: "data:image/png;base64,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",
        audioSrc: "audio/smile.mp3"
      },
      {
        word: "laugh",
        translation: "смех",
        georgian: "სიცილი",
        image: "https://cms.qz.com/wp-content/uploads/2016/07/rtx2c9ws.jpg?quality=75&strip=all&w=1600&h=900&crop=1",
        audioSrc: "audio/laugh.mp3"
      }
    ],
    [
      {
        word: "tree",
        translation: "дерево",
        georgian: "ხე",
        image: "https://papik.pro/uploads/posts/2021-09/1630479814_29-papik-pro-p-derevo-risunok-29.png",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "bush",
        translation: "куст",
        georgian: "ბუჩქი",
        image: "https://cdn-icons-png.flaticon.com/512/2174/2174132.png",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "river",
        translation: "река",
        georgian: "მდინარე",
        image: "https://i.pinimg.com/originals/fd/cc/5f/fdcc5fa32fed604f13d57b9803fdb475.jpg",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "sun",
        translation: "солнце",
        georgian: "მზე",
        image: "https://cdn3.vectorstock.com/i/1000x1000/91/47/yellow-sun-icon-symbol-design-vector-31859147.jpg",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "moon",
        translation: "Луна",
        georgian: "მთვარე",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0sjOf51pHySZDenYTJZfR9dq5CkHH4cpSA&usqp=CAU",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "flower",
        translation: "цветок",
        georgian: "ყვავილი",
        image: "https://www.nicepng.com/png/detail/0-7089_watercolour-flowers-watercolor-painting-clip-art-pink-watercolour.png",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "mountain",
        translation: "гора",
        georgian: "მთა",
        image: "https://i.pinimg.com/originals/fd/09/f7/fd09f7c5093408bcdd7510347301920f.png",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "snow",
        translation: "снег",
        georgian: "თოვლი",
        image: "https://image.freepik.com/free-vector/winter-landscape-with-white-pine-trees-snow-hill_169241-2225.jpg",
        audioSrc: "audio/laugh.mp3"
      }
    ],
    [
      {
        word: "red",
        translation: "красный",
        georgian: "წითელი",
        image: "https://www2.le.ac.uk/digitalsignage/slideshow/chemistry/images/archive/upto-dec-16/red.png/image",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "orange",
        translation: "оранжевый",
        georgian: "ნარინჯისფერი",
        image: "https://www.pngmagic.com/product_images/neon-orange-solid-color-background.jpg",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "yellow",
        translation: "желтый",
        georgian: "ყვითელი",
        image: "https://www.pngmagic.com/product_images/yellow-solid-background.jpg",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "green",
        translation: "зеленый",
        georgian: "მწვანე",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pure_Green.svg/768px-Pure_Green.svg.png",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "blue",
        translation: "синий",
        georgian: "ლურჯი",
        image: "https://www.pngmagic.com/product_images/beautiful-blue-color-background.png",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "violet",
        translation: "фиолетовый",
        georgian: "იისფერი",
        image: "https://www.pngmagic.com/product_images/violet-color-solid-color-background.jpg",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "black",
        translation: "черный",
        georgian: "შავი",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKehvF_JTFVe5iLJySNiDEDOeHn1onnEfmg&usqp=CAU",
        audioSrc: "audio/laugh.mp3"
      },
      {
        word: "white",
        translation: "белый",
        georgian: "თეთრი",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMxaN8pSxKwlCdDqx7KoUWW9jtylx5f27yA&usqp=CAU",
        audioSrc: "audio/laugh.mp3"
      }
    ]
  ];

  export default cards;
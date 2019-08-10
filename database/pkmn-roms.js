// to run/load (in non-cloud server):
// 1. go into mongo shell
// 2. load("<path_to_this_file>.js")
// or
// 1. go to terminal
// 2. <path_to_mongo> <path_to_this_file>.js

// connect to mongodb
conn = new Mongo();
printjson(conn);

// connect to/create pkmn-roms database
db = conn.getDB('pkmn-roms');
db = db.getSiblingDB('pkmn-roms');
printjson(db);

// // create db user
/*
dbUserInsertQuery = db.createUser({
  user: 'Broccolini',
  pwd: '12345678',
  roles: ['readWrite', 'dbAdmin']
});
*/
// printjson(dbUserInsertQuery);

// create roms collection
romsCollection = db.createCollection('roms', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        // 'user_id',
        'order_number',
        'rom_type',
        'file_size',
        'file_type',
        'file_name',
        'download_link',
        'generation',
        'box_art_url',
        'game_name',
        'region',
        'platform',
        'description',
        'date_released',
        'logo_url'
      ],
      properties: {
        user_id: {
          bsonType: 'objectId'
        },
        order_number: {
          bsonType: 'int',
          minimum: 0,
          maximum: 88
        },
        rom_type: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 5,
          pattern: '^(core|hack)$'
        },
        file_name: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 80
        },
        file_size: {
          bsonType: 'int',
          minimum: 64,
          maximum: 12000000
        },
        file_type: {
          bsonType: 'string',
          pattern: '^(?:.?(gb[ca]?|[n3]ds|xci))$' // i
        },
        download_link: {
          bsonType: 'string',
          minLength: 8,
          maxLength: 1000,
          pattern:
            '^(?:[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#;=]{2,256}.[a-zA-Z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=;]*))$' // i
        },
        generation: {
          bsonType: 'int',
          minimum: 1,
          maximum: 8
        },
        box_art_url: {
          bsonType: 'string',
          minLength: 8,
          maxLength: 1000,
          pattern:
            '^(?:[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#;=]{2,256}.[a-zA-Z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=;]*))$' // i
        },
        game_name: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 50
        },
        region: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 10
        },
        platform: {
          bsonType: 'string',
          minLength: 2,
          maxLength: 50
        },
        description: {
          bsonType: 'string',
          minLength: 5,
          maxLength: 8000
        },
        date_released: {
          bsonType: 'date'
        },
        genre: {
          bsonType: 'string',
          minLength: 2,
          maxLength: 20
        },
        logo_url: {
          bsonType: 'string',
          pattern:
            '^(?:[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#;=]{2,256}.[a-zA-Z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=;]*))$' // i
        }
      }
    }
  }
});
printjson(romsCollection);

// create users collection
usersCollection = db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['email', 'username', 'password'],
      properties: {
        name: {
          bsonType: 'string',
          minLength: 1,
          maxLength: 100
        },
        email: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 55,
          pattern:
            '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        },
        username: {
          bsonType: 'string',
          minLength: 5,
          maxLength: 22
        },
        password: {
          bsonType: 'string',
          minLength: 8,
          maxLength: 256
        }
      }
    }
  }
});
printjson(usersCollection);

// create natures collection
naturesCollection = db.createCollection('natures', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'up', 'down', 'usage'],
      properties: {
        name: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 10
        },
        up: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 20
        },
        down: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 20
        },
        usage: {
          bsonType: 'string',
          minLength: 5,
          maxLength: 40
        },
        flavor: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 14
        }
      }
    }
  }
});
printjson(naturesCollection);

// create ratings collection
ratingsCollection = db.createCollection('ratings', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['rating', 'date_time'],
      properties: {
        rating: {
          bsonType: 'int',
          minimum: 1,
          maximum: 10
        },
        message: {
          bsonType: 'string',
          maxLength: 1000
        },
        date_time: {
          bsonType: 'date'
        }
      }
    }
  }
});
printjson(ratingsCollection);

// insert main user
insertUserQuery = db.users.insert({
  name: 'Broccolini',
  email: 'bglatman@outlook.com',
  username: 'bag33188',
  password: '$2a$10$TdnK8g67LbEzBuTs39HE4eWxUfoGcraMAnoxjscnvXtUiYfsdWrVe',
  __v: 0
});
printjson(insertUserQuery);

// insert all roms
insertRomsQuery = db.roms.insertMany(
  [
    {
      order_number: NumberInt(0),
      rom_type: 'core',
      file_name: 'Pokemon Red.gb',
      file_size: NumberInt(1024),
      file_type: 'gb',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106579&authkey=AFh1G-fhw1ddTbs',
      generation: NumberInt(1),
      box_art_url:
        'https://0nqsgw.sn.files.1drv.com/y4m2BzY8hfzVzQxYbI39zLMxNIpFlVM2VfKFw_oChvqnNXtGh4vEbhwyZBJTfK_h_88RXRoXtmMkHGlf1Teg9NsTgRhDcHWoUrvnCkl7aTYUGdztzZfKYxO3uYfIeszAqrgSf6EjdqDbs_MnOZvhflCC0GreOQCm9XF1oxENdJEIrd0IBfVlF9bx_uUO-wcKsQh8sFAtH1XSpPATZQ7ucBrNw?width=898&height=890&cropmode=none',
      game_name: 'Pokémon Red Version',
      region: 'Kanto',
      platform: 'Game Boy',
      description:
        "Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy. After a dangerous brush with wild Pokémon, Professor Oak teaches you how to capture Pokémon, and then sends you on your way as a fledgling Trainer. During your journey through Kanto, you must capture Pokémon to record their information in your Pokédex, as well as become a better Trainer by competing in Gyms scattered throughout the region. Once you've proven your mettle as a Pokémon Trainer, it's time to take on the Elite Four, a crack group of Trainers that will put all of your learned skills to the test. Your journey will be far from easy. In addition to the many Trainers and wild Pokémon you'll encounter along the way, you'll also have to be watchful of Team Rocket, a despicable group of Pokémon thieves. Prevent Team Rocket from stealing rare Pokémon and stop their criminal ways! You won't be able to catch every Pokémon in either Pokémon Red or Pokémon Blue; to collect every Pokémon, you'll have to trade with friends via the Game Link™ Cable. With it, you can also take your team of faithful Pokémon into battle against your pals to see how well your team stacks up! There's much to see and do in Pokémon Red and Pokémon Blue. Start your journey through Kanto and become a Master Trainer!",
      genre: 'RPG',
      date_released: ISODate('1998-09-28T07:00:00Z'),
      logo_url:
        'https://1hrwpg.sn.files.1drv.com/y4mG_PS3E35xvssoQaHGfnCGhAfY9MClXpB-brQOmGcrWwX53dg30tU0h_FN17mNXe3UzRpNj6gRRhsH48wFR41eHHLe6iBRn8gBzNbVq8AlmTywK2R6KDLOKQ7ltpK1W9pPRduPe_52t8MeLSW291rZyjP3Bpaa-3kdrm64M0vG2g2yeP2pp-ZJ1kFBOPfrkhRWImMWSJsGSVOzSxJDN9faQ?width=400&height=155&cropmode=none'
    },
    {
      order_number: NumberInt(1),
      rom_type: 'core',
      file_name: 'Pokemon Blue.gb',
      file_size: NumberInt(1024),
      file_type: 'gb',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106584&authkey=AAu3Ad8tHrWmdgQ',
      generation: NumberInt(1),
      box_art_url:
        'https://03qigw.sn.files.1drv.com/y4mRMNcs72yCHfNOjYzS2W7QkazHfO_pmD-iwoOWJ7P0Mr-A1qOpsCjBYuoLt86ILVKhH9Kuy4zNZACqw0MIo7S9LFPZn_FfX9pA-HdkWMyRvdZRPzP3KUr1MCM9RJ1O30-WsN0cpNf5Ixr-Q4ERwoNAxcNGbaX0IOPhisAgVnrvlf3tgyxSnfHS7InFNa7G7j7Wp7kBVm0NOXo-fzGIgdbGg?width=894&height=894&cropmode=none',
      game_name: 'Pokémon Blue Version',
      region: 'Kanto',
      platform: 'Game Boy',
      description:
        "Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy. After a dangerous brush with wild Pokémon, Professor Oak teaches you how to capture Pokémon, and then sends you on your way as a fledgling Trainer. During your journey through Kanto, you must capture Pokémon to record their information in your Pokédex, as well as become a better Trainer by competing in Gyms scattered throughout the region. Once you've proven your mettle as a Pokémon Trainer, it's time to take on the Elite Four, a crack group of Trainers that will put all of your learned skills to the test. Your journey will be far from easy. In addition to the many Trainers and wild Pokémon you'll encounter along the way, you'll also have to be watchful of Team Rocket, a despicable group of Pokémon thieves. Prevent Team Rocket from stealing rare Pokémon and stop their criminal ways! You won't be able to catch every Pokémon in either Pokémon Red or Pokémon Blue; to collect every Pokémon, you'll have to trade with friends via the Game Link™ Cable. With it, you can also take your team of faithful Pokémon into battle against your pals to see how well your team stacks up! There's much to see and do in Pokémon Red and Pokémon Blue. Start your journey through Kanto and become a Master Trainer!",
      genre: 'RPG',
      date_released: ISODate('1998-09-28T07:00:00Z'),
      logo_url:
        'https://03rjpg.sn.files.1drv.com/y4m5TVWDfm2JZeX4x7BCDp0xbYeCSFDfrrV2DKGRtEPw-Opu8-gAdBOFojjCT9GHq3y8qciMuErBPSMcm_Be6Q0K6XWfplz6eKK0r8EwsoErXX2DT5TVFc2VHpMbpqGu7OXq2tjwbG1NyEs49yZJiv4-aSpMct65r8xBrHBod90j5okTV-ZE4-TaAwcJ_Hn5fm9TdDJ6n64AqreRziJxcgHww?width=1727&height=903&cropmode=none'
    },
    {
      order_number: NumberInt(2),
      rom_type: 'core',
      file_name: 'Pokemon Yellow (Special Pikachu Edition).gb',
      file_size: NumberInt(1024),
      file_type: 'gb',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106576&authkey=AEr3meD0RCYY81M',
      generation: NumberInt(1),
      box_art_url:
        'https://0nqdgw.sn.files.1drv.com/y4mFQW9jaQrNfHN9skbC23ch2IlYGQ_C37COALLc1CwfPCdJUFbokBeoiKvCBB3wWn1723RfLVTcLkZylfzAaE3eCX0NBqH03qyA2ELKxjCHwcptJ901_xorMX45fPRrhAt4G0hpc23bw5WAdqyqy6dwb7iXBrxDeolVTgbwf8W3bWg4rG2wUsnlTfW0NGd2pj1wgs2G6LTxo9TxKHHgT0pSg?width=894&height=894&cropmode=none',
      game_name: 'Pokémon Yellow: Special Pikachu Edition',
      region: 'Kanto',
      platform: 'Game Boy',
      description:
        "Building on the terrific success of Pokémon Red Version and Pokémon Blue Version, Pokémon Yellow Version returns Trainers to Kanto for more even more fun and adventure. Pokémon Yellow delivers a feature that hasn't been duplicated in any other Pokémon game-Pikachu actually follows you around throughout your journey! The graphics for Pokémon Yellow are updated slightly from Pokémon Red and Pokémon Blue, and you can use innovative peripherals such as the Game Boy Printer, which allow you to print out stickers of your favorite Pokémon. Pokémon Yellow also introduces challenges and battle modes that let you compete in exciting ways.",
      genre: 'RPG',
      date_released: ISODate('1999-10-01T07:00:00Z'),
      logo_url:
        'https://zpmcgw.sn.files.1drv.com/y4m0ueVErNYyLnx-1mrs4-VR4ekTg9fvktoCQy-td4at5iauAa-_DEqKV2fHB8pWDGCBRt1ts44OjiW1XlfZgXxieiIpYiVtUqAUac1k6IuQDBD5tXanTXh_XGGw37W3j-A39JUkK-pS4Po4nrraZQ9heelvHOPAdx-ncVXkN5dEAUh_B5Y5WiU0WX4gxrk-BnOHtvVqPDK17Y09cjvOyDIPg?width=400&height=155&cropmode=none'
    },
    {
      order_number: NumberInt(3),
      rom_type: 'core',
      file_name: 'Pokemon Green (JP).gb',
      file_size: NumberInt(1024),
      file_type: 'gb',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106583&authkey=AKd_c8Z6BOt1WxE',
      generation: NumberInt(1),
      box_art_url:
        'https://03qkgw.sn.files.1drv.com/y4mKA-4wtHmBgPgR-_Wx60t_Vp9fItrhkgH3fCaBTI0Ax8cx0ko01gxfh-sOCP9PPTrfCTzvqU_YeWLTCk2vI2YrYNG6b5ckPrB_n9csRW45-9n5svgjQ85H1xsBgj3_1EMUWkDrCltrhoXd6EZVowgH-46gCd7L-pksi7vDcGQGK7ekLh7NgRdGmhwjhdUDgA9mLDsHzczHmbcFcgFUl6dGg?width=479&height=599&cropmode=none',
      game_name: 'Pokémon Green Version (JP)',
      region: 'Kanto',
      platform: 'Game Boy',
      description: 'Pokémon Green is the Japanese version of Pokémon Blue.',
      genre: 'RPG',
      date_released: ISODate('1996-02-27T08:00:00Z'),
      logo_url:
        'https://1hropg.sn.files.1drv.com/y4mCK03DncKo1VKlvJx7b8xafybJPECphxj8WPPYGrHN4mett1zc-6bgEayvNqEqRsIM2c0G3Iv_LBHHGlACLJvk6jHJSNrLwBd89wfNrG4JQjeNiAB1z8jDvwxeM7TKXOzS_blvfsBTx8SRTYdiFqz91Iy31w1e2xTnx7DepZidTZZnZHN1eO-ljttKPlM9-uj65PWUavk2QPeCf4-pwb3VA?width=480&height=360&cropmode=none'
    },
    {
      order_number: NumberInt(4),
      rom_type: 'core',
      file_name: 'Pokemon Gold.gbc',
      file_size: NumberInt(2048),
      file_type: 'gbc',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106573&authkey=AImVAcHQPMcqHdQ',
      generation: NumberInt(2),
      box_art_url:
        'https://0nqigw.sn.files.1drv.com/y4mmuevpMK5D5_0TiU9PBT7bWuAmRATMwP4wbJVIfCqGDoS-4VTzwjGuJOA3vWrK6MmUpvdu4bU0MMpdk4Q5ezoMhw9OF8abDaCUYkrW-Q_xeKfnEIaTWJu_qDnMMWWpDh8S-9JoYyUPhLU_jiX2K7qmE83wAEDqEeJ3IKN_6qNSeJr1ko_KMVXRwpATxuLSwASMCEtS7SlCYDpZSO-PPPVhA?width=220&height=220&cropmode=none',
      game_name: 'Pokémon Gold Version',
      region: 'Johto',
      platform: 'Game Boy Color',
      description:
        'One of the first mainstream RPG games to appear on the Game Boy Color, Pokémon Gold Version and Pokémon Silver Version continued to expand the Pokémon universe, adding 100 Pokémon, held items, and real-time events, thanks to an internal game clock. These major Pokémon releases take you on a journey through the Johto region, and for the first time, show your Pokémon appearing in glorious color on your Game Boy Color. All kinds of creative aspects are to be found in Pokémon Gold and Pokémon Silver, including genders and items that Pokémon can hold to improve their skills. Dozens of Pokémon join the action, including the trio of Legendary Pokémon Raikou, Entei, and Suicune. They’re always on the move, so you’ll need to be at the right place at the right time to catch any of them. Pokémon Gold and Pokémon Silver introduce new Pokémon types as well—look out for Steel- and Dark-type Pokémon throughout your travels. Pokémon Egg groups expand the ways you can collect Pokémon. Leave two compatible Pokémon at the Pokémon Day Care and cross your fingers. If you’re lucky, an Egg may appear that will hatch into a new young Pokémon! Only some Pokémon will give you an Egg, and Pokémon are picky about which other Pokémon they get along with, so it will take plenty of experimenting to find a match!',
      genre: 'RPG',
      date_released: ISODate('2000-10-15T07:00:00Z'),
      logo_url:
        'https://03rwpg.sn.files.1drv.com/y4mZFvyiTrrxENEF4Dt7zZt_m9npZLea5Atrn1tXMvVssTsG5CPif-aGVeFc884JZogQsrvywwL2ocu3S8jyGaPE5kzKy774G050xybt-sqypS7b6Bwj0Yo5PhY9rJXIaHBa7_F9e5xHl3F7KmhgLdZ2hsRAvXbJMOvctnSo1Y6CklP6tFAurpRXTCOp4gelg5ZGCC3Ew3sgrk_evyWOtirWA?width=1701&height=985&cropmode=none'
    },
    {
      order_number: NumberInt(5),
      rom_type: 'core',
      file_name: 'Pokemon Silver.gbc',
      file_size: NumberInt(2048),
      file_type: 'gbc',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106570&authkey=AMkhM_B6wawLVBo',
      generation: NumberInt(2),
      box_art_url:
        'https://0xqrgw.sn.files.1drv.com/y4m4Y-DMcKpOJW59EsPDBk5JMjngMy2zZVDC4goQ9ipzDsYsPlkkIj0uaKq6tEJHBD2vfmakykAWqWpHeO7ZKt7reUmcCCXPiigAj5_ZjCMiEbfRmlrwOn-Wg1Djv7uYPlYheHWg1guO5hkIHWMPMMWnlcl0jUF-XBhP6QK0B0aPvhw-orJSK9N2VBnWZSOe9d0tlZaQH3963qj1CSzIuZzrg?width=287&height=289&cropmode=none',
      game_name: 'Pokémon Silver Version',
      region: 'Johto',
      platform: 'Game Boy Color',
      description:
        'One of the first mainstream RPG games to appear on the Game Boy Color, Pokémon Gold Version and Pokémon Silver Version continued to expand the Pokémon universe, adding 100 Pokémon, held items, and real-time events, thanks to an internal game clock. These major Pokémon releases take you on a journey through the Johto region, and for the first time, show your Pokémon appearing in glorious color on your Game Boy Color. All kinds of creative aspects are to be found in Pokémon Gold and Pokémon Silver, including genders and items that Pokémon can hold to improve their skills. Dozens of Pokémon join the action, including the trio of Legendary Pokémon Raikou, Entei, and Suicune. They’re always on the move, so you’ll need to be at the right place at the right time to catch any of them. Pokémon Gold and Pokémon Silver introduce new Pokémon types as well—look out for Steel- and Dark-type Pokémon throughout your travels. Pokémon Egg groups expand the ways you can collect Pokémon. Leave two compatible Pokémon at the Pokémon Day Care and cross your fingers. If you’re lucky, an Egg may appear that will hatch into a new young Pokémon! Only some Pokémon will give you an Egg, and Pokémon are picky about which other Pokémon they get along with, so it will take plenty of experimenting to find a match!',
      genre: 'RPG',
      date_released: ISODate('2000-10-15T07:00:00Z'),
      logo_url:
        'https://zumagw.sn.files.1drv.com/y4m28LU0gs2tHnLint12ODvMbbruTaaQZqxDgm_MhY61G6NJvoAhkoogm7zvKspF7-wJZ6P2yQi12qG5D4orBraMhdTXLZr_noELSukDBt-TdbaN6wMC3gfP2H2h1XqT-v-cQQuruSFAopWa7BVo3JXgRjPCx7KRpirfJh50tOlEzi3h4RER8CkyMiHyXP21EdYrHN9G5Cd7jfVE5QBNSmMlQ?width=348&height=214&cropmode=none'
    },
    {
      order_number: NumberInt(6),
      rom_type: 'core',
      file_name: 'Pokemon Crystal.gbc',
      file_size: NumberInt(2048),
      file_type: 'gbc',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106575&authkey=AHfY_trc76OVv1g',
      generation: NumberInt(2),
      box_art_url:
        'https://0nqggw.sn.files.1drv.com/y4mqrHF9RQhQSCRV6PcIgMPe3qx2tYMFoXaBVNCCzbUO5dQPaN_AiLMAmvu5bnkVm6ut9tYo8Bp3oA49mMq5sd48tVnXDLzag75nW0cb8-TAikS9Nuo6FTPd2ZfeThRYP-5R22zVlE-6lT0kx7bNGzgZhs9pcY39f48knhDOAE-r60O0AMwd_NxCEb0QVxTOPOyxtJoGXBd3LhPpP99IC247Q?width=256&height=256&cropmode=none',
      game_name: 'Pokémon Crystal Version',
      region: 'Johto',
      platform: 'Game Boy Color',
      description:
        "The last of the Game Boy Color Pokémon games, Pokémon Crystal Version sent the classic system off in style. On the surface, Pokémon Crystal Version is a lot like Pokémon Gold Version and Pokémon Silver Version, in that the story takes place in Johto and the adventure takes you down a familiar path. But, digging deeper, you'll see that Pokémon Crystal has plenty of aspects that have revolutionized Pokémon games. Pokémon Crystal is the first Pokémon game where you can choose to play either as a boy or girl, and it's also the first Pokémon game to feature a Battle Tower, a central location for hordes of the toughest Trainers in the land! Pokémon Crystal features animated introductions for each Pokémon when they are brought to the heat of battle, as well as other graphic improvements you'll notice as you roam the Johto region. While doing so, keep an eye out for Pokémon in different locations and Legendary Pokémon that can be caught only by the most talented Trainers!",
      genre: 'RPG',
      date_released: ISODate('2001-07-29T07:00:00Z'),
      logo_url:
        'https://03rkpg.sn.files.1drv.com/y4mkAlGXSdmoCN-5JUA-1HAe19UVmF8NruiKy5VGl9QmvZje_lFmi2dqwJ9wodbz95H9fHXVTJlq2VPZIAVl90oRMfYz275VqgRzYh6P99znSvnQdLS32loiUoNquPPPhZzFRpGttEcTdbQ9vcIN7zw6hlZitco69KoDRY_gwZHvEK8PboivG0eu7diNMY5mrSgtIRKYK-fDWU3cvjOBqnHbA?width=1500&height=1090&cropmode=none'
    },
    {
      order_number: NumberInt(7),
      rom_type: 'core',
      file_name: 'Pokemon Ruby.gba',
      file_size: NumberInt(16384),
      file_type: 'gba',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106560&authkey=AAicbxqnQnJ8GR8',
      generation: NumberInt(3),
      box_art_url:
        'https://0hqrgw.sn.files.1drv.com/y4mIPBDlOy9M9EJJKpUD-Kynwed0d86NXrhnl_5mLXHkShGedV4e3UlePxEAqiNSNWV0J_e7THIPzruluSWtzW4LJMnG8F2ajNG6ZZfpMMMwN7VEUHpmsvYB3GCqvGSJ9TwdSb-FO1dxPIctIQfaKWNuBE1M1QTStB3CDT3G9-ggO9sI1ugcNd041ZpnU5vra_SfXAH_QhuvEwGSjdLRQWFRw?width=500&height=500&cropmode=none',
      game_name: 'Pokémon Ruby Version',
      region: 'Hoenn',
      platform: 'Game Boy Advanced',
      description:
        "The first Pokémon RPGs for the Game Boy Advance showed off the system's improved graphics and sound, and introduced now-permanent fixtures to the Pokémon world, such as double battles and Contests. Pokémon reinvents itself once again with two of the most popular games in the series! Pokémon Ruby Version and Pokémon Sapphire Version take great leaps in gameplay, particularly during combat. For the first time in a Pokémon game, Trainers can send two Pokémon into battle at the same time. Some Pokémon can learn moves that aid a partner or damage both of the opponent's Pokémon. And Pokémon have Abilities and Natures that affect their performance in battle. Your Pokémon are more than just good fighters, however. Enter them in Contests where they can perform special moves in front of judges to capture the judges' attention. To improve their stage appeal, feed the Pokémon Poké Blocks made from Berries you cultivate around the region. Explore the world of the Hoenn region with a whole host of Pokémon. To make room for all of them, Pokémon Ruby and Pokémon Sapphire can hook up to Pokémon Box™, a storage system on the Nintendo GameCube. A true test of Pokémon skills and strategies, Pokémon Ruby and Pokémon Sapphire definitely bring the level of Pokémon gameplay up a notch.",
      genre: 'RPG',
      date_released: ISODate('2003-05-19T07:00:00Z'),
      logo_url:
        'https://zumbgw.sn.files.1drv.com/y4mKjzbTRxdTlekURGA0vK6Ir5VCm_5SFbo51f3RDCXSVXAqTBtHzVe9CtxlVT43nPuoicfxJ593WxQYtWMDffXdO-7EvyA2Hg8Jr_eLkmv_Ng_w1D3jm-cUDVHJiIbiuHpLZec0eTq5wWEyEr-HV99So4EMBvcO-uHFij-Qyr54YLyPjZqLzsUWfBuF9ydIoS0qRqKDOi6ibL6gXeO39Ks3A?width=1838&height=1005&cropmode=none'
    },
    {
      order_number: NumberInt(8),
      rom_type: 'core',
      file_name: 'Pokemon Sapphire.gba',
      file_size: NumberInt(16384),
      file_type: 'gba',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106558&authkey=AMCDEefqenLL0R0',
      generation: NumberInt(3),
      box_art_url:
        'https://0hqdgw.sn.files.1drv.com/y4mO5t8dWmWjCNX18g5MllMt6pwPAikhXyG14ap_7wOwXF0_y66mh2STtj6HRrgIwOA_qSG_cslo4SYhrAYmlHnXVaJMFsxxQG50gdc9mWNhj3x1h9FyEiYvZbwPcYe5aTHyaTeNBj4mfQPNdqIaymbLt4dDPnlh2LT3z0IyLCcwluY1CSK9i-9twTFHb9lgjQHk8I7QDF-LmMjX91N82vdlA?width=500&height=500&cropmode=none',
      game_name: 'Pokémon Sapphire Version',
      region: 'Hoenn',
      platform: 'Game Boy Advanced',
      description:
        "The first Pokémon RPGs for the Game Boy Advance showed off the system's improved graphics and sound, and introduced now-permanent fixtures to the Pokémon world, such as double battles and Contests. Pokémon reinvents itself once again with two of the most popular games in the series! Pokémon Ruby Version and Pokémon Sapphire Version take great leaps in gameplay, particularly during combat. For the first time in a Pokémon game, Trainers can send two Pokémon into battle at the same time. Some Pokémon can learn moves that aid a partner or damage both of the opponent's Pokémon. And Pokémon have Abilities and Natures that affect their performance in battle. Your Pokémon are more than just good fighters, however. Enter them in Contests where they can perform special moves in front of judges to capture the judges' attention. To improve their stage appeal, feed the Pokémon Poké Blocks made from Berries you cultivate around the region. Explore the world of the Hoenn region with a whole host of Pokémon. To make room for all of them, Pokémon Ruby and Pokémon Sapphire can hook up to Pokémon Box™, a storage system on the Nintendo GameCube. A true test of Pokémon skills and strategies, Pokémon Ruby and Pokémon Sapphire definitely bring the level of Pokémon gameplay up a notch.",
      genre: 'RPG',
      date_released: ISODate('2003-05-19T07:00:00Z'),
      logo_url:
        'https://zumcgw.sn.files.1drv.com/y4mPWqi8FMMdevZoIdf_cKg9New6k2g_a8gFwZKwGAhzwTd56wBGRCIdCVscPjfuo8DNygn6Pw7w7QuBrIoHCrBGaG_74WqufpeRqcMdrpyJjz_R_boOPbnkv3Hi3hMtfWw8FS8ZEPRqshLA3wHD1UoQSQMCJBlZY-sXHTshbrUxYlaaMDSa9CNDalH0d4GwY_0xut5zTvUVfbcP_VL_BPBcQ?width=380&height=178&cropmode=none'
    },
    {
      order_number: NumberInt(9),
      rom_type: 'core',
      file_name: 'Pokemon Emerald.gba',
      file_size: NumberInt(16384),
      file_type: 'gba',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106571&authkey=AA8u7r6a_HUa3cc',
      generation: NumberInt(3),
      box_art_url:
        'https://0xqsgw.sn.files.1drv.com/y4m5tFd8ln8fa0xIrw38hwF-V3SZ0os89pOW5HO18bKCTensACuCnDsoggrezQPzn1S5m7VmjvDcN_DI3Qt1_5tgaPf9p2pCNPWj6j3jJV7xPPufHG89bfEQeerqssNwR2Pm8xQo-ITZbm4ap2IOB4hdobEAppWj51x0VBugDfTgEWyfD-3CC3u5UNVG4in5VkyrI_Fo1kkwcjsruOys7KxAA?width=1473&height=1475&cropmode=none',
      game_name: 'Pokémon Emerald Version',
      region: 'Hoenn',
      platform: 'Game Boy Advanced',
      description:
        "Despite the Nintendo DS system making a splash, Pokémon Emerald Version showed that the Game Boy Advance was still an excellent system. Fortunately for Nintendo DS owners, you could transfer Pokémon from any of the Game Boy Advance games into future DS Pokémon RPGs. Pokémon Emerald Version takes Trainers back to the land of Hoenn for an expanded adventure, this time against both Team Magma and Team Aqua! Pokémon Emerald also features an even more exciting storyline featuring the Legendary Rayquaza, and the chance to catch more Legendary Pokémon such as both Latios and Latias! Around the region you'll notice exciting locales, especially the Battle Frontier. The Battle Frontier is basically an amusement park for Trainers, with a variety of challenges in a number of arenas headed by the always-intimidating Frontier Brains, some of the most formidable Trainers you've ever faced.",
      genre: 'RPG',
      date_released: ISODate('2005-05-01T07:00:00Z'),
      logo_url:
        'https://03ripg.sn.files.1drv.com/y4mmZVnT8z_gpWDk4XaTD3-5tQxPLtNDe2dHEZ_Gw2hAQ0dEWbFxEj0UDFhIBuKlwT3EJEgSrc2RF_GOUBfTSXJk2JeYRLZtSGFxjshshwKEXiV3V6zk5FKJLMnkvWvwt2ycVpY79vhnrCouxggtNGauo3s1Ez5JW2OQBc5J9u49a2m0Z5K5UviAKaatGZCjBpikOtYWccF18h1Gasu5Lt5qA?width=1123&height=603&cropmode=none'
    },
    {
      order_number: NumberInt(10),
      rom_type: 'core',
      file_name: 'Pokemon FireRed.gba',
      file_size: NumberInt(16384),
      file_type: 'gba',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106566&authkey=AK7XBtxuQ3zlSeI',
      generation: NumberInt(3),
      box_art_url:
        'https://0xqfgw.sn.files.1drv.com/y4mpiNcz1cHD9btjOoF8OUOOPtik7UkDluNtQkKEB6FGehLQnTExIKt57rVj0BTZronAT4iZhGCkRBFA0fPLeBCyYSlUV6WXw_HE2-iCRDLA-BFVO3KlQiNqCUXhpdp57OlSs2QsN-rb2Wi0a-Xg53fhAt_jaMm_pel-rJxWXhXyzN_Z2zBBCBlkUFY3A5M9ndsH_TukKyMSIMCvEKxG6yUsA?width=400&height=400&cropmode=none',
      game_name: 'Pokémon FireRed Version',
      region: 'Kanto',
      platform: 'Game Boy Advanced',
      description:
        "Six years after the original Pokémon Red Version and Pokémon Blue Version, this pair of titles for the Game Boy Advance system introduced Pokémon to a new group of gamers. These titles also shipped with a wireless adapter for Game Boy Advance, making it the first handheld to have such technology. Get set to return to where it all started—Pokémon FireRed Version and Pokémon LeafGreen Version head back to the Kanto region, the home of Pokémon Red and Pokémon Blue. Thanks to the capabilities of the Game Boy Advance system, the locales, Pokémon, and animations are greatly improved since the last installment. Pokémon FireRed and Pokémon LeafGreen finally unite all the worlds of Pokémon, making it possible to catch and keep every single Pokémon in one game! You'll need a little help from Pokémon Ruby Version and Pokémon Sapphire Version, as well as Pokémon Stadium, but if it were too easy it wouldn't be fun! To aid in trading Pokémon, Pokémon Ruby and Pokémon Sapphire come with a device for your Game Boy Advance that lets you trade Pokémon wirelessly. You can also chat or battle without the need for Game Link cables, too! Veterans of Pokémon Red and Pokémon Blue will appreciate that all the improvements made since the first visit to the Kanto region are available. Plus, there are different places to explore, most notably the Sevii Islands, where you can catch special Pokémon that don't exist anywhere else in Kanto!",
      genre: 'RPG',
      date_released: ISODate('2004-09-09T07:00:00Z'),
      logo_url:
        'https://03rhpg.sn.files.1drv.com/y4mMRRaPxmAmHkJ-DHHEn0vo9zTKQ9W1UggKafoM4Aiz8SpLd5OJKlYtyx8b7u9pBuEEL0Zz_05VdU30YbpJYEJ0onPPsYVZ1tqpzqjcUe4FIIYWppKV1bzqeYD27i9YNQZKisIscNxNsayM3wSDdiADb12ojjQHdj0rqf-r8Rp9qfgx5YME2s_podwxctI-y7ZuBegVq5Xbe-VRnFQUlPuDA?width=400&height=175&cropmode=none'
    },
    {
      order_number: NumberInt(11),
      rom_type: 'core',
      file_name: 'Pokemon LeafGreen.gba',
      file_size: NumberInt(16384),
      file_type: 'gba',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106562&authkey=AJfhMuGmifpjIIc',
      generation: NumberInt(3),
      box_art_url:
        'https://0xqjgw.sn.files.1drv.com/y4m6QJhWV4sW_3EqnPwye8FDpm38dWik5MdYTvPOVfB_e8AT_v5q4j4jl5HS5juF7t0KiXtlCGYUhTI8K3-OvCtgmNCT8vM65dy4kLK4lCzBjIkLOhoSZpWRa8yr8OK42fF0hmdd4FGWyoLximGHsmKip5AhMQJY_z5zLgajzKO-SVSKeWvdtHmgI1tUl77gUitujhSfOaeDPA3qLZw0Ak39Q?width=800&height=803&cropmode=none',
      game_name: 'Pokémon LeafGreen Version',
      region: 'Kanto',
      platform: 'Game Boy Advanced',
      description:
        "Six years after the original Pokémon Red Version and Pokémon Blue Version, this pair of titles for the Game Boy Advance system introduced Pokémon to a new group of gamers. These titles also shipped with a wireless adapter for Game Boy Advance, making it the first handheld to have such technology. Get set to return to where it all started—Pokémon FireRed Version and Pokémon LeafGreen Version head back to the Kanto region, the home of Pokémon Red and Pokémon Blue. Thanks to the capabilities of the Game Boy Advance system, the locales, Pokémon, and animations are greatly improved since the last installment. Pokémon FireRed and Pokémon LeafGreen finally unite all the worlds of Pokémon, making it possible to catch and keep every single Pokémon in one game! You'll need a little help from Pokémon Ruby Version and Pokémon Sapphire Version, as well as Pokémon Stadium, but if it were too easy it wouldn't be fun! To aid in trading Pokémon, Pokémon Ruby and Pokémon Sapphire come with a device for your Game Boy Advance that lets you trade Pokémon wirelessly. You can also chat or battle without the need for Game Link cables, too! Veterans of Pokémon Red and Pokémon Blue will appreciate that all the improvements made since the first visit to the Kanto region are available. Plus, there are different places to explore, most notably the Sevii Islands, where you can catch special Pokémon that don't exist anywhere else in Kanto!",
      genre: 'RPG',
      date_released: ISODate('2004-09-09T07:00:00Z'),
      logo_url:
        'https://1hrnpg.sn.files.1drv.com/y4mfBN2m7WswVfICESLscINpbufb4C_gc1oG7d4xI4NcxsUujwkV1KcY13U0fW1vHg3MnwbrxTIlvrvgQ-8UnlYwaffYWnEZUNoWKG-jhMtlSaICJPKd_jUDwO-RyYSQ4f0nnCLfYpypDeNsUyNCOTKEKwZH76Ytw4kNtYcog-aTN1SvaocHQLdo4nNiNqDGt9VIUAWjQKfhe5KSEhjOTv48Q?width=400&height=175&cropmode=none'
    },
    {
      order_number: NumberInt(12),
      rom_type: 'core',
      file_name: 'Pokemon Diamond.nds',
      file_size: NumberInt(65536),
      file_type: 'nds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106541&authkey=AI-u3tH7cRJe0rk',
      generation: NumberInt(4),
      box_art_url:
        'https://z3qkgw.sn.files.1drv.com/y4m9PAGjn4yJo70RHq5ht05KKzcvH4vIh8iYH-oQzyTH9m7oexcHPDJpPY2WO7fWfJjlA43l7N_-V7Z8UD4O1Syv7-A0QlD2ixaD_NyPbZh_5iw_-Z1T5GnkxZ-RXlS9g5QHgml1lIl0o7lonH018EurZ9pXpO2JJutoiIjNbarEk67YGlRbresFcpekqKlajjNOYD6T8K4aat1YmSe6KiITw?width=1500&height=1344&cropmode=none',
      game_name: 'Pokémon Diamond Version',
      region: 'Sinnoh',
      platform: 'Nintendo DS',
      description:
        "Pokémon Diamond Version and Pokémon Pearl Version introduce Trainers to a different land and many Pokémon to catch! Explore the lakes, forests, and mountains of the Sinnoh region, seeking out Pokémon such as the Bug-type Kricketot or the hard-headed Rock- and Steel-type Shieldon. And if you're lucky, you might bump into Legendary Pokémon Palkia or Dialga! There are more than 490 Pokémon in Pokémon Diamond and Pokémon Pearl. But be on the lookout for Team Galactic, a dastardly group that is trying to kidnap Pokémon. Pokémon RPGs have never looked better than they do in Pokémon Diamond and Pokémon Pearl. 3-D graphics bring the land of Sinnoh to life! And realistic lighting casts the land in sun or darkness depending on the time of day. However, there's more to daylight than just graphics—some Pokémon will only show their faces during certain times of day, so you'll have to explore morning, noon, and night if you want collect them all! Everywhere you look, gameplay has been revamped thanks to the awesome abilities of the Nintendo DS system. With two screens, you can watch the action on one screen while monitoring the health of your Pokémon on the other. The touch screen is used in a number of ways: You can use it to select moves in battle, to perform in Contests, or while exploring underground. And with the cool Trainer wristwatch, the Pokétch, you can keep tabs on all kinds of important data during your adventure. The Underground is formed by a series of subterranean passages below Sinnoh that hold untold numbers of treasures for you to find. But there's more to the Underground than just spelunking—you can meet up with other Trainers while you're down there, and you can create a Secret Base for people to visit!",
      genre: 'RPG',
      date_released: ISODate('2007-04-22T07:00:00Z'),
      logo_url:
        'https://03rlpg.sn.files.1drv.com/y4mKtPcDSkq8gQoFSmAEYWNj5GtJLvjoOqQ9Q5Pe6XGq16hnynmcXdX8ypEKXfNmNknq8Vdv6Pmf61jd77UMg_RJCiz-Qy0JtYT-rwq5Bu0FbFtOaXqvoqGAXbh3wX99owIX235POwRxgZs79MWXQMUtX8CRgs6rf5yyCZ4YO4ZY5FsZyNNAL1tOj7ZHtO-6Ni6xCKFhFlWRvxovgiEfz5w1A?width=1280&height=720&cropmode=none'
    },
    {
      order_number: NumberInt(13),
      rom_type: 'core',
      file_name: 'Pokemon Pearl.nds',
      file_size: NumberInt(65536),
      file_type: 'nds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106537&authkey=ALazDTbFxyhD1jA',
      generation: NumberInt(4),
      box_art_url:
        'https://znqegw.sn.files.1drv.com/y4mVaMilG6gt-1RY6z3TGOiIIqLRwWWPtrefrOKnipUyCRP1JYDVJVBO6B-DPRBX5uQHd5Fdxs_rFPmxDzV676L0PW2-y5DZ0dWhwlKS57ke7GwjIi2jMrrZtiEJQXbIQCljytgYEtJqsPbL84-RJiTrPokKQNWcDDwAzOfMHaIcrCu5MSVOe0nTC7KRM4bAbqw0KI_DjxmDzhnKI8pFBkPxg?width=1531&height=1372&cropmode=none',
      game_name: 'Pokémon Pearl Version',
      region: 'Sinnoh',
      platform: 'Nintendo DS',
      description:
        "Pokémon Diamond Version and Pokémon Pearl Version introduce Trainers to a different land and many Pokémon to catch! Explore the lakes, forests, and mountains of the Sinnoh region, seeking out Pokémon such as the Bug-type Kricketot or the hard-headed Rock- and Steel-type Shieldon. And if you're lucky, you might bump into Legendary Pokémon Palkia or Dialga! There are more than 490 Pokémon in Pokémon Diamond and Pokémon Pearl. But be on the lookout for Team Galactic, a dastardly group that is trying to kidnap Pokémon. Pokémon RPGs have never looked better than they do in Pokémon Diamond and Pokémon Pearl. 3-D graphics bring the land of Sinnoh to life! And realistic lighting casts the land in sun or darkness depending on the time of day. However, there's more to daylight than just graphics—some Pokémon will only show their faces during certain times of day, so you'll have to explore morning, noon, and night if you want collect them all! Everywhere you look, gameplay has been revamped thanks to the awesome abilities of the Nintendo DS system. With two screens, you can watch the action on one screen while monitoring the health of your Pokémon on the other. The touch screen is used in a number of ways: You can use it to select moves in battle, to perform in Contests, or while exploring underground. And with the cool Trainer wristwatch, the Pokétch, you can keep tabs on all kinds of important data during your adventure. The Underground is formed by a series of subterranean passages below Sinnoh that hold untold numbers of treasures for you to find. But there's more to the Underground than just spelunking—you can meet up with other Trainers while you're down there, and you can create a Secret Base for people to visit!",
      genre: 'RPG',
      date_released: ISODate('2007-04-22T07:00:00Z'),
      logo_url:
        'https://1hrjpg.sn.files.1drv.com/y4mLdHOCPS3vf0wFbWO4TJwujwzak1CtVpbR1PPjcoWnsIci-6J58SWdWzkw5lMXr8kN_xAW-VUGSfMSpUnZyJD4Fyen-6wydwKSL-yiMbpcvgQ9yYeutgvc_-__xjZPUhUfvVn4Fxcz3UoANLK1r9BVNffuGPQCrLFyBqnqe1DoZ4VeD1uljI4Fkt_I_1beROmxz8IEvaAPcr9iWHRvnWSZg?width=1200&height=840&cropmode=none'
    },
    {
      order_number: NumberInt(14),
      rom_type: 'core',
      file_name: 'Pokemon Platinum.nds',
      file_size: NumberInt(131072),
      file_type: 'nds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106535&authkey=AGZ8ql4xzQs6Hb4',
      generation: NumberInt(4),
      box_art_url:
        'https://znqggw.sn.files.1drv.com/y4mynv2aFRr1F8OL5we4oKKdPNGoUkPe0C_Mof57UGiFKZK0Ey3Gzrmzh2aiR2qQ7k0EcqQ-9NL4P4ZQn1jOcE_o915FQFZ0G60FOT8fmoKCC16PZkgaMKBVwoGFLWPqvzqfUWGtfPnXFPHkPFP5X5I1PEwhz1m7zJYz1UXfVLOex9FNrfkMe6JSBHJJkX9bOwqSLCQZouq9tusnulADn5a-g?width=476&height=434&cropmode=none',
      game_name: 'Pokémon Platinum Version',
      region: 'Sinnoh',
      platform: 'Nintendo DS',
      description:
        "Another world has emerged in the Sinnoh region, a place where time and space have been completely altered. Explore the Distortion World, where challenges await at every turn! Visit other locations designed especially for the serious Trainer: A Battle Frontier will test your battle skills with its abundance of committed opponents, led by the Frontier Brains. Also check out the Wi-Fi Plaza, where up to 20 players can connect with a wireless broadband internet connection and participate in fun games and activities. While Dialga and Palkia shared the limelight in Pokémon Diamond Version and Pokémon Pearl Version, the Legendary Pokémon Giratina is at the center of the story in Pokémon Platinum Version. As you track down the elusive Giratina, watch out for Team Galactic—they're back, and with Cyrus leading, they're as dangerous as ever. Check out the expanded Global Trade Station, now known as the Global Terminal. Various upgrades include the ability to record your battles using the Vs. Recorder. Once the battles have been recorded, post them for the world to see how awesome your team really is!",
      genre: 'RPG',
      date_released: ISODate('2009-03-22T07:00:00Z'),
      logo_url:
        'https://zpmagw.sn.files.1drv.com/y4mpA2mHyb8AZWUk54LGN-XrZEROKE3Gwqvsa_iqx_3S_RSkWn1BHROsXhjfw1trPp25khp7DhRB1QFrqX-XiH55i_JuqavuBTk7ofldwTcfBUyji4GsH5s1FfUQREDQRRTqN8gtnNstYFzgzjxQ6ikKehKRs6JHdqCXbvtPhlpkn5A8P9gVXXB8bW3FN-aux69DXVb3khBOgY6QuWrhCWN8Q?width=800&height=436&cropmode=none'
    },
    {
      order_number: NumberInt(15),
      rom_type: 'core',
      file_name: 'Pokemon HeartGold.nds',
      file_size: NumberInt(131072),
      file_type: 'nds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106539&authkey=ADkioFmXBOEjPcI',
      generation: NumberInt(4),
      box_art_url:
        'https://znqsgw.sn.files.1drv.com/y4mgCBc4qWNdSjBWTyPRSORsAzIYmckDqzcz7OxGAUiiGMjYaxfOwK5q23SnVJP3gD-pE3TuMBteOWIKEtFn85DEasPaJWogNBx_EL5wpK0BcnHufPVR1hkIf0cTb0_N5nVtXt2CwooB7lU8YIvAcjEcX85UUw8CS2WGEcVpRt6linKLxwLwnf2BVkv51suc7FJnKW8ErKtR5ry572rr1LHew?width=1000&height=912&cropmode=none',
      game_name: 'Pokémon HeartGold Version',
      region: 'Johto',
      platform: 'Nintendo DS',
      description:
        "Pokémon HeartGold and SoulSilver Versions are available for the Nintendo DS and Nintendo DSi systems today! It's been nearly a decade since Pokémon fans first traveled to the scenic Johto region. With Pokémon HeartGold and SoulSilver Versions, they can return there to experience the exciting adventure of Pokémon Gold and Pokémon Silver on the Nintendo DS and Nintendo DSi systems. Check out updated graphics and sound, as well as awesome new touch-screen features and lots of surprises! Pokémon HeartGold and SoulSilver Versions bring dozens of Pokémon characters, such as starters Chikorita, Cyndaquil, and Totodile, back into the limelight for a new group of Pokémon fans—and long-time Trainers—to catch, train and battle! More to Touch! Plenty of enhancements have been to the gameplay, including all-new touch-screen controls! You can navigate your Pokédex, check out the inventory in your Bag, and even move Pokémon around inside your PC Boxes. If you’re a Trainer who would rather use the buttons, don’t worry—both methods will be available, so you can play in whatever way suits you best! The Pokéwalker! Pokémon HeartGold and SoulSilver Versions come with the brand-new Pokéwalker, an accesory that brings a dimension to Pokémon games that you’ve never seen before. The Pokéwalker is a special pedometer that you carry with you that lets you take Pokémon fun wherever you go! You can transfer a Pokémon onto the Pokéwalker accessory using an infrared connection between the Pokéwalker and your Game Card. Then as you Stroll around with your Pokémon, it’ll earn Experience Points. And you can even find items and new Pokémon while you’re on the go! The Pokéwalker is small enough that you can keep it in your pocket and take wherever you go. It also has a clip to hook it on your belt, and a hole for attaching a strap. It’s never been easier to take Pokémon with you!",
      genre: 'RPG',
      date_released: ISODate('2010-03-14T08:00:00Z'),
      logo_url:
        'https://03rvpg.sn.files.1drv.com/y4mgXL-6wjEHE6c4mDXBWoyC2LpujqF-oEwcNrhD61qnB5EP7ZWu5F0OsX2-9li07x7g4DWFRJP5Vey-IXGZPLNBZEdzx1LjfDiEvTfvqJ-aZ7KIyKwPZ2PADXSmsQbA-lfa521VbI9Xt62v6nEhXOukR-P_YMZ34hwPuA5n8C8oyPgQIBQBvRw4UhZfog5ll2mnKlK8x2cYCNgd5vVlR4Mlg?width=1023&height=582&cropmode=none'
    },
    {
      order_number: NumberInt(16),
      rom_type: 'core',
      file_name: 'Pokemon SoulSilver.nds',
      file_size: NumberInt(131072),
      file_type: 'nds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106532&authkey=AMy1Td3abmOw2Rw',
      generation: NumberInt(4),
      box_art_url:
        'https://znqkgw.sn.files.1drv.com/y4mT-kktCtGzu-o2BgRQmPp-tXciT_FyPqF6xycSqrSxhljAcrmjqEH3lAlejYCKLEGSMk-PKMdyEie4K1FnDAS3ckN6xSTrk3kl6G_6GbRBJDC0Mm_HhLWmr8BWPREzveDQ-EYXuMxdD8o8S7qodlzWqxOgTdUnlLA92KaExcRSTvvP3ftCNNvl3oRN-g3XlB3XT8Y6GIw5XdNUfgH5g8I3Q?width=220&height=201&cropmode=none',
      game_name: 'Pokémon SoulSilver Version',
      region: 'Johto',
      platform: 'Nintendo DS',
      description:
        "Pokémon HeartGold and SoulSilver Versions are available for the Nintendo DS and Nintendo DSi systems today! It's been nearly a decade since Pokémon fans first traveled to the scenic Johto region. With Pokémon HeartGold and SoulSilver Versions, they can return there to experience the exciting adventure of Pokémon Gold and Pokémon Silver on the Nintendo DS and Nintendo DSi systems. Check out updated graphics and sound, as well as awesome new touch-screen features and lots of surprises! Pokémon HeartGold and SoulSilver Versions bring dozens of Pokémon characters, such as starters Chikorita, Cyndaquil, and Totodile, back into the limelight for a new group of Pokémon fans—and long-time Trainers—to catch, train and battle! More to Touch! Plenty of enhancements have been to the gameplay, including all-new touch-screen controls! You can navigate your Pokédex, check out the inventory in your Bag, and even move Pokémon around inside your PC Boxes. If you’re a Trainer who would rather use the buttons, don’t worry—both methods will be available, so you can play in whatever way suits you best! The Pokéwalker! Pokémon HeartGold and SoulSilver Versions come with the brand-new Pokéwalker, an accesory that brings a dimension to Pokémon games that you’ve never seen before. The Pokéwalker is a special pedometer that you carry with you that lets you take Pokémon fun wherever you go! You can transfer a Pokémon onto the Pokéwalker accessory using an infrared connection between the Pokéwalker and your Game Card. Then as you Stroll around with your Pokémon, it’ll earn Experience Points. And you can even find items and new Pokémon while you’re on the go! The Pokéwalker is small enough that you can keep it in your pocket and take wherever you go. It also has a clip to hook it on your belt, and a hole for attaching a strap. It’s never been easier to take Pokémon with you!",
      genre: 'RPG',
      date_released: ISODate('2010-03-14T08:00:00Z'),
      logo_url:
        'https://zumzgw.sn.files.1drv.com/y4mIcj4fawPlNMgUVLH5NC67y1OnqDREno-bdnWMPxFGfugAjJZ_NnWahIPclrjSKimr-Zdh0EiCJrxkZXgvPIAEdGW5NDHQnc704hHzSYb8dgJfT223f0HxJTesRHRVAXw7YHEOrwrftxDEDmceBqtt82k9FQw35-S4eRBGBmuAfwip4cf9zFpt8jT3ONti5-KH_MLL4qYc619oOO6abbudQ?width=1023&height=582&cropmode=none'
    },
    {
      order_number: NumberInt(17),
      rom_type: 'core',
      file_name: 'Pokemon Black.nds',
      file_size: NumberInt(262144),
      file_type: 'nds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106529&authkey=ACiPB5J1Df4NDPU',
      generation: NumberInt(5),
      box_art_url:
        'https://zxqsgw.sn.files.1drv.com/y4mEUGE06AeIrChZnRo6Dw1muxRGWJ8NZcDuMSMuWk0_kpn6J1zD2CEJi7akWX_ZTZ-PfIKMw5mwS4hJOWJ4rX0Qo2OafXBrV07N0JE_DKoQ_HAcIZ95bL-mqCl1jZUC6D0NRBql1yKvFzX4UOHh0Rv7r4pH-d9PU52CkQlLVnI83Lg6eA8zpOO_pMuriYqzaAiVMofvJTyoqLMl-Bqh1DCDA?width=1000&height=897&cropmode=none',
      game_name: 'Pokémon Black Version',
      region: 'Unova',
      platform: 'Nintendo DSi',
      description:
        'Pokémon™ Black Version and Pokémon White Version are now available on the Nintendo DS™ family of systems! Travel through the Unova region to discover new Pokémon, tough trainers, and many exciting adventures! Pokémon Black Version and Pokémon White Version features a new generation of amazing Pokémon. The Legendary Pokémon Reshiram appears on the cover of Pokémon Black Version and the Legendary Pokémon Zekrom is seen on the cover of Pokémon White Version. You will begin your adventure with your choice of Snivy, Tepig, or Oshawott—Pokémon who are eager to join you on your epic journey!',
      genre: 'RPG',
      date_released: ISODate('2011-03-06T08:00:00Z'),
      logo_url:
        'https://03rmpg.sn.files.1drv.com/y4mTH3_Uo3WWZIRS6HIwD507CAriJ0TYrHwPBlwQ6hldcmv5QHp2VPMtZ_fxg_YcvcNWVIR1mKbfehLqHOPgEa8y7bNHPi1ZX9pmQ7LmI2vJCVdgAScOxXF9cps8U8YM6caeDiYQ8y5Nrfs1UP0qdOElIFKQpr8tUJwPHsnsM_EuuqAlNYhaP8xSR93Zmc0WR43XBFyvfxNAoVbfPNjxCx9ag?width=624&height=390&cropmode=none'
    },
    {
      order_number: NumberInt(18),
      rom_type: 'core',
      file_name: 'Pokemon White.nds',
      file_size: NumberInt(262144),
      file_type: 'nds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106525&authkey=ANYqwpMMfolTje8',
      generation: NumberInt(5),
      box_art_url:
        'https://zhqegw.sn.files.1drv.com/y4mBMxpDKm_fTRI5FRaK_OLlqvGwzx7m7xFdrlPhq3goQ7tW51aA2dxL19OpW92Vzeho0R69DqefrpXsb94l-plVqAgsNcDL9C80sn82-uvb1-_wJ-jbmiMosi-NJ_uk9oJYehDuqVk5TlGbTy2PZxTZ3zPSiPOinc_YU82eKSzCv_eXzCYKIxju-CTSA51GT69GfkU4ow__t5LazlwOswc0w?width=1000&height=896&cropmode=none',
      game_name: 'Pokémon White Version',
      region: 'Unova',
      platform: 'Nintendo DSi',
      description:
        'Pokémon™ Black Version and Pokémon White Version are now available on the Nintendo DS™ family of systems! Travel through the Unova region to discover new Pokémon, tough trainers, and many exciting adventures! Pokémon Black Version and Pokémon White Version features a new generation of amazing Pokémon. The Legendary Pokémon Reshiram appears on the cover of Pokémon Black Version and the Legendary Pokémon Zekrom is seen on the cover of Pokémon White Version. You will begin your adventure with your choice of Snivy, Tepig, or Oshawott—Pokémon who are eager to join you on your epic journey!',
      genre: 'RPG',
      date_released: ISODate('2011-03-06T08:00:00Z'),
      logo_url:
        'https://zpmbgw.sn.files.1drv.com/y4mCqIEEVT9uordHqLoNGG7orOZ4tOWg1T2ZtQx0Tz_4rGfNlK3aDh0pzrGOz1S2mncIpzqbKxonZV-WyANAq67SvUW70Ix-SG9MidZOjk5CC5JtEUkQ9bRwq2REPV9FzeOn7TmOAyx4ulcscCjZ1ftsB2W1SFJUJpqZ6bU5qr1u06hmRva_ZXWNOgMCQfUVWdkRwS24-s-lrQ8Vk48ycUJZw?width=278&height=169&cropmode=none'
    },
    {
      order_number: NumberInt(19),
      rom_type: 'core',
      file_name: 'Pokemon Black 2.nds',
      file_size: NumberInt(524288),
      file_type: 'nds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106531&authkey=AJ3jEhds-HXNQLQ',
      generation: NumberInt(5),
      box_art_url:
        'https://zxqegw.sn.files.1drv.com/y4m1lweqFJUEemUO53X3bb1Os0AQTZGTUuy8avcmHjsXENB0HZ0zlSRjnIyqyWS3AkN87VH1-5fYa8itpbkIAkXOJoqNtTU7Iq6-JggMoZz8Gp83Dji2Mb5tJX-DjNTA7aDrwL0RP4dvkwRONJi0kFbPRtpj0yBQ3E8dTHNwutR0n9Go9GxwDDWNrSp4nudAV-2SBwV9d03oh1ALVqYnWBIjg?width=656&height=600&cropmode=none',
      game_name: 'Pokémon Black 2 Version',
      region: 'Unova',
      platform: 'Nintendo DSi',
      description:
        'Pokémon fans, get excited for two incredible new adventures! Pokémon Black Version 2 and Pokémon White Version 2 are available now for the Nintendo DS™ family of systems. The games can also be played in 2D on the Nintendo 3DS™ system. Your journey takes place in the Unova region two years after the events of Pokémon Black Version and Pokémon White Version. You’ll start your adventure in Aspertia City, in the far southwest corner of the Unova region. Many things have changed in the region, including some extraordinary new places and people for you to discover. Plus, many of the returning characters from Pokémon Black Version and Pokémon White Version have taken on new roles when you meet them. Look forward to uncovering the mystery of Black Kyurem—or White Kyurem—somewhere in the Unova region. Little is known about this enigmatic Pokémon, except that it’s a Dragon- and Ice-type Pokémon with a devastating Ice-type attack—even stronger than Zekrom’s Fusion Bolt or Reshiram’s Fusion Flare! Pokémon Black Version 2 and Pokémon White Version 2 have a special connection with Pokémon Dream Radar for the Nintendo 3DS system. The Pokémon you obtain in Pokémon Dream Radar can be sent to your Pokémon Black Version 2 or Pokémon White Version 2 game! Get more information on Pokémon Dream Radar now. And to help you with the many Pokémon found in the Unova region, look forward to Pokédex 3D Pro, another Nintendo 3DS title that’s on the way to the Nintendo eShop. With Pokédex 3D Pro, you’ll have information on every Pokémon in the National Pokédex—just what you need to become a master Trainer. Learn more about Pokédex 3D Pro!',
      genre: 'RPG',
      date_released: ISODate('2012-10-07T07:00:00Z'),
      logo_url:
        'https://03ropg.sn.files.1drv.com/y4mt02bRgmD8vJG4kLsrQD5_bDsLg7pOhynAsy-oQuOzIkNj9nm4muLOt1KjJ4oLs5gbr6ktMQQxxdJarGFzXxod1Vrqj1wgL7mt1ZV_P6a8I9YAVXTaQ2olSYCBOJA2MjOZ03sGIOkBnNKiAn_Dl938XReAdspaOKqtvPBfS75UVHA0kJPSjUnhCcc8xO5YBLq2wZwYfYfsUPnPkLf6D-Hjg?width=1400&height=784&cropmode=none'
    },
    {
      order_number: NumberInt(20),
      rom_type: 'core',
      file_name: 'Pokemon White 2.nds',
      file_size: NumberInt(524288),
      file_type: 'nds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106527&authkey=APY0JNM98HHBCbU',
      generation: NumberInt(5),
      box_art_url:
        'https://1hsddg.sn.files.1drv.com/y4mAG6ybiw0qoZEcGi769wHguWyQ8cZUbrnPHi5Dk4GB1p6Tyrhox9ueZpFP2ya6JDMJIevp0U3tDj-9joVFR1lcELd8ynSr4cAaoaziNScZKXgbkoaRhBQwHVLnKz9tRWU220lXBOMOizTg7x-kXgsSa7t8IzwafDb_t4kMtn0l6PRiutt_SJXzUmRuOMpDs2XKAnTbwwXWybFOkh1s-FjaQ?width=250&height=223&cropmode=none',
      game_name: 'Pokémon White 2 Version',
      region: 'Unova',
      platform: 'Nintendo DSi',
      description:
        'Pokémon fans, get excited for two incredible new adventures! Pokémon Black Version 2 and Pokémon White Version 2 are available now for the Nintendo DS™ family of systems. The games can also be played in 2D on the Nintendo 3DS™ system. Your journey takes place in the Unova region two years after the events of Pokémon Black Version and Pokémon White Version. You’ll start your adventure in Aspertia City, in the far southwest corner of the Unova region. Many things have changed in the region, including some extraordinary new places and people for you to discover. Plus, many of the returning characters from Pokémon Black Version and Pokémon White Version have taken on new roles when you meet them. Look forward to uncovering the mystery of Black Kyurem—or White Kyurem—somewhere in the Unova region. Little is known about this enigmatic Pokémon, except that it’s a Dragon- and Ice-type Pokémon with a devastating Ice-type attack—even stronger than Zekrom’s Fusion Bolt or Reshiram’s Fusion Flare! Pokémon Black Version 2 and Pokémon White Version 2 have a special connection with Pokémon Dream Radar for the Nintendo 3DS system. The Pokémon you obtain in Pokémon Dream Radar can be sent to your Pokémon Black Version 2 or Pokémon White Version 2 game! Get more information on Pokémon Dream Radar now. And to help you with the many Pokémon found in the Unova region, look forward to Pokédex 3D Pro, another Nintendo 3DS title that’s on the way to the Nintendo eShop. With Pokédex 3D Pro, you’ll have information on every Pokémon in the National Pokédex—just what you need to become a master Trainer. Learn more about Pokédex 3D Pro!',
      genre: 'RPG',
      date_released: ISODate('2012-10-07T07:00:00Z'),
      logo_url:
        'https://zumwgw.sn.files.1drv.com/y4m4J1ZRsbspDrzXxbJKc4QZjKspQSFC0xOTloTvdIayyOhA3ZSI1S-zrO73N8tQ9XNR4u3aGRBwApOUam_i2SfhHLEAEH9RQa38JZCh4afBLrCT00v2kIUbHy31mmnuAkgMHYvRqSnGzNWz8stFtdT5SjtRX4hQ3E8QyNVKt0_sB4NFWX2kBicV647ECUDmpEz1bgkiswn_bDAi4HsaZN9lg?width=960&height=561&cropmode=none'
    },
    {
      order_number: NumberInt(21),
      rom_type: 'core',
      file_name: 'Pokemon X.3ds',
      file_size: NumberInt(2097152),
      file_type: '3ds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106567&authkey=ACGNRmtCyaK2GAo',
      generation: NumberInt(6),
      box_art_url:
        'https://0hqggw.sn.files.1drv.com/y4moUhELKW13F-2rNv1_yGZItpKXjuDk_EkBmTAvwmeyUrrKJYuZ8De1kUGm079v4inCY2CjF1pU8Nd28UJ0nUe2lx_odIkstjxSwh3Is5p4Z3XINsiDg3WMUx4jbA4i7Vr1UYbMO3Bm2iL8c7QImnTrsx6pE3y3CGKrOZ2oTnh4sGcmWLO3-uoquE6Dnx7GpN0TxTfsv3EuKtOEKEXHbbI4Q?width=1200&height=1096&cropmode=none',
      game_name: 'Pokémon X Version',
      region: 'Kalos',
      platform: 'Nintendo 3DS',
      description:
        "An all-new 3D Pokémon adventure packed with never-before-seen Pokémon has launched! Pokémon X and Pokémon Y presents a new generation of Pokémon and introduces players to an exciting new adventure in a breathtaking 3D world. You'll be able to go on your journey as a boy or a girl, and you can choose how your hero looks overall! Find a look that suits you, and then set off on your travels! Your adventure takes place in the expansive Kalos region, where you'll explore cities, meet people, and encounter many Pokémon. Don't miss Lumiose City, the central hub of the region, where you'll return many times on your journey. Look for all-new Fairy-type Pokémon, the first new Pokémon type since Dark-type and Steel-type Pokémon were introduced almost a decade ago. Fairy-type moves are super effective against Dragon-type Pokémon. One such Fairy-type Pokémon to meet is Sylveon, the new evolved form of Eevee! All-new battle formats are fun for new players and Pokémon pros. Sky Battles feature duels between Pokémon that can fly, and Horde encounters are massive competitions where one of your Pokémon faces many wild Pokémon at once! These new modes will challenge every Pokémon Trainer. In addition to new battle types, you can also care for your Pokémon with the Pokémon-Amie feature. Feed, pet, and play with your Pokémon to increase your bond. The more you play with your Pokémon, the friendlier they'll become—and perhaps perform better for you in battle. Around the Kalos region, you'll meet a lot of people. First there's the brilliant Professor Sycamore. He's researching Pokémon, and he's looking to you and your friends for help. He may even challenge you to a battle from time to time. But you're also likely to encounter members of the mysterious organization Team Flare. What they're up to is anyone's guess. In Pokémon X and Pokémon Y, some Pokémon will tap into powers long dormant. This special kind of Evolution is called Mega Evolution. In addition to far greater strength, Mega-Evolved Pokémon may also see their Ability change, or even their type!",
      genre: 'RPG',
      date_released: ISODate('2013-10-12T07:00:00Z'),
      logo_url:
        'https://zumkgw.sn.files.1drv.com/y4mWOadLEKok0yrHhuz3Ya062tGri8fgMkcMMD9cHu81JQB0-9qfRAvw5PG3gexcjpxB7dAym7LEOCSdlEBiCRRslxAmJSkeQJfDdXCp0qzjBo3f0PWLyllenF-XepYwS52ET9fShMMLS5E1Wy35Js32yxJSmucFRJexeFX_owLdMPtk5-IazIfwPlOddHACc1ccbsJyNP1UpKt2fHeqQz3Mw?width=576&height=250&cropmode=none'
    },
    {
      order_number: NumberInt(22),
      rom_type: 'core',
      file_name: 'Pokemon Y.3ds',
      file_size: NumberInt(2097152),
      file_type: '3ds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106585&authkey=AEq4ioX0VrAa59k',
      generation: NumberInt(6),
      box_art_url:
        'https://0xqhgw.sn.files.1drv.com/y4mtocmjMR3RYMCRfkNgZOCgCaFqV8arET-XcHlLsLOnYb8toVU9QK7a83kWdF3poujILoH7_bXcKPx4m2ScLgkKG7KxylimMRYVvjnSoxWK3Ya-FuNoa55w8XXJO6LeVuBdyYP2-DWhHECF4QDKii2sG8H9QeYFQV2rD1GqJDrmmI82hijKKqyefPuTlDySpGeFcHFQQgI9-m5im1HxIZijQ?width=833&height=762&cropmode=none',
      game_name: 'Pokémon Y Version',
      region: 'Kalos',
      platform: 'Nintendo 3DS',
      description:
        "An all-new 3D Pokémon adventure packed with never-before-seen Pokémon has launched! Pokémon X and Pokémon Y presents a new generation of Pokémon and introduces players to an exciting new adventure in a breathtaking 3D world. You'll be able to go on your journey as a boy or a girl, and you can choose how your hero looks overall! Find a look that suits you, and then set off on your travels! Your adventure takes place in the expansive Kalos region, where you'll explore cities, meet people, and encounter many Pokémon. Don't miss Lumiose City, the central hub of the region, where you'll return many times on your journey. Look for all-new Fairy-type Pokémon, the first new Pokémon type since Dark-type and Steel-type Pokémon were introduced almost a decade ago. Fairy-type moves are super effective against Dragon-type Pokémon. One such Fairy-type Pokémon to meet is Sylveon, the new evolved form of Eevee! All-new battle formats are fun for new players and Pokémon pros. Sky Battles feature duels between Pokémon that can fly, and Horde encounters are massive competitions where one of your Pokémon faces many wild Pokémon at once! These new modes will challenge every Pokémon Trainer. In addition to new battle types, you can also care for your Pokémon with the Pokémon-Amie feature. Feed, pet, and play with your Pokémon to increase your bond. The more you play with your Pokémon, the friendlier they'll become—and perhaps perform better for you in battle. Around the Kalos region, you'll meet a lot of people. First there's the brilliant Professor Sycamore. He's researching Pokémon, and he's looking to you and your friends for help. He may even challenge you to a battle from time to time. But you're also likely to encounter members of the mysterious organization Team Flare. What they're up to is anyone's guess. In Pokémon X and Pokémon Y, some Pokémon will tap into powers long dormant. This special kind of Evolution is called Mega Evolution. In addition to far greater strength, Mega-Evolved Pokémon may also see their Ability change, or even their type!",
      genre: 'RPG',
      date_released: ISODate('2013-10-12T07:00:00Z'),
      logo_url:
        'https://zpmzgw.sn.files.1drv.com/y4mbHRU3s3ISACt6iqcjzUQbPIy0py5V005Hgn8gk9BYY2aCExJnRZPSF5we3YGdgbUVu6tuI8ed9WaImQA270mZNk4SAjrjYcUrBxGsR4QXsNI6J9tQfd3xeJUpTj-E-XJytqUEKVzNKJXVHJVgwvfb1Lalj_KCObQDMEM6p3rGd8RAIwwfGGhZ48s1t6A5qhI8nXVb30VYnuTYl6qoGqOMA?width=1116&height=497&cropmode=none'
    },
    {
      order_number: NumberInt(23),
      rom_type: 'core',
      file_name: 'Pokemon Omega Ruby.3ds',
      file_size: NumberInt(2097152),
      file_type: '3ds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106556&authkey=AAPpmfuqhzaq8tM',
      generation: NumberInt(6),
      box_art_url:
        'https://0hqkgw.sn.files.1drv.com/y4mRw1x9Jhh3u8sw4IdAeQnq3PBo4dp2uvGm6qW0gO_lHbghKz5JsKL0pETlNUDjQJ-2Jaovn_ZPJeQ3VxL0dRFs_OhjKrkpXDR2CuV-KTJvjK-2vLX1H9skdQkIFx16gVkS3ADC6mURoGE7wPgD_Gll1dgEZAWM69aVnwFlMXECdVP6VMiEOL4H66XiqBDRSXgGlriKVKe6kWwS1fVzv9O9Q?width=1798&height=1600&cropmode=none',
      game_name: 'Pokémon Omega Ruby Version',
      region: 'Hoenn',
      platform: 'Nintendo 3DS',
      description:
        'Experience an epic journey through a world filled with Pokémon in Pokémon Omega Ruby and Pokémon Alpha Sapphire for the Nintendo 3DS family of systems. Pokémon fans first enjoyed Pokémon Ruby and Pokémon Sapphire when it launched in 2003 for the Game Boy Advance. A whole new generation of Pokémon fans will experience the dramatic story line that unfolds in Pokémon Omega Ruby and Pokémon Alpha Sapphire. Your adventure takes place in Hoenn, a region that consists of a main island that stretches widely from east to west along with countless islets that dot the deep blue sea around it. A live volcano steams constantly in the heart of this green-covered island. Look forward to a region rich with natural beauty, a variety of Pokémon, and extraordinary people. Among those folks is Pokémon Professor Birch, who runs the Pokémon Lab in Littleroot Town. With him, you will have your first meeting with the Pokémon that will become your partner on your journey, and a new bond will be born. You’ll also encounter incredibly tough Trainers during your journey and visit Pokémon Gyms, where Pokémon Trainers gather and Gym Leaders stand ready for Trainers to challenge them. As the story unfolds, you will battle Team Magma in Pokémon Omega Ruby and Team Aqua in Pokémon Alpha Sapphire. Led by Maxie, Team Magma seeks to expand the land, while Archie and Team Aqua wish to expand the seas. In order to bring about these grand plans, each will turn to the power of a Legendary Pokémon: Groudon or Kyogre. Team Magma pursues Groudon, while Team Aqua goes after Kyogre. What could be driving them to such lengths? These Legendary Pokémon also undergo an event called Primal Reversion to become Primal Groudon and Primal Kyogre. These Pokémon play a great role in shaping the stories in which they each appear.',
      genre: 'RPG',
      date_released: ISODate('2014-11-21T08:00:00Z'),
      logo_url:
        'https://1hripg.sn.files.1drv.com/y4m4Q8G8iboJJmvoGyQ-BgVwxW1f0Oel8K6vmT_wvRzgjBBDP6RCoX1q1M1ofuyE8Ekxv3NL60DxjppR1osPSsSYhYi55Jx57XfOFdBbFHxGyLYMJt-yQS0y_PHuE95GmvzP5FFYy9I_fXDbpbTn5_7zYuO0CnCi5spGE8qMpkdoWem7l4eBcoK4vGDgqxMUBQVGo_uURMsR4pQKA8xBMEgBA?width=397&height=250&cropmode=none'
    },
    {
      order_number: NumberInt(24),
      rom_type: 'core',
      file_name: 'Pokemon Alpha Sapphire.3ds',
      file_size: NumberInt(2097152),
      file_type: '3ds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106564&authkey=ABwmbFxt2ZX3V_M',
      generation: NumberInt(6),
      box_art_url:
        'https://0hqigw.sn.files.1drv.com/y4mbsE70x5pLol7wsNurcHVfxKrErWnr7P2whPYHdXnggP0nzQ1nKENDbxmtcZtI3MxEvUXic0LsDycgD1yGebTy3AS4g85XiUsVFYwWOZc69P0A4eWjfMQeNjWGaC9GZQOhnbgOJphF2yxHw2lFeLwhJ_3RKuk9u3FoIN3FaTBVJ2sPdrj9tUXIsDD5R_eNIo4Yw2ZSkye4-QiRdlzO93Kgw?width=1799&height=1601&cropmode=none',
      game_name: 'Pokémon Alpha Sapphire Version',
      region: 'Hoenn',
      platform: 'Nintendo 3DS',
      description:
        'Experience an epic journey through a world filled with Pokémon in Pokémon Omega Ruby and Pokémon Alpha Sapphire for the Nintendo 3DS family of systems. Pokémon fans first enjoyed Pokémon Ruby and Pokémon Sapphire when it launched in 2003 for the Game Boy Advance. A whole new generation of Pokémon fans will experience the dramatic story line that unfolds in Pokémon Omega Ruby and Pokémon Alpha Sapphire. Your adventure takes place in Hoenn, a region that consists of a main island that stretches widely from east to west along with countless islets that dot the deep blue sea around it. A live volcano steams constantly in the heart of this green-covered island. Look forward to a region rich with natural beauty, a variety of Pokémon, and extraordinary people. Among those folks is Pokémon Professor Birch, who runs the Pokémon Lab in Littleroot Town. With him, you will have your first meeting with the Pokémon that will become your partner on your journey, and a new bond will be born. You’ll also encounter incredibly tough Trainers during your journey and visit Pokémon Gyms, where Pokémon Trainers gather and Gym Leaders stand ready for Trainers to challenge them. As the story unfolds, you will battle Team Magma in Pokémon Omega Ruby and Team Aqua in Pokémon Alpha Sapphire. Led by Maxie, Team Magma seeks to expand the land, while Archie and Team Aqua wish to expand the seas. In order to bring about these grand plans, each will turn to the power of a Legendary Pokémon: Groudon or Kyogre. Team Magma pursues Groudon, while Team Aqua goes after Kyogre. What could be driving them to such lengths? These Legendary Pokémon also undergo an event called Primal Reversion to become Primal Groudon and Primal Kyogre. These Pokémon play a great role in shaping the stories in which they each appear.',
      genre: 'RPG',
      date_released: ISODate('2014-11-21T08:00:00Z'),
      logo_url:
        'https://0nrvpg.sn.files.1drv.com/y4mpSxRmsVfQDIU1N7d758SOAPJcdUlrh7lhF5poGS8Gl3ifPErWncSf-crk5KaQAlPnAasSzWycsAwK9SRvhh31FqzV7k7-Bs9R-wDIirmT7QNc_CbVl5mJEFzdIduo_4yH0Fcp09IwmXIUWEvMHJ_hPuWIjnHe3XxUDh0DSHDn5jAGSDLjJxEzOmJANt9O-5WM-kar9_IyhgXBfX3dWTmrg?width=1024&height=584&cropmode=none'
    },
    {
      order_number: NumberInt(25),
      rom_type: 'core',
      file_name: 'Pokemon Sun.3ds',
      file_size: NumberInt(4194304),
      file_type: '3ds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106549&authkey=AHDbUZ0ACayd4ac',
      generation: NumberInt(7),
      box_art_url:
        'https://z3qggw.sn.files.1drv.com/y4mxfr9WhL8gEsJ4_2OkUc-zsXa0UhsiziYfkB4C5pzxMn2VzrZWNKSZd7z-jyC--y1ejes8FXMNVsZ0N2iDCQfQHq9ySw8_Ho_25zJhuxPh8hjK2cu0F9poVj4a3AuuQkCjyZJSEUXcuKr33Ff0NUgvsmRVhlBUnmnsOPl13rs2NqhT8-Q_gnB1DfEyrqS8OaHVk25Mmbu8aMwUqklSWnooA?width=1200&height=1095&cropmode=none',
      game_name: 'Pokémon Sun Version',
      region: 'Alola',
      platform: 'New Nintendo 3DS',
      description:
        'Your journey in Pokémon Sun and Pokémon Moon will take you across the beautiful islands of the Alola region, where you’ll encounter newly discovered Pokémon, as well as Pokémon that have taken on a new Alolan style. You may even encounter powerful Legendary Pokémon and other special Pokémon, such as the mysterious guardian deities. Keep track of all the Pokémon you’ve seen and caught with the new Rotom Pokédex. Some of the Pokémon you’ll train and battle with can learn powerful new Z-Moves,—moves so strong they can be used only once in battle. There are Z-Moves for every different type, as well as exclusive Z-Moves for certain Pokémon, including Eevee and Pikachu. Try them out in battle to see what these awesome moves can do! Around every corner, your battling skills will be tested by tough Trainers! Epic battles are in store for you against Team Skull, a nefarious group of ruffians attempting to steal Pokémon, and you’ll also face the kahunas, the tough leaders of each island. And if you’re strong enough, you may reach the Battle Tree, a place where the most accomplished Trainers go to battle each other. The new Pokémon Refresh feature can keep your Pokémon in top shape after all that battling. Take care of your Pokémon by curing any status conditions like poisoning and paralysis. Plus, the more affectionate your Pokémon become toward you, the better they’ll perform in battle. Take good care of your Pokémon with Pokémon Refresh, and they’ll be great allies on your adventure! Your Pokémon can also enjoy a new experience known as Poké Pelago, a place for them to visit when they’ve been placed in PC Boxes. Poké Pelago is a group of islands where your Pokémon can explore, play, and do other fun activities. As your Pokémon play there, they might get stronger or obtain items for you.',
      genre: 'RPG',
      date_released: ISODate('2016-11-18T08:00:00Z'),
      logo_url:
        'https://zumygw.sn.files.1drv.com/y4m5ELc1BTfLeVhBqEIBsdzgnORwskdrqp-0iH7R7GMr_L9_0pbI6pnv3NB3ZvI4QNg2ixoGTKVrmU_ptx6fenBfTiPzZfQZgRbbVX2UlV8A3YbajigY7MyDF2qqzovgnhEDv8DtcZS0232uEYTkmPDtBMTibvyY1neuFbY1H1rsJlbNThj8vc64QNrf7wLbGtggR6KEJ47Qj0V-w__0dXgqQ?width=1200&height=638&cropmode=none'
    },
    {
      order_number: NumberInt(26),
      rom_type: 'core',
      file_name: 'Pokemon Moon.3ds',
      file_size: NumberInt(4194304),
      file_type: '3ds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106553&authkey=AHHRtsyc3Ea9Ayo',
      generation: NumberInt(7),
      box_art_url:
        'https://z3qsgw.sn.files.1drv.com/y4mEuNjkV8s_Obohlr7qrHVGKPsXMaKO4ZyntUsh-OC5fZPVt1YYRUO_e7Ir5sWsOWsgvmnMjRbQduFgI0rF1e0f3DeF3duyVnGqu8U8CLGjGSSfBQ3R9sve4dX_Kteag_XJdTuAVYJiWQcu58At2xmxGMZ89_VrZx_Z7iwNSXPGhZtXNtFJM5pnu0HwZogcjf8mAeq9XFqu7wNU0sXIoZt7g?width=1863&height=1704&cropmode=none',
      game_name: 'Pokémon Moon Version',
      region: 'Alola',
      platform: 'New Nintendo 3DS',
      description:
        'Your journey in Pokémon Sun and Pokémon Moon will take you across the beautiful islands of the Alola region, where you’ll encounter newly discovered Pokémon, as well as Pokémon that have taken on a new Alolan style. You may even encounter powerful Legendary Pokémon and other special Pokémon, such as the mysterious guardian deities. Keep track of all the Pokémon you’ve seen and caught with the new Rotom Pokédex. Some of the Pokémon you’ll train and battle with can learn powerful new Z-Moves,—moves so strong they can be used only once in battle. There are Z-Moves for every different type, as well as exclusive Z-Moves for certain Pokémon, including Eevee and Pikachu. Try them out in battle to see what these awesome moves can do! Around every corner, your battling skills will be tested by tough Trainers! Epic battles are in store for you against Team Skull, a nefarious group of ruffians attempting to steal Pokémon, and you’ll also face the kahunas, the tough leaders of each island. And if you’re strong enough, you may reach the Battle Tree, a place where the most accomplished Trainers go to battle each other. The new Pokémon Refresh feature can keep your Pokémon in top shape after all that battling. Take care of your Pokémon by curing any status conditions like poisoning and paralysis. Plus, the more affectionate your Pokémon become toward you, the better they’ll perform in battle. Take good care of your Pokémon with Pokémon Refresh, and they’ll be great allies on your adventure! Your Pokémon can also enjoy a new experience known as Poké Pelago, a place for them to visit when they’ve been placed in PC Boxes. Poké Pelago is a group of islands where your Pokémon can explore, play, and do other fun activities. As your Pokémon play there, they might get stronger or obtain items for you.',
      genre: 'RPG',
      date_released: ISODate('2016-11-18T08:00:00Z'),
      logo_url:
        'https://1hrlpg.sn.files.1drv.com/y4m2EMffC5wV2HXGVUpiuGQb0432VUwvI5s1Bx1h8ALZiuX1d7oeuqC-5WVvDVFivpotdnW2bc12PfvMeIJCK5maQLp12QdfX0TYOTjjZkqFjtpmAiJwzfHVEQf4LvA0LmHCS-nZ0uZWZbtDYxL4SmK1Nh7wx7v5cDOHICh2u7rhOd6PTssm2LLEiciNmtAk9dsLLX5y-aiEfg1imXpNcAEDA?width=1200&height=638&cropmode=none'
    },
    {
      order_number: NumberInt(27),
      rom_type: 'core',
      file_name: 'Pokemon Ultra Sun.3ds',
      file_size: NumberInt(4194304),
      file_type: '3ds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106547&authkey=AOheDwtEMuimfFc',
      generation: NumberInt(7),
      box_art_url:
        'https://z3qigw.sn.files.1drv.com/y4mQD8s_-mqNL5ntdbVhjOGvSTNS2to0vArn8LiDgg1FFLBiqil10aEZRTvbLcY6J9TTzxc3VYRxEPttIfa-K0VnwNILEjxDt3n29BPqkEyhXqkm3BRCI8nJRJmL023oUnCxdRlViyDSZA64tVnu8BbyUZprjMjbhL9hemGC12EtMUNMEZGuE6_7nqLUlV8R1J6o9zEcZbSMSVaWYM6mbO0QQ?width=1200&height=1095&cropmode=none',
      game_name: 'Pokémon Ultra Sun Version',
      region: 'Alola',
      platform: 'New Nintendo 3DS',
      description:
        'Pokémon Ultra Sun and Pokémon Ultra Moon have been powered up with new additions to the story and features of Pokémon Sun and Pokémon Moon. The games take place in the Alola region, which is made up of four islands, along with one artificial island. The islands are teeming with Pokémon, including some Alolan variants of familiar Pokémon that were originally discovered in the Kanto region. During your adventure, you’ll have multiple run-ins with the troublesome Team Skull, encounter the elusive guardian deities, and unravel a plot surrounding the mysterious Aether Foundation. There’s nothing like a return trip to the wonderful, tropical Alola region! The Mysteries of the Ultra Wormhole! A strange pocket of space has been spotted over the Alola region! The Ultra Wormhole is a gateway to other worlds, and occasionally, fearsome Ultra Beasts will emerge from it. These powerful creatures are unlike any that you’ve ever seen before. Challenge these incredible Ultra Beasts, and you might even be able to add them to your team. Just make sure to bring a few Beast Balls to catch them. With the help of the Legendary Pokémon Solgaleo or Lunala, you can even travel into the Ultra Wormhole to explore what lies beyond. You’ll find more Ultra Beasts within Ultra Space, but you may also encounter Legendary Pokémon such as Mewtwo, Ho-Oh, Lugia, and others. With enough persistence, you could potentially put together an entire team of Legendary Pokémon! Necrozma’s New Tale! One Legendary Pokémon that you won’t have to travel to Ultra Space to meet is the mighty Necrozma. This imposing Pokémon features heavily in Pokémon Ultra Sun and Pokémon Ultra Moon’s story, and by playing, you’ll uncover new secrets about Necrozma and the Alola region. Necrozma’s power continues to grow when it reveals its alternate forms—Dusk Mane Necrozma appears in Pokémon Ultra Sun while Dawn Wings Necrozma shows up in Pokémon Ultra Moon. And just what is Ultra Necrozma? Can this Legendary Pokémon’s power be contained? Perhaps the Ultra Recon Squad will have the answer to that question. This group hails from a world that lies beyond an Ultra Wormhole, and they have come to the Alola region to find out more about Necrozma, including how to restore the light that the Legendary Pokémon has stolen from their home.',
      genre: 'RPG',
      date_released: ISODate('2017-11-17T08:00:00Z'),
      logo_url:
        'https://zumxgw.sn.files.1drv.com/y4m5z0IPTPChajKJPqbAgLS6no_EWZw9GhlyYn0_Ocq-shKIsDKmzxzfQfJw7AnsTVL6Pg62Lw1jXqlQNyuAt6OcMC6sbLbksyGkl-1qcGN1QnoVw3cesE5aIejdulJO8_0Yxrf48F1kAe8Ls0kfPaQJkH3hMVzcjgYAohS2pC0isNy1EJsah-sWwNG_Fr9bFitAFL6uWcN4DyskEr2WJfnbQ?width=616&height=353&cropmode=none'
    },
    {
      order_number: NumberInt(28),
      rom_type: 'core',
      file_name: 'Pokemon Ultra Moon.3ds',
      file_size: NumberInt(4194304),
      file_type: '3ds',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106551&authkey=AJ9rXowWVDeoCIY',
      generation: NumberInt(7),
      box_art_url:
        'https://zpmvgw.sn.files.1drv.com/y4mUh2lANoS1yFqqsS4DYLZHgRH6v-0qmNRxsjiSpY0kmF2NC6672adflcXbmATT3EkniH3eH3xixqWjF-x3z6keoMpT8BXDmmjFHlya0xuFmJVo2DD-UAJBhT6bIWiW00wyw_86jafFTPWM-GWdCejtEU0JTNBieWUjC0Pltzem79V3XcTPorwvuZqUT5BFjCVJX8Hhb8FTigAzBmdlIAUNg?width=1200&height=1097&cropmode=none',
      game_name: 'Pokémon Ultra Moon Version',
      region: 'Alola',
      platform: 'New Nintendo 3DS',
      description:
        'Pokémon Ultra Sun and Pokémon Ultra Moon have been powered up with new additions to the story and features of Pokémon Sun and Pokémon Moon. The games take place in the Alola region, which is made up of four islands, along with one artificial island. The islands are teeming with Pokémon, including some Alolan variants of familiar Pokémon that were originally discovered in the Kanto region. During your adventure, you’ll have multiple run-ins with the troublesome Team Skull, encounter the elusive guardian deities, and unravel a plot surrounding the mysterious Aether Foundation. There’s nothing like a return trip to the wonderful, tropical Alola region! The Mysteries of the Ultra Wormhole! A strange pocket of space has been spotted over the Alola region! The Ultra Wormhole is a gateway to other worlds, and occasionally, fearsome Ultra Beasts will emerge from it. These powerful creatures are unlike any that you’ve ever seen before. Challenge these incredible Ultra Beasts, and you might even be able to add them to your team. Just make sure to bring a few Beast Balls to catch them. With the help of the Legendary Pokémon Solgaleo or Lunala, you can even travel into the Ultra Wormhole to explore what lies beyond. You’ll find more Ultra Beasts within Ultra Space, but you may also encounter Legendary Pokémon such as Mewtwo, Ho-Oh, Lugia, and others. With enough persistence, you could potentially put together an entire team of Legendary Pokémon! Necrozma’s New Tale! One Legendary Pokémon that you won’t have to travel to Ultra Space to meet is the mighty Necrozma. This imposing Pokémon features heavily in Pokémon Ultra Sun and Pokémon Ultra Moon’s story, and by playing, you’ll uncover new secrets about Necrozma and the Alola region. Necrozma’s power continues to grow when it reveals its alternate forms—Dusk Mane Necrozma appears in Pokémon Ultra Sun while Dawn Wings Necrozma shows up in Pokémon Ultra Moon. And just what is Ultra Necrozma? Can this Legendary Pokémon’s power be contained? Perhaps the Ultra Recon Squad will have the answer to that question. This group hails from a world that lies beyond an Ultra Wormhole, and they have come to the Alola region to find out more about Necrozma, including how to restore the light that the Legendary Pokémon has stolen from their home.',
      genre: 'RPG',
      date_released: ISODate('2017-11-17T08:00:00Z'),
      logo_url:
        'https://zumvgw.sn.files.1drv.com/y4m2jPjnrNXLZ0q7O4rKh_uVi-pgY9yDVLcgvfuPKCqGV1Ow4786Tv0_gLsW53DP7K4YvYEHVdsx5ZkLs11z_GCBwKlZUmuGDmU2xg7GqYDY7ui7aI4ZO7oi8Cqg01e76OXf4V0uHnDPQBL1je2JLMwaxWVeyVFxCmN88U-dAZhqQbM2_F21NbgBP3_WonjZ4f0KOl8doRUBAeLdjQJQchNRw?width=1200&height=591&cropmode=none'
    },
    {
      order_number: NumberInt(29),
      rom_type: 'core',
      file_name: "Pokemon Let's Go Pikachu.xci",
      file_size: NumberInt(4737727),
      file_type: 'xci',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106545&authkey=AH6PyIU37tYizgg',
      generation: NumberInt(7),
      box_art_url:
        'https://znqhgw.sn.files.1drv.com/y4mqzYbfTYAIsmbqLwDZsL6jQprG_6p1c33r6PoincEpMdDOI_7TpOcNUgb3OiS7gES3QEv9FETeeAEfgBoPx9bAK3T89S9E5jT_3D5ViyqFUj6nlMPX8etWPCyUMc1Oyv_egqVz16YvCoNNFGMSxH2WBKdJCmt2nscLpy2YjYd-hz8rCLplUWXL_0NUNRwR78R6q4lnbV5Ux6Xn4PK4hDEHA?width=2894&height=4686&cropmode=none',
      game_name: "Pokémon Let's Go Pikachu",
      region: 'Kanto',
      platform: 'Nintendo Switch',
      description:
        'Return to the Kanto region and experience a classic Pokémon journey in a whole new way with Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! These two titles were created by GAME FREAK, the developers of the Pokémon core RPG titles. Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! introduce a new play style that anyone can enjoy and combine it with the fun of collecting Pokémon. Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! are based on Pokémon Yellow: Special Pikachu Edition, which first launched in Japan in 1998. These updated versions reimagine the original to make the most of the unique capabilities of the Nintendo Switch. The games also capture the fun of Pokémon GO and its intuitive Pokémon-catching mechanic. Befriend Your Partner! At the start of your tale, you encounter either Pikachu or Eevee, depending on which game version you choose. This Pikachu or Eevee joins you as your partner in your adventures, growing together with you on your journey. Pikachu or Eevee is with you wherever you go, either hanging on your shoulder or riding on your head. Don’t let its adorable expressions fool you into thinking that cuteness is all it offers, though. Your partner is a dependable ally in battle, too. In addition to determining your first partner Pokémon, your choice of Pokémon: Let’s Go, Pikachu! or Pokémon: Let’s Go, Eevee! also affects the species of Pokémon you encounter and the rate at which you encounter them.',
      genre: 'RPG',
      date_released: ISODate('2018-11-16T08:00:00Z'),
      logo_url:
        'https://1hrmpg.sn.files.1drv.com/y4m_O9hXHXADQDh9FB0uueLLMZ9JON01v4r89XZchRieYjgJyTftJUdCpL7DYQ4FYjFqb0f8LJICjgO_K-v6C00DRK0RY-ChfrqagZL4LNOaIVB3WF-N3ajPgKXQtxPw0zNcVLa7es2B6P8bqGJatGDnE1KqjYLlDKuOQej0P8f5f0zcgJB50EMhHAiM5nngo1dzvAFpEBuhVMjMloOM58etQ?width=447&height=202&cropmode=none'
    },
    {
      order_number: NumberInt(30),
      rom_type: 'core',
      file_name: "Pokemon Let's Go Eevee.xci",
      file_size: NumberInt(4737727),
      file_type: 'xci',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106543&authkey=ANrrufnvqg8NCsA',
      generation: NumberInt(7),
      box_art_url:
        'https://y3qdgw.sn.files.1drv.com/y4mkJjE83B3tU2Rrt6kdu-T0g0kCU4aUU-wRb1un_OFVNawyRr4YZuqw-kAUl7MxOVriLhoK7u6RrW__YZ_95A-RrpiNV3RBc_uCV_cf-rpn0bWrP1g_E2kddAqkojW83bQqC6jNwvq1_b7DOEXoX_fsouR4nXlixnHKG3r4bBGd4fYnOJ1EbnKTuMw_BXiaRquoQjsC7M_WATFlYONSJVMOg?width=2894&height=4686&cropmode=none',
      game_name: "Pokémon Let's Go Eevee",
      region: 'Kanto',
      platform: 'Nintendo Switch',
      description:
        'Return to the Kanto region and experience a classic Pokémon journey in a whole new way with Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! These two titles were created by GAME FREAK, the developers of the Pokémon core RPG titles. Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! introduce a new play style that anyone can enjoy and combine it with the fun of collecting Pokémon. Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! are based on Pokémon Yellow: Special Pikachu Edition, which first launched in Japan in 1998. These updated versions reimagine the original to make the most of the unique capabilities of the Nintendo Switch. The games also capture the fun of Pokémon GO and its intuitive Pokémon-catching mechanic. Befriend Your Partner! At the start of your tale, you encounter either Pikachu or Eevee, depending on which game version you choose. This Pikachu or Eevee joins you as your partner in your adventures, growing together with you on your journey. Pikachu or Eevee is with you wherever you go, either hanging on your shoulder or riding on your head. Don’t let its adorable expressions fool you into thinking that cuteness is all it offers, though. Your partner is a dependable ally in battle, too. In addition to determining your first partner Pokémon, your choice of Pokémon: Let’s Go, Pikachu! or Pokémon: Let’s Go, Eevee! also affects the species of Pokémon you encounter and the rate at which you encounter them.',
      genre: 'RPG',
      date_released: ISODate('2018-11-16T08:00:00Z'),
      logo_url:
        'https://1hrkpg.sn.files.1drv.com/y4m6XL-JR6xUPT7ZYNPqyDOglFTggjEcEkw4zIG4g6hBrifEsEiuqLimAvutufTrpD-a9LBLhvJUd4IKvxzV64yJ8WpSMtphcNZPF7xrz8V7T67chnqrqXal7xKbzpUT7DOEpoISjL9BCZsqzxwMU5mc4RyXcjS1mkGFIB-NWaf61GApDsHEFHiTh_1ZtagxecjznhSIaEZuy38sacQ5JmDhA?width=447&height=202&cropmode=none'
    }
  ],
  [
    {
      order_number: NumberInt(31),
      rom_type: 'hack',
      file_name: 'Pokemon Prism.gbc',
      file_size: NumberInt(2048),
      file_type: 'gbc',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106595&authkey=AJcTDNwVvo66Y2o',
      generation: NumberInt(2),
      box_art_url:
        'https://1hqggw.sn.files.1drv.com/y4mpJga6ZyW44khRKC-UDFExmvqm7bAjCW6xD0dzrUG2nr00JbXi79_rTsst8SJ-1wXrJDMXyqpJw6HsPELtJMt-FrERZskCre-O3-y-wA4qAd05IohVXSX-OOaiWTwoi8Fr1FU9cvAGw21DFJ5Z97JkaezP-x90tNFhyZLaB5KkfsAgjNnCpLJP7oSpf4V18F7y5w2FyUJtK68_Bu1ZBmlqg?width=640&height=640&cropmode=none',
      game_name: 'Pokémon Prism Version (ROM Hack)',
      region: 'Naljo',
      platform: 'Game Boy Color (Emulator)',
      description:
        'Pokémon Prism is an awesome Pokémon ROM hack.\r\nFind out more info here: http://bit.ly/2Xy5qos',
      genre: 'RPG',
      date_released: ISODate('2016-12-25T08:00:00Z'),
      logo_url:
        'https://1hrhpg.sn.files.1drv.com/y4mdMLn-kUfjZA1laNJYx9472MBGKGssiYwnoXBFCd7-3Yyy8-xDiVIaCSP2oYKsn5Dl0TXlfAZBR_CAR2ECrTxDY3jjFoxOYMdtB62yAaHZeJhWEqbF8sv42ofSyIqeEP3hWQKnU2hTdPFfqRxbFs91WRpXoWVC0HRPJWufI-gwJGrBfInnwKt6MbLE3GYe2OLCxi75lZE94WP5siD69Xwtg?width=770&height=470&cropmode=none'
    },
    {
      order_number: NumberInt(32),
      rom_type: 'hack',
      file_name: 'Pokemon Ash Gray.gba',
      file_size: NumberInt(16384),
      file_type: 'gba',
      download_link:
        'https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106597&authkey=ANQl3JsQwoMHMhs',
      generation: NumberInt(3),
      box_art_url:
        'https://1hqhgw.sn.files.1drv.com/y4mwdX0ceYvPOHob_EzEzF2K88YlXuZqxwrOvH_Jr3c_vBKI4-pggiRqQ4S68vDQGADwm5OZLJChiaCfgc3S2DbTtv_INxKmMt4HLvWJuOMOkB_QPwIaC5j9YGlvecDENYplh_wylnRtHQqPdnnifRr22Q2iQX9pSMdrQeJgNxKlTwfotYAVP8G2LVY4q7VBdZesU_Xj2i2rulCGlT5114Qxw?width=225&height=225&cropmode=none',
      game_name: 'Pokémon Ash Gray Version (ROM Hack)',
      region: 'Kanto',
      platform: 'Game Boy Advanced (Emulator)',
      description:
        'Pokémon Ash Gray is an amazing Pokémon ROM hack. It features the story of Ash Ketchum in the Kanto region during his journey in the Pokémon Generation I anime.',
      genre: 'RPG',
      date_released: ISODate('2009-05-31T07:00:00Z'),
      logo_url:
        'https://03rnpg.sn.files.1drv.com/y4moO_HZvoByM75VgYQEVVjDWzlLce2OrZsYMI6EcLu1aIQQnkToKBhuz1PFcJr_EldBUPyhhU1UYV6SGlY-uLckkj2cGWMfOawJwmAJYX1X30Gd7FHlYJiTfvbG717yBGBkSLyTKT9zaJIj4iW9yRROo7HvRnIwzyfcgHvgHNn9e6MG_ndrXHR_A3qJnVxfiRV-0rcCYQApnXsSYHydjgVgA?width=1920&height=1080&cropmode=none'
    }
  ]
);
printjson(insertRomsQuery);

// insert all natures
insertNaturesQuery = db.natures.insertMany([
  {
    name: 'Adamant',
    up: 'Attack',
    down: 'Special Attack',
    flavor: 'Spicy (Red)',
    usage: 'Bulky/scarfed physical attacker'
  },
  {
    name: 'Brave',
    up: 'Attack',
    down: 'Speed',
    flavor: 'Spicy (Red)',
    usage: 'Physical trick room attacker'
  },
  {
    name: 'Lonely',
    up: 'Attack',
    down: 'Defense',
    flavor: 'Spicy (Red)',
    usage: 'Bulky/scarfed mixed attacker'
  },
  {
    name: 'Naughty',
    up: 'Attack',
    down: 'Special Defense',
    flavor: 'Spicy (Red)',
    usage: 'Bulky/scarfed mixed attacker'
  },
  {
    name: 'Bashful',
    up: 'Special Attack',
    down: 'Special Attack',
    flavor: 'Dry (Blue)',
    usage: 'Neutral (useless)'
  },
  {
    name: 'Bold',
    up: 'Defense',
    down: 'Attack',
    flavor: 'Sour (Yellow)',
    usage: 'Special attacking physical wall'
  },
  {
    name: 'Impish',
    up: 'Defense',
    down: 'Special Attack',
    flavor: 'Sour (Yellow)',
    usage: 'Physical attacking physical wall'
  },
  {
    name: 'Relaxed',
    up: 'Defense',
    down: 'Speed',
    flavor: 'Sour (Yellow)',
    usage: 'Trick room physical wall'
  },
  {
    name: 'Lax',
    up: 'Defense',
    down: 'Special Defense',
    flavor: 'Sour (Yellow)',
    usage: 'Obscure (useless)'
  },
  {
    name: 'Hardy',
    up: 'Attack',
    down: 'Attack',
    flavor: 'Spicy (Red)',
    usage: 'Neutral (useless)'
  },
  {
    name: 'Careful',
    up: 'Special Defense',
    down: 'Special Attack',
    flavor: 'Bitter (Green)',
    usage: 'Physical attacking special wall'
  },
  {
    name: 'Calm',
    up: 'Special Defense',
    down: 'Attack',
    flavor: 'Bitter (Green)',
    usage: 'Special attacking special wall'
  },
  {
    name: 'Gentle',
    up: 'Special Defense',
    down: 'Defense',
    flavor: 'Bitter (Green)',
    usage: 'Obscure (useless)'
  },
  {
    name: 'Quirky',
    up: 'Special Defense',
    down: 'Special Defense',
    flavor: 'Bitter (Green)',
    usage: 'Neutral (useless)'
  },
  {
    name: 'Sassy',
    up: 'Special Defense',
    down: 'Speed',
    flavor: 'Bitter (Green)',
    usage: 'Trick room special wall'
  },
  {
    name: 'Modest',
    up: 'Special Attack',
    down: 'Attack',
    flavor: 'Dry (Blue)',
    usage: 'Bulky/scarfed special attacker'
  },
  {
    name: 'Mild',
    up: 'Special Attack',
    down: 'Defense',
    flavor: 'Dry (Blue)',
    usage: 'Bulky/scarfed mixed attacker'
  },
  {
    name: 'Rash',
    up: 'Special Attack',
    down: 'Special Defense',
    flavor: 'Dry (Blue)',
    usage: 'Bulky/scarfed mixed attacker'
  },
  {
    name: 'Quiet',
    up: 'Special Attack',
    down: 'Speed',
    flavor: 'Dry (Blue)',
    usage: 'Trick room special attacker'
  },
  {
    name: 'Docile',
    up: 'Defense',
    down: 'Defense',
    flavor: 'Sour (Yellow)',
    usage: 'Neutral (useless)'
  },
  {
    name: 'Timid',
    up: 'Speed',
    down: 'Attack',
    flavor: 'Sweet (Pink)',
    usage: 'Fast special attacker'
  },
  {
    name: 'Jolly',
    up: 'Speed',
    down: 'Special Attack',
    flavor: 'Sweet (Pink)',
    usage: 'Fast physical attacker'
  },
  {
    name: 'Hasty',
    up: 'Speed',
    down: 'Defense',
    flavor: 'Sweet (Pink)',
    usage: 'Fast mixed attacker'
  },
  {
    name: 'Naive',
    up: 'Speed',
    down: 'Special Defense',
    flavor: 'Sweet (Pink)',
    usage: 'Fast mixed attacker'
  },
  {
    name: 'Serious',
    up: 'Speed',
    down: 'Speed',
    flavor: 'Sweet (Pink)',
    usage: 'Neutral (useless)'
  }
]);
printjson(insertNaturesQuery);

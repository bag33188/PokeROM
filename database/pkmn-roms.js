// database file for pkmn-roms mongodb database
// to run/load:
// 1. go into mongo shell
// 2. load("<path_to_this_file>.js")
// or
// 1. go to terminal
// 2. "<path_to_mongo>" "<path_to_this_file>.js"

// connect to mongodb
conn = new Mongo();
printjson(conn);

// connect to/create pkmn-roms database
db = conn.getDB("pkmn-roms");
db = db.getSiblingDB("pkmn-roms");
printjson(db);

// create roms collection
romsCollection = db.createCollection("roms");
printjson(romsCollection);

// create users collection
usersCollection = db.createCollection("users");
printjson(usersCollection);

// create natures collection
naturesCollection = db.createCollection("natures");
printjson(naturesCollection);

// insert main user
insertUserQuery = db.users.insert({
  name: "Broccolini",
  email: "bglatman@outlook.com",
  username: "bag33188",
  password: "$2a$10$TdnK8g67LbEzBuTs39HE4eWxUfoGcraMAnoxjscnvXtUiYfsdWrVe",
  __v: 0
});
printjson(insertUserQuery);

// insert all roms
insertRomsQuery = db.roms.insert([
  {
    orderNumber: 0,
    fileName: "Pokemon Red.gb",
    fileSize: 1024,
    fileType: "gb",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106579&authkey=AFh1G-fhw1ddTbs",
    generation: 1,
    boxArtUrl: "https://bit.ly/2Wr6mts",
    gameName: "Pokémon Red Version",
    region: "Kanto",
    platform: "Game Boy",
    description: "Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy. After a dangerous brush with wild Pokémon, Professor Oak teaches you how to capture Pokémon, and then sends you on your way as a fledgling Trainer. During your journey through Kanto, you must capture Pokémon to record their information in your Pokédex, as well as become a better Trainer by competing in Gyms scattered throughout the region. Once you've proven your mettle as a Pokémon Trainer, it's time to take on the Elite Four, a crack group of Trainers that will put all of your learned skills to the test. Your journey will be far from easy. In addition to the many Trainers and wild Pokémon you'll encounter along the way, you'll also have to be watchful of Team Rocket, a despicable group of Pokémon thieves. Prevent Team Rocket from stealing rare Pokémon and stop their criminal ways! You won't be able to catch every Pokémon in either Pokémon Red or Pokémon Blue; to collect every Pokémon, you'll have to trade with friends via the Game Link™ Cable. With it, you can also take your team of faithful Pokémon into battle against your pals to see how well your team stacks up! There's much to see and do in Pokémon Red and Pokémon Blue. Start your journey through Kanto and become a Master Trainer!",
    genre: "RPG",
    dateReleased: "09/28/1998",
    logoUrl: "https://bit.ly/2Mu5YdV"
  },
  {
    orderNumber: 1,
    fileName: "Pokemon Blue.gb",
    fileSize: 1024,
    fileType: "gb",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106584&authkey=AAu3Ad8tHrWmdgQ",
    generation: 1,
    boxArtUrl: "https://bit.ly/2K4GDW8",
    gameName: "Pokémon Blue Version",
    region: "Kanto",
    platform: "Game Boy",
    description: "Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy. After a dangerous brush with wild Pokémon, Professor Oak teaches you how to capture Pokémon, and then sends you on your way as a fledgling Trainer. During your journey through Kanto, you must capture Pokémon to record their information in your Pokédex, as well as become a better Trainer by competing in Gyms scattered throughout the region. Once you've proven your mettle as a Pokémon Trainer, it's time to take on the Elite Four, a crack group of Trainers that will put all of your learned skills to the test. Your journey will be far from easy. In addition to the many Trainers and wild Pokémon you'll encounter along the way, you'll also have to be watchful of Team Rocket, a despicable group of Pokémon thieves. Prevent Team Rocket from stealing rare Pokémon and stop their criminal ways! You won't be able to catch every Pokémon in either Pokémon Red or Pokémon Blue; to collect every Pokémon, you'll have to trade with friends via the Game Link™ Cable. With it, you can also take your team of faithful Pokémon into battle against your pals to see how well your team stacks up! There's much to see and do in Pokémon Red and Pokémon Blue. Start your journey through Kanto and become a Master Trainer!",
    genre: "RPG",
    dateReleased: "09/28/1998",
    logoUrl: "https://bit.ly/2QWVcvo"
  },
  {
    orderNumber: 2,
    fileName: "Pokemon Yellow (Special Pikachu Edition).gb",
    fileSize: 1024,
    fileType: "gb",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106576&authkey=AEr3meD0RCYY81M",
    generation: 1,
    boxArtUrl: "https://bit.ly/2QWm7HO",
    gameName: "Pokémon Yellow: Special Pikachu Edition",
    region: "Kanto",
    platform: "Game Boy",
    description: "Building on the terrific success of Pokémon Red Version and Pokémon Blue Version, Pokémon Yellow Version returns Trainers to Kanto for more even more fun and adventure. Pokémon Yellow delivers a feature that hasn't been duplicated in any other Pokémon game-Pikachu actually follows you around throughout your journey! The graphics for Pokémon Yellow are updated slightly from Pokémon Red and Pokémon Blue, and you can use innovative peripherals such as the Game Boy Printer, which allow you to print out stickers of your favorite Pokémon. Pokémon Yellow also introduces challenges and battle modes that let you compete in exciting ways.",
    genre: "RPG",
    dateReleased: "10/01/1999",
    logoUrl: "https://bit.ly/2wH3mi3"
  },
  {
    orderNumber: 3,
    fileName: "Pokemon Green (JP).gb",
    fileSize: 1024,
    fileType: "gb",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106583&authkey=AKd_c8Z6BOt1WxE",
    generation: 1,
    boxArtUrl: "https://bit.ly/2WlpVTX",
    gameName: "Pokémon Green Version (JP)",
    region: "Kanto",
    platform: "Game Boy",
    description: "Pokémon Green is the Japanese version of Pokémon Blue.",
    genre: "RPG",
    dateReleased: "02/27/1996",
    logoUrl: "https://bit.ly/2I1ysrc"
  },
  {
    orderNumber: 4,
    fileName: "Pokemon Gold.gbc",
    fileSize: 2048,
    fileType: "gbc",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106573&authkey=AImVAcHQPMcqHdQ",
    generation: 2,
    boxArtUrl: "https://bit.ly/2WXkxuB",
    gameName: "Pokémon Gold Version",
    region: "Johto",
    platform: "Game Boy Color",
    description: "One of the first mainstream RPG games to appear on the Game Boy Color, Pokémon Gold Version and Pokémon Silver Version continued to expand the Pokémon universe, adding 100 Pokémon, held items, and real-time events, thanks to an internal game clock. These major Pokémon releases take you on a journey through the Johto region, and for the first time, show your Pokémon appearing in glorious color on your Game Boy Color. All kinds of creative aspects are to be found in Pokémon Gold and Pokémon Silver, including genders and items that Pokémon can hold to improve their skills. Dozens of Pokémon join the action, including the trio of Legendary Pokémon Raikou, Entei, and Suicune. They’re always on the move, so you’ll need to be at the right place at the right time to catch any of them. Pokémon Gold and Pokémon Silver introduce new Pokémon types as well—look out for Steel- and Dark-type Pokémon throughout your travels. Pokémon Egg groups expand the ways you can collect Pokémon. Leave two compatible Pokémon at the Pokémon Day Care and cross your fingers. If you’re lucky, an Egg may appear that will hatch into a new young Pokémon! Only some Pokémon will give you an Egg, and Pokémon are picky about which other Pokémon they get along with, so it will take plenty of experimenting to find a match!",
    genre: "RPG",
    dateReleased: "10/15/2000",
    logoUrl: "https://bit.ly/2XAPMbZ"
  },
  {
    orderNumber: 5,
    fileName: "Pokemon Silver.gbc",
    fileSize: 2048,
    fileType: "gbc",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106570&authkey=AMkhM_B6wawLVBo",
    generation: 2,
    boxArtUrl: "https://bit.ly/2EXJ48I",
    gameName: "Pokémon Silver Version",
    region: "Johto",
    platform: "Game Boy Color",
    description: "One of the first mainstream RPG games to appear on the Game Boy Color, Pokémon Gold Version and Pokémon Silver Version continued to expand the Pokémon universe, adding 100 Pokémon, held items, and real-time events, thanks to an internal game clock. These major Pokémon releases take you on a journey through the Johto region, and for the first time, show your Pokémon appearing in glorious color on your Game Boy Color. All kinds of creative aspects are to be found in Pokémon Gold and Pokémon Silver, including genders and items that Pokémon can hold to improve their skills. Dozens of Pokémon join the action, including the trio of Legendary Pokémon Raikou, Entei, and Suicune. They’re always on the move, so you’ll need to be at the right place at the right time to catch any of them. Pokémon Gold and Pokémon Silver introduce new Pokémon types as well—look out for Steel- and Dark-type Pokémon throughout your travels. Pokémon Egg groups expand the ways you can collect Pokémon. Leave two compatible Pokémon at the Pokémon Day Care and cross your fingers. If you’re lucky, an Egg may appear that will hatch into a new young Pokémon! Only some Pokémon will give you an Egg, and Pokémon are picky about which other Pokémon they get along with, so it will take plenty of experimenting to find a match!",
    genre: "RPG",
    dateReleased: "10/15/2000",
    logoUrl: "https://bit.ly/2XCuGKk"
  },
  {
    orderNumber: 6,
    fileName: "Pokemon Crystal.gbc",
    fileSize: 2048,
    fileType: "gbc",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106575&authkey=AHfY_trc76OVv1g",
    generation: 2,
    boxArtUrl: "https://bit.ly/2WsdWJ8",
    gameName: "Pokémon Crystal Version",
    region: "Johto",
    platform: "Game Boy Color",
    description: "The last of the Game Boy Color Pokémon games, Pokémon Crystal Version sent the classic system off in style. On the surface, Pokémon Crystal Version is a lot like Pokémon Gold Version and Pokémon Silver Version, in that the story takes place in Johto and the adventure takes you down a familiar path. But, digging deeper, you'll see that Pokémon Crystal has plenty of aspects that have revolutionized Pokémon games. Pokémon Crystal is the first Pokémon game where you can choose to play either as a boy or girl, and it's also the first Pokémon game to feature a Battle Tower, a central location for hordes of the toughest Trainers in the land! Pokémon Crystal features animated introductions for each Pokémon when they are brought to the heat of battle, as well as other graphic improvements you'll notice as you roam the Johto region. While doing so, keep an eye out for Pokémon in different locations and Legendary Pokémon that can be caught only by the most talented Trainers!",
    genre: "RPG",
    dateReleased: "07/29/2001",
    logoUrl: "https://bit.ly/2KCalBl"
  },
  {
    orderNumber: 7,
    fileName: "Pokemon Ruby.gba",
    fileSize: 16384,
    fileType: "gba",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106560&authkey=AAicbxqnQnJ8GR8",
    generation: 3,
    boxArtUrl: "https://bit.ly/2wGkuVg",
    gameName: "Pokémon Ruby Version",
    region: "Hoenn",
    platform: "Game Boy Advanced",
    description: "The first Pokémon RPGs for the Game Boy Advance showed off the system's improved graphics and sound, and introduced now-permanent fixtures to the Pokémon world, such as double battles and Contests. Pokémon reinvents itself once again with two of the most popular games in the series! Pokémon Ruby Version and Pokémon Sapphire Version take great leaps in gameplay, particularly during combat. For the first time in a Pokémon game, Trainers can send two Pokémon into battle at the same time. Some Pokémon can learn moves that aid a partner or damage both of the opponent's Pokémon. And Pokémon have Abilities and Natures that affect their performance in battle. Your Pokémon are more than just good fighters, however. Enter them in Contests where they can perform special moves in front of judges to capture the judges' attention. To improve their stage appeal, feed the Pokémon Poké Blocks made from Berries you cultivate around the region. Explore the world of the Hoenn region with a whole host of Pokémon. To make room for all of them, Pokémon Ruby and Pokémon Sapphire can hook up to Pokémon Box™, a storage system on the Nintendo GameCube. A true test of Pokémon skills and strategies, Pokémon Ruby and Pokémon Sapphire definitely bring the level of Pokémon gameplay up a notch.",
    genre: "RPG",
    dateReleased: "05/19/2003",
    logoUrl: "https://bit.ly/2Wr97Lk"
  },
  {
    orderNumber: 8,
    fileName: "Pokemon Sapphire.gba",
    fileSize: 16384,
    fileType: "gba",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106558&authkey=AMCDEefqenLL0R0",
    generation: 3,
    boxArtUrl: "https://bit.ly/2WUm1pj",
    gameName: "Pokémon Sapphire Version",
    region: "Hoenn",
    platform: "Game Boy Advanced",
    description: "The first Pokémon RPGs for the Game Boy Advance showed off the system's improved graphics and sound, and introduced now-permanent fixtures to the Pokémon world, such as double battles and Contests. Pokémon reinvents itself once again with two of the most popular games in the series! Pokémon Ruby Version and Pokémon Sapphire Version take great leaps in gameplay, particularly during combat. For the first time in a Pokémon game, Trainers can send two Pokémon into battle at the same time. Some Pokémon can learn moves that aid a partner or damage both of the opponent's Pokémon. And Pokémon have Abilities and Natures that affect their performance in battle. Your Pokémon are more than just good fighters, however. Enter them in Contests where they can perform special moves in front of judges to capture the judges' attention. To improve their stage appeal, feed the Pokémon Poké Blocks made from Berries you cultivate around the region. Explore the world of the Hoenn region with a whole host of Pokémon. To make room for all of them, Pokémon Ruby and Pokémon Sapphire can hook up to Pokémon Box™, a storage system on the Nintendo GameCube. A true test of Pokémon skills and strategies, Pokémon Ruby and Pokémon Sapphire definitely bring the level of Pokémon gameplay up a notch.",
    genre: "RPG",
    dateReleased: "05/19/2003",
    logoUrl: "https://bit.ly/2WW5PEi"
  },
  {
    orderNumber: 9,
    fileName: "Pokemon Emerald.gba",
    fileSize: 16384,
    fileType: "gba",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106571&authkey=AA8u7r6a_HUa3cc",
    generation: 3,
    boxArtUrl: "https://bit.ly/2WXlZ01",
    gameName: "Pokémon Emerald Version",
    region: "Hoenn",
    platform: "Game Boy Advanced",
    description: "Despite the Nintendo DS system making a splash, Pokémon Emerald Version showed that the Game Boy Advance was still an excellent system. Fortunately for Nintendo DS owners, you could transfer Pokémon from any of the Game Boy Advance games into future DS Pokémon RPGs. Pokémon Emerald Version takes Trainers back to the land of Hoenn for an expanded adventure, this time against both Team Magma and Team Aqua! Pokémon Emerald also features an even more exciting storyline featuring the Legendary Rayquaza, and the chance to catch more Legendary Pokémon such as both Latios and Latias! Around the region you'll notice exciting locales, especially the Battle Frontier. The Battle Frontier is basically an amusement park for Trainers, with a variety of challenges in a number of arenas headed by the always-intimidating Frontier Brains, some of the most formidable Trainers you've ever faced.",
    genre: "RPG",
    dateReleased: "05/01/2005",
    logoUrl: "https://bit.ly/2XpFTxK"
  },
  {
    orderNumber: 10,
    fileName: "Pokemon FireRed.gba",
    fileSize: 16384,
    fileType: "gba",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106566&authkey=AK7XBtxuQ3zlSeI",
    generation: 3,
    boxArtUrl: "https://bit.ly/31mab6K",
    gameName: "Pokémon FireRed Version",
    region: "Kanto",
    platform: "Game Boy Advanced",
    description: "Six years after the original Pokémon Red Version and Pokémon Blue Version, this pair of titles for the Game Boy Advance system introduced Pokémon to a new group of gamers. These titles also shipped with a wireless adapter for Game Boy Advance, making it the first handheld to have such technology. Get set to return to where it all started—Pokémon FireRed Version and Pokémon LeafGreen Version head back to the Kanto region, the home of Pokémon Red and Pokémon Blue. Thanks to the capabilities of the Game Boy Advance system, the locales, Pokémon, and animations are greatly improved since the last installment. Pokémon FireRed and Pokémon LeafGreen finally unite all the worlds of Pokémon, making it possible to catch and keep every single Pokémon in one game! You'll need a little help from Pokémon Ruby Version and Pokémon Sapphire Version, as well as Pokémon Stadium, but if it were too easy it wouldn't be fun! To aid in trading Pokémon, Pokémon Ruby and Pokémon Sapphire come with a device for your Game Boy Advance that lets you trade Pokémon wirelessly. You can also chat or battle without the need for Game Link cables, too! Veterans of Pokémon Red and Pokémon Blue will appreciate that all the improvements made since the first visit to the Kanto region are available. Plus, there are different places to explore, most notably the Sevii Islands, where you can catch special Pokémon that don't exist anywhere else in Kanto!",
    genre: "RPG",
    dateReleased: "09/09/2004",
    logoUrl: "https://bit.ly/2QXSh5u"
  },
  {
    orderNumber: 11,
    fileName: "Pokemon LeafGreen.gba",
    fileSize: 16384,
    fileType: "gba",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106562&authkey=AJfhMuGmifpjIIc",
    generation: 3,
    boxArtUrl: "https://bit.ly/2I4pCsP",
    gameName: "Pokémon LeafGreen Version",
    region: "Kanto",
    platform: "Game Boy Advanced",
    description: "Six years after the original Pokémon Red Version and Pokémon Blue Version, this pair of titles for the Game Boy Advance system introduced Pokémon to a new group of gamers. These titles also shipped with a wireless adapter for Game Boy Advance, making it the first handheld to have such technology. Get set to return to where it all started—Pokémon FireRed Version and Pokémon LeafGreen Version head back to the Kanto region, the home of Pokémon Red and Pokémon Blue. Thanks to the capabilities of the Game Boy Advance system, the locales, Pokémon, and animations are greatly improved since the last installment. Pokémon FireRed and Pokémon LeafGreen finally unite all the worlds of Pokémon, making it possible to catch and keep every single Pokémon in one game! You'll need a little help from Pokémon Ruby Version and Pokémon Sapphire Version, as well as Pokémon Stadium, but if it were too easy it wouldn't be fun! To aid in trading Pokémon, Pokémon Ruby and Pokémon Sapphire come with a device for your Game Boy Advance that lets you trade Pokémon wirelessly. You can also chat or battle without the need for Game Link cables, too! Veterans of Pokémon Red and Pokémon Blue will appreciate that all the improvements made since the first visit to the Kanto region are available. Plus, there are different places to explore, most notably the Sevii Islands, where you can catch special Pokémon that don't exist anywhere else in Kanto!",
    genre: "RPG",
    dateReleased: "09/09/2004",
    logoUrl: "https://bit.ly/2ETqajl"
  },
  {
    orderNumber: 12,
    fileName: "Pokemon Diamond.nds",
    fileSize: 65536,
    fileType: "nds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106541&authkey=AI-u3tH7cRJe0rk",
    generation: 4,
    boxArtUrl: "https://bit.ly/2Wx0TGh",
    gameName: "Pokémon Diamond Version",
    region: "Sinnoh",
    platform: "Nintendo DS",
    description: "Pokémon Diamond Version and Pokémon Pearl Version introduce Trainers to a different land and many Pokémon to catch! Explore the lakes, forests, and mountains of the Sinnoh region, seeking out Pokémon such as the Bug-type Kricketot or the hard-headed Rock- and Steel-type Shieldon. And if you're lucky, you might bump into Legendary Pokémon Palkia or Dialga! There are more than 490 Pokémon in Pokémon Diamond and Pokémon Pearl. But be on the lookout for Team Galactic, a dastardly group that is trying to kidnap Pokémon. Pokémon RPGs have never looked better than they do in Pokémon Diamond and Pokémon Pearl. 3-D graphics bring the land of Sinnoh to life! And realistic lighting casts the land in sun or darkness depending on the time of day. However, there's more to daylight than just graphics—some Pokémon will only show their faces during certain times of day, so you'll have to explore morning, noon, and night if you want collect them all! Everywhere you look, gameplay has been revamped thanks to the awesome abilities of the Nintendo DS system. With two screens, you can watch the action on one screen while monitoring the health of your Pokémon on the other. The touch screen is used in a number of ways: You can use it to select moves in battle, to perform in Contests, or while exploring underground. And with the cool Trainer wristwatch, the Pokétch, you can keep tabs on all kinds of important data during your adventure. The Underground is formed by a series of subterranean passages below Sinnoh that hold untold numbers of treasures for you to find. But there's more to the Underground than just spelunking—you can meet up with other Trainers while you're down there, and you can create a Secret Base for people to visit!",
    genre: "RPG",
    dateReleased: "04/22/2007",
    logoUrl: "https://bit.ly/2WxsXJC"
  },
  {
    orderNumber: 13,
    fileName: "Pokemon Pearl.nds",
    fileSize: 65536,
    fileType: "nds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106537&authkey=ALazDTbFxyhD1jA",
    generation: 4,
    boxArtUrl: "https://bit.ly/2WsygFj",
    gameName: "Pokémon Pearl Version",
    region: "Sinnoh",
    platform: "Nintendo DS",
    description: "Pokémon Diamond Version and Pokémon Pearl Version introduce Trainers to a different land and many Pokémon to catch! Explore the lakes, forests, and mountains of the Sinnoh region, seeking out Pokémon such as the Bug-type Kricketot or the hard-headed Rock- and Steel-type Shieldon. And if you're lucky, you might bump into Legendary Pokémon Palkia or Dialga! There are more than 490 Pokémon in Pokémon Diamond and Pokémon Pearl. But be on the lookout for Team Galactic, a dastardly group that is trying to kidnap Pokémon. Pokémon RPGs have never looked better than they do in Pokémon Diamond and Pokémon Pearl. 3-D graphics bring the land of Sinnoh to life! And realistic lighting casts the land in sun or darkness depending on the time of day. However, there's more to daylight than just graphics—some Pokémon will only show their faces during certain times of day, so you'll have to explore morning, noon, and night if you want collect them all! Everywhere you look, gameplay has been revamped thanks to the awesome abilities of the Nintendo DS system. With two screens, you can watch the action on one screen while monitoring the health of your Pokémon on the other. The touch screen is used in a number of ways: You can use it to select moves in battle, to perform in Contests, or while exploring underground. And with the cool Trainer wristwatch, the Pokétch, you can keep tabs on all kinds of important data during your adventure. The Underground is formed by a series of subterranean passages below Sinnoh that hold untold numbers of treasures for you to find. But there's more to the Underground than just spelunking—you can meet up with other Trainers while you're down there, and you can create a Secret Base for people to visit!",
    genre: "RPG",
    dateReleased: "04/22/2007",
    logoUrl: "https://bit.ly/2WPt0jy"
  },
  {
    orderNumber: 14,
    fileName: "Pokemon Platinum.nds",
    fileSize: 131072,
    fileType: "nds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106535&authkey=AGZ8ql4xzQs6Hb4",
    generation: 4,
    boxArtUrl: "https://bit.ly/2ZhHPZL",
    gameName: "Pokémon Platinum Version",
    region: "Sinnoh",
    platform: "Nintendo DS",
    description: "Another world has emerged in the Sinnoh region, a place where time and space have been completely altered. Explore the Distortion World, where challenges await at every turn! Visit other locations designed especially for the serious Trainer: A Battle Frontier will test your battle skills with its abundance of committed opponents, led by the Frontier Brains. Also check out the Wi-Fi Plaza, where up to 20 players can connect with a wireless broadband internet connection and participate in fun games and activities. While Dialga and Palkia shared the limelight in Pokémon Diamond Version and Pokémon Pearl Version, the Legendary Pokémon Giratina is at the center of the story in Pokémon Platinum Version. As you track down the elusive Giratina, watch out for Team Galactic—they're back, and with Cyrus leading, they're as dangerous as ever. Check out the expanded Global Trade Station, now known as the Global Terminal. Various upgrades include the ability to record your battles using the Vs. Recorder. Once the battles have been recorded, post them for the world to see how awesome your team really is!",
    genre: "RPG",
    dateReleased: "03/22/2009",
    logoUrl: "https://bit.ly/310MK2Z"
  },
  {
    orderNumber: 15,
    fileName: "Pokemon HeartGold.nds",
    fileSize: 131072,
    fileType: "nds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106539&authkey=ADkioFmXBOEjPcI",
    generation: 4,
    boxArtUrl: "https://bit.ly/2My3jA0",
    gameName: "Pokémon HeartGold Version",
    region: "Johto",
    platform: "Nintendo DS",
    description: "Pokémon HeartGold and SoulSilver Versions are available for the Nintendo DS and Nintendo DSi systems today! It's been nearly a decade since Pokémon fans first traveled to the scenic Johto region. With Pokémon HeartGold and SoulSilver Versions, they can return there to experience the exciting adventure of Pokémon Gold and Pokémon Silver on the Nintendo DS and Nintendo DSi systems. Check out updated graphics and sound, as well as awesome new touch-screen features and lots of surprises! Pokémon HeartGold and SoulSilver Versions bring dozens of Pokémon characters, such as starters Chikorita, Cyndaquil, and Totodile, back into the limelight for a new group of Pokémon fans—and long-time Trainers—to catch, train and battle! More to Touch! Plenty of enhancements have been to the gameplay, including all-new touch-screen controls! You can navigate your Pokédex, check out the inventory in your Bag, and even move Pokémon around inside your PC Boxes. If you’re a Trainer who would rather use the buttons, don’t worry—both methods will be available, so you can play in whatever way suits you best! The Pokéwalker! Pokémon HeartGold and SoulSilver Versions come with the brand-new Pokéwalker, an accesory that brings a dimension to Pokémon games that you’ve never seen before. The Pokéwalker is a special pedometer that you carry with you that lets you take Pokémon fun wherever you go! You can transfer a Pokémon onto the Pokéwalker accessory using an infrared connection between the Pokéwalker and your Game Card. Then as you Stroll around with your Pokémon, it’ll earn Experience Points. And you can even find items and new Pokémon while you’re on the go! The Pokéwalker is small enough that you can keep it in your pocket and take wherever you go. It also has a clip to hook it on your belt, and a hole for attaching a strap. It’s never been easier to take Pokémon with you!",
    genre: "RPG",
    dateReleased: "03/14/2010",
    logoUrl: "https://bit.ly/2Wx23S9"
  },
  {
    orderNumber: 16,
    fileName: "Pokemon SoulSilver.nds",
    fileSize: 131072,
    fileType: "nds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106532&authkey=AMy1Td3abmOw2Rw",
    generation: 4,
    boxArtUrl: "https://bit.ly/2I551on",
    gameName: "Pokémon SoulSilver Version",
    region: "Johto",
    platform: "Nintendo DS",
    description: "Pokémon HeartGold and SoulSilver Versions are available for the Nintendo DS and Nintendo DSi systems today! It's been nearly a decade since Pokémon fans first traveled to the scenic Johto region. With Pokémon HeartGold and SoulSilver Versions, they can return there to experience the exciting adventure of Pokémon Gold and Pokémon Silver on the Nintendo DS and Nintendo DSi systems. Check out updated graphics and sound, as well as awesome new touch-screen features and lots of surprises! Pokémon HeartGold and SoulSilver Versions bring dozens of Pokémon characters, such as starters Chikorita, Cyndaquil, and Totodile, back into the limelight for a new group of Pokémon fans—and long-time Trainers—to catch, train and battle! More to Touch! Plenty of enhancements have been to the gameplay, including all-new touch-screen controls! You can navigate your Pokédex, check out the inventory in your Bag, and even move Pokémon around inside your PC Boxes. If you’re a Trainer who would rather use the buttons, don’t worry—both methods will be available, so you can play in whatever way suits you best! The Pokéwalker! Pokémon HeartGold and SoulSilver Versions come with the brand-new Pokéwalker, an accesory that brings a dimension to Pokémon games that you’ve never seen before. The Pokéwalker is a special pedometer that you carry with you that lets you take Pokémon fun wherever you go! You can transfer a Pokémon onto the Pokéwalker accessory using an infrared connection between the Pokéwalker and your Game Card. Then as you Stroll around with your Pokémon, it’ll earn Experience Points. And you can even find items and new Pokémon while you’re on the go! The Pokéwalker is small enough that you can keep it in your pocket and take wherever you go. It also has a clip to hook it on your belt, and a hole for attaching a strap. It’s never been easier to take Pokémon with you!",
    genre: "RPG",
    dateReleased: "03/14/2010",
    logoUrl: "https://bit.ly/2WrTtzg"
  },
  {
    orderNumber: 17,
    fileName: "Pokemon Black.nds",
    fileSize: 262144,
    fileType: "nds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106529&authkey=ACiPB5J1Df4NDPU",
    generation: 5,
    boxArtUrl: "https://bit.ly/2WrTyTA",
    gameName: "Pokémon Black Version",
    region: "Unova",
    platform: "Nintendo DSi",
    description: "Pokémon™ Black Version and Pokémon White Version are now available on the Nintendo DS™ family of systems! Travel through the Unova region to discover new Pokémon, tough trainers, and many exciting adventures! Pokémon Black Version and Pokémon White Version features a new generation of amazing Pokémon. The Legendary Pokémon Reshiram appears on the cover of Pokémon Black Version and the Legendary Pokémon Zekrom is seen on the cover of Pokémon White Version. You will begin your adventure with your choice of Snivy, Tepig, or Oshawott—Pokémon who are eager to join you on your epic journey!",
    genre: "RPG",
    dateReleased: "03/06/2011",
    logoUrl: "https://bit.ly/31iRSzn"
  },
  {
    orderNumber: 18,
    fileName: "Pokemon White.nds",
    fileSize: 262144,
    fileType: "nds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106525&authkey=ANYqwpMMfolTje8",
    generation: 5,
    boxArtUrl: "https://bit.ly/31jbAex",
    gameName: "Pokémon White Version",
    region: "Unova",
    platform: "Nintendo DSi",
    description: "Pokémon™ Black Version and Pokémon White Version are now available on the Nintendo DS™ family of systems! Travel through the Unova region to discover new Pokémon, tough trainers, and many exciting adventures! Pokémon Black Version and Pokémon White Version features a new generation of amazing Pokémon. The Legendary Pokémon Reshiram appears on the cover of Pokémon Black Version and the Legendary Pokémon Zekrom is seen on the cover of Pokémon White Version. You will begin your adventure with your choice of Snivy, Tepig, or Oshawott—Pokémon who are eager to join you on your epic journey!",
    genre: "RPG",
    dateReleased: "03/06/2011",
    logoUrl: "https://bit.ly/2wKJUBf"
  },
  {
    orderNumber: 19,
    fileName: "Pokemon Black 2.nds",
    fileSize: 524288,
    fileType: "nds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106531&authkey=AJ3jEhds-HXNQLQ",
    generation: 5,
    boxArtUrl: "https://bit.ly/2XwuFHD",
    gameName: "Pokémon Black 2 Version",
    region: "Unova",
    platform: "Nintendo DSi",
    description: "Pokémon fans, get excited for two incredible new adventures! Pokémon Black Version 2 and Pokémon White Version 2 are available now for the Nintendo DS™ family of systems. The games can also be played in 2D on the Nintendo 3DS™ system. Your journey takes place in the Unova region two years after the events of Pokémon Black Version and Pokémon White Version. You’ll start your adventure in Aspertia City, in the far southwest corner of the Unova region. Many things have changed in the region, including some extraordinary new places and people for you to discover. Plus, many of the returning characters from Pokémon Black Version and Pokémon White Version have taken on new roles when you meet them. Look forward to uncovering the mystery of Black Kyurem—or White Kyurem—somewhere in the Unova region. Little is known about this enigmatic Pokémon, except that it’s a Dragon- and Ice-type Pokémon with a devastating Ice-type attack—even stronger than Zekrom’s Fusion Bolt or Reshiram’s Fusion Flare! Pokémon Black Version 2 and Pokémon White Version 2 have a special connection with Pokémon Dream Radar for the Nintendo 3DS system. The Pokémon you obtain in Pokémon Dream Radar can be sent to your Pokémon Black Version 2 or Pokémon White Version 2 game! Get more information on Pokémon Dream Radar now. And to help you with the many Pokémon found in the Unova region, look forward to Pokédex 3D Pro, another Nintendo 3DS title that’s on the way to the Nintendo eShop. With Pokédex 3D Pro, you’ll have information on every Pokémon in the National Pokédex—just what you need to become a master Trainer. Learn more about Pokédex 3D Pro!",
    genre: "RPG",
    dateReleased: "10/07/2012",
    logoUrl: "https://bit.ly/2IvumGK"
  },
  {
    orderNumber: 20,
    fileName: "Pokemon White 2.nds",
    fileSize: 524288,
    fileType: "nds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106527&authkey=APY0JNM98HHBCbU",
    generation: 5,
    boxArtUrl: "https://bit.ly/2WVhJyb",
    gameName: "Pokémon White 2 Version",
    region: "Unova",
    platform: "Nintendo DSi",
    description: "Pokémon fans, get excited for two incredible new adventures! Pokémon Black Version 2 and Pokémon White Version 2 are available now for the Nintendo DS™ family of systems. The games can also be played in 2D on the Nintendo 3DS™ system. Your journey takes place in the Unova region two years after the events of Pokémon Black Version and Pokémon White Version. You’ll start your adventure in Aspertia City, in the far southwest corner of the Unova region. Many things have changed in the region, including some extraordinary new places and people for you to discover. Plus, many of the returning characters from Pokémon Black Version and Pokémon White Version have taken on new roles when you meet them. Look forward to uncovering the mystery of Black Kyurem—or White Kyurem—somewhere in the Unova region. Little is known about this enigmatic Pokémon, except that it’s a Dragon- and Ice-type Pokémon with a devastating Ice-type attack—even stronger than Zekrom’s Fusion Bolt or Reshiram’s Fusion Flare! Pokémon Black Version 2 and Pokémon White Version 2 have a special connection with Pokémon Dream Radar for the Nintendo 3DS system. The Pokémon you obtain in Pokémon Dream Radar can be sent to your Pokémon Black Version 2 or Pokémon White Version 2 game! Get more information on Pokémon Dream Radar now. And to help you with the many Pokémon found in the Unova region, look forward to Pokédex 3D Pro, another Nintendo 3DS title that’s on the way to the Nintendo eShop. With Pokédex 3D Pro, you’ll have information on every Pokémon in the National Pokédex—just what you need to become a master Trainer. Learn more about Pokédex 3D Pro!",
    genre: "RPG",
    dateReleased: "10/07/2012",
    logoUrl: "https://bit.ly/2R0Kl3x"
  },
  {
    orderNumber: 21,
    fileName: "Pokemon X.3ds",
    fileSize: 2097152,
    fileType: "3ds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106567&authkey=ACGNRmtCyaK2GAo",
    generation: 6,
    boxArtUrl: "https://bit.ly/2XAM4Pw",
    gameName: "Pokémon X Version",
    region: "Kalos",
    platform: "Nintendo 3DS",
    description: "An all-new 3D Pokémon adventure packed with never-before-seen Pokémon has launched! Pokémon X and Pokémon Y presents a new generation of Pokémon and introduces players to an exciting new adventure in a breathtaking 3D world. You'll be able to go on your journey as a boy or a girl, and you can choose how your hero looks overall! Find a look that suits you, and then set off on your travels! Your adventure takes place in the expansive Kalos region, where you'll explore cities, meet people, and encounter many Pokémon. Don't miss Lumiose City, the central hub of the region, where you'll return many times on your journey. Look for all-new Fairy-type Pokémon, the first new Pokémon type since Dark-type and Steel-type Pokémon were introduced almost a decade ago. Fairy-type moves are super effective against Dragon-type Pokémon. One such Fairy-type Pokémon to meet is Sylveon, the new evolved form of Eevee! All-new battle formats are fun for new players and Pokémon pros. Sky Battles feature duels between Pokémon that can fly, and Horde encounters are massive competitions where one of your Pokémon faces many wild Pokémon at once! These new modes will challenge every Pokémon Trainer. In addition to new battle types, you can also care for your Pokémon with the Pokémon-Amie feature. Feed, pet, and play with your Pokémon to increase your bond. The more you play with your Pokémon, the friendlier they'll become—and perhaps perform better for you in battle. Around the Kalos region, you'll meet a lot of people. First there's the brilliant Professor Sycamore. He's researching Pokémon, and he's looking to you and your friends for help. He may even challenge you to a battle from time to time. But you're also likely to encounter members of the mysterious organization Team Flare. What they're up to is anyone's guess. In Pokémon X and Pokémon Y, some Pokémon will tap into powers long dormant. This special kind of Evolution is called Mega Evolution. In addition to far greater strength, Mega-Evolved Pokémon may also see their Ability change, or even their type!",
    genre: "RPG",
    dateReleased: "10/12/2013",
    logoUrl: "https://bit.ly/2WsRDhT"
  },
  {
    orderNumber: 22,
    fileName: "Pokemon Y.3ds",
    fileSize: 2097152,
    fileType: "3ds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106585&authkey=AEq4ioX0VrAa59k",
    generation: 6,
    boxArtUrl: "https://bit.ly/2ZbjwMY",
    gameName: "Pokémon Y Version",
    region: "Kalos",
    platform: "Nintendo 3DS",
    description: "An all-new 3D Pokémon adventure packed with never-before-seen Pokémon has launched! Pokémon X and Pokémon Y presents a new generation of Pokémon and introduces players to an exciting new adventure in a breathtaking 3D world. You'll be able to go on your journey as a boy or a girl, and you can choose how your hero looks overall! Find a look that suits you, and then set off on your travels! Your adventure takes place in the expansive Kalos region, where you'll explore cities, meet people, and encounter many Pokémon. Don't miss Lumiose City, the central hub of the region, where you'll return many times on your journey. Look for all-new Fairy-type Pokémon, the first new Pokémon type since Dark-type and Steel-type Pokémon were introduced almost a decade ago. Fairy-type moves are super effective against Dragon-type Pokémon. One such Fairy-type Pokémon to meet is Sylveon, the new evolved form of Eevee! All-new battle formats are fun for new players and Pokémon pros. Sky Battles feature duels between Pokémon that can fly, and Horde encounters are massive competitions where one of your Pokémon faces many wild Pokémon at once! These new modes will challenge every Pokémon Trainer. In addition to new battle types, you can also care for your Pokémon with the Pokémon-Amie feature. Feed, pet, and play with your Pokémon to increase your bond. The more you play with your Pokémon, the friendlier they'll become—and perhaps perform better for you in battle. Around the Kalos region, you'll meet a lot of people. First there's the brilliant Professor Sycamore. He's researching Pokémon, and he's looking to you and your friends for help. He may even challenge you to a battle from time to time. But you're also likely to encounter members of the mysterious organization Team Flare. What they're up to is anyone's guess. In Pokémon X and Pokémon Y, some Pokémon will tap into powers long dormant. This special kind of Evolution is called Mega Evolution. In addition to far greater strength, Mega-Evolved Pokémon may also see their Ability change, or even their type!",
    genre: "RPG",
    dateReleased: "10/12/2013",
    logoUrl: "https://bit.ly/2WSOGuX"
  },
  {
    orderNumber: 23,
    fileName: "Pokemon Omega Ruby.3ds",
    fileSize: 2097152,
    fileType: "3ds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106556&authkey=AAPpmfuqhzaq8tM",
    generation: 6,
    boxArtUrl: "https://bit.ly/2WPumLa",
    gameName: "Pokémon Omega Ruby Version",
    region: "Hoenn",
    platform: "Nintendo 3DS",
    description: "Experience an epic journey through a world filled with Pokémon in Pokémon Omega Ruby and Pokémon Alpha Sapphire for the Nintendo 3DS family of systems. Pokémon fans first enjoyed Pokémon Ruby and Pokémon Sapphire when it launched in 2003 for the Game Boy Advance. A whole new generation of Pokémon fans will experience the dramatic story line that unfolds in Pokémon Omega Ruby and Pokémon Alpha Sapphire. Your adventure takes place in Hoenn, a region that consists of a main island that stretches widely from east to west along with countless islets that dot the deep blue sea around it. A live volcano steams constantly in the heart of this green-covered island. Look forward to a region rich with natural beauty, a variety of Pokémon, and extraordinary people. Among those folks is Pokémon Professor Birch, who runs the Pokémon Lab in Littleroot Town. With him, you will have your first meeting with the Pokémon that will become your partner on your journey, and a new bond will be born. You’ll also encounter incredibly tough Trainers during your journey and visit Pokémon Gyms, where Pokémon Trainers gather and Gym Leaders stand ready for Trainers to challenge them. As the story unfolds, you will battle Team Magma in Pokémon Omega Ruby and Team Aqua in Pokémon Alpha Sapphire. Led by Maxie, Team Magma seeks to expand the land, while Archie and Team Aqua wish to expand the seas. In order to bring about these grand plans, each will turn to the power of a Legendary Pokémon: Groudon or Kyogre. Team Magma pursues Groudon, while Team Aqua goes after Kyogre. What could be driving them to such lengths? These Legendary Pokémon also undergo an event called Primal Reversion to become Primal Groudon and Primal Kyogre. These Pokémon play a great role in shaping the stories in which they each appear.",
    genre: "RPG",
    dateReleased: "11/21/2014",
    logoUrl: "https://bit.ly/2Wpqs7l"
  },
  {
    orderNumber: 24,
    fileName: "Pokemon Alpha Sapphire.3ds",
    fileSize: 2097152,
    fileType: "3ds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106564&authkey=ABwmbFxt2ZX3V_M",
    generation: 6,
    boxArtUrl: "https://bit.ly/2R0Rq4m",
    gameName: "Pokémon Alpha Sapphire Version",
    region: "Hoenn",
    platform: "Nintendo 3DS",
    description: "Experience an epic journey through a world filled with Pokémon in Pokémon Omega Ruby and Pokémon Alpha Sapphire for the Nintendo 3DS family of systems. Pokémon fans first enjoyed Pokémon Ruby and Pokémon Sapphire when it launched in 2003 for the Game Boy Advance. A whole new generation of Pokémon fans will experience the dramatic story line that unfolds in Pokémon Omega Ruby and Pokémon Alpha Sapphire. Your adventure takes place in Hoenn, a region that consists of a main island that stretches widely from east to west along with countless islets that dot the deep blue sea around it. A live volcano steams constantly in the heart of this green-covered island. Look forward to a region rich with natural beauty, a variety of Pokémon, and extraordinary people. Among those folks is Pokémon Professor Birch, who runs the Pokémon Lab in Littleroot Town. With him, you will have your first meeting with the Pokémon that will become your partner on your journey, and a new bond will be born. You’ll also encounter incredibly tough Trainers during your journey and visit Pokémon Gyms, where Pokémon Trainers gather and Gym Leaders stand ready for Trainers to challenge them. As the story unfolds, you will battle Team Magma in Pokémon Omega Ruby and Team Aqua in Pokémon Alpha Sapphire. Led by Maxie, Team Magma seeks to expand the land, while Archie and Team Aqua wish to expand the seas. In order to bring about these grand plans, each will turn to the power of a Legendary Pokémon: Groudon or Kyogre. Team Magma pursues Groudon, while Team Aqua goes after Kyogre. What could be driving them to such lengths? These Legendary Pokémon also undergo an event called Primal Reversion to become Primal Groudon and Primal Kyogre. These Pokémon play a great role in shaping the stories in which they each appear.",
    genre: "RPG",
    dateReleased: "11/21/2014",
    logoUrl: "https://bit.ly/2wFOdxI"
  },
  {
    orderNumber: 25,
    fileName: "Pokemon Sun.3ds",
    fileSize: 4194304,
    fileType: "3ds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106549&authkey=AHDbUZ0ACayd4ac",
    generation: 7,
    boxArtUrl: "https://bit.ly/31mfgfp",
    gameName: "Pokémon Sun Version",
    region: "Alola",
    platform: "New Nintendo 3DS",
    description: "Your journey in Pokémon Sun and Pokémon Moon will take you across the beautiful islands of the Alola region, where you’ll encounter newly discovered Pokémon, as well as Pokémon that have taken on a new Alolan style. You may even encounter powerful Legendary Pokémon and other special Pokémon, such as the mysterious guardian deities. Keep track of all the Pokémon you’ve seen and caught with the new Rotom Pokédex. Some of the Pokémon you’ll train and battle with can learn powerful new Z-Moves,—moves so strong they can be used only once in battle. There are Z-Moves for every different type, as well as exclusive Z-Moves for certain Pokémon, including Eevee and Pikachu. Try them out in battle to see what these awesome moves can do! Around every corner, your battling skills will be tested by tough Trainers! Epic battles are in store for you against Team Skull, a nefarious group of ruffians attempting to steal Pokémon, and you’ll also face the kahunas, the tough leaders of each island. And if you’re strong enough, you may reach the Battle Tree, a place where the most accomplished Trainers go to battle each other. The new Pokémon Refresh feature can keep your Pokémon in top shape after all that battling. Take care of your Pokémon by curing any status conditions like poisoning and paralysis. Plus, the more affectionate your Pokémon become toward you, the better they’ll perform in battle. Take good care of your Pokémon with Pokémon Refresh, and they’ll be great allies on your adventure! Your Pokémon can also enjoy a new experience known as Poké Pelago, a place for them to visit when they’ve been placed in PC Boxes. Poké Pelago is a group of islands where your Pokémon can explore, play, and do other fun activities. As your Pokémon play there, they might get stronger or obtain items for you.",
    genre: "RPG",
    dateReleased: "11/18/2016",
    logoUrl: "https://bit.ly/2wKAyFG"
  },
  {
    orderNumber: 26,
    fileName: "Pokemon Moon.3ds",
    fileSize: 4194304,
    fileType: "3ds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106553&authkey=AHHRtsyc3Ea9Ayo",
    generation: 7,
    boxArtUrl: "https://bit.ly/2MKVpUe",
    gameName: "Pokémon Moon Version",
    region: "Alola",
    platform: "New Nintendo 3DS",
    description: "Your journey in Pokémon Sun and Pokémon Moon will take you across the beautiful islands of the Alola region, where you’ll encounter newly discovered Pokémon, as well as Pokémon that have taken on a new Alolan style. You may even encounter powerful Legendary Pokémon and other special Pokémon, such as the mysterious guardian deities. Keep track of all the Pokémon you’ve seen and caught with the new Rotom Pokédex. Some of the Pokémon you’ll train and battle with can learn powerful new Z-Moves,—moves so strong they can be used only once in battle. There are Z-Moves for every different type, as well as exclusive Z-Moves for certain Pokémon, including Eevee and Pikachu. Try them out in battle to see what these awesome moves can do! Around every corner, your battling skills will be tested by tough Trainers! Epic battles are in store for you against Team Skull, a nefarious group of ruffians attempting to steal Pokémon, and you’ll also face the kahunas, the tough leaders of each island. And if you’re strong enough, you may reach the Battle Tree, a place where the most accomplished Trainers go to battle each other. The new Pokémon Refresh feature can keep your Pokémon in top shape after all that battling. Take care of your Pokémon by curing any status conditions like poisoning and paralysis. Plus, the more affectionate your Pokémon become toward you, the better they’ll perform in battle. Take good care of your Pokémon with Pokémon Refresh, and they’ll be great allies on your adventure! Your Pokémon can also enjoy a new experience known as Poké Pelago, a place for them to visit when they’ve been placed in PC Boxes. Poké Pelago is a group of islands where your Pokémon can explore, play, and do other fun activities. As your Pokémon play there, they might get stronger or obtain items for you.",
    genre: "RPG",
    dateReleased: "11/18/2016",
    logoUrl: "https://bit.ly/2wLOMG4"
  },
  {
    orderNumber: 27,
    fileName: "Pokemon Ultra Sun.3ds",
    fileSize: 4194304,
    fileType: "3ds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106547&authkey=AOheDwtEMuimfFc",
    generation: 7,
    boxArtUrl: "https://bit.ly/2Zbk0CM",
    gameName: "Pokémon Ultra Sun Version",
    region: "Alola",
    platform: "New Nintendo 3DS",
    description: "Pokémon Ultra Sun and Pokémon Ultra Moon have been powered up with new additions to the story and features of Pokémon Sun and Pokémon Moon. The games take place in the Alola region, which is made up of four islands, along with one artificial island. The islands are teeming with Pokémon, including some Alolan variants of familiar Pokémon that were originally discovered in the Kanto region. During your adventure, you’ll have multiple run-ins with the troublesome Team Skull, encounter the elusive guardian deities, and unravel a plot surrounding the mysterious Aether Foundation. There’s nothing like a return trip to the wonderful, tropical Alola region! The Mysteries of the Ultra Wormhole! A strange pocket of space has been spotted over the Alola region! The Ultra Wormhole is a gateway to other worlds, and occasionally, fearsome Ultra Beasts will emerge from it. These powerful creatures are unlike any that you’ve ever seen before. Challenge these incredible Ultra Beasts, and you might even be able to add them to your team. Just make sure to bring a few Beast Balls to catch them. With the help of the Legendary Pokémon Solgaleo or Lunala, you can even travel into the Ultra Wormhole to explore what lies beyond. You’ll find more Ultra Beasts within Ultra Space, but you may also encounter Legendary Pokémon such as Mewtwo, Ho-Oh, Lugia, and others. With enough persistence, you could potentially put together an entire team of Legendary Pokémon! Necrozma’s New Tale! One Legendary Pokémon that you won’t have to travel to Ultra Space to meet is the mighty Necrozma. This imposing Pokémon features heavily in Pokémon Ultra Sun and Pokémon Ultra Moon’s story, and by playing, you’ll uncover new secrets about Necrozma and the Alola region. Necrozma’s power continues to grow when it reveals its alternate forms—Dusk Mane Necrozma appears in Pokémon Ultra Sun while Dawn Wings Necrozma shows up in Pokémon Ultra Moon. And just what is Ultra Necrozma? Can this Legendary Pokémon’s power be contained? Perhaps the Ultra Recon Squad will have the answer to that question. This group hails from a world that lies beyond an Ultra Wormhole, and they have come to the Alola region to find out more about Necrozma, including how to restore the light that the Legendary Pokémon has stolen from their home.",
    genre: "RPG",
    dateReleased: "11/17/2017",
    logoUrl: "http://bit.ly/2ME1iSW"
  },
  {
    orderNumber: 28,
    fileName: "Pokemon Ultra Moon.3ds",
    fileSize: 4194304,
    fileType: "3ds",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106551&authkey=AJ9rXowWVDeoCIY",
    generation: 7,
    boxArtUrl: "http://bit.ly/2Zbk9pO",
    gameName: "Pokémon Ultra Moon Version",
    region: "Alola",
    platform: "New Nintendo 3DS",
    description: "Pokémon Ultra Sun and Pokémon Ultra Moon have been powered up with new additions to the story and features of Pokémon Sun and Pokémon Moon. The games take place in the Alola region, which is made up of four islands, along with one artificial island. The islands are teeming with Pokémon, including some Alolan variants of familiar Pokémon that were originally discovered in the Kanto region. During your adventure, you’ll have multiple run-ins with the troublesome Team Skull, encounter the elusive guardian deities, and unravel a plot surrounding the mysterious Aether Foundation. There’s nothing like a return trip to the wonderful, tropical Alola region! The Mysteries of the Ultra Wormhole! A strange pocket of space has been spotted over the Alola region! The Ultra Wormhole is a gateway to other worlds, and occasionally, fearsome Ultra Beasts will emerge from it. These powerful creatures are unlike any that you’ve ever seen before. Challenge these incredible Ultra Beasts, and you might even be able to add them to your team. Just make sure to bring a few Beast Balls to catch them. With the help of the Legendary Pokémon Solgaleo or Lunala, you can even travel into the Ultra Wormhole to explore what lies beyond. You’ll find more Ultra Beasts within Ultra Space, but you may also encounter Legendary Pokémon such as Mewtwo, Ho-Oh, Lugia, and others. With enough persistence, you could potentially put together an entire team of Legendary Pokémon! Necrozma’s New Tale! One Legendary Pokémon that you won’t have to travel to Ultra Space to meet is the mighty Necrozma. This imposing Pokémon features heavily in Pokémon Ultra Sun and Pokémon Ultra Moon’s story, and by playing, you’ll uncover new secrets about Necrozma and the Alola region. Necrozma’s power continues to grow when it reveals its alternate forms—Dusk Mane Necrozma appears in Pokémon Ultra Sun while Dawn Wings Necrozma shows up in Pokémon Ultra Moon. And just what is Ultra Necrozma? Can this Legendary Pokémon’s power be contained? Perhaps the Ultra Recon Squad will have the answer to that question. This group hails from a world that lies beyond an Ultra Wormhole, and they have come to the Alola region to find out more about Necrozma, including how to restore the light that the Legendary Pokémon has stolen from their home.",
    genre: "RPG",
    dateReleased: "11/17/2017",
    logoUrl: "http://bit.ly/2Z9eTmy"
  },
  {
    orderNumber: 29,
    fileName: "Pokemon Let's Go Pikachu.xci",
    fileSize: 4737727,
    fileType: "xci",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106545&authkey=AH6PyIU37tYizgg",
    generation: 7,
    boxArtUrl: "http://bit.ly/2XtU0SJ",
    gameName: "Pokémon Let's Go Pikachu",
    region: "Kanto",
    platform: "Nintendo Switch",
    description: "Return to the Kanto region and experience a classic Pokémon journey in a whole new way with Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! These two titles were created by GAME FREAK, the developers of the Pokémon core RPG titles. Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! introduce a new play style that anyone can enjoy and combine it with the fun of collecting Pokémon. Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! are based on Pokémon Yellow: Special Pikachu Edition, which first launched in Japan in 1998. These updated versions reimagine the original to make the most of the unique capabilities of the Nintendo Switch. The games also capture the fun of Pokémon GO and its intuitive Pokémon-catching mechanic. Befriend Your Partner! At the start of your tale, you encounter either Pikachu or Eevee, depending on which game version you choose. This Pikachu or Eevee joins you as your partner in your adventures, growing together with you on your journey. Pikachu or Eevee is with you wherever you go, either hanging on your shoulder or riding on your head. Don’t let its adorable expressions fool you into thinking that cuteness is all it offers, though. Your partner is a dependable ally in battle, too. In addition to determining your first partner Pokémon, your choice of Pokémon: Let’s Go, Pikachu! or Pokémon: Let’s Go, Eevee! also affects the species of Pokémon you encounter and the rate at which you encounter them.",
    genre: "RPG",
    dateReleased: "11/16/2018",
    logoUrl: "http://bit.ly/2KDt7YL"
  },
  {
    orderNumber: 30,
    fileName: "Pokemon Let's Go Eevee.xci",
    fileSize: 4737727,
    fileType: "xci",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106543&authkey=ANrrufnvqg8NCsA",
    generation: 7,
    boxArtUrl: "http://bit.ly/2WoKYVN",
    gameName: "Pokémon Let's Go Eevee",
    region: "Kanto",
    platform: "Nintendo Switch",
    description: "Return to the Kanto region and experience a classic Pokémon journey in a whole new way with Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! These two titles were created by GAME FREAK, the developers of the Pokémon core RPG titles. Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! introduce a new play style that anyone can enjoy and combine it with the fun of collecting Pokémon. Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee! are based on Pokémon Yellow: Special Pikachu Edition, which first launched in Japan in 1998. These updated versions reimagine the original to make the most of the unique capabilities of the Nintendo Switch. The games also capture the fun of Pokémon GO and its intuitive Pokémon-catching mechanic. Befriend Your Partner! At the start of your tale, you encounter either Pikachu or Eevee, depending on which game version you choose. This Pikachu or Eevee joins you as your partner in your adventures, growing together with you on your journey. Pikachu or Eevee is with you wherever you go, either hanging on your shoulder or riding on your head. Don’t let its adorable expressions fool you into thinking that cuteness is all it offers, though. Your partner is a dependable ally in battle, too. In addition to determining your first partner Pokémon, your choice of Pokémon: Let’s Go, Pikachu! or Pokémon: Let’s Go, Eevee! also affects the species of Pokémon you encounter and the rate at which you encounter them.",
    genre: "RPG",
    dateReleased: "11/16/2018",
    logoUrl: "http://bit.ly/2R63fq1"
  },
  {
    orderNumber: 31,
    fileName: "Pokémon Prism.gbc",
    fileSize: 2048,
    fileType: "gbc",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106595&authkey=AJcTDNwVvo66Y2o",
    generation: 2,
    boxArtUrl: "http://bit.ly/2KAOuKt",
    gameName: "Pokémon Prism Version (ROM Hack)",
    region: "Naljo",
    platform: "Game Boy Color (Emulator)",
    description: "Pokémon Prism is an awesome Pokémon ROM hack.\r\nFind out more info here: http://bit.ly/2Xy5qos",
    genre: "RPG",
    dateReleased: "12/25/2016",
    logoUrl: "http://bit.ly/2wIviCv"
  },
  {
    orderNumber: 32,
    fileName: "Pokemon Ash Gray.gba",
    fileSize: 16384,
    fileType: "gba",
    downloadLink: "https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106597&authkey=ANQl3JsQwoMHMhs",
    generation: 3,
    boxArtUrl: "https://bit.ly/2Wph3S5",
    gameName: "Pokémon Ash Gray Version (ROM Hack)",
    region: "Kanto",
    platform: "Game Boy Advanced (Emulator)",
    description: "Pokémon Ash Gray is an amazing Pokémon ROM hack. It features the story of Ash Ketchum in the Kanto region during his journey in the Pokémon Generation I anime.",
    genre: "RPG",
    dateReleased: "05/31/2009",
    logoUrl: "https://bit.ly/2WKYiYM"
  }
]);
printjson(insertRomsQuery);

// insert all natures
insertNaturesQuery = db.natures.insert([
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

const mongoose = require("mongoose");
require("dotenv").config();
const Music = require("./Models/music");

// Connect to the database
mongoose.connect(process.env.DATABASE_URL);

async function seed() {
    await Music.create([
        {
            "rank":1,
            "title":"1989 (TAYLOR'S VERSION)",
            "artist":"TAYLOR SWIFT" ,
            "cover":"https://backstage.officialcharts.com/sites/default/files/styles/charted_item_artwork_medium/public/%5Bdate%3Acustom%3AY%5D-%5Bdate%3Acustom%3Am%5D/1989%20tv%20cover.png?itok=FQCmszb8",
            "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ce/45/64/ce456404-dda5-6836-b8e3-6e93a16cc8ba/mzaf_15244830205531434354.plus.aac.p.m4a",
            "weeksOnChart":21,
            },
            
            {
            "rank":2,
            "title":"THE MASTERPLAN", 
            "artist":"OASIS" , 
            "cover":"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/83/63/2d/83632daa-860e-69c3-fd95-047536a6207a/5051961009101.jpg/80x80bb.jpg",
            "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0c/d3/c3/0cd3c32c-be07-3b86-8f1f-07c0e50eaf8b/mzaf_9950690540215407184.plus.aac.p.m4a",
            "weeksOnChart":1,
            },
            
            {
            "rank":3,
            "title":"GOLDEN",
            "artist":"JUNG KOOK",
            "cover":"https://backstage.officialcharts.com/sites/default/files/styles/charted_item_artwork_small/public/2023-10/JUNG%20KOOK%20GOLDEN%20ALBUM%20SEVEN%20LATTO%20JACK%20HARLOW%203D%20BTS%20JIMIN%20JIN%20V%20SUGA%20JHOPE%20JIMIN%20RELEASE%20DATE.jpg?itok=R0sNX4Wx",
            "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/84/6d/e9/846de910-2446-4bad-40e2-399be7218b1a/mzaf_14610746290002914372.plus.aac.p.m4a",
            "weeksOnChart":90,
            },
            
            {
            "rank":4,
            "title":"HACKNEY DIAMONDS",
            "artist":"ROLLING STONES" ,
            "cover":"https://backstage.officialcharts.com/sites/default/files/styles/charted_item_artwork_small/public/2023-10/HACKNEY%20DIAMONDS%20COVER.png?itok=rntzc4HO",
            "audio": "",
            "weeksOnChart":2,
            },
            
            {
            "rank":5,
            "title":"Cliff with Strings – My Kinda Life",
            "artist":"CLIFF RICHARD" ,
            "cover":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6f/67/15/6f671569-4283-b38d-c8e8-2639cedca05e/5054197793134.jpg/80x80bb.jpg",
            "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/54/bb/36/54bb36d0-0481-0c25-c986-eaf1a09ab4d3/mzaf_1359914303123434525.plus.aac.p.m4a",
            "weeksOnChart":19,
            },
            
            {
            "rank":6,
            "title":"GUTS",
            "artist": "OLIVIA RODRIGO",
            "cover":"https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/d8/9c/9bd89c9e-b44d-ad25-1516-b9b30f64fd2a/23UMGIM71510.rgb.jpg/80x80bb.jpg",
            "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/6b/da/19/6bda19d9-5034-4d9e-8e79-9799ed3c8d58/mzaf_9427519660470881321.plus.aac.p.m4a",
            "weeksOnChart":9,
            },
            
            {"rank":7,
            "title":"SPIRIT POWER - THE BEST OF",
            "artist":"JOHNNY MARR" ,
            "cover":"https://www.roughtrade.com/_next/image?url=https%3A%2F%2Fapi.roughtrade.com%2Fmedia%2Fthumbnails%2Fproducts%2FSpirit_Power_Packshot_900px_5f629562_thumbnail_1024.webp&w=828&q=100",
            "audio": "",
            "weeksOnChart":85,
            },
            
            {
            "rank":8,
            "title":"THE HIGHLIGHTS",
            "artist":"WEEKND" ,
            "cover":"https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/dc/e9/95/dce995ab-5287-cba4-4966-46d16bf1c072/21UMGIM06667.rgb.jpg/80x80bb.jpg",
            "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/6a/61/16/6a611671-ded8-7ba2-80d0-f904eef0c3f4/mzaf_7156450567638289108.plus.aac.p.m4a",
            "weeksOnChart":7,
            },
            {
            "rank":9,
            "title":"DIAMONDS",
            "artist":"ELTON JOHN" ,
            "cover":"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7b/35/f7/7b35f7ac-3097-10c7-99eb-8f976adda0b6/17UM1IM17131.rgb.jpg/80x80bb.jpg",
            "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/f7/1a/01/f71a01ee-2aee-1e25-1e45-03e3485c4897/mzaf_16525096859691964910.plus.aac.p.m4a",
            "weeksOnChart":3,
            },
            {
            "rank":10,
            "title":"50 YEARS - DON'T STOP",
            "artist":"FLEETWOOD MAC" ,
            "cover":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/63/06/6c/63066c62-e334-f68d-035e-d8b87d196c99/603497855063.jpg/80x80bb.jpg",
            "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/3b/f8/95/3bf89507-18fe-6e3e-6695-88595d63b4f4/mzaf_1006399127022703112.plus.aac.p.m4a",
            "weeksOnChart":7,
            },

]);
console.log("Music Chart Created");
mongoose.disconnect();
}

seed();
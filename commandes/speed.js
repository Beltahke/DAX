const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');
const speed = require("performance-now");


const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 
let timestamp = speed() 
let flashspeed = (speed() - timestamp).toFixed(4)
zokou({ nomCom: 'speed',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '⚠️', 
    fromMe: 'true', 


  },

async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre} = commandeOptions;



await repondre(`𝗥𝘂𝗻𝗻𝗶𝗻𝗴 𝗦𝗽𝗲𝗲𝗱 :::::➤ *${flashspeed}* `);

}
);


/*king({ nomCom: 'active',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '⏲️', 
    fromMe: 'true', 


  },

async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre, } = commandeOptions;



await zk.sendMessage(dest, { video: { url: 'https://telegra.ph/file/4bbcfdf0a62d8a53165ee.mp4' }, caption: `Hello ${m.pushName}, 𝐑𝐀𝐈𝐃𝐄𝐑 is alive since  ${runtime(process.uptime())}`, { quoted: m }); 
}

}
);*/

zokou({ nomCom: 'bot',
    desc: 'To check runtime',    
    Categorie: 'General',
    reaction: '⏲️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`⏳𝗦𝗖𝗘𝗡𝗘-𝗠𝗗 𝗜𝗦 𝗢𝗡𝗟𝗜𝗡𝗘 ⏳\n\n➤ 𝗨𝗽𝘁𝗶𝗺𝗲 𝗼𝗳 𝗦𝗖𝗘𝗡𝗘-𝗠𝗗 : *${runtime(process.uptime())}*\n\n➤ 𝗥𝗨𝗡𝗡𝗜𝗡𝗚 𝗔𝗧 𝗔 𝗦𝗣𝗘𝗘𝗗 𝗢𝗙 : *${flashspeed}* 𝗠𝗦\n\n𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : 𝗕𝗲𝗹𝘁𝗮𝗵 🇰🇪⊷`) 

   


  }
);


zokou({ nomCom: 'ss',
    desc: 'screenshots website',
    Categorie: 'General',
    reaction: '🎥', 
    fromMe: 'true', 

},
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

    if (!arg || arg.length === 0) return repondre("provide a link...");

         const linkk = arg.join(' ');



let linkkk = `https://api.maher-zubair.tech/misc/sstab?url=${linkk}&dimension=720x720`;

let res = await getBuffer(linkkk);
   let caption = '*Powered by FLASH-MD*' 

await zk.sendMessage(dest, { image: res }, { caption: caption }, { quoted: ms });


}
);

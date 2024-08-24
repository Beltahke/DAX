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
zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '⛽', 
    fromMe: 'true', 


  },

async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre} = commandeOptions;



await repondre(`Response Speed ${flashspeed}  _Second_ 
 0.1246365 _miliseconds_

creator : Beltah Tech 254 🇰🇪

ðŸ’» Info Server
RAM: 102.43 GB / 125.69 GB

_NodeJS Memory Usaage_
rss         : 125.57 MB
heapTotal   : 47.62 MB
heapUsed    : 44.88 MB
external    : 7.58 MB
arrayBuffers: 4.24 MB

_Total CPU Usage_
Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3672.7500000000005 MHZ)
- *user* : 67.20%
- *nice* : 0.00%
- *sys*  : 13.33%
- *idle* : 19.47%
- *irq*  : 0.00%
_CPU Core(s) Usage (12 Core CPU)_
1. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3666 MHZ)
- *user* : 67.24%
- *nice* : 0.00%
- *sys*  : 13.68%
- *idle* : 19.08%
- *irq*  : 0.00%

2. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3667 MHZ)
- *user* : 67.59%
- *nice* : 0.00%
- *sys*  : 13.66%
- *idle* : 18.75%
- *irq*  : 0.00%

3. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3667 MHZ)
- *user* : 67.21%
- *nice* : 0.00%
- *sys*  : 13.70%
- *idle* : 19.09%
- *irq*  : 0.00%

4. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3673 MHZ)
- *user* : 67.23%
- *nice* : 0.00%
- *sys*  : 13.68%
- *idle* : 19.09%
- *irq*  : 0.00%

5. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3674 MHZ)
- *user* : 67.21%
- *nice* : 0.00%
- *sys*  : 13.69%
- *idle* : 19.10%
- *irq*  : 0.00%

6. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3674 MHZ)
- *user* : 69.74%
- *nice* : 0.00%
- *sys*  : 10.79%
- *idle* : 19.47%
- *irq*  : 0.00%

7. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3674 MHZ)
- *user* : 67.17%
- *nice* : 0.00%
- *sys*  : 13.82%
- *idle* : 19.01%
- *irq*  : 0.00%

8. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3675 MHZ)
- *user* : 68.54%
- *nice* : 0.00%
- *sys*  : 14.27%
- *idle* : 17.19%
- *irq*  : 0.00%

9. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3675 MHZ)
- *user* : 67.20%
- *nice* : 0.00%
- *sys*  : 13.85%
- *idle* : 18.95%
- *irq*  : 0.00%

10. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3676 MHZ)
- *user* : 67.16%
- *nice* : 0.00%
- *sys*  : 13.84%
- *idle* : 19.00%
- *irq*  : 0.00%

11. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3676 MHZ)
- *user* : 67.14%
- *nice* : 0.00%
- *sys*  : 13.87%
- *idle* : 18.98%
- *irq*  : 0.00%

12. Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz (3676 MHZ)
- *user* : 56.96%
- *nice* : 0.00%
- *sys*  : 7.84%
- *idle* : 35.19%
- *irq*  : 0.00%`);

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

zokou({ nomCom: 'uptime',
    desc: 'To check runtime',    
    Categorie: 'General',
    reaction: '⏲️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`💀💀 ᏦᎥᏝᏝᏋᏒ Ꮙ3 💀💀 : ᏕፈᏋᏁᏋ-ᎷᎴ ᏬᎮᏖᎥᎷᏋ: \n╰┈➤${runtime(process.uptime())}`) 

   


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
   let caption = '*Powered by SCENE-MD*' 

await zk.sendMessage(dest, { image: res }, { caption: caption }, { quoted: ms });


}
);

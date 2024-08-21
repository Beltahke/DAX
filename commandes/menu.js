const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭────✧✧ 𝐒𝐂𝐄𝐍𝐄-𝐌𝐃-𝐕𝟑 ✧✧────✧
┃⭔╭───────────
┃⭔│▸ 𝗢𝘄𝗻𝗲𝗿 : *${s.OWNER_NAME}*
┃⭔│▸ 𝗣𝗿𝗲𝗳𝗶𝘅 : *[ ${s.PREFIXE} ]* 
┃⭔│▸ 𝗠𝗼𝗱𝗲 : *${mode}*
┃⭔│▸ 𝗗𝗮𝘁𝗲  : *${date}* 
┃⭔│▸ 𝗧𝗶𝗺𝗲  : *${temps}*
┃⭔│▸ 𝗨𝘀𝗲𝗱 𝗥𝗮𝗺 : *${format(os.totalmem() - os.freemem())}*
┃⭔│▸ 𝗧𝗼𝘁𝗮𝗹 𝗥𝗮𝗺 : *${format(os.totalmem())}*
┃⭔│▸ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : 𝗖𝗵𝗿𝗼𝗺𝗲 𝗟𝗶𝗻𝘂𝘅
┃⭔│▸ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : 𝗕𝗲𝗹𝘁𝗮𝗵-𝗧𝗲𝗰𝗵-𝟮𝟱𝟰
┃⭔└───────────···▸
╰──────────────┈⊷`;

    let menuMsg = `
  𝐇𝐨𝐰 𝐚𝐫𝐞 𝐲𝐨𝐮 ${nomAuteurMessage}
╰────────────────────➣
> 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 𝐒𝐂𝐄𝐍𝐄-𝐌𝐃-𝐕𝟐\n${readmore}
𝐒𝐂𝐄𝐍𝐄-𝐌𝐃-𝐕𝟐 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐒𝐄𝐂𝐓𝐈𝐎𝐍
`;
    for (const cat in coms) {
        menuMsg += `
╭──「 *${cat}* 」──┈⊷ 
┃╭──────────
┌┤ `;
        for (const cmd of coms[cat]) {
            menuMsg += `          
┃│➣  ${cmd}`    
        } 
        menuMsg +=`
┌┤
│╰────────┈⊷  
╰────────────┈⊷`
    }
  
    menuMsg += `
> 𝐒𝐂𝐄𝐍𝐄-𝐌𝐃-𝐕𝟐 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇
> 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 𝐒𝐂𝐄𝐍𝐄-𝐌𝐃-𝐕𝟑
────────────────────────
https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});

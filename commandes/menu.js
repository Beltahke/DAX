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
╭══ ❍ 𝐒𝐂𝐄𝐍𝐄-𝐌𝐃-𝐕𝟑 ❍
┃❂ 𝗢𝘄𝗻𝗲𝗿 : *${s.OWNER_NAME}*
┃❂ 𝗣𝗿𝗲𝗳𝗶𝘅 : *[ ${s.PREFIXE} ]* 
┃❂ 𝗠𝗼𝗱𝗲 : *${mode}*
┃❂ 𝗗𝗮𝘁𝗲  : *${date}* 
╰──────────────┈⊷
*Follow our channel for updates*
➤ whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F
*Subscribe to my YouTube channel* 
➤ youtube.com/@Beltahtech2024
𝐁𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇\n${readmore}`;

    let menuMsg = `
╰┈➤ʜᴇʟʟᴏ ᴛʜᴇʀᴇ ${nomAuteurMessage}

╭═══❂ *BUG MENU* ❂
┃ ❏ *xʀᴇᴀᴄᴛ <ʀᴇᴘʟʏ ᴄʜᴀᴛ>*
┃ ❏ *x <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *x2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *ɪᴏsʙᴜɢ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *ɪᴏsʙᴜɢ2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xᴀᴜᴅɪᴏ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xᴀᴜᴅɪᴏ2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xsᴛɪᴄᴋᴇʀ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xsᴛɪᴄᴋᴇʀ2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xʟᴏᴄ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xʟᴏᴄ2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xʟɪsᴛ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xʟɪsᴛ2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xᴋɪʟʟ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xᴋɪʟʟ2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xᴋɪʟʟɢᴄ <ʟɪɴᴋ ɢʀᴏᴜᴘ>*
┃ ❏ *ᴛᴇᴍᴘʙᴀɴ <ᴄᴏᴅᴇ|ɴᴜᴍʙᴇʀ>*
┃ ❏ *xᴄʀᴀsʜ <ɴᴜᴍʙᴇʀ>*
┃ ❏ *xᴄʀᴀsʜ2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *xɪᴏsᴄʀᴀsʜ <ɴᴜᴍʙᴇʀ>*
┃ ❏ *xɪᴏsᴄʀᴀsʜ2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *ɪᴏsɢᴏᴏɢʟᴇ <ɴᴜᴍʙᴇʀ>*
┃ ❏ *ɪᴏsɢᴏᴏɢʟᴇ2 <ᴀᴍᴏᴜɴᴛ>*
┃ ❏ *ɪᴏsǫ <ɴᴜᴍʙᴇʀ>*
┃ ❏ *ᴅᴏᴄᴜɢᴄʙᴜɢ*
┃ ❏ *ᴛʀᴏʟʟʏɢᴄʙᴜɢ*
┃ ❏ *ᴜɴʟɪᴍɪᴛᴇᴅɢᴄʙᴜɢ*
┃ ❏ *ʙᴏᴍɢᴄʙᴜɢ*
┃ ❏ *ʟᴀɢɢᴄʙᴜɢ*
┃ ❏ *ɢᴄʙᴜɢ*
┃ ❏ *ᴅᴇʟᴀʏɢᴄʙᴜɢ*
┃ ❏ *ʟᴀɢʙᴜɢ*
┃ ❏ *ʙᴏᴍʙᴜɢ*
┃ ❏ *ᴜɴʟɪᴍɪᴛᴇᴅʙᴜɢ*
┃ ❏ *ᴅᴏᴄᴜʙᴜɢ*
┃ ❏ *ᴅᴇʟᴀʏʙᴜɢ*
┃ ❏ *ᴀᴍᴏᴜɴᴛʙᴜɢ*
┃ ❏ *ᴘᴍʙᴜɢ*
┃ ❏ *ᴛʀᴏʟʟʏʙᴜɢ*
╰══════════════════⊷
BUGS 🐛 ARE MEANT FOR ONLINE ENEMIES.
NOT YOUR FRIENDS 🥺🥺
`;
    for (const cat in coms) {
        menuMsg += `╭═══❂ *${cat}* ❂`;
        for (const cmd of coms[cat]) {
            menuMsg += `          
┃ ❏  *${cmd}* `    
        } 
        menuMsg +=`
╰══════════════════⊷
`
    }
  
    menuMsg += `
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

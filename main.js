const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const moment = require("moment-timezone")
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { color, bgcolor } = require('./lib/color')
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (brcode = new WAConnection()) => {
  //jangan dirubah, kalo mau di edit, tambahin di TQTO aja!
  console.log(bgcolor('HALO, LILULU BOT HAS BEEN STARTED !!!\n', 'red'), color('╭─❒ 「 TQTO 」\n │ Allah SWT\n │ Vall Popaye\n │ MhankBarBar\n │ MRHRTZ\n │ KIZAKIXD\n │ BrCode (Me)\n │ DENZ\n │ ARIFI RAZZAQ\n │ FA DEV \n │ ALL API\n │ AND OTHER BOT BUILDERS\n └──────────────────❍', 'yellow'))
  console.log(color('SCRIPT INI JANGAN DI PERJUAL BELIKAN YA BRO\nKALO ADA YANG MEMPERJUAL BELIKAN, SILAHKAN HUBUNGI: @BrCode 085156724122', 'red'))
    brcode.logger.level = 'warn'
    brcode.version = [3, 3234, 9]
    brcode.browserDescription = [ 'BrCode', 'Chrome', '3.0' ]
    console.log(banner.string)
    brcode.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan QR codenya'))
    })

    fs.existsSync('./LiluluBot.json') && brcode.loadAuthInfo('./LiluluBot.json')
    brcode.on('connecting', () => {
        start('2', 'Menyambungkan[!]')
    })
    brcode.on('open', () => {
        success('2', 'Tersambung[!]')
    })
    await brcode.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./LiluluBot.json', JSON.stringify(brcode.base64EncodedAuthInfo(), null, '\t'))

    brcode.on('chat-update', async (message) => {
        require('./index.js')(brcode, message)
    })
    //=======ini fungsi welcomenya=======//
     brcode.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await brcode.groupMetadata(anu.jid)
			try {
			console.log(anu)
			if (anu.action == 'add') {
			  const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62838505090133-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;FznAdm;;;\nFN:FznAdm\nitem1.TEL;waid=6285156724122:6285156724122\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await brcode.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			welcomimg = fs.readFileSync('./src/welcomimg.jpg')
			masuk =`Halo @${mem.split('@')[0]}\n*Selamat Datang Di ${mdata.subject}*\n\nSilahkan baca Deskripsi grup dulu ya!\nketik *!menu* untuk menampilkan fitur bot\njangan lupa donasi ya :)`
            brcode.sendMessage(mdata.id, welcomimg, MessageType.image, {contextInfo: {"mentionedJid": [num]}, caption: masuk, quoted: fkontakk, thumbnail: fs.readFileSync('./src/welcomimg.jpg')})
			} else if (anu.action == 'remove') {
			  const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62838505090133-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;FznAdm;;;\nFN:FznAdm\nitem1.TEL;waid=6285156724122:6285156724122\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await brcode.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			gdbyimg = fs.readFileSync('./src/byeimg.jpg')
			keluar =`Selamat tinggal @${mem.split('@')[0]}\nNanti kalo udh balik, jangan lupa bawa oleh-oleh ya`
            brcode.sendMessage(mdata.id, gdbyimg, MessageType.image, {contextInfo: {"mentionedJid": [num]}, caption: keluar, quoted: fkontakk, thumbnail: fs.readFileSync('./src/byeimg.jpg')})
			}
//===========function promote demote detected============//
			else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62838505090133-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;FznAdmn;;;\nFN:FznAdmn\nitem1.TEL;waid=6285156724122:6285156724122\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
brcode.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62838505090133-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;FznAdmn;;;\nFN:FznAdmn\nitem1.TEL;waid=6285156724122:6285156724122\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
brcode.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	     
//==========function call auto block=============//
//ambil di bitcbot
brcode.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `FznAdmn` + '\n' + `ORG:Developer Lilulu-BOT\n` + 'TEL;type=CELL;type=VOICE;waid=' + `6285156724122` + ':+' + `6285156724122` + '\n' + 'END:VCARD'
        brcode.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Maaf Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        brcode.sendMessage(callerId, { displayname: `FznAdmn`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer Lilulu-BOT`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),sourceUrl:`https://wa.me/6285156724122?text=Assalamualaikum`}}})
        await sleep(5000)
        await brcode.blockUser(callerId, "add")
        })

/*
brcode.on('message-delete', async (m) => {
if (!m.key.fromMe && !antidelete) {
if (!m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = brcode.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = brcode.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
brcode.copyNForward(m.key.remoteJid, m.message)
brcode.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})*/

antidel = true
  brcode.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
    if (antidel === false) return m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const type = Object.keys(m.message)[0];
    brcode.sendMessage(
      m.key.remoteJid,
`┏◪ 「 Anti Delete 」
┃ •Nama : @${m.participant.split("@")[0]}
┃ •Waktu : ${jam} ${week} ${calender}
┃ •Type : ${type}
┗◪`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    brcode.copyNForward(m.key.remoteJid, m.message);
  });
		    
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
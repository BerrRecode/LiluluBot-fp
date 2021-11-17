// DILARANG KERAS MENJUAL SC INI!
// Recode Vall Popaye
/*TQTO
Vall Popaye
MhankBarBar 
MRHRTZ 
KIZAKIXD 
BrCode
DENZ 
ARIFI RAZZAQ
FA DEV
*/
//Tqtq Jan Diapus Yak
//Gua cuman recode, fix bug, dan nambahin fitur aja gak lebih dari itu kok
const	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
//const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
//const imgbbUploader = require("imgbb-uploader")
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const crypto = require('crypto')
const delay = require('delay')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const cheerio = require('cheerio')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { cmdadd } = require('./lib/totalcmd.js')
//const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { sleep, isAfk2, cekafk2, addafk2 } = require('./lib/offline')
//const { donasi } = require('./lib/donasi')
const { addVote, delVote } = require('./lib/vote')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const { bahasa } = require('./lib/bahasa')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const petik = ('```')
const pdua = ('"')

//===============JSON FILE===================//
const afk2 = JSON.parse(fs.readFileSync('./lib/off.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const samah = JSON.parse(fs.readFileSync('./database/simi.json'))
const nyetting = JSON.parse(fs.readFileSync('./nyetting.json'))
const rdmore = JSON.parse(fs.readFileSync('./database/rdmore.json'))
//============APIKEY DISNI===========//
LolKey = nyetting.LolKey //BELI DI https://lolhuman.xyz
ZeksKey = nyetting.ZeksKey //DAFTAR DI http://zeks.me/
DapKey = nyetting.DapKey //DAFTAR DI https://api.dapuhy.ga/
ApiSite = nyetting.ApiSite //API SSWEB https://api.site-shot.com/
ApiPikwy = nyetting.ApiPikwy //API SSWEB https://pikwy.com
SsMcn = nyetting.SsMcn //https://www.screenshotmachine.com
//=================CMD================//
cmddhit =[]
//=================simih=============//
const simih = async (text) => {
	try {
		const sami = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=${LolKey}&text=${text}`, {method: 'GET'})
		const res = await sami.json()
		return res.result
	} catch {
		return 'simi bingung mau jawab apa :v'
	}
}

//======setting disini ngab=======//
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || "false"
}
autorespon = false
antidelete = false
banChats = true
offline = false
menuall = false
namabot = nyetting.namabot
ownerNumber = nyetting.ownerNumber
targetpc = nyetting.targetpc
namaowner = nyetting.namaowner
owner = nyetting.owner 
ownerno = nyetting.ownerno
botnom = nyetting.botnom
fake = nyetting.fake
wmnya = nyetting.wmnya
readmore = rdmore.readmore
numbernye = '0'
waktu = '-'
alasan = '-'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Owner Lilulu\n'
            + 'ORG:devnya;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285156724122:+62 851-5672-4122\n'
            + 'END:VCARD'
//=================================================//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam 🌘'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat senja 🌆'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore ✨'
                                         }
if(time2 < "14:00:00"){
var ucapanWaktu = 'Selamat siang 🌞'
                                         }
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat pagi 🌈'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = 'Selamat pagi 🌈'                                       }


// Silahkan anda atur tanggal anda
var countDownDate = new Date("June 19, 2022 04:00:00").getTime();
// Hitungan Mundur Waktu Dilakukan Setiap Satu Detik
var x = setInterval(function() {
  // Mendapatkan Tanggal dan waktu Pada Hari ini
  var now = new Date().getTime();
  //Jarak Waktu Antara Hitungan Mundur
  var distance = countDownDate - now;
  // Perhitungan waktu hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  ultahown = days + "h " + hours + "j "
  + minutes + "m " + seconds + "d ";
  // Jika hitungan mundur selesai,
  if (distance < 0) {
    clearInterval(x);
    console.log("EXPIRED")
    kadal = reply("EXPIRED")
  }
}, 1000);

//=================================================//
// Sticker Cmd
// Function Stick Cmd , Sorry Bang saya Encrypt hehe:)
function _0x187e(){const _0x5201c3=['354332XZSVKt','stringify','10gXCFmS','writeFileSync','chats','826660vMhFZs','push','831785OvEahb','9YWQYLr','30yImjxS','6342256ZSdPUT','2360940FsKSew','forEach','333777enEhHA','keys','5973359gTLRyl'];_0x187e=function(){return _0x5201c3;};return _0x187e();}function _0x53ad(_0x327943,_0x496650){const _0x187e5a=_0x187e();return _0x53ad=function(_0x53ad6b,_0x638151){_0x53ad6b=_0x53ad6b-0x7b;let _0x56c9cd=_0x187e5a[_0x53ad6b];return _0x56c9cd;},_0x53ad(_0x327943,_0x496650);}(function(_0x5c82b1,_0x583797){const _0x404869=_0x53ad,_0x5daaac=_0x5c82b1();while(!![]){try{const _0x4771ab=-parseInt(_0x404869(0x88))/0x1+parseInt(_0x404869(0x8a))/0x2*(parseInt(_0x404869(0x85))/0x3)+-parseInt(_0x404869(0x83))/0x4+parseInt(_0x404869(0x7f))/0x5*(-parseInt(_0x404869(0x81))/0x6)+parseInt(_0x404869(0x87))/0x7+parseInt(_0x404869(0x82))/0x8+-parseInt(_0x404869(0x80))/0x9*(-parseInt(_0x404869(0x7d))/0xa);if(_0x4771ab===_0x583797)break;else _0x5daaac['push'](_0x5daaac['shift']());}catch(_0x52bd20){_0x5daaac['push'](_0x5daaac['shift']());}}}(_0x187e,0x7c338));const addCmd=(_0x36813b,_0x481a74)=>{const _0x5c67d7=_0x53ad,_0x3aa4ea={'id':_0x36813b,'chats':_0x481a74};_scommand[_0x5c67d7(0x7e)](_0x3aa4ea),fs[_0x5c67d7(0x7b)]('./database/scommand.json',JSON[_0x5c67d7(0x89)](_scommand));},getCommandPosition=_0x467b73=>{const _0xde6c6=_0x53ad;let _0x564579=null;Object[_0xde6c6(0x86)](_scommand)[_0xde6c6(0x84)](_0x12d946=>{_scommand[_0x12d946]['id']===_0x467b73&&(_0x564579=_0x12d946);});if(_0x564579!==null)return _0x564579;},getCmd=_0x2ac48e=>{const _0x252724=_0x53ad;let _0x3b3ee6=null;Object[_0x252724(0x86)](_scommand)[_0x252724(0x84)](_0x2c0eb9=>{_scommand[_0x2c0eb9]['id']===_0x2ac48e&&(_0x3b3ee6=_0x2c0eb9);});if(_0x3b3ee6!==null)return _scommand[_0x3b3ee6][_0x252724(0x7c)];},checkSCommand=_0x214db0=>{const _0x4d3d7e=_0x53ad;let _0x597323=![];return Object[_0x4d3d7e(0x86)](_scommand)['forEach'](_0x2b847a=>{_scommand[_0x2b847a]['id']===_0x214db0&&(_0x597323=!![]);}),_0x597323;};
module.exports = brcode = async (brcode, brc) => {
	try {
        if (!brc.hasNewMessage) return
        brc = brc.messages.all()[0]
		if (!brc.message) return
		if (brc.key && brc.key.remoteJid == 'status@broadcast') return
		me = brcode.user
		global.blocked
        	brc.message = (Object.keys(brc.message)[0] === 'ephemeralMessage') ? brc.message.ephemeralMessage.message : brc.message
        	const content = JSON.stringify(brc.message)
		const from = brc.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType 
		//ini waktu
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss') //WIB
	    const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss') //WIB
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss') //WIT
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss') //WITA
    const date = new Date().toLocaleDateString()
    const jom = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
        //=======
  const type = Object.keys(brc.message)[0]  
  const cmd = (type === 'conversation' && brc.message.conversation) ? brc.message.conversation : (type == 'imageMessage') && brc.message.imageMessage.caption ? brc.message.imageMessage.caption : (type == 'videoMessage') && brc.message.videoMessage.caption ? brc.message.videoMessage.caption : (type == 'extendedTextMessage') && brc.message.extendedTextMessage.text ? brc.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
  brcode.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
  const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#%^&.?/\\©^z+*,;]/gi) : '-'          	
  body = (type === 'conversation' && brc.message.conversation.startsWith(prefix)) ? brc.message.conversation : (type == 'imageMessage') && brc.message[type].caption.startsWith(prefix) ? brc.message[type].caption : (type == 'videoMessage') && brc.message[type].caption.startsWith(prefix) ? brc.message[type].caption : (type == 'extendedTextMessage') && brc.message[type].text.startsWith(prefix) ? brc.message[type].text : (type == 'listResponseMessage') && brc.message[type].singleSelectReply.selectedRowId ? brc.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && brc.message[type].selectedButtonId ? brc.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(brc.message[type].fileSha256.toString('base64')) !== null && getCmd(brc.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(brc.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? brc.message.conversation : (type === 'extendedTextMessage') ? brc.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
  	const arg = budy.slice(command.length + 2, budy.length)
		const q = args.join(' ')
		const c = args.join(' ')
		const botNumber = brcode.user.jid
		const botNumberss = brcode.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? brc.participant : brc.key.remoteJid
		const orangs = isGroup ? brc.participants : ''
		const manusia = brc.key.fromMe ? brcode.user.jid : isGroup ? brc.participant : brc.key.remoteJid
		const human = brc.key.fromMe ? brcode.user.jid : brc.key.remoteJid.endsWith('@g.us') ? brc.participant : brc.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const isOwner = owner.includes(sender)
		const isBanned = ban.includes(sender)
		const isUser = user.includes(sender)
		const mentionUser = type == "extendedTextMessage" ? brc.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? brc.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
            //hitt.push(command)
		const totalchat = await brcode.chats.all()
		const groupMetadata = isGroup ? await brcode.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		//const isOwner = ownerNumber.includes(sender)
        const isVote = isGroup ? voting.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const isSimi = isGroup ? samah.includes(from) : false
        const conts = brc.key.fromMe ? brcode.user.jid : brcode.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        if (isCmd) cmdadd()
        const pushname = brc.key.fromMe ? brcode.user.name : conts.notify || conts.vname || conts.name || '-'
        		cmddhit.push(command)
      thumbbot = await fs.readFileSync('./lib/lilulu.jpeg')
			fotome = await fs.readFileSync('./lib/me.jpg')
			todImg = await fs.readFileSync('./lib/tod.jpg')
			dareImg = await fs.readFileSync('./lib/dare.jpg')
			trthImg = await fs.readFileSync('./lib/truth.jpg')
			lopeImg = await fs.readFileSync('./lib/lope.jpg')
			ngwImg = await fs.readFileSync('./lib/ngewe.jpg')
			koceImg = await fs.readFileSync('./lib/koceng.jpg')
        //MESS
		mess = {
			wait: 'Tunggu sebentar...',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			banned : 'maaf anda TerBanned🚫',
			noregis : `Maaf anda belum terdaftar di Database ${namabot}, ketik !verify untuk daftar`,
			udhregis : `Anda telah terdaftar di Database ${namabot}`,
			nsfwOff : 'Fitur NSFW tidak aktif, hubungi owner/admin grup untuk mengaktifkannya!',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v',
				api: 'REST API ERROR',
				eror: 'Yah Error:(, coba lagi gih :)'
			},
			only: {
				group: 'Khususs grup ngab',
				ownerb: 'Fitur ini khusus OwnerKu',
				adming: 'Fitur ini khusus admin grup',
				Badmin: 'Bot harus jadi ADMIN terlebih dahulu'
			}
		}
//const m = simple.smsg(brcode, brc);
		 // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? brc.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? brc.message.listResponseMessage.title : ''

        
        const listmsg = (from, title, desc, list) => { // Fixx
            let po = brcode.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return brcode.relayWAMessage(po, {waitForAck: true})
        }
//=========================BATAS INI===========================//
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            brcode.sendMessage(from, teks, text, {quoted:fvid})
        }
const textImg = (teks) => {
           return brcode.sendMessage(from, teks, text, {quoted: brc, thumbnail: fs.readFileSync('./lib/lilulu.jpeg')})
        }
        const sendMess = (hehe, teks) => {
            brcode.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? brcode.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : brcode.sendMessage(from, teks.trim(), extendedText, { quoted: brc, contextInfo: { "mentionedJid": memberr } })
        }
        
        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        //ftrol
        const ftrol = {
                  	key : {
                          participant : '0@s.whatsapp.net'
                        },
            message: {
                    orderMessage: {
                            itemCount : 999999,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: thumbbot, //inigambar
                            sellerJid: '6289688543712@s.whatsapp.net' 
                          }
                        }
                      }
        
   //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838505090133@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)},"title":`LiluluBot`,"description": "𝙵𝚣𝚗𝙰𝚍𝚖𝚗", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "𝐢𝐦 𝐥𝐢𝐥𝐮𝐥𝐮𝐛𝐨𝐭","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838505090133@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838505090133@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838505090133@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "62838505090133-62838505090133@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
   //FAKEREPLY PRODUCT
            const toko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838505090133@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)},"title":`LiluluBot`,"description": "𝙵𝚣𝚗𝙰𝚍𝚖𝚗", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "𝐢𝐦 𝐥𝐢𝐥𝐮𝐥𝐮𝐛𝐨𝐭","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "62838505090133-62838505090133@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999999999",
                 "ptt": "true"
                        }
	                  } 
                     } 
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `62838505090133@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"Apasih Lu","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fvid = {
	 key: { 
	      participant: '0@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"Apasih Lu",
                 "h": `Hmm`, 
                 'seconds': '99', 
                 'caption': 'Im LiluluBot',
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  }
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "6285156724122@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6285156724122-1623985863@g.us","inviteCode": "https://chat.whatsapp.com/Js6oZK5vblfHhGfNhNiaRZ","groupName": "HuBot", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `62838505090133@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"Apasih Lu","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
            
        const fakestatus = (teks) => {
            brcode.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            brcode.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:brc,caption:yes})
            
        }
        const fakegroup = (teks) => {
            brcode.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        brcode.sendMessage(to, media, MessageType.sticker,{quoted:brc})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
  const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       brcode.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       brcode.sendMessage(from, hasil, type, options).catch(e => {
	       brcode.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    brcode.sendMessage(to, media, type, { quoted: brc, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   

///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
brcode.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await brcode.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
brcode.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await brcode.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
brcode.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await brcode.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
brcode.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//=============================================================//
            
//FUNCTION
           cekafk2(afk2)
            if (!brc.key.remoteJid.endsWith('@g.us') && offline){
            if (!brc.key.fromMe){
            if (isAfk2(brc.key.remoteJid)) return
            addafk2(brc.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            brcode.sendMessage(brc.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (brc.key.remoteJid.endsWith('@g.us') && offline) {
        if (!brc.key.fromMe){
        if (brc.message.extendedTextMessage != undefined){
        if (brc.message.extendedTextMessage.contextInfo != undefined){
        if (brc.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of brc.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk2(brc.key.remoteJid)) return
        addafk2(brc.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        brcode.sendMessage(brc.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//============================================================================================================================//
//==============FUNGSI AFK DI SINI=====================//
			for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    aefka = "Dia Lagi Afk bro!!!\n"
                    if (afk[x.split('@')[0]] != "") {
                        aefka += "Dengan alasan: " + afk[x.split('@')[0]]
                    }
                    brcode.sendMessage(from, aefka, text, {quoted: brc})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}
        if (budy.includes("https://chat.whatsapp.com/")) {
        if (!brc.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				brcode.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    brcode.groupRemove(from, [kic]).catch((e) => {brc.reply(from, mess.Badmin)})
			}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
//===============INI BATAS YA BRO=================//
        if (!brc.key.fromMe && banChats === true) return
switch (command) {
    case 'jadibot':
      if (!isUser) return reply(mess.noregis)
    if(brc.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,brcode,from)
    break
    case 'stopjadibot':
if (!isUser) return reply(mess.noregis)
    if(brc.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
case 'teruskan':
if (!isUser) return reply(mess.noregis)
brcode.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
    case 'listbot':
      if (!isUser) return reply(mess.noregis)
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
    
	case 'menu':
	  if (!isUser) return reply(mess.noregis)
	  if (isBanned) return reply(mess.banned) 
	  mension = `@${sender.split('@')[0]}`
        txtt =`Hai Kak ${mension}, ${ucapanWaktu}\nPilih Opsi Dibawah Ini Ya..\n\nJika Button tidak muncul, silahkan ketik ${prefix}cmnd`
        
        sendButLocation(from, txtt, 'Powered by: BrCode', {jpegThumbnail:thumbbot}, [{buttonId:`${prefix}cmnd`, 
               buttonText:{displayText:'📑SHOW LIST MENU'},type:1}, {buttonId:`${prefix}owner`,buttonText:{displayText:'👤 INFO OWNER'},type:1}, {buttonId:`${prefix}officialgc`,buttonText:{displayText:'🎭 GROUP LILULU-BOT'},type:1}], {contextInfo: { mentionedJid: [sender]}})
               break
               
    case 'pe':
    case 'lmenu':
      bii = await brcode.getStatus(`${human.split('@')[0]}@s.whatsapp.net`, MessageType.text)
      if (!isUser) return reply(mess.noregis)
     if (isBanned) return reply(mess.banned)
     //charger = `${baterai.isCharge}`
     tagnya = `@${sender.split('@')[0]}`
    wew = fs.readFileSync(`./lib/lilulu.jpeg`)
    	var pe = `╭─❒ 「 BOT INFO 」
│➪ BOT NAME : 𝙻𝚒𝚕𝚞𝚕𝚞𝙱𝚘𝚝
│➪ OWNER : @${owner.split('@')[0]}
│➪ BATTERY : ${baterai.battery}
│➪ PREFIX :「 MULTI PREFIX 」
│➪ TOTAL USER:  ${user.length} 
│➪ TOTAL HIT : ${cmddhit.length} Today
│➪ BOT MODE : ${banChats ? "SELF-MODE" : "PUBLIC-MODE"}
└──────────────────❒

╭─❒ 「 USER & TIME 」
│➪ ${ucapanWaktu} ${tagnya}
│➪ NAME  : ${pushname}
│➪ NOMOR : wa.me/${human.split('@')[0]}
│➪ BIO INFO: ${bii.status}
│➪ ADMIN : ${isGroupAdmins ? 'Yes' : 'No'}
│➪ WIB   : ${timeWib}
│➪ WIT   : ${timeWit}
│➪ WITA  : ${timeWita}
└──────────────────❒
${readmore}
❒ ISLAM MENU ❐
๏ ${prefix}listsurah
๏ ${prefix}quran
๏ ${prefix}ayat
๏ ${prefix}audiosurah
๏ ${prefix}audioayat
๏ ${prefix}jadwalsholat
๏ ${prefix}niatsholat
๏ ${prefix}asmaulhusna
๏ ${prefix}kisahnabi

❒ OWNER MENU ❐
๏ ${prefix}mode
๏ ${prefix}bc
๏ ${prefix}bc2
๏ ${prefix}bcgc
๏ ${prefix}ban
๏ ${prefix}unban
๏ ${prefix}setcmd
๏ ${prefix}delcmd
๏ ${prefix}listcmd
๏ ${prefix}shutdown
๏ ${prefix}status
๏ ${prefix}leave
๏ ${prefix}oleave 
๏ ${prefix}addupdate
๏ ${prefix}infoupdate
๏ ${prefix}resetupdate
๏ ${prefix}leaveall
๏ ${prefix}setpp
๏ ${prefix}setthumb
๏ ${prefix}setfakeimg
๏ ${prefix}setreply
๏ ${prefix}settarget
๏ ${prefix}upswteks
๏ ${prefix}upswimage
๏ ${prefix}upswvideo

❒ GROUP MENU ❐
๏ ${prefix}welcome
๏ ${prefix}antilink
๏ ${prefix}add
๏ ${prefix}kick
๏ ${prefix}promote
๏ ${prefix}demote
๏ ${prefix}group 
๏ ${prefix}nsfw
๏ ${prefix}afk 
๏ ${prefix}delete
๏ ${prefix}linkgc
๏ ${prefix}setnamegc
๏ ${prefix}setdeskgc
๏ ${prefix}creategrup
๏ ${prefix}voting
๏ ${prefix}delvote
๏ ${prefix}listadmin
๏ ${prefix}sider 
๏ ${prefix}user

❒ DOWNLOAD MENU ❐
๏ ${prefix}ytsearch
๏ ${prefix}play
๏ ${prefix}play2
๏ ${prefix}video2 
๏ ${prefix}ytdl
๏ ${prefix}ytmp3
๏ ${prefix}ytmp4
๏ ${prefix}ytshort
๏ ${prefix}igdl 
๏ ${prefix}fb
๏ ${prefix}twitterimg 
๏ ${prefix}twittervideo
๏ ${prefix}twnowm
๏ ${prefix}tiktokaudio
๏ ${prefix}spotify 
๏ ${prefix}jooxplay
๏ ${prefix}telestick
๏ ${prefix}brainly
๏ ${prefix}komiku
๏ ${prefix}chara
๏ ${prefix}playstore
๏ ${prefix}otaku 
๏ ${prefix}storynime

❒ STALKER ❐
๏ ${prefix}tiktokstalk
๏ ${prefix}igstalk
๏ ${prefix}githubstalk
๏ ${prefix}pptiktok

❒ RANDOM IMG ❐
๏ ${prefix}pinterest
๏ ${prefix}wallpaper2
๏ ${prefix}wallpaper
๏ ${prefix}anime 
๏ ${prefix}image 
๏ ${prefix}cogan
๏ ${prefix}cecan 
๏ ${prefix}wallnime
๏ ${prefix}animefanart
๏ ${prefix}art
๏ ${prefix}bts
๏ ${prefix}exo
๏ ${prefix}elf
๏ ${prefix}shota
๏ ${prefix}husbu
๏ ${prefix}sagiri
๏ ${prefix}shinobu
๏ ${prefix}megumin

❒ MAKER MENU ❐
๏ ${prefix}sticker
๏ ${prefix}swm
๏ ${prefix}take
๏ ${prefix}fdeface
๏ ${prefix}emoji 
๏ ${prefix}attp 
๏ ${prefix}ttp
๏ ${prefix}ttp2
๏ ${prefix}ttp3
๏ ${prefix}ttp4

❒ EPHOTO MAKER ❐
๏ ${prefix}cartoongravity
๏ ${prefix}freefire
๏ ${prefix}goldplaybutton
๏ ${prefix}silverplaybutton
๏ ${prefix}anonymhacker
๏ ${prefix}mlwall
๏ ${prefix}aovwall
๏ ${prefix}logogaming
๏ ${prefix}fpslogo
๏ ${prefix}lolbanner
๏ ${prefix}avatardota
๏ ${prefix}codwarzone
๏ ${prefix}cutegravity
๏ ${prefix}realvintage
๏ ${prefix}wetglass
๏ ${prefix}multicolor3d
๏ ${prefix}watercolor
๏ ${prefix}luxurygold
๏ ${prefix}galaxywallpaper
๏ ${prefix}lighttext
๏ ${prefix}beautifulflower
๏ ${prefix}royaltext
๏ ${prefix}heartshaped

❒ CONVERT ❐
๏ ${prefix}toimg
๏ ${prefix}tomp3
๏ ${prefix}tomp4
๏ ${prefix}slow
๏ ${prefix}fast
๏ ${prefix}reverse
๏ ${prefix}tourl

❒ FUN MENU❐
๏ ${prefix}tts
๏ ${prefix}tod
๏ ${prefix}asupan
๏ ${prefix}fitnah
๏ ${prefix}fitnahpc
๏ ${prefix}teruskan
๏ ${prefix}kontak
๏ ${prefix}memerandom
๏ ${prefix}memeindo
๏ ${prefix}darkjoke
๏ ${prefix}bisakah
๏ ${prefix}kapankah
๏ ${prefix}apakah
๏ ${prefix}bagaimanakah
๏ ${prefix}rate
๏ ${prefix}sangecek
๏ ${prefix}gaycek
๏ ${prefix}lesbicek
๏ ${prefix}gantengcek
๏ ${prefix}cantikcek
๏ ${prefix}watak
๏ ${prefix}hobby
๏ ${prefix}jadian 
๏ ${prefix}ngewe
๏ ${prefix}terganteng
๏ ${prefix}tercantik

❒ PRIMBON ❐
๏ ${prefix}artinama
๏ ${prefix}zodiak
๏ ${prefix}jodoh
๏ ${prefix}weton
๏ ${prefix}tgljadian

❒ RANDOM TEXT ❐
๏ ${prefix}quotes
๏ ${prefix}quotesdilan
๏ ${prefix}quotesislami
๏ ${prefix}katabijak
๏ ${prefix}quotesanime
๏ ${prefix}bucin

❒ TAG ❐
๏ ${prefix}hidetag
๏ ${prefix}tagall
๏ ${prefix}kontag
๏ ${prefix}sticktag
๏ ${prefix}totag

❒ INFO MENU ❐
๏ ${prefix}owner
๏ ${prefix}infosc
๏ ${prefix}cektokenlistrik
๏ ${prefix}wikipedia
๏ ${prefix}covidindo
๏ ${prefix}covidglobal
๏ ${prefix}lolcek
๏ ${prefix}chord
๏ ${prefix}lirik
๏ ${prefix}jadwaltv
๏ ${prefix}jadwaltvnow
๏ ${prefix}cekresijnt
๏ ${prefix}jaraktempuh
๏ ${prefix}indbeasiswa

❒ NSFW MENU ❐
๏ ${prefix}lewdk
๏ ${prefix}erok
๏ ${prefix}tits
๏ ${prefix}keta
๏ ${prefix}solo
๏ ${prefix}eron
๏ ${prefix}lewd
๏ ${prefix}trap
๏ ${prefix}yuri
๏ ${prefix}ero
๏ ${prefix}holoero
๏ ${prefix}erofeet
๏ ${prefix}blowjob
๏ ${prefix}cum_jpg
๏ ${prefix}eroyuri
๏ ${prefix}hentai
๏ ${prefix}femdom
๏ ${prefix}nsfw_avatar
๏ ${prefix}kemonomimi
๏ ${prefix}pussy_jpg
๏ ${prefix}lewdkemo
๏ ${prefix}hololewd
๏ ${prefix}futanari
๏ ${prefix}hololewd
๏ ${prefix}hentai4everyone
๏ ${prefix}animebellybutton
๏ ${prefix}biganimetiddies
๏ ${prefix}lewdanimegirls
๏ ${prefix}hentaifemdom
๏ ${prefix}animearmpits
๏ ${prefix}hentaiparadise
๏ ${prefix}animethighss
๏ ${prefix}animebooty
๏ ${prefix}animefeets
๏ ${prefix}sideoppai
๏ ${prefix}hololewd
๏ ${prefix}ahegao
๏ ${prefix}ecchi
๏ ${prefix}yaoi
๏ ${prefix}trap
๏ ${prefix}chiisaihentai
๏ ${prefix}loli
๏ ${prefix}waifu
๏ ${prefix}neko

❒ OTHER MENU ❐
๏ ${prefix}ping
๏ ${prefix}speed
๏ ${prefix}inspect
๏ ${prefix}caripesan
๏ ${prefix}linkwa query
๏ ${prefix}ssweb 
๏ ${prefix}ssweb2
๏ ${prefix}ssweb3
๏ ${prefix}spamsms
๏ ${prefix}spamchat
๏ ${prefix}get
๏ ${prefix}jadibot
๏ ${prefix}listjadibot
๏ ${prefix}get
๏ ${prefix}readmore
๏ ${prefix}resoomer
๏ ${prefix}tinyurl
๏ ${prefix}cuttly
๏ ${prefix}isgd
๏ ${prefix}term<code>
๏ x
๏ vote
๏ devote

╭─❒ 「 TQTO 」 
│ Allah SWT
│ Vall Popaye
│ MhankBarBar
│ MRHRTZ
│ KIZAKIXD
│ BrCode (Me)
│ DENZ
│ ARIFI RAZZAQ
│ FA DEV 
│ ALL API
│ AND OTHER BOT BUILDERS
└──────────────────❍

╭─❒ 「 PESAN 」 
│Thank you very much for using this bot.
│And sorry if there are still many errors.
│We will fix the error soon :)
└──────────────────❍`

buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}sc`,buttonText:{displayText: '🤖 SCRIPT'},type:1}]
      
      imageMsg = (await brcode.prepareMessageMedia(fs.readFileSync(`./lib/lilulu.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./lib/lilulu.jpeg`)})).imageMessage
      
        buttonsMessage = {
               contentText: `${pe}`,
               footerText: '_*© 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙱𝚛𝙲𝚘𝚍𝚎*_', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: {mentionedJid: [sender, owner]}, quoted: ftrol})
               brcode.relayWAMessage(prep)
               
               break
    case 'islammenu':
      hijrah = `❒ ISLAM MENU ❐
๏ ${prefix}listsurah
๏ ${prefix}quran
๏ ${prefix}ayat
๏ ${prefix}audiosurah
๏ ${prefix}audioayat
๏ ${prefix}jadwalsholat
๏ ${prefix}niatsholat
๏ ${prefix}asmaulhusna
๏ ${prefix}kisahnabi`
    buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]
      
        buttonsMessage = {
               contentText: `${hijrah}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
      break
  case 'ownermenu':
    owen = `❒ OWNER MENU ❐
๏ ${prefix}mode
๏ ${prefix}bc
๏ ${prefix}bc2
๏ ${prefix}bcgc
๏ ${prefix}ban
๏ ${prefix}unban
๏ ${prefix}setcmd
๏ ${prefix}delcmd
๏ ${prefix}listcmd
๏ ${prefix}shutdown
๏ ${prefix}status
๏ ${prefix}leave
๏ ${prefix}oleave 
๏ ${prefix}addupdate
๏ ${prefix}infoupdate
๏ ${prefix}resetupdate
๏ ${prefix}leaveall
๏ ${prefix}setpp
๏ ${prefix}setthumb
๏ ${prefix}setfakeimg
๏ ${prefix}setreply
๏ ${prefix}settarget
๏ ${prefix}upswteks
๏ ${prefix}upswimage
๏ ${prefix}upswvideo`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]
      
        buttonsMessage = {
               contentText: `${owen}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
    break
  case 'groupmenu':
    gp =`❒ GROUP MENU ❐
๏ ${prefix}welcome
๏ ${prefix}antilink
๏ ${prefix}add
๏ ${prefix}kick
๏ ${prefix}promote
๏ ${prefix}demote
๏ ${prefix}group 
๏ ${prefix}nsfw
๏ ${prefix}afk 
๏ ${prefix}delete
๏ ${prefix}linkgc
๏ ${prefix}setnamegc
๏ ${prefix}setdeskgc
๏ ${prefix}creategrup
๏ ${prefix}voting
๏ ${prefix}delvote
๏ ${prefix}listadmin
๏ ${prefix}sider 
๏ ${prefix}user`

buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]
      
        buttonsMessage = {
               contentText: `${gp}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
    break
  case 'downloadmenu':
    dlmenu = `❒ DOWNLOAD MENU ❐
๏ ${prefix}ytsearch
๏ ${prefix}play
๏ ${prefix}play2
๏ ${prefix}video2 
๏ ${prefix}ytdl
๏ ${prefix}ytmp3
๏ ${prefix}ytmp4
๏ ${prefix}ytshort
๏ ${prefix}igdl 
๏ ${prefix}fb
๏ ${prefix}twitterimg 
๏ ${prefix}twittervideo
๏ ${prefix}twnowm
๏ ${prefix}tiktokaudio
๏ ${prefix}spotify 
๏ ${prefix}jooxplay
๏ ${prefix}telestick
๏ ${prefix}brainly
๏ ${prefix}komiku
๏ ${prefix}chara
๏ ${prefix}playstore
๏ ${prefix}otaku 
๏ ${prefix}storynime`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${dlmenu}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
    break
  case 'stalkmenu':
    stlk = `❒ STALKER ❐
๏ ${prefix}tiktokstalk
๏ ${prefix}igstalk
๏ ${prefix}githubstalk
๏ ${prefix}pptiktok`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${stlk}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
    break
  case 'randomimg':
    rndmg = `❒ RANDOM IMG ❐
๏ ${prefix}pinterest
๏ ${prefix}wallpaper2
๏ ${prefix}wallpaper
๏ ${prefix}anime 
๏ ${prefix}image 
๏ ${prefix}cogan
๏ ${prefix}cecan 
๏ ${prefix}wallnime
๏ ${prefix}animefanart
๏ ${prefix}art
๏ ${prefix}bts
๏ ${prefix}exo
๏ ${prefix}elf
๏ ${prefix}shota
๏ ${prefix}husbu
๏ ${prefix}sagiri
๏ ${prefix}shinobu
๏ ${prefix}megumin`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${rndmg}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
    break
  case 'makermenu':
    makek = `❒ MAKER MENU ❐
๏ ${prefix}sticker
๏ ${prefix}swm
๏ ${prefix}take
๏ ${prefix}fdeface
๏ ${prefix}emoji 
๏ ${prefix}attp 
๏ ${prefix}ttp
๏ ${prefix}ttp2
๏ ${prefix}ttp3
๏ ${prefix}ttp4`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${makek}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
    break
  case 'ephotomaker':
    emaker = `❒ EPHOTO MAKER ❐
๏ ${prefix}cartoongravity
๏ ${prefix}freefire
๏ ${prefix}goldplaybutton
๏ ${prefix}silverplaybutton
๏ ${prefix}anonymhacker
๏ ${prefix}mlwall
๏ ${prefix}aovwall
๏ ${prefix}logogaming
๏ ${prefix}fpslogo
๏ ${prefix}lolbanner
๏ ${prefix}avatardota
๏ ${prefix}codwarzone
๏ ${prefix}cutegravity
๏ ${prefix}realvintage
๏ ${prefix}wetglass
๏ ${prefix}multicolor3d
๏ ${prefix}watercolor
๏ ${prefix}luxurygold
๏ ${prefix}galaxywallpaper
๏ ${prefix}lighttext
๏ ${prefix}beautifulflower
๏ ${prefix}royaltext
๏ ${prefix}heartshaped`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${emaker}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
    break
  case 'convertmenu':
  cnvrt =`❒ CONVERT ❐
๏ ${prefix}toimg
๏ ${prefix}tomp3
๏ ${prefix}tomp4
๏ ${prefix}slow
๏ ${prefix}fast
๏ ${prefix}reverse
๏ ${prefix}tourl`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${cnvrt}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
break
case 'funmenu':
fnmn = `❒ FUN MENU❐
๏ ${prefix}tts 
๏ ${prefix}tod
๏ ${prefix}asupan
๏ ${prefix}fitnah
๏ ${prefix}fitnahpc
๏ ${prefix}teruskan
๏ ${prefix}kontak
๏ ${prefix}memerandom
๏ ${prefix}memeindo
๏ ${prefix}darkjoke
๏ ${prefix}bisakah
๏ ${prefix}kapankah
๏ ${prefix}apakah
๏ ${prefix}bagaimanakah
๏ ${prefix}rate
๏ ${prefix}sangecek
๏ ${prefix}gaycek
๏ ${prefix}lesbicek
๏ ${prefix}gantengcek
๏ ${prefix}cantikcek
๏ ${prefix}watak
๏ ${prefix}hobby
๏ ${prefix}jadian 
๏ ${prefix}ngewe
๏ ${prefix}terganteng
๏ ${prefix}tercantik`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${fnmn}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
break
case 'primbonmenu':
pmbn = `❒ PRIMBON ❐
๏ ${prefix}artinama
๏ ${prefix}zodiak
๏ ${prefix}jodoh
๏ ${prefix}weton
๏ ${prefix}tgljadian`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${pmbn}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
break
case 'randomtext':
randomtek = `❒ RANDOM TEXT ❐
๏ ${prefix}quotes
๏ ${prefix}quotesdilan
๏ ${prefix}quotesislami
๏ ${prefix}katabijak
๏ ${prefix}quotesanime
๏ ${prefix}bucin`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${randomtek}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
break
case 'tagmenu':
tgmn = `❒ TAG ❐
๏ ${prefix}hidetag
๏ ${prefix}tagall
๏ ${prefix}kontag
๏ ${prefix}sticktag
๏ ${prefix}totag`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${tgmn}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
break
case 'infomenu':
menuinpo = `❒ INFO MENU ❐
๏ ${prefix}owner
๏ ${prefix}infosc
๏ ${prefix}cektokenlistrik
๏ ${prefix}wikipedia
๏ ${prefix}covidindo
๏ ${prefix}covidglobal
๏ ${prefix}lolcek
๏ ${prefix}chord
๏ ${prefix}lirik
๏ ${prefix}jadwaltv
๏ ${prefix}jadwaltvnow
๏ ${prefix}cekresijnt
๏ ${prefix}jaraktempuh
๏ ${prefix}indbeasiswa`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${menuinpo}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
break
case 'nsfwmenu':
menunsfw = `❒ NSFW MENU ❐
๏ ${prefix}lewdk
๏ ${prefix}erok
๏ ${prefix}tits
๏ ${prefix}keta
๏ ${prefix}solo
๏ ${prefix}eron
๏ ${prefix}lewd
๏ ${prefix}trap
๏ ${prefix}yuri
๏ ${prefix}ero
๏ ${prefix}holoero
๏ ${prefix}erofeet
๏ ${prefix}blowjob
๏ ${prefix}cum_jpg
๏ ${prefix}eroyuri
๏ ${prefix}hentai
๏ ${prefix}femdom
๏ ${prefix}nsfw_avatar
๏ ${prefix}kemonomimi
๏ ${prefix}pussy_jpg
๏ ${prefix}lewdkemo
๏ ${prefix}hololewd
๏ ${prefix}futanari
๏ ${prefix}hololewd
๏ ${prefix}hentai4everyone
๏ ${prefix}animebellybutton
๏ ${prefix}biganimetiddies
๏ ${prefix}lewdanimegirls
๏ ${prefix}hentaifemdom
๏ ${prefix}animearmpits
๏ ${prefix}hentaiparadise
๏ ${prefix}animethighss
๏ ${prefix}animebooty
๏ ${prefix}animefeets
๏ ${prefix}sideoppai
๏ ${prefix}hololewd
๏ ${prefix}ahegao
๏ ${prefix}ecchi
๏ ${prefix}yaoi
๏ ${prefix}trap
๏ ${prefix}chiisaihentai
๏ ${prefix}loli
๏ ${prefix}waifu
๏ ${prefix}neko`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${menunsfw}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
break
case 'othermenu':
othel = `❒ OTHER MENU ❐
๏ ${prefix}ping
๏ ${prefix}speed
๏ ${prefix}inspect
๏ ${prefix}caripesan
๏ ${prefix}linkwa query
๏ ${prefix}ssweb 
๏ ${prefix}ssweb2
๏ ${prefix}ssweb3
๏ ${prefix}spamsms
๏ ${prefix}spamchat
๏ ${prefix}get
๏ ${prefix}jadibot
๏ ${prefix}listjadibot
๏ ${prefix}get
๏ ${prefix}readmore
๏ ${prefix}resoomer
๏ ${prefix}tinyurl
๏ ${prefix}cuttly
๏ ${prefix}isgd
๏ ${prefix}term<code>
๏ x
๏ vote
๏ devote`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕ DONASI'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: '🔙 TO MENU'},type:1}]

        buttonsMessage = {
               contentText: `${othel}`,
               footerText: 'Powered by: BrCode',
               buttons: buttons,
               headerType: 1
}

          prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               brcode.relayWAMessage(prep)
break
case 'cmnd':
  boi = await brcode.getStatus(`${human.split('@')[0]}@s.whatsapp.net`, MessageType.text)
  ownbi = await brcode.getStatus(`${owner.split('@')[0]}@s.whatsapp.net`, MessageType.text)
  if (isBanned) return reply(mess.banned)
  if (!isUser) return reply(mess.noregis)
  tognya = `@${sender.split('@')[0]}`
 listMsg = {
 buttonText: 'CLICK HERE',
 footerText: 'Please click the button below to see the menu list\n\n*Powered by: BrCode*',
 description: `╭─❒ 「 BOT INFO 」
│➪ BOT NAME : ${namabot}
│➪ BOT NUMBER : wa.me/${botnom.split('@')[0]}
│➪ BATTERY : ${baterai.battery}
│➪ PREFIX :「 MULTI PREFIX 」
│➪ TOTAL USER:  ${user.length} 
│➪ TOTAL HIT : ${cmddhit.length} Today
│➪ BOT MODE : ${banChats ? "SELF-MODE" : "PUBLIC-MODE"}
└──────────────────❒

╭─❒ 「 INFO OWNER 」
│➪ OWNER NAME : ${namaowner}
│➪ TAG OWNER : @${owner.split('@')[0]}
│➪ NOMOR OWNER : wa.me/${owner.split('@')[0]}
│➪ BIO OWNER : ${ownbi.status}
│➪ ULTAH OWNER : ${ultahown} lagi
└──────────────────❒

╭─❒ 「 USER & TIME 」
│➪ ${ucapanWaktu} ${tognya}
│➪ NAME  : ${pushname}
│➪ NOMOR : wa.me/${human.split('@')[0]}
│➪ BIO INFO: ${boi.status}
│➪ ADMIN : ${isGroupAdmins ? 'Yes' : 'No'}
│➪ WIB   : ${timeWib}
│➪ WIT   : ${timeWit}
│➪ WITA  : ${timeWita}
└──────────────────❒`,
 sections: [
                     {
                      "title": `List Menu Lilulu-Bot`,
 rows: [
                          {
                              "title": "ALL MENU",
                              "rowId": `${prefix}pe`
                           },
                           {
                              "title": "ISLAM MENU",
                              "rowId": `${prefix}islammenu`
                           },
                           {
                              "title": "OWNER MENU",
                              "rowId": `${prefix}ownermenu`
                           },
                           {
                              "title": "GROUP MENU",
                              "rowId": `${prefix}groupmenu`
                           },
                           {
                              "title": "DOWNLOAD MENU",
                              "rowId": `${prefix}downloadmenu`
                           },
                           {
                              "title": "STALKER MENU",
                              "rowId": `${prefix}stalkmenu`
                           },
                           {
                              "title": "RANDOM IMAGE",
                              "rowId": `${prefix}randomimg`
                           },
                           {
                              "title": "MAKER MENU",
                              "rowId": `${prefix}makermenu`
                           },
                           {
                              "title": "EPHOTO MAKER",
                              "rowId": `${prefix}ephotomaker`
                           },
                           {
                              "title": "CONVERT MENU",
                              "rowId": `${prefix}convertmenu`
                           },
                           {
                              "title": "FUN MENU",
                              "rowId": `${prefix}funmenu`
                           },
                           {
                              "title": "PRIMBON MENU",
                              "rowId": `${prefix}primbonmenu`
                           },
                           {
                              "title": "RANDOM TEXT",
                              "rowId": `${prefix}rndmtek`
                           },
                           {
                              "title": "TAG MENU",
                              "rowId": `${prefix}tagmenu`
                           },
                           {
                              "title": "INFO MENU",
                              "rowId": `${prefix}infomenu`
                           },
                           {
                              "title": "NSFW MENU",
                              "rowId": `${prefix}nsfwmenu`
                           },
                           {
                              "title": "OTHER MENU",
                              "rowId": `${prefix}othermenu`
                           }
                        ]
                     }],
 listType: 1
}
brcode.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender, owner]},quoted:ftoko})
break
               
            case 'developer':
            case 'author':
              if (!isUser) return reply(mess.noregis)
              if (isBanned) return reply(mess.banned)
                brcode.sendMessage(from, {displayname: "Owner Lilulu", vcard: vcard}, MessageType.contact, { quoted: ftoko})
                    .then((res) => brcode.sendMessage(from, '*Tuh Kontak ownerku, jangan di spam ya!*', text, {quoted: res}))
                break
   case 'shutdown':
     if (!isOwner) return reply(mess.only.ownerb)
           if (!brc.key.fromMe) return 
             reply(`Dada Kak...`)
             await sleep(3000)
             process.exit()
             break
    case 'officialgc': 
      if (!isUser) return reply(mess.noregis)
      gece = `Yuk join di grup official ${namabot}\n\nLink: https://chat.whatsapp.com/Js6oZK5vblfHhGfNhNiaRZ`
      reply(gece)
      break
  
    case 'donasi':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      reply('mau donasi apa cuman liat-liat nih?')
      dnt =`◪𝗱𝗼𝗻𝗮𝘀𝗶
│ Silahkan scan QRIS code diatas
│ atau menggunakan metode di bawah ini
├─ ❏ DANA
├─ ❏ 085156724122
├─ ❏ OVO
├─ ❏ 089688543712
├─ ❏ PULSA
├─ ❏ 085156724122
├─ ❏ linkAja
├─ ❏ 085156724122
├─ ❑ SAWERIA
├─ ❑ https://saweria.co/EfZyN
├─ ❏ Qris
└─ ❏ https://cutt.ly/QrQris`
  //idnt = fs.readFileSync('./src/donate.jpeg')
  buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText:'BACK TO MENU'},type:1}]
  
  imageMsg = (await brcode.prepareMessageMedia(fs.readFileSync(`./src/donate.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./lib/lilulu.jpeg`)})).imageMessage
  
  //imgnya = fakethumb(idnt, dnt)
    buttonsMessage = {
      contentText: `${dnt}`,
      footerText: '©copyright FznAdmn', imageMessage: imageMsg,
      buttons: buttons,
      headerType: 4
    }
    
    prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               brcode.relayWAMessage(prep)
               break
               
 case 'igowner' :
               reply('https://instagram.com/efzyn_')
               break
case 'verify':
  sendButMessage(from, `*Registrasi User* ${namabot}`, 'Silahkan klik Button untuk verifikasi', [
    {
  buttonId: `${prefix}butverify`,
  buttonText: {
    displayText: 'VERIFIKASI 🔐',
  },
  type: 1,
    },
  ])
  break
  case 'butverify':
    if (isUser) return reply(mess.udhregis)
				const seriTod = bikinSerial(20)
				try {
				ppimg = await brcode.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				//imglu = 'https://i.ibb.co/khbXv6f/IMG-20210527-084101.jpg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				user.push(sender)
				fs.writeFileSync('./database/user.json', JSON.stringify(user))
				jadiUser(sender, seriTod)
				const vertek = 
`
╭─「 PENDAFTARAN USER 」
│Pendaftaran Berhasil
│Pada ${date} ${time}
│Nama: ${pushname}
│Tags: @${sender.split('@')[0]}
│Nomor: wa.me/${human.split('@')[0]}
│Untuk Menggunakan Bot
│Silahkan Kirim ${prefix}menu
│Total Pengguna: ${user.length} Orang
╰─────────────────────────
║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║
  ${seriTod}

`
                buttons = [{buttonId: `${prefix}menu`, buttonText: {displayText: '📑 SHOW MENU'}, type: 1}]
                
                buttonsMessage = {
                  contentText: `${vertek}`,
                  footerText: '©Lilulu-BOT 2k21',
                  buttons: buttons,
                  headerType: 1
                }
                periv = await brcode.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: {mentionedJid: [sender]}, quoted: fkontak})
               brcode.relayWAMessage(periv)
                break
    
case 'buttons1':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: brc, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: brc, mimetype: 'video/mp4', filename: res[0].output})
              break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
         if (!isUser) return reply(mess.noregis)
         if (isBanned) return reply(mess.banned)
        if (!isOwner && !brc.key.fromMe) return 
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = brc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
         if (!isUser) return reply(mess.noregis)
         if (isBanned) return reply(mess.banned)
         if (!isOwner && !brc.key.fromMe) return 
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = brc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
         if (!isUser) return reply(mess.noregis)
         if (isBanned) return reply(mess.banned)
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
case 'notif':
  if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)				
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await brcode.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: ftoko
}
await brcode.sendMessage(from, options, text)
break
//=====================GROUP MENU=====================//
case 'welcome':
  if (!isUser) return reply(mess.noregis)
				if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !brc.key.fromMe) return reply(mess.only.adming)
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply(`[❗] Fitur ${command} sudah aktif`)
				welkom.push(from)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else if (!q){
			kom ='*WELCOME BUTTON*\n\nSilahkan pilih salah satu dibawah ini\nOn : untuk mengaktifkan\nOff : untuk menonaktifkan'
				butwel = [{buttonId: `${prefix}welcome 1`, buttonText: {displayText: 'ON ✔'}, type: 1}, {buttonId: `${prefix}welcome 0`, buttonText: {displayText: 'OFF ✖'}, type: 1}]
				
				welbut = {
				  contentText: `${kom}`,
				  footerText: `©lilulu-bot`,
				  buttons: butwel,
				  headerType: 1
				}
				brcode.sendMessage(from, welbut, MessageType.buttonsMessage, {quoted: fkontak})
			}
				break
    case 'antilink':
              if (!isUser) return reply(mess.noregis)
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !brc.key.fromMe) return reply(mess.only.adming)
			if (!isBotGroupAdmins) return reply('bot harus jadi admin terlebih dahulu')
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						brcode.sendMessage(from, `**====================WARNING!====================*
Grup ini sudah di pasang antilink. Jika ingin chare link grup silahkan izin terlebih dahulu kepada admin grup atau minta tolong sharekan kepada admin grup. namun jika anda tetap melanggar maka akan saya kick`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!q){
 anu =`*ANTILINK BUTTON*\n\nSilahkan pilih salah satu\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: `${prefix}antilink off`, buttonText: {displayText: 'OFF ✖'}, type: 1},{buttonId: `${prefix}antilink on`, buttonText: {displayText: 'ON ✔'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '©lilulu-bot',
    buttons: punten,
    headerType: 1
}
await brcode.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftoko})
					}
					break
   /*  case 'add':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.adming)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (brc.message.extendedTextMessage === undefined || brc.message.extendedTextMessage === null) return reply('Reply targetnya!')
			add = brc.message.extendedTextMessage.contextInfo.participant
		    brcode.groupAdd(from, [add])
				reply('Sukses menambahkan peserta') 
				reply('maaf fitur ini sedang dalam perbaikan')
				break */
			/*	case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.adming)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (brc.message.extendedTextMessage === undefined || brc.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kick = brc.message.extendedTextMessage.contextInfo.participant
		    brcode.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
						
						reply('maaf fitur ini sedang dalam perbaikan')
                    break */
    case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !brc.key.fromMe) return reply('Maaf fitur ini tidak dibuka lagi untuk public dikarenakan bot jadi mudah dibanned oleh WhatsApp. Dan sekarang fitur ini hanya untuk owmer bot saja')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara bro!')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						brcode.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !brc.key.fromMe) return reply('Maaf fitur ini tidak dibuka lagi untuk public dikarenakan bot jadi mudah dibanned oleh WhatsApp. Dan sekarang fitur ini hanya untuk owmer bot saja')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (brc.message.extendedTextMessage === undefined || brc.message.extendedTextMessage === null) return reply('Tag target yang ingin di kick!')
					mentioned = brc.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						brcode.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						brcode.groupRemove(from, mentioned)
					}
					break
    case 'okick':
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isOwner && !brc.key.fromMe) return reply('Maaf fitur ini tidak dibuka lagi untuk public dikarenakan bot jadi mudah dibanned oleh WhatsApp. Dan sekarang fitur ini hanya untuk owmer bot saja')
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'oadd':
        if (!isOwner && !brc.key.fromMe) return reply('Maaf fitur ini tidak dibuka lagi untuk public dikarenakan bot jadi mudah dibanned oleh WhatsApp. Dan sekarang fitur ini hanya untuk owmer bot saja')
             if (brc.message.extendedTextMessage === null || brc.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             brcode.groupAdd(from, [entah])
             } else {
             entah = brc.message.extendedTextMessage.contextInfo.participant
             brcode.groupAdd(from, [entah])
}
             break
 case 'demote':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.adming)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
                if (brc.message.extendedTextMessage === undefined || brc.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan dari admin group!')
                mentioned = brc.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Perintah diterima, menurunkan dari admin group :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                brcode.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`Perintah diterima, menurunkan @${mentioned[0].split('@')[0]} dari admin group`, mentioned, true)
                brcode.groupDemoteAdmin(from, mentioned)
                }
                break
			    case 'promote':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.adming)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
                if (brc.message.extendedTextMessage === undefined || brc.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group!')
                mentioned = brc.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Selamat Anda naik menjadi admin group 🎉 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                brcode.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`Selamat 🥳 @${mentioned[0].split('@')[0]} Anda naik menjadi admin group 🎉`, mentioned, true)
                brcode.groupMakeAdmin(from, mentioned)
                }
                break
                /*
                case 'kickall':
                brcode.updatePresence(from, Presence.composing) 
                if (!isOwner) return reply('maaf fitur beresiko bot ter-Banned oleh WhatsApp, jadi hanya Owner yang bisa menggunakan fitur ini!!!')
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = groupMembers.map(v => v.jid)
                mentioned = members_id
                using = mentioned.filter(u => !(u == isOwner || u.includes(brcode.user.jid)))
                for (let member of using) {
                if (member.endsWith('@s.whatsapp.net')) 
                await delay(3000)
                await brcode.groupRemove(from, members_id)
                }
                reply('sukses kick all member')
			    break
			    */
		case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.adming)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   if (!isUser) return reply(mess.noregis)
                   if (isBanned) return reply(mess.banned)
                   reply(`*GRUP ${groupName} TELAH DIBUKA KEMBALI❗*`)
						brcode.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
	case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.adming)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   if (!isUser) return reply(mess.noregis)
                   if (isBanned) return reply(mess.banned)
						reply(`*GRUP ${groupName} TELAH DI TUTUP. SILAHKAN TUNGGU HINGGA DIBUKA KEMBALI❗*`)
						brcode.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
		    case 'group2':
        if (!isGroup) return reply(mess.only.group)
       if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        if (!isGroupAdmins) return reply(mess.only.adming)
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
        if (args.length < 1) return reply(`*${prefix}group open : untuk membuka chat grup*\n*${prefix}group close : untuk menutup grup*`)
       if (args[0] === 'open') {
				 reply(`*GRUP TELAH DI BUKA KEMBALI「❗」*`)
      brcode.groupSettingChange(from, GroupSettingChange.messageSend, false)
            } else if (args[0] === 'close') {
            reply(`*GRUP TELAH DI TUTUP, SILAHKAN TUNGGU HINGGA DIBUKA KEMBALI「❗」*`)
				brcode.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
    case 'group':
    case 'gcchatsetting':
      if (!isGroup && brc.key.fromMe) return reply(mess.only.group)
      if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
      sendButMessage(from, 'GROUP SETTING', 'silahkan pilih salah satu dibawah ini!', [
        {
          buttonId: `${prefix}opengc`,
          buttonText: {
            displayText: '🔓 BUKA GROUP',
          },
          type: 1,
        },
        {
          buttonId: `${prefix}closegc`,
          buttonText: {
            displayText: '🔐 TUTUP GROUP',
          },
          type: 1,
        },
        ]);
        break
		case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.adming)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
					if (args.length < 1) return reply(`*mau di rubah apa nih nama grupnya?*\n*Contoh: ${prefix + command} grup lilulu-bot*`)
					brcode.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break		
    case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.adming)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
          if (args.length < 1) return reply(`Teks Deskripsi untuk grupnya mana?`)
					brcode.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
  	case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
			argz = arg.split('|')
				if (brc.message.extendedTextMessage != undefined){
                    mentioned = brc.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					brcode.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
    case 'delvote':
      if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
            if(!brc.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !brc.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (brc.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || brc.message.extendedTextMessage.contextInfo == null) {
            let id = brc.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'listadmin':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				
				 case "groupinfo":
				   if (!isUser) return reply(mess.noregis)
				   if (isBanned) return reply(mess.banned)
        if (!isGroup) return reply(mess.only.group)
        ppUrl = await brcode.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        brcode.sendMessage(from, buffergbl, image, {
          quoted: brc,
          caption: `*【GROUP INFO】*\n*✦ Name* : ${groupName}\n*✦ Member* : ${groupMembers.length}\n*✦ Admin* : ${groupAdmins.length}\n*✦ Deskripsi* : \n${groupDesc}`,
        });
        break;
					case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
				if (!isUser) return reply(mess.noregis)
			  if (isBanned) return reply(mess.banned)
				linkgc = await brcode.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group ${groupName}`
				brcode.sendMessage(from, yeh, text, {quoted: brc})
				break
		case 'afk':
		  if (!isUser) return reply(mess.noregis)
		  if (isBanned) return reply(mess.banned)
        alasan = args.join(" ")
        afk[sender.split('@')[0]] = alasan.toLowerCase()
        fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
        aefka = "Anda telah afk\n\n"
        if (alasan != "") {
        aefka += "Dengan alasan :"  + alasan
                    }
          reply(aefka)
        break
    case 'nsfw':
        if (isBanned) return reply(mess.banned)
				if (!isGroup) return reply(mess.group)
				if (!isGroupAdmins && !brc.key.fromMe) return reply('Hanya admin grup yang bisa aktifkan mode nsfw')
				if (!isUser) return reply(mess.noregis)
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`Fitur ${command} sudah aktif !!!`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`Berhasil mengaktifkan fitur ${command} pada group ini !!!`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`Berhasil menonaktifkan fitur ${command} pada group ini !!!`)
				} else if (!q){
			ngw ='*NSFW BUTTON*\n\nSilahkan pilih salah satu dibawah ini\nOn : untuk mengaktifkan\nOff : untuk menonaktifkan'
				butngw = [{buttonId: `${prefix}nsfw 1`, buttonText: {displayText: 'ON ✔'}, type: 1}, {buttonId: `${prefix}nsfw 0`, buttonText: {displayText: 'OFF ✖'}, type: 1}]
				
				ngowe = {
				  contentText: `${ngw}`,
				  footerText: `©lilulu-bot`,
				  buttons: butngw,
				  headerType: 1
				}
				brcode.sendMessage(from, ngowe, MessageType.buttonsMessage, {quoted: fkontak})
			}
				break
		case 'simih':
		  /*
        if (isBanned) return reply(mess.banned)
				if (!isGroup) return reply(mess.group)
				if (!isGroupAdmins && !brc.key.fromMe) return reply('Hanya admin grup yang bisa aktifkan mode nsfw')
				if (!isUser) return reply(mess.noregis)
				if (Number(args[0]) === 1) {
				if (isSimi) return reply(`Fitur ${command} sudah aktif !!!`)
				samah.push(from)
				fs.writeFileSync('./database/simi.json', JSON.stringify(samah))
				reply(`Berhasil mengaktifkan fitur ${command} pada group ini !!!`)
				} else if (Number(args[0]) === 0) {
				samah.splice(from, 1)
				fs.writeFileSync('./database/simi.json', JSON.stringify(samah))
				reply(`Berhasil menonaktifkan fitur ${command} pada group ini !!!`)
				} else if (!q){
			sim ='*NSFW BUTTON*\n\nSilahkan pilih salah satu dibawah ini\nOn : untuk mengaktifkan\nOff : untuk menonaktifkan'
				simsim = [{buttonId: `${prefix}simih 1`, buttonText: {displayText: 'ON ✔'}, type: 1}, {buttonId: `${prefix}simih 0`, buttonText: {displayText: 'OFF ✖'}, type: 1}]
				
				samasimi = {
				  contentText: `${sim}`,
				  footerText: 'Powered by: BrCode',
				  buttons: simsim,
				  headerType: 1
				}
				brcode.sendMessage(from, samasimi, MessageType.buttonsMessage, {quoted: fkontak})
			}
			*/
			reply('maaf fitur ini dimatikan karena bot jadi sering off sendiri dan sering eror')
				break
 case 'listonline':
          if (!isUser) return reply(mess.noregis)
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(brcode.chats.get(ido).presences), brcode.user.jid]
             brcode.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: brc, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'sider':
        if (!isUser) return reply(mess.noregis)
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await brcode.messageInfo(from, brc.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
    case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (brc.message.extendedTextMessage === undefined || brc.message.extendedTextMessage === null) return reply('Reply chat bot')
               brcode.deleteMessage(from, {id: brc.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
    case 'totaluser': 
      case 'user': 
        if (!isUser) return reply(mess.noregis)
        tot = `${petik}total verified users ${namabot} : ${user.length}${petik}`
        reply(tot)
        break
    case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await brcode.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await brcode.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				brcode.sendMessage(from, buffer, image, {quoted: brc})
		} else {
		}
			  break
//==================BATAS BRO================//
    case 'linkwa':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    brcode.sendMessage(from,link,video,{quoted: brc,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    brcode.sendMessage(from,link,image,{quoted: brc,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if(!q)return reply('pesannya apa bang?')
            let v = await brcode.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await brcode.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'otaku':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            brcode.sendMessage(from,ram,image,{quoted:brc,caption:rem})
            break
    case 'komiku':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await brcode.sendMessage(from,li,image,{quoted: brc})
            break
            /*
    case 'pinterest':
      
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await brcode.sendMessage(from,di,image,{quoted: brc})
            break
            */
    case 'playstore':
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`Aplikasi apa yang mau di cari bro?\ncontoh: ${prefix + command} whatsapp`)
         var apk = args.join(' ')
         rest = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${LolKey}&query=${apk}`)
         restbro = rest.result
         let store = '❉─────────────────────❉\n'
            for (let i of restbro){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.title}
- *Link* : ${i.url}
- *Dev* : ${i.developer}
- *Rating* : ${i.scoreText}
- *Harga* : ${i.priceText}\n❉─────────────────────❉`
            }
            reply(store)
            break
    
    case 'on':
            if (!brc.key.fromMe) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break
             
    case 'status':
      if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    
    case 'off':
            if (!brc.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break
    case 'get':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if (!brc.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            brcode.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if ((isMedia && !brc.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await brcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await brcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            brcode.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if ((isMedia && !brc.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await brcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await brcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            brcode.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !brc.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await brcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await brcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            brcode.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !brc.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await brcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await brcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            brcode.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !brc.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await brcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await brcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            brcode.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
        case 'settarget':
          if (!isUser) return reply(mess.noregis)
          if (isBanned) return reply(mess.banned)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    //===================FUN MENU====================//
    case 'fitnah':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = brc.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            brcode.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'fitnahpc':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = brc.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await brcode.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await brcode.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
      case 'memeindo':
      case 'darkjoke':
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
        mems = await getBuffer(`https://api.lolhuman.xyz/api/meme/${command}?apikey=${LolKey}`)
        await brcode.sendMessage(from, mems, image, {quoted: brc})
        break
    case 'memerandom':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      memernd = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${LolKey}`)
      await brcode.sendMessage(from, memernd, image, {quoted: brc})
      break
      case 'tts':
        try{
                if (!isUser) return reply(mess.noregis)
				if (isBanned) return reply(mess.banned)
				if (args.length < 1) return brcode.sendMessage(from, `Diperlukan kode bahasa!!, ketik ${prefix}bahasa\ncontoh: ${prefix + command} id|halo bro`, text, {quoted: brc})
				pien = args.join(' ')
				bohoso = arg.split('|')[0]
				nv = arg.split('|')[1]
				baper = await getBuffer(`https://api.lolhuman.xyz/api/gtts/${bohoso}?apikey=${LolKey}&text=${nv}`)
				brcode.sendMessage(from, baper, MessageType.audio, {quoted: brc, mimetype: "audio/mp4", ptt: true})
        } catch (e){
          console.log(color(e, `red`))
          reply(`${e}`)
        }
				break
			case 'bahasa':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				brcode.sendMessage(from, bahasa(), text, {quoted: fkontak})
				break
			case 'tolak': 
			const cupu = `@${sender.split('@')[0]}`
			var tol = `${cupu} Anda telah berhenti dari games TRUTH OR DARE\nSilahkan untuk para member grup boleh memberi hukuman random, namun ${cupu} berhak memilih hukuman yang ingin dia jalani`
			var group = await brcode.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
		 sendButLocation(from, `${tol}`, `${wmnya}`, {jpegThumbnail: todImg}, [{buttonId: ` `, buttonText: {displayText: 'OK BWANG'}, type: 1}, {buttonId: `${prefix}tod`, buttonText: {displayText: 'TOD LAGI :)'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: mem }})
			  break
			case 'tod':
			 case 'truthordare':
			  if (isBanned) return reply(mess.banned)
			  if (!isUser) return reply(mess.noregis)
			  sistod = `@${sender.split('@')[0]}`
			  const yok = true
			  const tods = ['truth', 'dare', 'truth1', 'dare1', 'dare2', 'truth2']
			  const tds = tods[Math.floor(Math.random() * tods.length)]
			  if (tds == 'truth'){
			    tk = `Hai kak ${sistod}, TOD ini RANDOM ya, dan saat ini anda mendapat *TRUTH CARD*\nSilahkan klik TERIMA untuk lanjut menjawab pertanyan random dari bot!\nJika anda menekan TOLAK, maka anda harus menerima hukuman dari teman main/grup anda`
			    sendButLocation(from, `${tk}`, `${wmnya}`, {jpegThumbnail: todImg}, [{buttonId: `${prefix}truth`, buttonText: {displayText: `TERIMA`}, type: 1}, {buttonId: `${prefix}tolak`, buttonText: {displayText: 'TOLAK'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  } else if (tds == 'dare'){
			    smp = `Hai kak ${sistod}, TOD ini RANDOM ya, dan saat ini anda mendapat *DARE CARD*\nSilahkan klik TERIMA untuk lanjut menjawab pertanyan random dari bot!\nJika anda menekan TOLAK, maka anda harus menerima hukuman dari teman main/grup anda`
			    sendButLocation(from, `${smp}`, `${wmnya}`, {jpegThumbnail: todImg}, [{buttonId: `${prefix}dare`, buttonText: {displayText: `TERIMA`}, type: 1}, {buttonId: `${prefix}tolak`, buttonText: {displayText: 'TOLAK'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  } else if (tds == 'truth1'){
			    tk = `Hai kak ${sistod}, TOD ini RANDOM ya, dan saat ini anda mendapat *TRUTH CARD*\nSilahkan klik TERIMA untuk lanjut menjawab pertanyan random dari bot!\nJika anda menekan TOLAK, maka anda harus menerima hukuman dari teman main/grup anda`
			    sendButLocation(from, `${tk}`, `${wmnya}`, {jpegThumbnail: todImg}, [{buttonId: `${prefix}truth`, buttonText: {displayText: `TERIMA`}, type: 1}, {buttonId: `${prefix}tolak`, buttonText: {displayText: 'TOLAK'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  } else if (tds == 'dare1'){
			    smp = `Hai kak ${sistod}, TOD ini RANDOM ya, dan saat ini anda mendapat *DARE CARD*\nSilahkan klik TERIMA untuk lanjut menjawab pertanyan random dari bot!\nJika anda menekan TOLAK, maka anda harus menerima hukuman dari teman main/grup anda`
			    sendButLocation(from, `${smp}`, `${wmnya}`, {jpegThumbnail: todImg}, [{buttonId: `${prefix}dare`, buttonText: {displayText: `TERIMA`}, type: 1}, {buttonId: `${prefix}tolak`, buttonText: {displayText: 'TOLAK'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  } else if (tds == 'dare2'){
			    smp = `Hai kak ${sistod}, TOD ini RANDOM ya, dan saat ini anda mendapat *DARE CARD*\nSilahkan klik TERIMA untuk lanjut menjawab pertanyan random dari bot!\nJika anda menekan TOLAK, maka anda harus menerima hukuman dari teman main/grup anda`
			    sendButLocation(from, `${smp}`, `${wmnya}`, {jpegThumbnail: todImg}, [{buttonId: `${prefix}dare`, buttonText: {displayText: `TERIMA`}, type: 1}, {buttonId: `${prefix}tolak`, buttonText: {displayText: 'TOLAK'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  } else if (tds == 'truth2'){
			    tk = `Hai kak ${sistod}, TOD ini RANDOM ya, dan saat ini anda mendapat *TRUTH CARD*\nSilahkan klik TERIMA untuk lanjut menjawab pertanyan random dari bot!\nJika anda menekan TOLAK, maka anda harus menerima hukuman dari teman main/grup anda`
			    sendButLocation(from, `${tk}`, `${wmnya}`, {jpegThumbnail: todImg}, [{buttonId: `${prefix}truth`, buttonText: {displayText: `TERIMA`}, type: 1}, {buttonId: `${prefix}tolak`, buttonText: {displayText: 'TOLAK'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  }
			  break
			case 'truth':
			  try {
         if (!isUser) return reply(mess.noregis)
         if (isBanned) return reply(mess.banned)
         jujur = `@${sender.split('@')[0]}`
			const trut = JSON.parse(fs.readFileSync('./database/truth.json'))
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
			//	truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				ruth = `*TRUTH*\nTolong jawab pertanyaan dibawah ya kak ${jujur}\n\n`+ ttrth
				sendButLocation(from, `${ruth}`, `${wmnya}`, {jpegThumbnail: trthImg}, [{buttonId: `${prefix}tod`, buttonText: {displayText: `TOD LAGI`}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  } catch (e) {
			    console.log(color(e, 'red'))
			    reply(`${e}`)
			  }
				break
				case 'dare':
				  try {
				if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
        berani = `@${sender.split('@')[0]}`
	      const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
				const der = dare[Math.floor(Math.random() * dare.length)]
				//tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				tdare = `*DARE*\nWajib dilaksanakan ya kak ${berani}\n\n`+ der
				sendButLocation(from, `${tdare}`, `${wmnya}`, {jpegThumbnail: dareImg}, [{buttonId: `${prefix}tod`, buttonText: {displayText: `TOD LAGI`}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
				  } catch (e) {
			    console.log(color(e, 'red'))
			    reply(`${e}`)
			  }
				break
		case 'bisakah':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				bisakah = body.slice(1)
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: fkontak })
				break
		        case 'kapankah':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				kapankah = body.slice(1)
				const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: fkontak })
				break
		        case 'apakah':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				apakah = body.slice(1)
				const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: fkontak })
				break
		        case 'bagaimanakah':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				bagaimanakah = body.slice(1)
				const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
				const mana = bagai[Math.floor(Math.random() * bagai.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: fkontak })
				break
		        case 'rate':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				rate = body.slice(1)
				const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: fkontak })
				break
                case 'sangecek':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				sange = body.slice(1)
				const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const nge = sang[Math.floor(Math.random() * sang.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: fkontak })
				break
                case 'gaycek':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				gayy = body.slice(1)
				const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const yag = gay[Math.floor(Math.random() * gay.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: fkontak })
				break
                case 'lesbicek':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				lesbii = body.slice(1)
				const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: fkontak })
				break
                case 'gantengcek':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				ganteng = body.slice(1)
				const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: fkontak })
				break
		        case 'cantikcek':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				cantik = body.slice(1)
				const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const tik = can[Math.floor(Math.random() * can.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: fkontak })
				break
		        case 'watak':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				watak = body.slice(1)
				const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
				const tak = wa[Math.floor(Math.random() * wa.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: fkontak })
				break
		        case 'hobby':
                if (!isUser) return reply(mess.noregis)
                if (isBanned) return reply(mess.banned)
				hobby = body.slice(1)
				const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
				const by = hob[Math.floor(Math.random() * hob.length)]
				brcode.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: fkontak })
				break
		case 'jadian':
				if (!isGroup) return reply(mess.group)
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
				jds = []
				const jdii = groupMembers
				const koss = groupMembers
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				sendButLocation(from, `${teks}`, `${wmnya}`, {jpegThumbnail: lopeImg}, [{buttonId: ` `, buttonText: {displayText: 'CIEE 🙈'}, type: 1}, {buttonId: `${prefix}jadian`, buttonText: {displayText: 'JADIAN?'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: jds}, quoted: brc})
				break
			case 'ngewe':
				if (!isGroup) return reply(mess.group)
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
				nw = []
				const ngwo = groupMembers
				const dalem = groupMembers
				const nkok = ngwo[Math.floor(Math.random() * ngwo.length)]
				const been = dalem[Math.floor(Math.random() * dalem.length)]
				teks = `Yang kemarin ngewe di grup ini adalah @${nkok.jid.split('@')[0]} dan @${been.jid.split('@')[0]} `
				nw.push(nkok.jid)
				nw.push(been.jid)
				sendButLocation(from, `${teks}`, `${wmnya}`, {jpegThumbnail: ngwImg}, [{buttonId: ` `, buttonText: {displayText: 'DIDALAM KAH?'}, type: 1}, {buttonId: `${prefix}ngewe`, buttonText: {displayText: 'NGEWE?'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: nw}, quoted: brc})
				break
			case 'terganteng':
				if (!isGroup) return reply(mess.group)
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
				tg = []
				const tmpn = groupMembers
				const tmpan = tmpn[Math.floor(Math.random() * tmpn.length)]
				teks = `Yang paling ganteng di grup ini adalah @${tmpan.jid.split('@')[0]}`
				tg.push(tmpan.jid)
				sendButLocation(from, `${teks}`, `${wmnya}`, {jpegThumbnail: koceImg}, [{buttonId: ` `, buttonText: {displayText: 'TAPI BOONG HAHA'}, type: 1}, {buttonId: `${prefix}terganteng`, buttonText: {displayText: 'TERGANTENG?'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: tg}, quoted: brc})
				break
			case 'tercantik':
				if (!isGroup) return reply(mess.group)
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
				memk = []
				const betina = groupMembers
				const binik = betina[Math.floor(Math.random() * betina.length)]
				teks = `Yang paling cantik di grup ini adalah @${binik.jid.split('@')[0]}`
				memk.push(binik.jid)
				sendButLocation(from, `${teks}`, `${wmnya}`, {jpegThumbnail: koceImg}, [{buttonId: ` `, buttonText: {displayText: 'TAPI BOONG HAHA'}, type: 1}, {buttonId: `${prefix}tercantik`, buttonText: {displayText: 'TERCANTIK?'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: memk}, quoted: brc})
				break
//=============================================================//
//========================PRIMBON==============================//
    case 'artinama':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`sertakan namanya!\ncontoh: ${prefix + command} Fauzan`)
      nama = body.slice(10)
      arti = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${LolKey}&nama=${nama}`)
      artnam = arti.result 
      brcode.sendMessage(from, artnam, text, {quoted: brc})
      break
    case 'zodiak':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`sertakan zodiakmu ya!!`)
      zdk = body.slice(8)
      zdksaya = await fetchJson(`https://api.lolhuman.xyz/api/zodiak/${zdk}?apikey=${LolKey}`)
      brcode.sendMessage(from, zdksaya.result, text, {quoted: brc})
      break
    case 'jodoh':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length < 1)return reply(`contoh: ${prefix + command} fauzan|doi`)
      jodo = args.join(' ')
      nama1 = jodo.split("|")[0];
      nama2 = jodo.split("|")[1];
      bufff = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${LolKey}`)
      jdsayy = bufff.result
      teks = `Positif : ${jdsayy.positif}\n`
      teks += `Negative : ${jdsayy.negatif}\n`
      teks += `Deskripsi : ${jdsayy.deskripsi}\n`
      bgpoto = await getBuffer(jdsayy.image)
      brcode.sendMessage(from, bgpoto, image, {quoted: brc, caption: teks})
      break
    case 'weton':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`pengguanaan urutan: tanggal, bulan, tahun\nContoh: ${prefix + command} 19|06|1999`)
      wet = args.join(' ')
      tingil = body.slice(7)
      bulbul = wet.split("|")[0];
      tahu = wet.split("|")[1];
   /* tingil adalah tanggal
      bulbul adalah bulan
      tahu adalah tahun */
      wetonn = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tingil}/${bulbul}/${tahu}?apikey=${LolKey}`)
      resnya =  wetonn.result
      teks = `Weton : ${resnya.weton}\n`
      teks += `Karakter : ${resnya.karakter}\n`
      teks += `Pekerjaan : ${resnya.pekerjaan}\n`
      teks += `Rezeki : ${resnya.rejeki}\n`
      teks += `Jodoh : ${resnya.jodoh}\n`
      brcode.sendMessage(from, teks, text, {quoted: brc})
      break
    case 'tanggaljadian':
    case 'tgljadian':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`contoh: ${prefix + command} 19 12 2018`)
      haduh = args.join(' ')
      tanggal = args[0]
      bulan = args[1]
      tahun = args[2]
      resmi = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${LolKey}`)
      teks = `Karakteristik : ${resmi.result.karakteristik}\nDeskripsi : ${resmi.result.deskripsi}`
      reply(teks)
      break
//=============================================================//
//====================RANDOM TEXT==========================//
    case 'quote':
    case 'quotes':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      quot = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${LolKey}`)
      isi = quot.result
      teks = `"${isi.quote}"`
      bt = `${isi.by}`
     buttons = [{buttonId:`${prefix}quotes`, buttonText:{displayText:'⏩ NEXT'},type:1},
     {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      
      buttonsMessage = {
      contentText: `${teks}`,
      footerText: `${bt}`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               brcode.relayWAMessage(prep)
      break
    case 'quotesdilan':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      qtdilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${LolKey}`)
      buttons = [{buttonId:`${prefix}quotesdilan`, buttonText:{displayText:'⏩ NEXT'},type:1},
      {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `"${qtdilan.result}"`,
      footerText: `Quotes Dilan`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               brcode.relayWAMessage(prep)
      
      break
  case 'quotesislami':
    if (!isUser) return reply(mess.noregis)
    if (isBanned) return reply(mess.banned)
    qi = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${LolKey}`)
    buttons = [{buttonId:`${prefix}quotesislami`, buttonText:{displayText:'⏩ NEXT'},type:1},
    {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `"${qi.result}"`,
      footerText: `©lilulu-bot 2k21`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               brcode.relayWAMessage(prep)
      
      break
      
  case 'katabijak':
    if (!isUser) return reply(mess.noregis)
    if (isBanned) return reply(mess.banned)
    ktbi = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${LolKey}`)
    buttons = [{buttonId:`${prefix}katabijak`, buttonText:{displayText:'⏩ NEXT'},type:1},
    {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `"${ktbi.result}"`,
      footerText: `©lilulu-bot 2k21`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               brcode.relayWAMessage(prep)
      
      break
      
  case 'katabucin':
  case 'bucin':
    if (!isUser) return reply(mess.noregis)
    if (isBanned) return reply(mess.banned)
    buc = await fetchJson(`https://api.lolhuman.xyz/api/random/bucin?apikey=${LolKey}`)
    buttons = [{buttonId:`${prefix}katabucin`, buttonText:{displayText:'⏩ NEXT'},type:1},
    {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `"${buc.result}"`,
      footerText: `©lilulu-bot 2k21`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               brcode.relayWAMessage(prep)
      
      break
      
    case 'quotesanime':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      anim = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${LolKey}`)
      wibu = anim.result 
      buttons = [{buttonId:`${prefix}quotesanime`, buttonText:{displayText:'⏩ NEXT'},type:1},
    {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `${petik}${wibu.character} Said:${petik}\n\n*"${wibu.quote}"*\n\n${petik}In Anime: ${wibu.anime}\n${wibu.episode}${petik}`,
      footerText: `©lilulu-bot 2k21`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               brcode.relayWAMessage(prep)
      
      break
      
    case 'quotesimg':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      restnya = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${LolKey}`)
      imgnya = restnya.result
      buttons = [{buttonId:`${prefix}quotesimg`, buttonText:{displayText:'⏩NEXT'},type:1}]
      
      imageMsg = (await brcode.prepareMessageMedia(`${imgnya}`, 'imageMessage', {thumbnail: fs.readFileSync(`./lib/lilulu.jpeg`)})).imageMessage
      
      buttonsMessage = {
      footerText: `©lilulu-bot 2k21`, imageMessage: imageMsg,
      buttons: buttons,
      headerType: 4
    }
    
    prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               brcode.relayWAMessage(prep)
               break
  case 'rndmtek':
    if (isBanned) return reply(mess.banned)
    if (!isUser) return reply(mess.noregis)
    //rnmess = '*RANDOM TEXT MENU*\n\n'
    listMsg = {
      buttonText: 'CLICK HERE',
      footerText: 'Powered by: BrCode',
      description: '*RANDOM TEXT MENU*\nKlik button untuk melihat listnya\n\n',
      sections: [
              {
                   "title": "List Random Text",
        rows: [
                {
                  "title": "QUOTES",
                  "rowId": `${prefix}quotes`
                },
                {
                  "title": "QUOTES DILAN",
                  "rowId": `${prefix}quotesdilan`
                },
                {
                  "title": "QUOTES ISLAMI",
                  "rowId": `${prefix}quotesislami`
                },
                {
                  "title": "QUOTES ANIME",
                  "rowId": `${prefix}quotesanime`
                },
                {
                  "title": "KATA BIJAK",
                  "rowId": `${prefix}katabijak`
                },
                {
                  "title": "KATA BUCIN",
                  "rowId": `${prefix}bucin`
                }
          ]
             
      }],
    listType: 1
    }
    brcode.sendMessage(from, listMsg, MessageType.listMessage, {quoted: fkontak})
    break
      
//=====================BATAS===========================//
    case 'tomp3':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await brcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            brcode.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: brc })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await brcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            brcode.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: brc })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await brcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            brcode.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: brc })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await brcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            brcode.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: brc })
            fs.unlinkSync(ran)
            })
            break
//======================RANDOM IMG=====================°=====//
    case 'anime':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            brcode.sendMessage(from,media,image,{quoted:brc,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
      case 'wallpaper2':
        try{
        if (!isUser) return reply(mess.noregis)
            if (isBanned) return reply(mess.banned)
            if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
             query = args.join(' ')
             reply(mess.wait)
             wall = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${LolKey}&query=${query}`)
             restwall = wall.result
             wallp = await getBuffer(restwall)
             await brcode.sendMessage(from, wallp, image, {quoted: brc, caption: 'nih wallpapernya'})
        } catch (e){
          console.log(`Error :`, color(e,'red'))
          reply(`${e}`)
       reply('Yahh error:(. coba lagi gih :)')
        }
                    break
    case 'pinterest':
      try{
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply('gambar apa yang mau di cari?')
      poto = args.join('')
      reply(mess.wait)
      penteres = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${LolKey}&query=${poto}`)
      gam = await getBuffer(penteres.result)
      await brcode.sendMessage(from, gam, image, {quoted: brc, caption: 'nih ngab'})
      } catch (e){
        console.log(`Error :`, color(e,'red'))
        reply(`${e}`)
       reply('Yahh error:(. coba lagi gih :)')
      }
      break
    case 'image':
      try{
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply(`gambar apa yang mau di cari?\ncontoh: ${prefix + command} loli kawaii`)
      srcp = args.join(' ')
      reply(mess.wait)
      gamb = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${LolKey}&query=${srcp}`)
      await brcode.sendMessage(from, gamb, image, {quoted: brc, caption: 'nih ngab'})
      } catch (e){
        console.log(`Error :`, color(e,'red'))
        reply(`${e}`)
       reply('Yahh error:(. coba lagi gih :)')
      }
      break
    case 'cogan':
    case 'cecan':
    case 'wallnime':
      try{
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      reply(mess.wait)
      ranbrc = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
      await brcode.sendMessage(from, ranbrc, image, {quoted: brc, caption: 'nih ngab'})
      } catch (e){
        console.log(`Error :`, color(e,'red'))
        reply(`${e}`)
       reply('Yahh error:(. coba lagi gih :)')
      }
      break
    case 'animefanart':
      try {
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      reply(mess.wait)
      animfan = await getBuffer(`https://api.lolhuman.xyz/api/random/art?apikey=${LolKey}`)
      await brcode.sendMessage(from, animfan, image, {quoted: brc, caption: 'wibu awokwok'})
      } catch (e){
        console.log(`Error :`, color(e,'red'))
        reply(`${e}`)
       reply('Yahh error:(. coba lagi gih :)')
      }
      break
   case 'art':
   case 'bts':
   case 'exo':
   case 'elf':
   case 'shota':
   case 'husbu':
   case 'sagiri':
   case 'shinobu':
   case 'megumin':
     try {
     if (!isUser) return reply(mess.noregis)
     if (isBanned) return reply(mess.banned)
     reply(mess.wait)
    gem = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
    await brcode.sendMessage(from, gem, image, { quoted: brc, caption: 'nih gengs'})
                    
     } catch (e){
       console.log(`Error :`, color(e,'red'))
       reply(`${e}`)
       reply('Yahh error:(. coba lagi gih :)')
     }
                    break
//===============================================================//
    case 'kontak':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            brcode.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await brcode.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, brcode, brc, from)
			break
//==========================MAKER MENU=========================//
case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
      if (!isUser) return reply(mess.noregis)
          if (isBanned) return reply(mess.banned)
            if ((isMedia && !brc.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            const media = await brcode.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                brcode.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: brc})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && brc.message.videoMessage.seconds < 11 || isQuotedVideo && brc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
                const media = await brcode.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            brcode.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: brc})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break           
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !brc.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
             media = await brcode.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            brcode.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: brc })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            brcode.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: brc })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && brc.message.videoMessage.seconds < 11 || isQuotedVideo && brc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
            const media = await brcode.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            brcode.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: brc })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            brcode.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: brc })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'ttp':
    case 'ttp2':
    case 'ttp3':
    case 'ttp4':
     case 'attp':
      if (args.length == 0) return reply(`Example: ${prefix + command} lilulu`)
      ini_txt = args.join(" ")
      ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LolKey}&text=${ini_txt}`)
      await brcode.sendMessage(from, ini_buffer, sticker, { quoted: brc })
              break
//========================OWNER MENU=========================//
case 'leave':
  if (!isUser) return reply(mess.noregis)
		if (!isGroup) return reply(mess.only.group)
		if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
		brcode.updatePresence(from, Presence.composing)
		brcode.groupLeave(from)
				break
	case 'oleave':
	  if (!isUser) return reply(mess.noregis)
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
				setTimeout( () => {
				brcode.groupLeave (from) 
				}, 2000)
				setTimeout( () => {
				brcode.updatePresence(from, Presence.composing) 
				brcode.sendMessage(from, 'Bye cuk disuruh keluar ama Ownerku🗣', text, {quoted: fkontak})
				}, 0)
				break
	case 'leaveall':
    if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
     let totalgroup = brcode.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
     for (let id of totalgroup) {
    sendMess(id, 'Byee', null)
    await sleep(3000)
    brcode.groupLeave(id)
    }
             break
	case 'setprofile':
	case 'setpp':
	brcode.updatePresence(from, Presence.composing)
	if (!isQuotedImage) return reply('Reply imagenya!')
		if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
		enmediau = JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		mediau = await brcode.downloadAndSaveMediaMessage(enmediau)
		await brcode.updateProfilePicture(botNumber, mediau)
		reply('Sukses')
				break
    case 'upswteks':
      if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
      if (isBanned) return reply(mess.banned)
            if (!q) return fakestatus('Isi teksnya!')
            brcode.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
case 'upswaudio':
  if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
  if (isBanned) return reply(mess.banned)
            if (isQuotedAudio) {
            const swsw = isQuotedAudio ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            cihcih = await brcode.downloadMediaMessage(swsw)
            brcode.sendMessage('status@broadcast', cihcih, audio, { caption: `${q}` }) 
            bur = `Sukses Upload Story Audio dengan Caption: ${q}`
            brcode.sendMessage(from, bur, text, { quoted: brc })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'upswimage':
      if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
      if (isBanned) return reply(mess.banned)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            cihcih = await brcode.downloadMediaMessage(swsw)
            brcode.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            brcode.sendMessage(from, bur, text, { quoted: brc })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
      if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
      if (isBanned) return reply(mess.banned)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            cihcih = await brcode.downloadMediaMessage(swsw)
            brcode.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            brcode.sendMessage(from, bur, text, { quoted: brc })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
            const tipes = await brcode.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await brcode.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		brcode.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'mode':
      if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `☝ SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `🖐 PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
      break
    case 'public':
      if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
          	//if (!brc.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
	  if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
	  //if (!brc.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
		if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await brcode.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: brc
			}
			brcode.sendMessage(from, optionshidetag, text)
			break
	case 'tagall':
	  if (!isUser) return reply(mess.noregis)
	  if (!isGroupAdmins) return reply(mess.only.adming)
	  if (isBanned) return reply(mess.banned)
	  if (!isGroup) return reply(mess.only.group)
			if (!brc.key.fromMe && !isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					
				case 'ban':
				if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
				ban.push(bnnd)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor ${bnnd} telah dibanned!`)
				break
				case 'unban':
				if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
				ya = `${args[0].replace('@', '')}@s.whatsapp.net`
				unb = ban.indexOf(brc)
				ban.splice(unb, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor ${ya} telah di unban!`)
				break
				
				case 'block':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
				brcode.updatePresence(from, Presence.composing) 
				brcode.chatRead (from)
				brcode.blockUser (`${body.slice(7)}@c.us`, 'add')
				brcode.sendMessage(from, `Perintah Diterima, Memblokir ${body.slice(7)}@c.us`, text, {quoted: fkontak})
				break
		        case 'unblock':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
				brcode.blockUser (`${body.slice(9)}@c.us`, 'remove')
			    brcode.sendMessage(from, `Perintah Diterima, Membuka Blockir ${body.slice(9)}@c.us`, text, {quoted: fkontak})
				break
	case 'addupdate':
             if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'infoupdate':
        if (!isUser) return reply(mess.noregis)
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `•> ${i}\n`
}
             reply(updateList)
             break
      case 'resetupdate':
             if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
             var reset = []
            // glimit = reset
           _update = reset
             //console.log('Hang tight, it\'s time to reset')
            // fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply('Oke Desu ~')
             break
    case 'clearall':
             if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
             anu = await brcode.chats.all()
             brcode.setMaxListeners(25)
             for (let _ of anu) {
             brcode.deleteChat(_.jid)
          }
             reply('Sukses clear all chat :)')
             break
       case 'kickall': // Anti Banned
        if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
      case 'autorespon':
      if (!isOwner && !brc.key.fromMe) return sticOwner(from)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON ✔'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF ✖'}, type: 1}]
const respi = {
    contentText: `${anu}`,
    footerText: `${wmnya}`,
    buttons: buttons,
    headerType: 1
}
await brcode.sendMessage(from, respi, MessageType.buttonsMessage, {quoted: fkontak})
                }
                break
        case 'addrespon':
			if (!isOwner && !brc.key.fromMe) return reply(mess.ownerb)
				if (args.length < 1) return reply(`Contoh ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`sudah ada di database`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!isOwner && !brc.key.fromMe) return reply(mess.ownerb)
				if (args.length < 1) return reply(`Contoh ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`tidak ditemukan di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
    if (!isUser) return reply(mess.noregis)
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
//=========================ISLAM MENU==========================//
case 'listsurah':
  if (!isUser) return reply(mess.noregis)
  if (isBanned) return reply(mess.banned)
  data_api = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${LolKey}`)
  data_ress = data_api.result 
  teks = `*List Surah:*\n`
  for (var x in data_ress){
     teks += `${x}. ${data_ress[x]}\n`
  }
  reply(teks)
  break
case 'quran': 
  if (!isUser) return reply(mess.noregis)
  if (isBanned) return reply(mess.banned)
  if (args.length == 0) return reply(`sertakan nomor surah-nya\ncontoh: ${prefix + command}18`)
  qs = args.join(' ')
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran/${qs}?apikey=${LolKey}`)
  sursur = get_result.result 
  let surr = `Surah : ${sursur.surah}\nAsma : ${sursur.asma}\nSurah ke : ${sursur.nomor}\nJumlah Ayat : ${sursur.jumlah_ayat}\nDiturunkan Di : ${sursur.type}\nKeterangan : ${sursur.keterangan}\n\n======Ayatnya======\n`
  for (let i of get_result.result.ayat){
    arab = i.arab
    nomber = i.ayat
    arte = i.indonesia
    surr += `${arab} {${nomber}}\nArtinya : ${arte}\n`
  }
  reply(surr)
  break
  case 'ayat':
    if (!isUser) return reply(mess.noregis)
    if (isBanned) return reply(mess.banned)
    if (args.length < 1) return reply(`ayat keberapa bang?\ncontoh : ${prefix + command} 4/6`)
				reply(mess.wait)
				ct = args.join(' ')
				dap1 = ct.split('/')[0]
                dap2 = ct.split('/')[1]
				biss = await fetchJson(`https://api.lolhuman.xyz/api/quran/${dap1}/${dap2}?apikey=${LolKey}`)
				millah = biss.result
				halal = `Nomor : ${millah.nomor}\nAsma : ${millah.asma}\nSurah : ${millah.surah}\nJumlah Ayat : ${millah.jumlah_ayat}\nDiturunkan Di : ${millah.type}\nKeterangan : ${millah.keterangan}`
				teks = '=================\n'
				for (let i of biss.result.ayat) {
				teks += `Ayat : ${i.ayat}\nArab : ${i.arab}\nIndonesia : ${i.indonesia}\nLatin : ${i.latin}\n=================\n`
				suara = await getBuffer(i.audio)
				brcode.sendMessage(from, suara, audio, {mimetype: 'audio/mp3', quoted: brc})
				}
                brcode.sendMessage(from, halal, text, {quoted: fkontak})
                reply(teks.trim())
                break
    case 'audiosurah': 
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(banned)
      if (args.length == 0) return reply(`Contoh: ${prefix + command} 114`)
      reply(mess.wait)
      qry = args.join(' ')
      resst = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${qry}?apikey=${LolKey}`)
      brcode.sendMessage(from, resst, audio, {mimetype: "audio/mp4", quoted: brc})
      break
    case 'audioayat':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`sertakan nomor surah dan ayat keberapa\ncontoh: ${prefix + command} 114:3`)
      qorro = args.join(' ')
        surat = qorro.split(":")[0]
          ayaat = qorro.split(":")[1]
      data_apis = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surat}/${ayaat}?apikey=${LolKey}`)
      brcode.sendMessage(from, data_apis, audio, {mimetype: "audio/mp4", quoted: brc})
      break
    case 'waktusholat':
    case 'jadwalsholat':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`contoh: ${prefix + command} situbondo`)
      citi = args.join(' ')
      wktsh = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${citi}?apikey=${LolKey}`)
      adzan = wktsh.result
      teks = `========*WAKTU SHOLAT*========
Wilayah : ${adzan.wilayah}
Tanggal : ${adzan.tanggal}
Subuh : ${adzan.subuh}
Dzuhur : ${adzan.dzuhur}
Ashar : ${adzan.ashar}
Maghrib : ${adzan.maghrib}
isya' : ${adzan.isya}
=======================
Sahur : ${adzan.sahur}
Imsak : ${adzan.imsak}
Sholat Dhuha : ${adzan.dhuha}
Terbit Matahari : ${adzan.terbit}`
          brcode.sendMessage(from, teks, text, {quoted: fkontak})
      break
    case 'niatsholat':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`contoh: ${prefix + command} ashar`)
      five = args.join(' ')
      limawaktu = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${five}?apikey=${LolKey}`)
      niat = limawaktu.result
      sholatkuy = `*${niat.name}*\n
${niat.ar}
Latin : ${niat.latin}
Artinya : ${niat.id}`
          brcode.sendMessage(from, sholatkuy, text, {quoted: fkontak})
      break
    case 'asmaulhusna':
    case 'nama99':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      asmaul = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${LolKey}`)
      husna = asmaul.result
      baik = `Asmaul Husna ke : ${husna.index}
Arab : ${husna.ar}
Latin : ${husna.latin}
arti : ${husna.id}
Inggrisnya : ${husna.en}`

buttons = [{buttonId:`${prefix}nama99`, buttonText:{displayText:'NEXT'},type:1},
    {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `${baik}`,
      footerText: `©lilulu-bot 2k21`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               brcode.relayWAMessage(prep)
      break
    case 'kisahnabi':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`contoh: ${prefix + command} muhammad`)
      nabi = args.join(' ')
      kisahnya = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${nabi}?apikey=${LolKey}`)
      alkisah = kisahnya.result
      cerita = `*Kisah Nabi ${alkisah.name}*
Tahun Lahir : ${alkisah.thn_kelahiran}
Tempat Lahir : ${alkisah.place}
Umur : ${alkisah.age}
Kisah : \n${alkisah.story}`
        brcode.sendMessage(from, cerita, text, {quoted: brc})
      break
//========================BATAS BRO============================//
//=================INFO MENU===================//
case 'ctokenlistrik':
      case 'ctlistrik':
      case 'cektokenlistrik':
        if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply(`idnya mana broh?\ncontoh: ${prefix + command}287873876489`)
      reply(mess.wait)
      const tkn = args.join(' ')
      token = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/${tkn}?apikey=${LolKey}`)
      teks = `Nama: ${token.result.name}\n`
      teks += `Id: ${token.result.id}\n`
      teks += `Jumlah: ${token.result.amount}\n`
      brcode.sendMessage(from, teks, text, {quoted: brc})
      break
  case 'lolcek':
    if (!isUser) return reply(mess.noregis)
    if (!isGroup) return reply(mess.only.group)
    if (isBanned) return reply(mess.banned)
    try{
      ceklol = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${LolKey}`)
        lol = ceklol.result
        lolkun = `APIKEY ${body.slice(8)} is valid!!!\nUsername: ${lol.username}\nRequest: ${lol.requests}\nToday:${lol.today}\nTipe Akun: ${lol.account_type}\nExpired: ${lol.expired} `
            brcode.sendMessage(from, lolkun, text, {quoted: brc})
    } catch (e) {
      console.log(`Error:`, color(e,'red'))
      reply (`${petik}APIKEY YANG ANDA INPUT TIDAK VALID!!!${petik}`)
    } 
    break
    case 'covidindo':
      case 'covidid':
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
        copid = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${LolKey}`)
        reply(mess.wait)
        comrona = copid.result
        teksc = `*INFO COVID19 INDONESIA*\n\nPositif: ${comrona.positif}\nSembuh: ${comrona.sembuh}\nDirawat: ${comrona.dirawat}\nMeniggal: ${comrona.meninggal}\n\n${petik}KEEP SAFE YA KAWAN-KAWAN:)${petik}`
        brcode.sendMessage(from, teksc, text, {quoted: brc})
        break
    case 'covidglobal':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
        copidg = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${LolKey}`)
        reply(mess.wait)
        comronag = copidg.result
        tekscg = `*INFO COVID19 GLOBAL*\n\nPositif: ${comronag.positif}\nSembuh: ${comronag.sembuh}\nDirawat: ${comronag.dirawat}\nMeniggal: ${comronag.meninggal}\n\n${petik}KEEP SAFE YA KAWAN-KAWAN:)${petik}`
        brcode.sendMessage(from, tekscg, text, {quoted: brc})
        break
   case 'chord':
     if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      cord = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${LolKey}&query=${body.slice(7)}`)
        reply(mess.wait)
        infolag = cord.result
        laguc = `Judul lagu: ${infolag.title}\nCreated: ${infolag.created}\nChord:\n${infolag.chord}`
        brcode.sendMessage(from, laguc, text, {quoted: brc})
      break
    case 'lirik':
      if (!isUser) return reply(mess.noregis)
    if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply('judul lagu yang ingin dicari liriknya mana bro?')
      reply(mess.wait)
      jdl = args.join(' ')
      lir = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${LolKey}&query=${jdl}`)
      brcode.sendMessage(from, lir.result, text, {quoted: brc})
      break
    case 'wikipedia':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      wiki = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${LolKey}&query=${body.slice(11)}`)
      reply(mess.wait)
      wiped = wiki.result
      wikiped = `Menurut wikipedia: ${wiped}`
      brcode.sendMessage(from, wikiped, text, {quoted: brc})
      break
    case 'jadwaltv':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply('nama channel tvnya apa ngab?')
      fzxn = args[0]
      fzn = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${fzxn}?apikey=${LolKey}`)
      resl = fzn.result
      teks = `Jadwal TV ${fzxn.toUpperCase()}\n`
      for (var x in resl) {
        teks += `${x} - ${resl[x]}\n`
            }
                reply(teks)
      break
      case 'jadwaltvnow':
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${LolKey}`)
        get_result = get_result.result
        ini_txt = `Jadwal TV Now :\n`
           for (var x in get_result) {
        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
              }
          reply(ini_txt)
        break
  case 'infosc':
  case 'sc':
  case 'script':
    if (!isUser) return reply(mess.noregis)
    if (isBanned) return reply(mess.banned)
        //case ⌈❗」 by  Fauzan
esceh = `❥ *info script bot*
├⊳⊳ Base: Hexa
├⊳⊳ Creator: FznAdmn
├⊳⊳ Owner: ${namaowner}
│
└──┤Link Github├────❥
  ├✜ Github Lilulu Bot
  ├✜ https://github.com/BerrRecode/
  ├✜ Github SC bot
  ├✜ https://github.com/BerrRecode/LiluluBot-fp
  └───────────────────⊳⊳⊳ 
  
If you find bugs or error, please report to the OWNER Bot`

lokt =  [{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type:1},
{buttonId: `${prefix}infoowner`, buttonText: {displayText: '💎INFO OWNER'}, type:1}]

  imgMsg = (await brcode.prepareMessageMedia(fs.readFileSync(`./src/github.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/github.jpeg`)})).imageMessage

  batcot = {
    contentText: `${esceh}`,
    footerText: '©lilulu-bot',
    imageMessage: imgMsg,
    buttons: lokt,
    headerType: 4
  }
  
  brcode.sendMessage(from, batcot, MessageType.buttonsMessage, {quoted: fkontak, contextInfo: {mentionedJid: [sender]}})
                break
    case 'owner':
    case 'infoowner':
		        case 'infodeveloper':
		        case 'infopengembang':
		          if (!isUser) return reply(mess.noregis)
		         if (isBanned) return reply(mess.banned)
		           //case ⌈❗」 by  fauzan
 infownr = `◪ Hallo @${sender.split('@')[0]}
├ my name is Fauzan
├ From: Situbondo, East Java, Indonesia
├ I'm a student
├ and my hobby is coding
└─┤My Social Media├─⊳⊳
  ├─ ❏ WhatsApp
  ├─ ❏ 085156724122
  ├─ ❏ Github
  ├─ ❏ https://github.com/BerrRecode
  ├─ ❏ Instagram
  └─ ❏ https://www.instagram.com/efzyn_`
  
  sendButLocation(from, infownr, 'Powered by: BrCode', {jpegThumbnail:fotome}, [{buttonId:`${prefix}developer`, 
               buttonText:{displayText:'💬 NOMOR OWNER'},type:1}, {buttonId:`${prefix}infosc`,buttonText:{displayText:'🤖 INFO SCRIPT BOT'},type:1}, {buttonId:`${prefix}menu`,buttonText:{displayText:'🔙 BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [sender]}})
			break
		case 'cekresijnt':
		  if (!isUser) return reply(mess.noregis)
		  if (isBanned) return reply(mess.banned)
		  if (args.length < 1) return reply(`sertakan nomor resinya bro\nContoh: ${prefix + command} JT2591489094`)
		  resi = args.join(' ')
		  jnt = await fetchJson(`https://api.lolhuman.xyz/api/resi/jnt/${resi}?apikey=${LolKey}`)
		  resolt = jnt.result
		  pengirimnya = resolt.pengirim
		  penerimanya = resolt.penerima
		  lacakresi = resolt.history
		  teks = `*CEK NOMOR RESI*\n
*======Info Resi=======*
No Resi : ${resolt.no_resi}
Status : ${resolt.status}
Posisi saat ini : ${resolt.current_position}
Dari : ${resolt.from}
Untuk : ${resolt.to}\n
*======Info Pengirim======*
Nama : ${pengirimnya.name}
Alamat : ${pengirimnya.address}\n
*======Info Penerima=======*
Nama : ${penerimanya.name}
Alamat : ${penerimanya.address}\n\n
*------History------*\n`
		  for (var i of lacakresi){
		    teks += `Waktu : ${i.time}
Posisi : ${i.position}
Keterangan : ${i.desc}\n\n`
		  }
		  reply(teks)
		  break
		case 'kodepos':
		  if (!isUser) return reply(mess.noregis)
		  if (isBanned) return reply(mess.banned)
		  if (args.length == 0) return reply(`Sertakan nama desa/kecamatan/kota\nContoh: ${prefix + command} buduan`)
		  kotaa = body.slice(9)
		  kodebro = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${LolKey}&query=${kotaa}`)
		  resilt = kodebro.result
		  isi = `*====POSTAL CODE====*\n`
		  for (var postt of resilt){
		  isi += `Provinsi  : ${postt.province}
Kota/Kab  : ${postt.city}
kecamatan : ${postt.subdistrict}
Desa      : ${postt.urban}
Kode pos  : ${postt.postalcode}\n\n`
}
      reply(isi)
      break
  case 'jaraktempuh':
    if (!isUser) return reply(mess.noregis)
     if (isBanned) return reply(mess.banned)
		  if (args.length == 0) return reply(`Sertakan kota asal dan tujuan\nContoh: ${prefix + command} situbondo-probolinggo`)
		  kotaa = args.join(' ')
		  kota1 = kotaa.split("-")[0]
		  kota2 = kotaa.split("-")[1]
		  jeson = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${LolKey}&kota1=${kota1}&kota2=${kota2}`)
		  jaraks = jeson.result
		  teks = `*Jarak ${kota1} - ${kota2}*
Asal : ${jaraks.from.name}
tujuan : ${jaraks.to.name}
Jarak : ${jaraks.jarak}
=====Waktu Tempuh=====
Kereta api : ${jaraks.kereta_api}
Pesawat : ${jaraks.pesawat}
Mobil : ${jaraks.mobil}
Motor : ${jaraks.motor}
Jalan kaki : ${jaraks.jalan_kaki}`
    brcode.sendMessage(from, teks, text, {quoted: brc})
    break
  case 'indbeasiswa':
  case 'caribeasiswa':
    if (!isUser) return reply(mess.noregis)
    if (isBanned) return reply(mess.banned)
    bea = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${LolKey}`)
    siswa = bea.result
    beasis = `*Kumpulan Beasiswa Indonesia*\n\n`
    for (var b of siswa){
      beasis += `${b.title}
more info: ${b.link}\n\n`
    }
    reply(beasis)
    break
//===============BATAS NI=====================//
        
    case 'toimg':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await brcode.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
	    if (!isUser) return reply(mess.noregis)
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await brcode.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *LILULU-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
	  if (!isOwner) return reply(mess.only.ownerb)
	  if (isBanned) return reply(mess.banned)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
 case 'bc':
if (isBanned) return reply(mess.banned)
brcode.updatePresence(from, Presence.composing)

					if (!isOwner && !brc.key.fromMe) return reply(mess.only)

					if (args.length < 1) return reply('Teksnya?')

					anu = await brcode.chats.all()

					if (isMedia && !brc.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
						buff = await brcode.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							brcode.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !brc.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
						buff = await brcode.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							brcode.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !brc.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
						buff = await brcode.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							brcode.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

					} else {

						for (let _ of anu) {

buttons = [{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},
          {buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
            const btnbc = {
              contentText: `${body.slice(4)}`,
              footerText: '*_BROADCAST LILULU-BOT_*',
              buttons: buttons,
              headerType: 1
            }
await brcode.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftoko})

						}

						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}

					break
		case 'bc2':
		  if (isBanned) return reply(mess.banned)
brcode.updatePresence(from, Presence.composing)

					if (!isOwner && !brc.key.fromMe) return reply(mess.only)

					if (args.length < 1) return reply('Teksnya?')

					anu = await brcode.chats.all()

					if (isMedia && !brc.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
						buff = await brcode.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							brcode.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !brc.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
						buff = await brcode.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							brcode.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !brc.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
						buff = await brcode.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							brcode.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

					} else {

						for (let _ of anu) {
              
              sendMess(_.jid, `${body.slice(4)}`)

						}

						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}
		  break
		case 'bc3':
             if (!isOwner) return reply(mess.only.ownerb)
             if (isBanned) return reply(mess.banned)
				if (args.length < 1) return reply('pesannya mana?')
				anu = await brcode.chats.all()
				broadcast = args.join(' ')
				if (isMedia && !brc.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
				buff = await brcode.downloadMediaMessage(encmedia)
				for (let _ of anu) {
			    await require('delay')(3000)
				await brcode.sendMessage(_.jid, buff, image, {caption: `「 ${namabot} BROADCAST 」\n\n${broadcast}`, contextInfo: { mentionedJid: [sender] }})
				}
				} else {
				for (let _ of anu) {
				await require('delay')(3000)
				await brcode.sendMessage(_.jid, `「 ${namabot} BROADCAST 」\n\n${broadcast}`, text, { contextInfo: { mentionedJid: [sender] }})
				}
				reply('Suksess broadcast')
				}
			    break
			    case 'bcgc':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerb)
				if (isBanned) return reply(mess.banned)
				if (args.length < 1) return reply('pesannya mana?')
				anu = await groupMembers
				nom = anu.participant
			    if (isMedia && !brc.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(cok).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
				bufferzzz = await brcode.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				brcode.sendMessage(_.jid, bufferzzz, image, {caption: `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
				}
				reply('')
				} else {
				for (let _ of anu) {
				sendMess(_.jid, `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
				}
				reply('Sukses broadcast group')
				}
				break
 
	case 'setfakeimg':
	  if (!isOwner) return reply(mess.only.ownerb)
	  if (isBanned) return reply(mess.banned)
        	if ((isMedia && !brc.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
			delb = await brcode.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			/*
			case 'asupan':
brcode.cmd.on('asupan', async (data) => {
           if(data.args[0].toLowerCase() == 'ukhty') {
              brcode.sendFileFromUrl(data.from, `https://brcuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=${DapKey}`, 'ukhty.mp4', `Nih Asupannya @${data.sender.split('@')[0]}`, data.message)
            } else if(data.args[0].toLowerCase() == 'santuy') {
              brcode.sendFileFromUrl(data.from, `https://brcuhy-api.herokuapp.com/api/asupan/asupan?apikey=${DapKey}`, 'santuy.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '+62') {
              brcode.sendFileFromUrl(data.from, `https://brcuhy-api.herokuapp.com/api/asupan/asupan?apikey=${DapKey}`, '+62.mp4',`Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'bocil')  {
              brcode.sendFileFromUrl(data.from, `https://brcuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=${DapKey}`, 'bocil.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'rikagusriani') {
              brcode.sendFileFromUrl(data.from, `https://brcuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=${DapKey}`, 'rika.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'ghea') {
              brcode.sendFileFromUrl(data.from, `https://brcuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=${DapKey}`, 'ghea.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'chika') {
              brcode.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/chika?apikey=APIKEY', 'chika.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message) 
            } else if(data.args[0].toLowerCase() == 'random') {
              brcode.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/asupan?apikey=APIKEY', 'random.mp4', 'Nih', data.message)
            } else {
              		let po = brcode.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": `Menu Asupan Permintaan Dari ${data.pushname}`,
                  "description": "Pilih Di Bawah Ini!",
                  "buttonText": "Klik Disini",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "+62",
                              "rowId": `${data.prefix + data.command} +62`
                           },
						   {
                              "title": "chika",
                              "rowId": `${data.prefix + data.command} chika`
                           }, 
                           {
                             "title": " ghea", 
                             "rowId": `$${data.prefix + data.command} ghea`
                           }, 
                           {
                             "title": " ukhty", 
                             "rowId": `${data.prefix + data.command} ukhty`
                           }, 
                           {
                             "title": " bocil", 
                             "rowId": `${data.prefix + data.command} bocil`
                           }, 
                           {
                             "title": " santuy", 
                             "rowId": `${data.prefix + data. command} santuy`
                           }, 
                           {
                             "title": " random", 
                             "rowId": `${data.prefix + data.command} random`
                           }, 
                           {
                             "title": " rikagusriani", 
                             "rowId": `${data.prefix + data.command} rikagusriani`
                           }
                        ]
                     }]}}, {}) 
            brcode.relayWAMessage(po, {waitForAck: true})
            }
        })
        break
        */
//=======================ASUPAN MENU===========================//
    case 'asupansantuy':
    case 'asupanbocil':
    case 'asupanukhty':
    case 'asupanrikagusriani':
    case 'asupanghea':
        try{
      reply(mess.wait)
      asukon = await getBuffer(`https://api.dapuhy.ga/api/asupan/${command}?apikey=${DapKey}`)
      mnbt = `Klik next untuk melihat ${command} selanjutnya`
      sendButVideo(from, mnbt, 'Powered by: BerrRecode', asukon, [{buttonId: `${prefix + command}`, buttonText: {displayText: `NEXT`}, type: 1},
      {buttonId: `${prefix}asupan`, buttonText: {displayText: 'ASUPAN MENU'}, type: 1},
      {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {quoted: brc}); 
      
        } catch (e){
          console.log(color(e, `red`))
          reply(`${e}`)
        }
      break
    case 'aspnrndm':
        try{
      reply(mess.wait)
      mankon = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupan?apikey=${DapKey}`)
      bst = `Klik next untuk melihat asupan random selanjutnya`
      sendButVideo(from, bst, 'Powered by: BerrRecode', mankon, [{buttonId: `${prefix + command}`, buttonText: {displayText: `NEXT`}, type: 1},
      {buttonId: `${prefix}asupan`, buttonText: {displayText: 'ASUPAN MENU'}, type: 1},
      {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {quoted: brc}); 
        } catch (e){
          console.log(color(e, `red`))
          reply(`${e}`)
        }
      break
    case 'aspnrndm2':
      try{
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      reply(mess.wait)
      asupn = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${LolKey}`)
      asupnN = await getBuffer(asupn.result)
      jeha = `Klik next untuk melihat asupan random 2 selanjutnya`
      sendButVideo(from, jeha, 'Powered by: BerrRecode', asupnN, [{buttonId: `${prefix + command}`, buttonText: {displayText: `NEXT`}, type: 1},
      {buttonId: `${prefix}asupan`, buttonText: {displayText: 'ASUPAN MENU'}, type: 1},
      {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {quoted: brc}); 
      
          } catch (e){
          console.log(color(e, `red`))
          reply(`${e}`)
        }
      break
      
   case 'asupan':
     if (isBanned) return reply(mess.banned)
     if (!isUser) return reply(mess.noregis)
        listMsg = {
 buttonText: 'CLICK HERE',
 footerText: '*LILULU-BOT*',
 description: `Hai kak @${sender.split('@')[0]}, ${ucapanWaktu} dan selamat datang di ASUPAN MENU!.\nSilahkan pilih Asupan dibawah ini dengan cara klik tombolnya ya!`,
 sections: [
                     {
                      "title": `List Asupan`,
 rows: [
                          {
                              "title": "Asupan Random",
                              "rowId": `${prefix}aspnrndm`
                           },
                           {
                              "title": "Asupan Random 2",
                              "rowId": `${prefix}aspnrndm2`
                           },
                           {
                              "title": "Asupan Santuy",
                              "rowId": `${prefix}asupansantuy`
                           },
                           {
                              "title": "Asupan Bocil",
                              "rowId": `${prefix}asupanbocil`
                           },
                           {
                              "title": "Asupan Ukhty",
                              "rowId": `${prefix}asupanukhty`
                           },
                           {
                              "title": "Asupan Rikagusriani",
                              "rowId": `${prefix}asupanrikagusriani`
                           },
                           {
                              "title": "Asupan Ghea",
                              "rowId": `${prefix}asupanghea`
                           },
                        ]
                     }],
                listType: "SINGLE_SELECT"
          }
brcode.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftoko})
      break
//=============================================================//
	case 'setthumb':
	  if (!isOwner) return reply(mess.only.ownerb)
	    if (isBanned) return reply(mess.banned)
	        if ((isMedia && !brc.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
			delb = await brcode.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	
	case 'emoji':
	  if (!isUser) return reply(mess.noregis)
	  if (isBanned) return reply(mess.banned)
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
//=================DOWNLOAD MENU=====================//
case 'play2':
  if (!isUser) return reply(mess.noregis)
	  if (isBanned) return reply(mess.banned)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
			  fakegroup(mess.wait)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam brctuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video2':
          if (!isUser) return reply(mess.noregis)
          if (isBanned) return reply(mess.banned)
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                     
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam brctuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'playmsc':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`Sertakan link YT-nya bro\nContoh: ${prefix + command} `)
      reply(mess.wait)
      qory = args.join(' ')
      beb = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${LolKey}&query=${qory}`)
      kuh = beb.result 
      audin = kuh.audio 
      musnya = await getBuffer(audin.link)
        brcode.sendMessage(from, musnya, MessageType.audio, {mimetype: "audio/mp4", quoted: brc})
      break
    case 'playvdo':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`Sertakan link YT-nya bro\nContoh: ${prefix + command} `)
      reply(mess.wait)
      qiry = args.join(' ')
      bob = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${LolKey}&query=${qiry}`)
      kun = bob.result 
      vdo = kun.video
      vidbro = await getBuffer(vdo.link)
        brcode.sendMessage(from, vidbro, video, {quoted: brc})
      break
      case 'play':
      case 'ytplay':
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
        if (!q) return reply('judul lagunya mana?')
        reply('sedang memuat data ⏳')
        apinya = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${LolKey}&query=${q}`)
       let teksbre = `*Sukses, Data berhasil didapatkan*\n
*Title :* ${apinya.result.info.title}
*Uploader :* ${apinya.result.info.uploader}
*Channel :* ${apinya.result.info.channel}
*Views :* ${apinya.result.info.view}
*Duration :* ${apinya.result.info.duration}
*Size audio :* ${apinya.result.audio.size}
*Size video :* ${apinya.result.video.size}\n
*Jenis File :* Video/Audio
`

buttons = [{buttonId:`${prefix}playmsc ${q}`, buttonText:{displayText:'🎵 AUDIO'},type:1}, {buttonId:`${prefix}playvdo ${q}`,buttonText:{displayText:'📽 VIDEO'},type:1}]

imageMessage = (await brcode.prepareMessageMedia({url:apinya.result.info.thumbnail}, 'imageMessage', {thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: teksbre,footerText: 'silahkan pilih jenis file di bawah',imageMessage,buttons,headerType:4}

prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
brcode.relayWAMessage(prep)
        break
 /*       
case 'youtubedl':
        if (isBanned) return reply(mess.banned)
             if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ Durasi : ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await brcode.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
              brcode.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
              */
    case 'ytdl':
    case 'youtubedl':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (!q) return reply('sertakan link youtubenya')
      reply('sedang memuat info ⏳')
      data_audio = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${LolKey}&url=${q}`)
      data_video = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${LolKey}&url=${q}`)
      data_ress = `${data_video.result}`
      let yotek = `*Sukses, Data berhasil didapatkan*\n 
*Title :* ${data_video.result.title}
*Uploader :* ${data_video.result.uploader}
*Channel :* ${data_video.result.channel}
*Duration :* ${data_video.result.duration}
*Views :* ${data_video.result.view}
*Like :* ${data_video.result.like}
*Dislike :* ${data_video.result.dislike}
*Size Video :* ${data_video.result.link.size}
*Size audio :* ${data_audio.result.link.size}
*Jenis File :* Video/Audio\n`

buttons = [{buttonId:`${prefix}button3 ${q}`, buttonText:{displayText:'🎵 AUDIO'},type:1}, {buttonId:`${prefix}button4 ${q}`,buttonText:{displayText:'📽 VIDEO'},type:1}]

imageMessage = (await brcode.prepareMessageMedia({url:data_audio.result.thumbnail}, 'imageMessage', {thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: yotek,footerText: 'silahkan pilih jenis file di bawah',imageMessage,buttons,headerType:4}

prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
brcode.relayWAMessage(prep)
      break
    case 'button3':
      reply('Tunggu beberapa saat, media sedang di proses ⏳')
      los = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytmp3v2?url=${q}&apikey=${DapKey}`)
      yot = los.url
      vivid = await getBuffer(yot)
      brcode.sendMessage(from, vivid, MessageType.audio, {mimetype: "audio/mp4", quoted: brc})
      break
	case 'ytmp3':
	  if (!isUser) return reply(mess.noregis)
	  if (isBanned) return reply(mess.banned)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam brctuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
				case 'ytmp4':
				  if (!isUser) return reply(mess.noregis)
	     if (isBanned) return reply(mess.banned)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam brctuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
		case 'button4':
		  reply('Tunggu beberapa saat, media sedang di proses ⏳')
      lolvid = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytmp4v2?url=${q}&apikey=${DapKey}`)
      losu = lolvid.url
      vo = await getBuffer(losu)
      brcode.sendMessage(from, vo, video, {quoted: brc})
		  break
	  case 'ytshort':
	  case 'ytreels':
	    if (!isUser) return reply(mess.noregis)
	    if (isBanned) return reply(mess.banned)
	    if (args.length == 0) return reply(`sertakan link youtube shortnya bro\ncontoh: ${prefix + command} https://youtube.com/shorts/OpcuRTCSWOc?feature=share`)
	    ling = args.join(' ')
	    reply(mess.wait)
	    linknye = await fetchJson(`https://api.lolhuman.xyz/api/ytreels?apikey=${LolKey}&url=${ling}`)
	    ress = linknye.result
	    thumbn = await getBuffer(ress.thumbnail)
	    pipid = await getBuffer(ress.video)
	    teks = `Judul: ${ress.title}\n\nFile sedang di proses, silahkan tunggu beberapa saat! `
	    brcode.sendMessage(from, thumbn, image, {quoted: brc, caption: teks})
	    brcode.sendMessage(from, pipid, video, {quoted: brc})
	    break

 	case 'ttnowm':
 	case 'tiktokdl':
 	case 'ttdl':
 	  if (!isUser) return reply(mess.noregis)
 	    if (isBanned) return reply(mess.banned)
 		if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://vm.tiktok.com/ZSJkHUCwK/`)
        reply(mess.wait)
        link = args.join(' ')
        fznn = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${LolKey}&url=${link}`)
        uhyy = fznn.result
        buffer = await getBuffer(uhyy.link)
        magee = await getBuffer(uhyy.thumbnail)
        apatar = await getBuffer(uhyy.author.avatar)
        textt = `Username : ${uhyy.author.username}\nNickname : ${uhyy.author.nickname}\nTitle : ${uhyy.title}\nKeywords : ${uhyy.keywords}\nDescription : ${uhyy.description}\nDuration : ${uhyy.duration}\nDigg Count : ${uhyy.statistic.diggCount}\nShare Count : ${uhyy.statistic.shareCount}\nComment Count : ${uhyy.statistic.commentCount}\nPlay Count : ${uhyy.statistic.playCount}\n`
         brcode.sendMessage(from, apatar, image, {quoted: brc, caption: 'profile yang punya video:v'})
         brcode.sendMessage(from, magee, image, {quoted: brc, caption: textt})
         brcode.sendMessage(from, buffer, video, {quoted: brc, caption: 'nih videonya'})
	            break
	            
	            
     case 'brainly':
       if (!isUser) return reply(mess.noregis)
       if (isBanned) return reply(mess.banned)
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			brcode.sendMessage(from, teks, text,{quoted:brc,detectLinks: false})                        
            })              
			break
			/*
    case 'ig':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    brcode.sendMessage(from,link,video,{quoted: brc,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    brcode.sendMessage(from,link,image,{quoted: brc,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
	    */
	  case 'igdl':
	    try{
	    if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CGOivksJleVPwIQfDBplW8nDrQmOX3aVCkzUO80/`)
                reply('sedang memuat data ⏳')
                igeh = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/igdownload?url=${q}&apikey=${DapKey}`)
               // users = igeh.user 
                teks = `*Nama User : ${igeh.user.username}*
*Nama Panjang : ${igeh.user.full_name}*
*Pengikut : ${igeh.user.followers}*\n
*WARNING!*\n_Silahkan pilih format file berdasarkan media yang akan di download, misal ingin download vidio ig maka pilihlah file type video, jangan pilih yang image karena akan error_`
        //propel = await getBuffer(users.profile_picurl)
        
        buttons = [{buttonId:`${prefix}igimageboss ${q}`, buttonText:{displayText:'📸 IMAGE'},type:1}, {buttonId:`${prefix}igvidioboss ${q}`,buttonText:{displayText:'📽 VIDEO'},type:1}]

imageMessage = (await brcode.prepareMessageMedia({url:igeh.user.profile_picurl}, 'imageMessage', {thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: teks,footerText: 'silahkan pilih sesuai jenis file!',imageMessage,buttons,headerType:4}

prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
brcode.relayWAMessage(prep)
} catch(m){
  console.log(color(m, `red`))
  reply(`${m}`)
  reply('link error. pastikan link tersebut adalah link ig')
}
              break
    
    case 'igvidioboss':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply('sertakan linknya bro !!!')
      reply(mess.wait)
      lenk = args.join(' ')
      ogeh = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${LolKey}&url=${lenk}`)
      vib = await getBuffer(ogeh.result)
      brcode.sendMessage(from, vib, video, {quoted: brc, caption: 'nih ngab'})
      break
      case 'igimageboss':
        if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply('sertakan linknya bro !!!')
      reply(mess.wait)
      lonk = args.join(' ')
      ugeh = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${LolKey}&url=${lonk}`)
      vik = await getBuffer(ugeh.result)
      brcode.sendMessage(from, vik, image, {quoted: brc, caption: 'nih ngab'})
      break
    case 'fbdl':
      case 'fb':
        if (!isUser) return reply(mess.noregis)
         if (isBanned) return reply(mess.banned)
         if (args.length < 0) return reply(`contoh ${prefix + command} (linknya)`)
         ff = args.join(' ')
         reply('File sedang di proses⏳')
         burik = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${LolKey}&url=${ff}`)
         fblite = await getBuffer(burik.result)
         brcode.sendMessage(from, fblite, video, {quoted: brc})
            break    
  case 'telesticker':
      case 'telestick':
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
        if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers            /LINE_Menhera_chan_ENG`)
        ini_url = args[0]
        ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${LolKey}&url=${ini_url}`)
            ini_sticker = ini_url.result.sticker
          for (sticker_ in ini_sticker) {
          ini_buffer = await getBuffer(ini_sticker[sticker_])
          await brcode.sendMessage(from, ini_buffer, sticker)
                    }
            break
            /*
  case 'tiktokaudio':
    
    if (isBanned) return reply(mess.banned)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
     		*/
    case 'tiktokaudio':
    case 'musictiktok':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply('sertakan link tiktoknya ya !!!')
      mustik = args.join(' ')
      ttmusik = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${LolKey}&url=${mustik}`)
      brcode.sendMessage(from, ttmusik, MessageType.audio, {mimetype: "audio/mp4", quoted: brc})
      reply(mess.wait)
      break
    case 'twitterimg': 
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`Contoh: ${prefix + command} https://twitter.com/memefess/status/1385161473232543747`)
      orl = args.join(' ')
      twitApi = await fetchJson(`https://api.lolhuman.xyz/api/twitterimage?apikey=${LolKey}&url=${orl}`)
      twitRes = twitApi.result
      twitCont = await getBuffer(twitRes.link)
      teks = `*INFO USER*
Name : ${twitRes.user.name}
Username : ${twitRes.user.username}
Link PP : ${twitRes.user.photo}\n
*POST INFO*
Title : ${twitRes.title}
Publish : ${twitRes.publish}`
    brcode.sendMessage(from, twitCont, image, {quoted: brc, caption: teks})
      break
    case 'twittervideo': 
    case 'twitmp4': 
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (!q) return reply(`contoh: ${prefix + command} (link vidio twitternya)`)
      twitInfo = await fetchJson(`https://api.lolhuman.xyz/api/twitter2?apikey=${LolKey}&url=${q}`)
      twitVid = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${LolKey}&url=${q}`)
      twtResult = twitInfo.result 
      twtUser = twtResult.user
      twtCaption = `*USER INFO*
Name : ${twtUser.name}
Username : ${twtUser.username}
Title : ${twtResult.title}
Publish : ${twtResult.publish}
Duration : ${twtResult.duration}\n 
*RESOLUTION OPTION*\n`
    for (let x of twitVid.result.link) {
      twtCaption += `•> ${x.resolution}\n`
    }
    
    buttons = [{buttonId:`${prefix}twtlow ${q}`, buttonText:{displayText:'⚪ LOW/270P'},type:1},
    {buttonId:`${prefix}twtmedium ${q}`, buttonText:{displayText:'🔵 MEDIUM/360P'},type:1},
    {buttonId:`${prefix}twthd ${q}`, buttonText:{displayText:'🔴 HD/720P'},type:1}]

imageMessage = (await brcode.prepareMessageMedia({url:twitInfo.result.thumbnail}, 'imageMessage', {thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: twtCaption,footerText: 'silahkan pilih resolusi dibawah ini!',imageMessage,buttons,headerType:4}

prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
brcode.relayWAMessage(prep)
      break
      
    case 'twtlow': 
      if (!isUser) return reply(mess.noregis)
      if (args.length == 0) return reply(`sertakan link vidio twitter`)
      ini_q = args[0]
      reply('Tunggu sebentar, file media sedang di proses⏳')
    ini_url = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/twitter?url=${ini_q}&apikey=${DapKey}`)
      ini_res = ini_url.download 
      ini_vid = await getBuffer(ini_res.low)
        await brcode.sendMessage(from, ini_vid, video, { quoted: brc, caption: 'Resolution: low/270P'})
      break
    case 'twtmedium': 
      if (!isUser) return reply(mess.noregis)
      if (args.length == 0) return reply(`sertakan link vidio twitter`)
      twmed = args[0]
      reply('Tunggu sebentar, file media sedang di proses⏳')
    twMedium = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/twitter?url=${twmed}&apikey=${DapKey}`)
      twRestmed = twMedium.download
      twVidmed = await getBuffer(twRestmed.medium)
        await brcode.sendMessage(from, twVidmed, video, { quoted: brc, caption: 'Resolution: medium/360P'})
      break
    case 'twthd': 
      if (!isUser) return reply(mess.noregis)
      if (args.length == 0) return reply(`sertakan link vidio twitter`)
      twHd = args[0]
      reply('Tunggu sebentar, file media sedang di proses⏳')
    twApihd = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/twitter?url=${twHd}&apikey=${DapKey}`)
      twHddl = twApihd.download
      twHdvid = await getBuffer(twHddl.hd)
        await brcode.sendMessage(from, twHdvid, video, { quoted: brc, caption: 'Resolution: HD/720P'})
      break
    case 'spotify': 
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (!q) return reply(`Contoh: ${prefix + command} (link spotify)`)
      reply('Mohon bersabar, Permintaan sedang di proses⏳')
      spot = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${LolKey}&url=${q}`)
      sresul = spot.result
     // sthumbnail = await getBuffer(sresul.thumbnail)
      toks = `*SPOTIFY DOWNLOADER*\n 
*Judul : ${sresul.title}*
*Artis : ${sresul.artists}*
*Durasi : ${sresul.duration}*\n 
_Tunggu beberapa saat, file preview lagunya sedang di proses⏳`
      spoau = await getBuffer(sresul.preview_url)
      
      buttons = [{buttonId:`${prefix}audiospoti ${q}`, buttonText:{displayText:'📥DOWNLOAD FULL NOW'},type:1}]

imageMessage = (await brcode.prepareMessageMedia({url:spot.result.thumbnail}, 'imageMessage', {thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: toks,footerText: 'tekan tombol untuk download lagunya',imageMessage,buttons,headerType:4}

prep = await brcode.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
brcode.relayWAMessage(prep)
brcode.sendMessage(from, spoau, MessageType.audio, {mimetype: "audio/mp4", quoted: brc})
      break
      case 'audiospoti': 
        if (!isUser) return reply(mess.noregis)
        if (args.length == 0) return reply(`Contoh: ${prefix + command} (linknya)`)
        aud = args.join(' ')
        reply('File sedang diproses ⏳')
        rs = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${LolKey}&url=${aud}`)
        fname = rs.result.title
        musspof = await getBuffer(rs.result.link)
        brcode.sendMessage(from, musspof, MessageType.audio, {mimetype: "audio/mp4", filename: `${fname}.mp3`,quoted: brc})
        break
    case 'jooxplay':
      if (!isUser) return reply(mess.noregis)
       if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
             query = args.join(" ")
            get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${LolKey}&query=${query}`)
            get_result = get_result.result
            ini_txt = `Title : ${get_result.info.song}\n`
            ini_txt += `Artists : ${get_result.info.singer}\n`
            ini_txt += `Duration : ${get_result.info.duration}\n`
            ini_txt += `Album : ${get_result.info.album}\n`
            ini_txt += `Uploaded : ${get_result.info.date}\n`
            ini_txt += `Lirik :\n ${get_result.lirik}\n`
            thumbnail = await getBuffer(get_result.image)
            await brcode.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
            get_audio = await getBuffer(get_result.audio[0].link)
            await brcode.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: brc })
                    break
        case 'storynime':
			  case 'storyanime':
			    try{
			 if (!isUser) return reply(mess.noregis)
			 if (isBanned) return reply(mess.banned)
			    wibuh = await getBuffer(`https://api.dapuhy.ga/api/anime/storyanime?apikey=${DapKey}`)
			    wibo = `Klik NEXT untuk melihat ${command} selanjutnya`
      sendButVideo(from, wibo, `${wmnya}`, wibuh, [{buttonId: `${prefix + command}`, buttonText: {displayText: `NEXT`}, type: 1},
      {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {quoted: brc}); 
        } catch (e){
          console.log(color(e, `red`))
          reply(`${e}`) 
        }
			    break
//=====================BATAS DOWNLOAD MENU=====================//
   
//=====================STALKER MENU======================//
    case 'igstalk':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
				reply('[❗] Sabar lagi stalking IG nya')
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${body.slice(9)}?apikey=${LolKey}`)
				get_result = get_result.result
				txt = `Link : https://www.instagram.com/${get_result.username}\n`
				txt += `Username : ${get_result.username}\n`
				txt += `Full : ${get_result.fullname}\n`
				txt += `Post : ${get_result.posts}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.following}\n`
				txt += `Bio : ${get_result.bio}\n`
				buffer = await getBuffer(get_result.photo_profile)
				brcode.sendMessage(from, buffer, image, {quoted: brc, caption: txt})
				break
            case 'githubstalk':
            case 'stalkgit':
              if (!isUser) return reply(mess.noregis)
              if (isBanned) return reply(mess.banned)
             if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${LolKey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `Name : ${ini_result.name}\n`
              ini_txt += `Link : ${ini_result.url}\n`
              ini_txt += `Public Repo : ${ini_result.public_repos}\n`
              ini_txt += `Public Gists : ${ini_result.public_gists}\n`
              ini_txt += `Followers : ${ini_result.followers}\n`
              ini_txt += `Following : ${ini_result.following}\n`
              ini_txt += `Bio : ${ini_result.bio}`
          brcode.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                  break
    case 'tiktokstalk':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`sertakan username titok yang ingin di stalking !!!\ncontoh: ${prefix + command} bulansutena`)
      reply('wait... lagi proses stalking')
      alay = args.join(' ')
      pargoy = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${alay}?apikey=${LolKey}`)
      lecak = pargoy.result
      propil = await getBuffer(lecak.user_picture)
      esseh = `Username : ${lecak.username}\n`
      esseh += `Nickname : ${lecak.nickname}\n`
      esseh += `Bio : ${lecak.bio}\n`
      esseh += `Followers : ${lecak.followers}\n`
      esseh += `Following : ${lecak.followings}\n`
      esseh += `Likes : ${lecak.likes}\n`
      esseh += `video : ${lecak.video}`
      brcode.sendMessage(from, propil, image, {quoted: brc, caption: esseh})
      break
    case 'pptiktok':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply(`sertakan username tiktoknya !!!\ncontoh ${prefix + command} bulansutena`)
      reply(mess.wait)
      sutena = args.join(' ')
      samy = await getBuffer(`https://api.lolhuman.xyz/api/pptiktok/${sutena}?apikey=${LolKey}`)
      ini_caption = 'nih coy'
      brcode.sendMessage(from, samy, image, {quoted: brc, caption: ini_caption})
      break
//=====================BATAS STALKER======================//
    
	case 'term':
	  if (!isOwner) return reply(mess.only.ownerb)
	  if (isBanned) return reply(mess.banned)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
		    /*
    case 'join':
            try {
            if (!isOwner) return reply(mess.only.ownerb)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await brcode.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
            */
            case 'join':
				if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
				 if (args.length < 1) return reply('Link nya mana?')
					brcode.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
    case 'runtime':
    case 'test':
      if (!isUser) return reply(mess.noregis)
          if (isBanned) return reply(mess.banned)
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	  if (!isUser) return reply(mess.noregis)
	  if (isBanned) return reply(mess.banned)
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
	case 'ping':
	  case 'tes':
	    if (!isUser) return reply(mess.noregis)
	    if (isBanned) return reply(mess.banned)
	    ono = `*Hallo bro, ${namabot} is activated*`
	    brcode.sendMessage(from, ono, text, {quoted: brc})
	    break
    case 'totag':
      if (!isUser) return reply(mess.noregis)
          if (isBanned) return reply(mess.banned)
            if ((isMedia && !brc.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await brcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await brcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            brcode.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !brc.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await brcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await brcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            brcode.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !brc.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await brcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await brcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            brcode.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !brc.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await brcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await brcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            brcode.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
            if ((isMedia && !brc.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            owgi = await brcode.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
      if (!isUser) return reply(mess.noregis)
          if (isBanned) return reply(mess.banned)
            if ((isMedia && !brc.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
            owgi = await brcode.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
//===================NSFW MENU=================================//
                case 'lewdk':
                case 'erok':
                case 'tits':
                case 'keta':
                case 'solo':
                case 'eron':
                case 'lewd':
                case 'trap':
                case 'yuri':
                case 'ero':
                case 'holoero':
                case 'erofeet':
                case 'blowjob':
                case 'cum_jpg':
                case 'eroyuri':
                case 'hentai':
                case 'femdom':
                case 'nsfw_avatar':
                case 'kemonomimi':
                case 'pussy_jpg':
                case 'lewdkemo':
                case 'hololewd':
                case 'futanari':
                case 'hololewd':
                  try{
				if (!isNsfw) return reply(mess.nsfwOff)
				if (!isUser) return reply('Daftar terlebih dahulu untuk menggunakan fitur ini. cara daftar ketik *!verify*')
				if (isBanned) return reply(mess.banned)
				reply(mess.wait)
				efweh = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${LolKey}`)
				await brcode.sendMessage(from, efweh, image, {quoted: brc, caption: 'jangan 💦 yah'})
                  } catch (e){
                    console.log(`Error :`, color(e,'red'))
                  reply(`${e}`)
                  reply('Yahh error:(. coba lagi gih :)')
                  }
				break
				case 'hentai4everyone':
				case 'animebellybutton':
				case 'biganimetiddies':
				case 'lewdanimegirls':
				case 'hentaifemdom':
				case 'animearmpits':
				case 'hentaiparadise':
				case 'animethighss':
				case 'animebooty':
				case 'animefeets':
				case 'sideoppai':
				case 'hololewd':
				case 'ahegao':
				case 'ecchi':
				case 'yaoi':
				case 'trap':
				case 'chiisaihentai':
				case 'loli':
				case 'waifu':
				case 'neko':
				  try{
				if (!isNsfw) return reply(mess.nsfwOff)
				if (!isUser) return reply('Daftar terlebih dahulu untuk menggunakan fitur ini. cara daftar ketik *!verify*')
				if (isBanned) return reply(mess.banned)
				reply(mess.wait)
				lapan = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolKey}`)
				await brcode.sendMessage(from, lapan, image, {quoted: brc, caption: 'Jangan 💦 yahh'})
				  } catch (e){
				    console.log(`Error :`, color(e,'red'))
				reply(`${e}`)
       reply('Yahh error:(. coba lagi gih :)')
				  }
				break
//=====================================================================================================//
//========================EPHOTO MAKER=========================//
    case 'cartoongravity':
    case 'freefire':
    case 'goldplaybutton':
    case 'silverplaybutton':
    case 'anonymhacker':
    case 'mlwall':
    case 'aovwall':
    case 'logogaming':
    case 'fpslogo':
    case 'lolbanner':
    case 'avatardota':
    case 'wetglass':
    case 'multicolor3d':
    case 'watercolor':
    case 'luxurygold': 
    case 'galaxywallpaper': 
    case 'lighttext':
    case 'beautifulflower':
    case 'royaltext':
    case 'heartshaped':
      try {
      if (isBanned) return reply(mess.banned)
      if (!isUser) return reply(mess.noregis)
        if (args.length == 0) return reply(`Contoh: ${prefix + command} LiluluBot`)
        kon = args.join(' ')
        reply(mess.wait)
        lolbe = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolKey}&text=${kon}`)
      await brcode.sendMessage(from, lolbe, image, {quoted: fkontak})
      } catch (e) {
        console.log(`Error :`, color(e,'red'))
        reply(`${e}`)
        reply(mess.error.eror)
      }
      break
    case 'codwarzone':
    case 'cutegravity':
    case 'realvintage':
      try {
      if (isBanned) return reply(mess.banned)
      if (!isUser) return reply(mess.noregis)
        if (args.length == 0) return reply(`Contoh: ${prefix + command} Lilulu|whatsappbot`)
        koh = args.join(' ')
        pa = koh.split("|")[0]
        pi = koh.split("|")[1]
        pon = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/${command}?apikey=${LolKey}&text1=${pa}&text2=${pi}`)
       await brcode.sendMessage(from, pon, image, {quoted: fkontak})
      } catch (e) {
        console.log(`Error:`, color(e, `red`))
        reply(`${e}`)
        reply(mess.error.eror)
      }
      break
//=======================OTHER MENU=====================//
    case 'readmore':
      if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      zonk = '‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎'
      brcode.sendMessage(from, zonk, text, {quoted: brc})
      break
    case 'inspect':
      if (!isUser) return reply(mess.noregis)
          if (isBanned) return reply(mess.banned)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await brcode.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             brcode.sendMessage(from,par,text,{quoted:brc,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
              case 'ssweb':
        if (!isUser) return reply(mess.noregis)
         if (isBanned) return reply(mess.banned)
        if (args.length == 0) return reply(`Example: ${prefix + command} https://github.com/BerrRecode/`)
          ini_link = args[0]
        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${LolKey}&url=${ini_link}`)
          await brcode.sendMessage(from, ini_buffer, image, { quoted: brc })
                    break
                    /*
        case 'ssweb2':
          if (isBanned) return reply(mess.banned)
          if (args.length == 0) return reply(`sertakan link webnya`)
          wep = args.join(' ')
          apeh = await getBuffer(`https://api.site-shot.com/?url=${wep}&userkey=${ApiSite}&full_size=1&format=jpeg`)
          sendMediaURL(from, apeh, image, {quoted: brc})
          break
          */
        case 'ssweb2':
          if (!isUser) return reply(mess.noregis)
          if (args.length == 0) return reply(`sertakan link websitenya`)
          qa = args.join(' ')
          reply('screenshot in progres...')
          resll = await getBuffer(`https://api.screenshotmachine.com?key=${SsMcn}&url=${qa}&device=desktop&dimension=1024x768&format=jpg`)
          brcode.sendMessage(from, resll, image, {quoted: brc})
          break
        case 'ssweb3': 
          if (!isUser) return reply(mess.noregis)
          if (args.length == 0) return reply(`sertakan link websitenya`)
          ssw = args.join(' ')
          reply('screenshot in progres...')
          hem = await getBuffer(`https://api.pikwy.com/?token=${ApiPikwy}&u=${ssw}&fs=1`)
          brcode.sendMessage(from, hem, image, {quoted: brc})
          break
      case 'spamsms':
        if (!isUser) return reply(mess.noregis)
            if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 628481749928`)
                    reply('Sabar lagi ngespam nomornya!')
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${LolKey}&nomor=${nomor}`)
                    reply("Success")
                    break       
      case 'spamchat':
      //  if (isBanned) return reply(mess.banned)
       // if (!isUser) return reply(mess.noregis)
        if (!isOwner && !brc.key.fromMe) return reply('maaf fitur ini hanya untuk owner bot')
                    if (args.length < 1) return reply(`Mau Spamchat ke siapa? Contoh: ${prefix}spamchat 628481749928 Oy bwang`)
                    if (args[0].startsWith('08' || '+62')) return reply('Gunakan kode bahasa kak')
                    if (args[0].startsWith(`${owner}`)) return reply(`Mau Ngapain Spam Ke ownerku ${namaowner}?👿`)
                    mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                    const kontul = body.slice(8)
                    if (kontul.length > 300) return brcode.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: fkontak})
                    var nomor = brc.participant
                    const busah = `*[  SPAM CHAT  ]*\nNomor : @${nomor.split('@s.whatsapp.net')[0]}\nPesan : ${kontul}`
                    var options = {
                    text: busah,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { brcode.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    reply('awokwok SPAM CHAT BERHASIL:)')
                    break
    case 'resoomer':
      case 'persingkat':
        if (!isUser) return reply(mess.noregis)
        if (isBanned) return reply(mess.banned)
        if (args.length < 1) return reply(`Contoh: ${prefix + command} (teksnya)`)
        tok = args.join(' ')
        reply('Proses...')
        apisoomer = await fetchJson(`https://api.lolhuman.xyz/api/resoomer?apikey=${LolKey}&text=${tok}`)
        apisult = apisoomer.result
        brcode.sendMessage(from, apisult, text, {quoted: brc})
        break
    case 'tinyurl':
      case 'cuttly':
        case 'isgd':
          if (!isUser) return reply(mess.noregis)
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply('sertakan link yang mau di pendekkan bro')
      sh = args.join(' ')
      reply('process...')
      short = await fetchJson(`https://api.dapuhy.ga/api/others/${command}?url=${sh}&apikey=${DapKey}`)
      shsult = short.result
      brcode.sendMessage(from, shsult, text, {quoted: brc})
      break
    case 'shortlink':
      case 'shortlink2':
      case 'shortlink3':
      case 'shortlink4':
        if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
          ini_link = args[0]
          ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${LolKey}&url=${ini_link}`)
               reply(ini_buffer.result)
               break
//=============================================================//
/*
masih test
case 'report':
    		if (!isUser) return reply( mess.noregis)
          if (isBanned) return reply(mess.banned)
          if (args.length < 1) return reply('silahkan sertakan laporan/report/kritik/saran/request kepada owner. laporan main-main akan di block')
				rpt = body.slice(8)
				var nomeer = `@${sender.split('@')[0]}`   //brc.participant
				const lapor = `[REPORT USER]\nNomor : @${nomeer.split('@')[0]}\nPesan : ${rpt}`
				var options = {
				text: `${lapor}`,
				contextInfo: {mentionedJid: [sender]},
				}
				brcode.sendMessage(`${ownerno}@s.whatsapp.net`, options, text, {quoted: fkontak})
				reply('[❗] REPORT TELAH TERKIRIM!\nlaporan main-main akan berujung blok user!\n\nTERIMA KASIH TELAH MELAPOR ATAU MEMBERI SARAN')
				break
*/
//=============================================================//

default:
if (budy.startsWith('x')){
try {
	if (!isOwner) return reply(mess.only.ownerb)
return brcode.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: brc})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('$')){
if (!brc.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

/* matikan fitur ini jika bot sering mati
if (isGroup && isSimi && budy != undefined && body.startsWith('')) {
				console.log(budy)
				muehe = await simih(budy)
				console.log(muehe)
				reply(muehe)
				} else {
				console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
*/
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    

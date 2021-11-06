const toMs = require('ms')
const ms = require('parse-ms')
const fs = require("fs")
const afk2 = JSON.parse(fs.readFileSync('./lib/off.json'))

const addafk2 = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('2m') }
    afk2.push(obj)
    fs.writeFileSync('./lib/off.json', JSON.stringify(afk2))
}


const cekafk2 = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./lib/off.json', JSON.stringify(_dir))
        }
    }, 1000)
}


const isAfk2 = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {
 sleep,
 isAfk2,
 cekafk2,
 addafk2
}
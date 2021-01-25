exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVEL KAMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GROUP BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 REGISTRASI 」*\n\n*Cara Daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Hiks|17*`
}

exports.rediregis = () => {
	return`*「 DONE REGISTERASI 」*\n\n*Kamu sudah terdaftar di dalam database bot*`
}

exports.stikga = () => {
	return`*yahh gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apakah kamu Sudah Terdaftar Silahkah Check Message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer Bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nKamu sudah terdaftar dengan data \n\n╭──❍ Nama\n╰──❍ ${namaUser}\n╭──❍ Nomer\n╰──❍ wa.me/${sender.split("@")[0]}\n╭──❍ Umur\n╰──❍ ${umurUser}\n╭──❍ Waktu pendaftaran\n╰──❍ ${time}\n\n╭──❍ *SN* ❍──\n┣⊱${serialUser}\n╰──❍ NOTE : Jangan sampai lupa nomer nya karena itu penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner sc*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*╭──❍Level mu : ${getLevelingLevel(sender)}*\n*├❍Jenis command : ${command}*\n*╰─❍Syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*╭──❍Level mu : ${getLevelingLevel(sender)}*\n*├❍Jenis command : ${command}*\n*╰─❍Syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*╭──❍Level mu : ${getLevelingLevel(sender)}*\n*├❍Jenis command : ${command}*\n*╰─❍Syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*╭──❍Level mu : ${getLevelingLevel(sender)}*\n*├❍Jenis command : ${command}*\n*╰─❍Syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`

}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*╭──❍Level mu : ${getLevelingLevel(sender)}*\n*├❍Jenis command : ${command}*\n*╰─❍Syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*╭──❍Level mu : ${getLevelingLevel(sender)}*\n*├❍Jenis command : ${command}*\n*╰─❍Syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭─────「°❀ *ABOUT USER* ❀°」
├❍ *Nama*          : ${pushname}
├❍ *Nomer*         : wa.me/${sender.split("@")[0]}
├❍ *UangKamoh*     : Rp${uangku}
├❍ *XP*            : ${getLevelingXp(sender)}/${reqXp}
├❍ *Level*         : ${getLevelingLevel(sender)}
├❍ *User Register* : ${_registered.length}
╰────────  「 *Hiks Bot* 」  ─────────╯

╭◪ 𝐑𝐮𝐥𝐞𝐬𝐒 *Hiks BOT*
╰───────────────────
├❍⧐ *Spam : Auto Block!*
├❏⧐ *Setidaknya Beri Jeda 5 Detik Penggunaan!*
├❍⧐ *Bug/Error Harap Chat Owner!*
├❏⧐ *Mohon Bersabar Dengan Bug²nya!*
├❍⧐ *Gunakan Bot Dengan Sebaik-baiknya!*
╰─────────────────────────────

╭◪ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
├❍ Perintah/Command : 「 ${prefix} 」
├❍ Limit All User    :  20
├❍ Harap Jangan menSpam BOT.
├❍ Inget beri jeda 5 Detik.
╰──────────────────



> Have Fun And Have a Nice Day! <



╭──「 *MAKER MENU*」❍──
├❍ *${prefix}sticker*
├❍ *${prefix}vinta*
├❍ *${prefix}avengers*
├❍ *${prefix}summer*
├❍ *${prefix}sandwrite*
├❍ *${prefix}metaldark*
├❍ *${prefix}dropwater*
├❍ *${prefix}greenneon*
├❍ *${prefix}neontext*
├❍ *${prefix}sumery*
├❍ *${prefix}blood*
├❍ *${prefix}firework*
├❍ *${prefix}lava*
╰───────────────────

╭──「 *FUN MENU*」❍──
├❍ *${prefix}mining*
├❍ *${prefix}bisakah*
├❍ *${prefix}kapankah*
├❍ *${prefix}apakah*
├❍ *${prefix}rate*
├❍ *${prefix}slap*
├❍ *${prefix}tampar*
├❍ *${prefix}speed*
╰───────────────────

╭──「 *MEDIA MENU*」❍──
├❍ *${prefix}toxic*
├❍ *${prefix}quotes*
├❍ *${prefix}beritahoax*
├❍ *${prefix}brainly*
├❍ *${prefix}pinterest*
├❍ *${prefix}resepmasakan*
├❍ *${prefix}igstalk*
╰───────────────────

╭──「 *LIMIT MENU*」❍──
├❍ *${prefix}limit*
├❍ *${prefix}buylimit*
├❍ *${prefix}dompet*
╰───────────────────

╭──「 *NSFW MENU*」❍──
├❍ *${prefix}pokemon*
├❍ *${prefix}anjing*
├❍ *${prefix}1cak*
╰───────────────────

╭──「 *GROUP MENU*」❍──
├❍ *${prefix}hidetag*
├❍ *${prefix}limit*
├❍ *${prefix}level*
├❍ *${prefix}linkgc*
├❍ *${prefix}tagall*
├❍ *${prefix}otagall*
├❍ *${prefix}otagall2*
├❍ *${prefix}mentionall*
├❍ *${prefix}setpp*
├❍ *${prefix}add*
├❍ *${prefix}kick*
├❍ *${prefix}setname*
├❍ *${prefix}setdesc*
├❍ *${prefix}demote*
├❍ *${prefix}promote*
├❍ *${prefix}listadmin*
├❍ *${prefix}group* [buka/tutup]
├❍ *${prefix}leveling* [enable/disable]
├❍ *${prefix}nsfw* [1/0]
├❍ *${prefix}simih* [1/0]
├❍ *${prefix}welcome* [1/0]
╰───────────────────

╭──「 *OWNER MENU*」❍──
├❍ *${prefix}bc*
├❍ *${prefix}bcgc*
├❍ *${prefix}kickall*
├❍ *${prefix}setreply*
├❍ *${prefix}setprefix*
├❍ *${prefix}clearall*
├❍ *${prefix}block*
├❍ *${prefix}unblock*
├❍ *${prefix}leave*
├❍ *${prefix}event* [1/0]
├❍ *${prefix}clone*
├❍ *${prefix}setppbot*
╰───────────────────
╭─────「 *Gamaksa*」────
├❍ instagram.com/itspapoy
╰────  ⸨ *Hiks Bot* ⸩  ─────╯
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
╭──「°❀ 〘 KTP 〙 ❀°」
├❏ *Kartu Tanda Pemakai*
├❍ *Nama*  : ${pushname}
├❍ *Nomer* : wa.me/${sender.split("@")[0]}
├❍ *Xp*    : ${getLevelingXp(sender)}
├❍ *Level* : ${getLevel} ❍ ${getLevelingLevel(sender)}
╰──────────────
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} Limit Hari Ini Habis*\n*Limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa Limit Kamu : ${limitCounts}

NOTE : Untuk mendapatkan Limit. Bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*╭──❍ *「 ATM 」* ❍──\n├❍ *Nama* : ${pushname}\n├❍ *Nomer* : ${sender.split("@")[0]}\n├❍ *Uang* : ${uangkau}\n╰────────────`
}

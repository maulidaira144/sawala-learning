function pesanMakanan(makananTersedia, minumanTersedia ){
    return new Promise((resolve,reject ) => {
        setTimeout(() => {
        if (makananTersedia === true && minumanTersedia === true) {
            resolve ("Pesanan baso dan minuman akan dibuat")
        }
        else {
            reject("Pesanan baso dan minuman gagal dibuat")
        }
        }, 2000)
    })
}

function pesananDibuat(makananTersedia, minumanTersedia) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (makananTersedia === true && minumanTersedia === true) {
                resolve("Tunggu pesanan baso dan minuman sedang di buat")
            }
            else {
                reject("Maaf, pesanan baso dan minuman ternyata sudah habis!")
            }
        }, 1000)
    })
}

function pesananDisajikan (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Pesanan baso dan minuman siap disajikan!")
        }, 2000)
    })
}

async function tampilkanPesanan(){
    try {
        const status1 = await pesanMakanan(true, true)
        console.log(status1)
        const status2 = await pesananDibuat(true, true)
        console.log(status2)
        const status3 = await pesananDisajikan()
        console.log(status3)

    } catch (error) {
        console.log(error)

    } finally {
        console.log("Proses pesanan selesai!")
    }
}

tampilkanPesanan();
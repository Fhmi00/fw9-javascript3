const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

const hariKerja = cekHariKerja('sabtu')
// hariKerja
// .then((param1) => console.log(param1))
// akan menampilkan nama parameter ketika succes
// .catch((param2) => console.log(param2))
// menampilkan "hari ini bukan hari kerja" ketika error

async function evalHariKerja() {
    try {
        const day = await cekHariKerja()
        console.log(day);
    } catch(err) {
        console.log(err);
    }
}
function filterParkirGanjilGenap(daftarPlat, tanggal) {
    let diizinkan = [];
    let index = 0;

    let tanggalIsGenap = (tanggal % 2 === 0);

    for (let i = 0; i < daftarPlat.length; i++) {
        let plat = daftarPlat[i];
        
        let platIsGenap = (plat % 2 === 0);

        if (platIsGenap === tanggalIsGenap) {
            diizinkan[index] = plat; 
            index++;                  
        }
    }
    return diizinkan;
}

const platKendaraan = [1234, 9999, 8882, 1231];
let tanggalHariIni = 24;

let hasil = filterParkirGanjilGenap(platKendaraan, tanggalHariIni);
console.log(`Tanggal Hari ini: ${tanggalHariIni}`);
console.log(hasil);
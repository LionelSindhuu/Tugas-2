let dataPasien = [
    {nama: "justin", umur: 16}, 
    {nama: "gilkris", umur: 70},
]

function kategoriPasien(daftarPasien) {
    for (let i = 0; i < daftarPasien.length; i++) {
        let pasien = daftarPasien[i];
      if (pasien.umur >= 60) {
        console.log(`${daftarPasien[i].nama}: umur pasien: ${daftarPasien[i].umur} -> Kategori: Prioritas Lansia`)
      } else {
        console.log(`${daftarPasien[i].nama}: umur pasien: ${daftarPasien[i].umur} -> Kategori: antrean Reguler`)
      }
    }
}    

kategoriPasien(dataPasien)
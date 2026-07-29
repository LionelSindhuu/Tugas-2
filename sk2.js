let dataMahasiswa = [
    {nama: "budi", ipk: 2.5, pendapatanOrangTua: 5000000},
    {nama: "siti", ipk: 3.5, pendapatanOrangTua: 3000000},
    {nama: "nunung", ipk: 3.4, pendapatanOrangTua: 2000000},
    {nama: "lala", ipk: 4.0, pendapatanOrangTua: 10000000},
];

function seleksiBeasiswa(daftarMahasiswa) {
    for (let i = 0; i < daftarMahasiswa.length; i++) {
        if (daftarMahasiswa[i].ipk >= 3.5 && daftarMahasiswa[i].pendapatanOrangTua <= 5000000) {
            console.log(`Mahasiswa ke-${i + 1} (${daftarMahasiswa[i].nama}) : Lolos`);
        } else {
            console.log(`Mahasiswa ke-${i + 1} (${daftarMahasiswa[i].nama}) : Tidak Lolos`);
        }
    }
}

seleksiBeasiswa(dataMahasiswa);
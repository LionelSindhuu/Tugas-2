function cekRestockGudang(daftarProduk, threshold) {
    let perluRestock = [];
    let posisi = 0;

    for (let i = 0; i < daftarProduk.length; i++) {
        let barang = daftarProduk[i];

        if (barang.stok < threshold && barang.aktif === true) {
            perluRestock[posisi] = barang.nama; 
            posisi = posisi + 1;                
        }
    }
    return perluRestock;
}

let barangGudang = [
    { nama: "Kemeja", stok: 3, aktif: true },
    { nama: "Celana", stok: 15, aktif: true },
    { nama: "Sepatu", stok: 2, aktif: false },
    { nama: "Kaos", stok: 4, aktif: true }
];

let batasMinimum = 5;

console.log(cekRestockGudang(barangGudang, batasMinimum));
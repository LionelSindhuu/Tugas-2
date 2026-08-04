let dataProduk = [
    {nama: "permen", stok: 2, aktif: true},
    {nama: "indomiw", stok: 36, aktif: false},
]

function stokBarang(daftarProduk, minStok = 10) {
    for (let i = 0; i < daftarProduk.length; i++) {
        let barang = daftarProduk[i];

 if (barang.aktif === true) {
            
            if (barang.stok >= minStok) {
                console.log(`stok ${barang.nama}: ${barang.stok} -> stok barang aman jaya`);
                console.log(`status barang: ${barang.aktif}`);
            } else {
                console.log(`stok ${barang.nama}: ${barang.stok} -> stok barang menipis, mohon untuk di restock`);
                console.log(`status barang: ${barang.aktif}`);
            }

        }
    } 
}
stokBarang(dataProduk);
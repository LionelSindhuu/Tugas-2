let hargaBuku = [20000, 100000, 23000, 80000, 40000]
let totalHarga= 0;

function jumlahBelanjaan(daftarHarga) {
    
      for (let i = 0; i < daftarHarga.length; i++) {
        totalHarga += daftarHarga[i];
    }
    console.log(`Total belanjaan: Rp ${totalHarga}`);
    if (totalHarga >= 150000) {
        console.log(`Selamat anda dapat diskon`);
    } else {
        console.log(`Maaf kamu tidak dapat diskon`);
    }
}

jumlahBelanjaan(hargaBuku);
let hargaBuku = [50000, 60000, 70000]; 

function hitungTotalBuku(totalBelanja) {
    let belanjaan = 0;

    for (let i = 0; i < totalBelanja.length; i++) {
        belanjaan += totalBelanja[i];
    }
   
    if (belanjaan > 150000) {
        belanjaan = belanjaan - (belanjaan * 0.15);
    }

    return belanjaan;
}

let totalBayar = hitungTotalBuku(hargaBuku);
console.log(`Total yang harus dibayar: Rp ${totalBayar}`);
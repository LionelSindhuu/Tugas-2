let daftarKaloriHarian = [5000, 3000, 1234, 5678, 9101, 1121, 3141]
let totalKalori= 0;

function jumlahKalori(jumlahKalori) {
    for (let i = 0; i < jumlahKalori.length; i++) {
        totalKalori += jumlahKalori[i];
    }
    console.log(`Total kalori kamu adalah: ${totalKalori}`);
    
    if (totalKalori >= 25000) {
        console.log(`Anda kelebihan kalori`);
    } else if (totalKalori <= 15000) {
        console.log(`Anda harus menambah kalori`);
    } else {
        console.log(`Kalori anada sudah pas`);
    }
}

jumlahKalori(daftarKaloriHarian)
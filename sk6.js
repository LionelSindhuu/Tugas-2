function hitungGajiMingguan(jamKerja) {
    let totalJam = 0;
    for (let i = 0; i < jamKerja.length; i++) {
        totalJam = totalJam + jamKerja[i];
    }

    if (totalJam > 40) {
        let jamLembur = totalJam - 40;
        
        return (40 * 50000) + (jamLembur * 75000);
    } 
    else {
        return totalJam * 50000;
    }
}

// === CONTOH PENGGUNAAN ===
let jadwalKerja = [8, 8, 8, 8, 8, 5];

console.log(hitungGajiMingguan(jadwalKerja)); 
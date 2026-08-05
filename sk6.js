const jamKerja = [5, 7, 8, 9, 1]
const gajiNormal = 50000;
const gajiLembur = 75000;
let totalJam = 0;

function menghitungGajiMingguan(jumlahJam) {
    for (let i = 0; i < jumlahJam.length; i++) {
        totalJam += jumlahJam[i];
    }

    let totalGaji = 0;

    if (totalGaji > 40) {
        let jamLembur = totalJam - 40;
        totalGaji = (40 * gajiNormal) + (jamLembur * gajiLembur);
    } else {
        totalGaji = totalJam * gajiNormal;
    }

    console.log(`Total Jam Kerja: ${totalJam} jam`);
    console.log(`Total Gaji Bersih: Rp ${totalGaji}`);
}

menghitungGajiMingguan(jamKerja)
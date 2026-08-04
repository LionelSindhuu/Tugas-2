let dataPemain = [
    {nama: "lionel", skor: 950},
    {nama: "justin", skor: 800},
    {nama: "gilkris", skor: 580},
    {nama: "azizah", skor: 700},
    {nama: "kailah", skor: 900}
]

function kategoriPemain(daftarPemain) {
    for (let i = 0; i < daftarPemain.length; i++) {
        for (let j = i + 1; j < daftarPemain.length; j++) {
            if (daftarPemain[j].skor > daftarPemain[i].skor) {
                let temp = daftarPemain[i];
                daftarPemain[i] = daftarPemain[j];
                daftarPemain[j] = temp;
            }
        }
    } 

    for (let i = 0; i < daftarPemain.length; i++) {
        let pemain = daftarPemain[i];

        if (pemain.skor >= 900) {
            console.log(`Peringkat ke- ${i + 1}. ${pemain.nama}: skor ${pemain.skor} -> Kategori: Gold Tier`);
        } else if (pemain.skor >= 700) {
            console.log(`Peringkat ke- ${i + 1}. ${pemain.nama}: skor ${pemain.skor} -> Kategori: Silver Tier`);
        } else {
            console.log(`Peringkat ke- ${i + 1}. ${pemain.nama}: skor ${pemain.skor} -> Kategori: Bronze Tier`);
        }
    }
}


kategoriPemain(dataPemain)
const dataRestoran = [
    {nama: "kfc", bintang: 5, buka: true},
    {nama: "yushinoya", bintang: 3, buka: true},
]

function RestoranFavorit(daftarRestoran) {
    for (let i = 0; i < daftarRestoran.length; i++) {
        let resto = daftarRestoran[i];

        if (resto.bintang >= 0 && resto.buka === true) {
            console.log(`${resto.nama} - Rating: ${resto.bintang}`);               
        }
    }
}  

RestoranFavorit(dataRestoran);
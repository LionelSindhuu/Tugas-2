let dataRestoran = [
    {nama: "chilin", bintang: 5, buka: true},
    {nama: "marugame", bintang: 3, buka: true},
    {nama: "sushiyay", bintang: 5, buka: true},
    {nama: "burgerking", bintang: 1, buka: true},
    {nama: "boost", bintang: 2, buka: false},
]

function RestoranFavorit(daftarRestoran, minRating = 4.5) {
    for (let i = 0; i < daftarRestoran.length; i++) {
        let resto = daftarRestoran[i];

        if (resto.bintang >= minRating && resto.buka === true) {
            console.log(`${resto.nama} - Rating: ${resto.bintang}`);
    
           
        }
    }
}  

RestoranFavorit(dataRestoran);
function filterRestoranFavorit(daftarRestoran, minRating) {
    let hasil = [];
    let posisi = 0; 

    for (let i = 0; i < daftarRestoran.length; i++) {
        let resto = daftarRestoran[i];

        if (resto.rating >= minRating && resto.buka === true) {
            hasil[posisi] = resto.nama; 
            posisi = posisi + 1;
        }       
    }
    return hasil;
}

let namaRestoran = [
    { nama: "Nunung", rating: 4.5, buka: true },
    { nama: "Budi", rating: 4.8, buka: false },  
    { nama: "Siti", rating: 4.2, buka: true },   
    { nama: "Maju", rating: 5.0, buka: true }
];

let minimalRating = 4.5;

console.log(filterRestoranFavorit(namaRestoran, minimalRating));
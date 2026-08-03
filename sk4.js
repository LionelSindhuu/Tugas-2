function evaluasiAsupanKalori(kalori) {
    let total = 0;
    let target = 2000;

    for (let i = 0; i < kalori.length; i++) {
        total = total + kalori[i];
    }

    if (total > target) {
        return "Asupan kalori MELEBIHI target";
    } else if (total < target) {
        return "Asupan kalori KURANG dari target";
    } else {
        return "Asupan kalori PAS sesuai target";
    }
}


let makananHariIni = [500, 700, 600, 300]; 
console.log(evaluasiAsupanKalori(makananHariIni));
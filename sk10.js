const daftarEmail = [
    "lusimandi@gmail.com",
    "rarajonggo@gmailcom",
    "michiegmail.com",
    "mutiaraazzahraumandana@gmail.com"
];

function validasiDaftarEmail(listEmail) {
    for (let i = 0; i < listEmail.length; i++) {
        let email = listEmail[i];

        if (email.includes("@") && email.includes(".")) {
            console.log(`${email} -> Valid`);
        } else {
            console.log(`${email} -> Tidak Valid`);
        }
    }
}

validasiDaftarEmail(daftarEmail);
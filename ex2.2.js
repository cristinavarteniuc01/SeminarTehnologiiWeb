let functie = [2, 4, 6, 7, 8];
let newFunctie = [];

let count = 0;
let c = 0;
for (var i = 0; i < functie.length; i++) {
    if (functie[i] % 2 == 0) {
        
        newFunctie[c] = functie[i];
        c++;
    }
    count++;
}

for (var i = 0; i < newFunctie.length; i++) {
    console.log(newFunctie[i]);
}


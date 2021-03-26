function es1() {
    // Creare un array di oggetti: ogni oggetto descriverà
    // una bici da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore.
    const bikes = [
        {'nome': 'graziella1', 'peso': 5},
        {'nome': 'graziella2','peso': 7},
        {'nome': 'graziella3','peso': 2.5}
    ];
    let lightBike = {nome: '', peso: Number.MAX_SAFE_INTEGER};
    for (let i = 0 ; i < bikes.length; i++) {
        const bike = bikes[i];
        const {nome, peso} = bike;
        if (peso < lightBike.peso) {
            lightBike = bike;
        }
    }
    console.log(lightBike);
}

function init() {
    es1();
}

$(document).ready(init);

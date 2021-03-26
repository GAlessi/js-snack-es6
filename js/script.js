function es1() {
    // Creare un array di oggetti: ogni oggetto descriverà
    // una bici da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore.
    const bikes = [
        {'nome': 'bici1', 'peso': 5},
        {'nome': 'bici2','peso': 7},
        {'nome': 'bici3','peso': 2.5}
    ];
    let lightBike = {nome: '', peso: Number.MAX_SAFE_INTEGER};
    for (let i=0;i<bikes.length;i++) {
        const bike = bikes[i];
        const {nome, peso} = bike;
        if (peso < lightBike.peso) {
            lightBike = bike;
        }
    }
    console.log(lightBike);
}

//genero 2 numeri casuali
function get2Rnd(max) {
    let arr = [];
    for (let i = 0; i < 2; i++) {
        let rnd = Math.floor(Math.random()*max);
        arr.push(rnd);
    }
    return(arr)
}

function es2() {
    // Creare un array di oggetti di squadre di calcio.
    // Ogni squadra avrà diverse proprietà:
    // nome, punti fatti, falli subiti.
    // Nome sarà l'unica proprietà da compilare,
    // le altre saranno tutte settate a 0.
    // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti


    const Teams = [
        {'nome': 'gialli','punti':0, 'falli':0},
        {'nome': 'rossi','punti':0, 'falli':0},
        {'nome': 'blue','punti':0, 'falli':0},
        {'nome': 'verdi','punti':0, 'falli':0}
    ];
    let newTeams = [];

    for (let i = 0; i < Teams.length; i++) {
        const team = Teams[i];
        let arrRnd = get2Rnd(20);
        let [punti, falli] = arrRnd;

        team['punti'] = punti;
        team.falli = falli;
    }
    console.log(Teams);
}


function init() {
    // es1();
    es2();
}
// JQUERY
$(document).ready(init);

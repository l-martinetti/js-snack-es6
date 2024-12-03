/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
    {nome: "squadra A", puntiFatti: 0, falliSubiti: 0},
    {nome: "squadra B", puntiFatti: 0, falliSubiti: 0},
    {nome: "squadra C", puntiFatti: 0, falliSubiti: 0},
    {nome: "squadra D", puntiFatti: 0, falliSubiti: 0},
];

const newTeams = [];

for(let team of teams){
    team.puntiFatti = getRandomNumber(0, 30);
    team.falliSubiti = getRandomNumber(0, 30);

    const newTeam = {
        nome: team.nome,
        falliSubiti: team.falliSubiti
    }
    newTeams.push(newTeam);
}

console.log(newTeams);



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
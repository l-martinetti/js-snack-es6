/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikes = [
    {nome: "rockclimber", peso: 23},
    {nome: "cityhunter", peso: 18},
    {nome: "roadraider", peso: 15},
    {nome: "heavyroad", peso: 28},
    {nome: "bicy", peso: 20}
];

let bikeLight = bikes [0];

for (let bike of bikes){
    if(bike.peso < bikeLight.peso){
        bikeLight = bike;
    }
}

console.log(bikeLight);

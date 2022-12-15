// Declaramos una clase

class Animales {
    constructor(dueña, nombre, raza, edad, actividades, comidas, visitaAlVeterinario, vacunas) {
        this.nombre = nombre;
        this.dueña = dueña;
        this.raza = raza;
        this.edad = edad;
        this.comidas = comidas;
        this.actividades = actividades;
        this.vacunas = vacunas;
        this.visitaAlVeterinario = visitaAlVeterinario
    };

// Getters y Setters

    get verInfoAnimal() {
        return `Raza ${this.raza}, Su nombre ${this.nombre}, Tiene ${this.edad} años, Se alimenta de ${this.comidas}, Va al Veterinario ${this.visitaAlVeterinario}, Tiene ${vacunas} las vacunas`;
    }

    
}

// Mostramos por consola

let gato = new Animales ("Gise Flores", "China", "Europeo comun", 3, "Morder la Notebook", "Sobresito, salmon, balanceado", "Una vez al mes", "Todas")
console.log(gato);


const nombre = document.querySelector('#name');
nombre.textContent = gato.nombre;


// Mostramos la lista

const objetoChina = [
    {Info: "Dueña: ", valor: gato['dueña']},
    {Info: "Raza: ", valor: gato['raza']},
    {Info: "Edad: ", valor: gato['edad'] + ' años'},
    {Info: "Comidas: ", valor: gato['comidas']},
    {Info: "Actividades: ", valor: gato['actividades']},
    {Info: "Vacunas: ", valor: gato['vacunas']},
    {Info: "Visitas al Veterinario: ", valor: gato['visitaAlVeterinario']}
];

let info = objetoChina.map((gato) => {
    return gato.valor;
}); 

// console.log(info);

for (let i = 0; i < 7; i++) {
    let item = document.createElement('li');
    item.innerHTML = objetoChina[i].Info + objetoChina[i].valor;
    document.querySelector('.detalles').appendChild(item);
};
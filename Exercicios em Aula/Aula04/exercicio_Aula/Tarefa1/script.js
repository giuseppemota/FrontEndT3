class Computador {
    constructor(marca, modelo, cor, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.preco = preco;
    }

    imprimirComputador() {
        console.log(this.marca + ", " + this.modelo + ", " + this.cor + ", " + this.preco)
    }

    display() {
        return this.marca + ", " + this.modelo + ", " + this.cor + ", " + this.preco;
    }
}

let computador = new Computador("Dell", "Inspiron", "preto", 3500);
let computador2 = new Computador("Asus", "Vivobook", "prata", 4000);
let computador3 = new Computador("HP", "Pavilion", "azul", 2500);

computador.imprimirComputador();
computador2.imprimirComputador();
computador3.imprimirComputador();

function retorneMAP(computador) {
    let map = new Map();
    map.set("marca", computador.marca);
    map.set("modelo", computador.modelo);
    map.set("cor", computador.cor);
    map.set("preco", computador.preco);
    return map;
}

const t1 = retorneMAP(computador3)

console.log(t1)
const tableHMTL = document.getElementById("tabela")

function mapToHTML(map) {
    let table = document.createElement('table');
    for (let [key, value] of map) {
        let row = document.createElement('tr');
        let keyCell = document.createElement('td');
        let valueCell = document.createElement('td');
        keyCell.textContent = key + ": ";
        valueCell.textContent = value;
        row.appendChild(keyCell);
        row.appendChild(valueCell);
        table.appendChild(row);
    }
    tableHMTL.appendChild(table);
}

mapToHTML(t1)
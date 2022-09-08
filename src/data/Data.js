const Data =[{
    id: 1,
    nombre: "Cheese Cake con Frutos Rojos",
    precio: 3600,
    stock: 5,
    imagen: "img/CheeseCake.png"
},
{
    id: 2,
    nombre: "ChocoOreo",
    precio: 7000,
    stock: 6,
    imagen: "img/ChocoOreo.png"
},
{
    id: 3,
    nombre: "ChocoTorta",
    precio: 6900,
    stock: 8,
    imagen: "img/Chocotorta.png"
},
{
    id: 4,
    nombre: "Cocada",
    precio: 6900,
    stock: 10,
    imagen: "img/Cocada.png"
},
{
    id: 5,
    nombre: "Frutillas",
    precio: 6900,
    stock: 9,
    imagen: "img/Frutillas.png"
},
{
    id: 6,
    nombre: "Marquise Clásica",
    precio: 6900,
    stock: 7,
    imagen: "img/MarquiseClasica.png"
}
]

const getFetch = new Promise((res,rej) => {
    let condition = true
    if(condition){
        setTimeout(() => {
            res(Data)
        }, 2000);
    }
    else {
        rej(console.log("No hay datos"))
    }
})

export default getFetch;
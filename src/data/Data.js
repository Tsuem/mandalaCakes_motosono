const Data =[{
    id: 1,
    name: "Berry Cheesecake",
    price: 3600,
    stock: 5,
    img: "img/CheeseCake.png"
},
{
    id: 2,
    name: "Choco Oreo Cake",
    price: 4500,
    stock: 6,
    img: "img/ChocoOreo.png"
},
{
    id: 3,
    name: "Chocolate Cake",
    price: 4300,
    stock: 8,
    img: "img/Chocotorta.png"
},
{
    id: 4,
    name: "Coconut Cake",
    price: 3600,
    stock: 10,
    img: "img/Cocada.png"
},
{
    id: 5,
    name: "Strawberry Cake",
    price: 3400,
    stock: 9,
    img: "img/Frutillas.png"
},
{
    id: 6,
    name: "Classic Marquise",
    price: 3100,
    stock: 7,
    img: "img/MarquiseClasica.png"
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
        rej(console.log("There's no data"))
    }
})

export default getFetch;
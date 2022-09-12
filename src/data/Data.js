const Data =[{
    id: 1,
    name: "Berry Cheesecake",
    description: "New York-style Cheesecake with Homemade Red Fruit Jam.",
    price: 3600,
    stock: 5,
    img: "img/CheeseCake.png"
},
{
    id: 2,
    name: "Choco Oreo Cake",
    description: "Layers of Oreo Cookies interspersed with layers of Caramel Sauce and Cream Cheese.",
    price: 4500,
    stock: 6,
    img: "img/ChocoOreo.png"
},
{
    id: 3,
    name: "Chocolate Cake",
    description: "4 floors of the best Chocolate Cake in the world.",
    price: 4300,
    stock: 8,
    img: "img/Chocotorta.png"
},
{
    id: 4,
    name: "Coconut Cake",
    description: "Coconut and Caramel Sauce Cheesecake.",
    price: 3600,
    stock: 10,
    img: "img/Cocada.png"
},
{
    id: 5,
    name: "Strawberry Cake",
    description: "Sablée Dough with Almonds, Caramel Sauce, Chantilly Cream and Fresh Strawberries.",
    price: 3400,
    stock: 9,
    img: "img/Frutillas.png"
},
{
    id: 6,
    name: "Classic Marquise",
    description: "Walnut Brownie, Italian Meringue, Chantilly Cream and Caramel Sauce.",
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

const getItem = new Promise((res,rej) => {
    let condition = true
    if(condition){
        setTimeout(() => {
            res(Data[0])
        }, 2000);
    }
    else {
        rej(console.log("There's no data"))
    }
})

export {getFetch, getItem};

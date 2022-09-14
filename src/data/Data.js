const Data =[{
    id: 1,
    name: "Berry Cheesecake",
    description: "New York-style Cheesecake with Homemade Red Fruit Jam.",
    category: "Vegan",
    price: 3600,
    stock: 5,
    img: "/img/CheeseCake.png"
},
{
    id: 2,
    name: "Choco Oreo Cake",
    description: "Layers of Oreo Cookies interspersed with layers of Caramel Sauce and Cream Cheese.",
    category: "Premium",
    price: 4500,
    stock: 6,
    img: "/img/ChocoOreo.png"
},
{
    id: 3,
    name: "Chocolate Cake",
    description: "4 floors of the best Chocolate Cake in the world.",
    category: "Premium",
    price: 4300,
    stock: 8,
    img: "/img/Chocotorta.png"
},
{
    id: 4,
    name: "Coconut Cake",
    description: "Coconut and Caramel Sauce Cheesecake.",
    category: "Vegan",
    price: 3600,
    stock: 10,
    img: "/img/Cocada.png"
},
{
    id: 5,
    name: "Strawberry Tart",
    description: "Sablée Dough with Almonds, Caramel Sauce, Chantilly Cream and Fresh Strawberries.",
    category: "Vegan",
    price: 3400,
    stock: 9,
    img: "/img/Frutillas.png"
},
{
    id: 6,
    name: "Classic Marquise",
    description: "Walnut Brownie, Italian Meringue, Chantilly Cream and Caramel Sauce.",
    category: "Classic",
    price: 3100,
    stock: 7,
    img: "/img/MarquiseClasica.png"
},
{
    id: 7,
    name: "Madagascar",
    description: "Citrus Mousse, Chocolate Cookies and Italian Meringue.",
    category: "Classic",
    price: 3850,
    stock: 6,
    img: "/img/Madagascar.png"
},
{
    id: 8,
    name: "Lemon Crumb",
    description: "Creamy Lemon Tart with Crispy Walnut Crumble.",
    category: "Classic",
    price: 3100,
    stock: 9,
    img: "/img/LemonCrumb.png"
},
{
    id: 9,
    name: "Extreme Choco Cake",
    description: "Classic Chocolate Cake with added Caramel Sauce and Oreos in the center.",
    category: "Premium",
    price: 4500,
    stock: 4,
    img: "/img/ExtremeChocoCake.png"
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

export {getFetch};

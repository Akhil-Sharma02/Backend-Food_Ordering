const Food = require("./models/Food");

const dummy_food = [
    {
        name: "Burger",
        price: 10,
        desc: "Super crispy veggie patties loaded onto soft butter toasted buns, topped with onions, tomatoes, lettuce & a creamy delicious dressing.",
    },
    {
        name: "Penne Arrabiata Pasta",
        price: 15,
        desc: "Arrabiata sauce made with italian tomatoes, loads of garlic and fresh basil served with exotic veggies to make it a perfectly healthy meal.",
    },
    {
        name: "Overloaded Baked Nachos",
        price: 20.5,
        desc: "Tortilla chips loaded with colourful veggies and mozzarella cheese.",
    },
    {
        name: "Farmhouse Pizza",
        price: 25,
        desc: "The goodness of veggies in a pizza. It is an amalgam of bell peppers, onions, mushrooms and olives.",
    },
    {
        name: "Paneer Tikka Wrap",
        price: 15,
        desc: "A desi touch to the classic wrap, toasted whole wheat wrap with juicy Paneer Tikka, onions and capsicum.",
    },
];

const seedDB = async () => {
    await Food.deleteMany({});
    await Food.insertMany(dummy_food);
    console.log("DB Seeded");
};

module.exports = seedDB;

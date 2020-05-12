import fs from 'fs';

let state;
state={
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateProducts1 = state.order.products;
updateProducts1.push({
    "no":"p001-001",
    "name":"스트라이프 팬츠",
    "price":1000,
    "amount":1
});

//console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);

//===============================================

state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateProducts2 = state.order.products.concat({
    "no":"p001-002",
    "name":"블루양말",
    "price":1000,
    "amount":2
})

//console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);
//----------------------------
state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateProducts3 = [...state.order.products, {
    "no":"p001-002",
    "name":"블루양말",
    "price":1000,
    "amount":2
}];

console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);
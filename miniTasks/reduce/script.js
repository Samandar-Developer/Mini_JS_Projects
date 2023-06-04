const cart = [
  {id:1, name:"Product 1", price: 399},
  {id:2, name:"Product 2", price: 449},
  {id:3, name:"Product 3", price: 599},
];
/* My version of doing */
// const total = cart.map(product => product.price).reduce((acc, cur)=> acc+cur, 0);

/* Video version of doing*/

const total = cart.reduce((acc, product) =>{
  return acc + product.price
}, 0);

console.log(total);
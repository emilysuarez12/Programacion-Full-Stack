const productos = [
  { nombre: "Camisa", precio: 20, Cantidad: 11, Categoria: "Ropa" },
  { nombre: "Pantalón", precio: 30, Cantidad: 5, Categoria: "Ropa" },
  { nombre: "Zapatos", precio: 50, Cantidad: 3, Categoria: "Calzado" },
  { nombre: "Tacones", precio: 80, Cantidad: 18, Categoria: "Calzado" },
  { nombre: "Chaqueta", precio: 60, Cantidad: 2, Categoria: "Ropa" },
];

// 1. Calcular el total por Categoria
const TotalRopa = productos.reduce((acumulados, producto) => {
  if (producto.Categoria === "Ropa") {
   return acumulados + producto.Cantidad;
  } else {return acumulados}
},0);

const  TotalCalzado = productos.reduce((acumulados, producto) => {
    if (producto.Categoria === "Calzado") {
     return acumulados + producto.Cantidad;
    } else {return acumulados}
  },0);

  console.log (TotalRopa);
console.log (TotalCalzado);

// 2. Producto más vendido
// const MasVendido = productos.reduce ((acumulados, producto) => {
//     if (producto.Cantidad >= 10 ) {
//         return producto.nombre, producto.Cantidad;
//     } else {return alert("NOOOO Julieta !!!! ESTA MALLLL");}
// },0);
console.log (MasVendido)
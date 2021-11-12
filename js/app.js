class Pedido {
    constructor(tipo,producto,valor,cantidad){
        this.tipo = tipo,
        this.producto = producto,
        this.valor = valor,
        this.cantidad = cantidad,
        this.id = 1
    }
}
const listarPedido =[];

let cantidad;
let operador;
do{
let opcion = Number (prompt(`Menu
Ingrese su Pedido:

1- Cafe Expreso
2- Sandwich
3- Mostras Listado de Pedidos
4- Finalizar Pedido`));

listar = () =>{
   /*listarPedido.forEach(element => {
        console.log(element);

        
    });*/
    for (const pro of listarPedido) {
        console.log(`id: ${pro.id} Cantidad ${pro.cantidad} ${pro.producto} - Valor:${pro.valor}`);
    }
    
}
switch (opcion) {
    case 1: 
        cantidad = Number(prompt("Cantidad de Productos a Consumir"));
        
        const pedido1 = new Pedido("Bebida","Cafe Expresso",1500,cantidad);
        pedido1.id = listarPedido.length;
        listarPedido.push(pedido1);
        break;
    case 2:
        cantidad = Number(prompt("Cantidad de Productos a Consumir"));
        const pedido2 = new Pedido("Sandwich","Chacarero",3500,cantidad);
        listarPedido.push(pedido2);
        break;
    case 3:
        listar();
        console.log("******************");
        break;
    case 4:
    operador = 1;
    break;
    default:
        break;
}
}while(operador !== 1);










 
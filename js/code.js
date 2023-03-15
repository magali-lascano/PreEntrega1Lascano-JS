// Bienvenida
let nombreUsuario = prompt('Ingresa tu nombre');
while(nombreUsuario==''){
    alert('Nombre invalido');
    nombreUsuario = prompt('Ingresa tu nombre');
}
alert('Bienvenido/a '+nombreUsuario);

//Productos
let total = 0;
let mensaje = prompt(nombreUsuario+' deseas comprar un producto? (si / no)');
while(mensaje == 'si' || mensaje=='Si'){
    let producto = prompt('1-Collar 01\n2-Pretal Negro\n3-Correa con pretal azul\n4-Correa 03\n5-Pretal 01\n6-Comedero doble en altura');
    switch(producto){
        case '1':
            alert('Agregaste al carro Collar 01 $ 6000');
            incrementarTotal(6000);
            break;
        case '2':
            alert('Agregaste al carro Pretal Negro $ 6500');
            incrementarTotal(6500);
            break;
        case '3':
            alert('Agregaste al carro Correa con pretal azul $ 7000');
            incrementarTotal(7000);
            break;   
        case '4':
            alert('Agregaste al carro Correa 03 $ 13000');
            incrementarTotal(13000);
            break; 
        case '5':
            alert('Agregaste al carro Pretal 01 $ 6500');
            incrementarTotal(6500);
            break;
        case '6':
            alert('Agregaste al carro Comedero doble altura $ 16000');
            incrementarTotal(16000);
            break;
        default:
            alert('Producto inexistente');
            break;
    }
    mensaje = prompt('Desea comprar otro producto? (si / no)');
}

//Total
function incrementarTotal(precio){
    total = total + precio;
    alert('Total de la compra $'+total);
}

//Pago
alert(nombreUsuario+' ¿Como quieres abonar?');
let pago = prompt('1-Mercado Pago\n2-Uala\n3-Paypal\n4-Transferencia\n5-Tarjeta de credito\n6-Tarjeta de debito');
    switch(pago){
        case '1':
            alert('Seras redireccionado a Mercado Pago para abonar');
            break;
        case '2':
            alert('Seras redireccionado a Uala para abonar');
            break;
        case '3':
            alert('Seras redireccionado a Paypal para abonar');
            break;
        case '4':
            alert('A continuacion se detallan los datos para la transferencia: nombre... alias... cbu...');
            break;
        case '5':
            alert('Seras redireccionado para abonar');
            break;
        case '6':
            alert('Seras redireccionado para abonar');
            break;
    }

//Agradecimiento
alert('Muchas gracias por tu compra! ⭐ '+nombreUsuario)
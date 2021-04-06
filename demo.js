console.log('JavaScript es tremendo');

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

saludar('Lauro');

setTimeout(() => {
    console.log('Este mensaje se mostrara en 5 segundos', 5000);
});

console.log('Fin!');
var edad = prompt ('Por favor introduce edad:');
var out = isNaN(edad);
if(out){ // true por Lo que no es un número.
    alert('No ingresaste una edad valida...');
}

edad = Number(edad);
        switch (edad) {
            case 16: alert ("Eres muy joven"); break;
            case 26: alert ("Todo un adulto"); break;
            case 45: alert ("En tu mejor momento"); break;
            default: alert ("Tienes que cuidarte"); break;
        }





/*var edad = prompt('Ingresa tu edad:');
var out = isNaN(edad);
if(out){ // true por Lo que no es un número.
    alert('No ingresaste una edad valida...');
}
switch(edad){
    case edad 16:
        console.log('Eres muy joven');
        break;

    case  26: 
        console.log('Todo un adulto');
        break;

    case 45:
        console.log('En tu mejor momento');
        break;

    default:
            console.log('Este animal no lo hará.');
            
}

*/

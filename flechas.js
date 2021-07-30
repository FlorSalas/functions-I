/*1 Crear una función flecha que reciba un número y devuelva el doble del mismo.*/

// let num= prompt("ingrese un numero")
// let doble = (numero => numero*2)
// console.log(doble(num))

/*2 Crear una función flecha que reciba dos números y muestre la suma de ellos.*/

// let num1= parseInt(prompt("ingrese un numero"));
// let num2= parseInt(prompt("ingrese otro numero"));

// let suma = (a,b)=> a+b

// console.log(suma(num1,num2))

/*3 Crear una función flecha que valide si un número es mayor a otro. Luego mostrar el resultado por consola.*/ 

// let uno= parseInt(prompt("ingrese un numero"))
// let dos= parseInt(prompt("ingrese otro numero"))

// let grande= (num1,num2) => Math.max(num1,num2)
// console.log(grande(uno,dos))

/*4 Mostrar por pantalla uno por uno reccoriéndolo, el siguiente array:*/

// let frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"]

// frutas.forEach(element  => {
//     console.log(element)
// });

/*5 Mostrar por pantalla las raíces cuadradas de los números del siguiente array:*/

// let numeros = [16,29,120,64,81]

// let raiz = numeros.map(function square(h){
    // return Math.sqrt(h);
// }
// )
// console.log(raiz)

/*6 Solicitar al usuario su nombre y su signo del zodíaco y devolver un mensaje que devuelva esos mismos datos. Ejemplo: “Su nombre es Fermin y su signo es Escorpio”.*/

// let nombre= prompt("ingrese su nombre")
// let signo= prompt("ingrese su signo del zodiaco")

// let text= `su nombre es ${nombre} y su signo del zodiaco es ${signo}`
// console.log(text)

/*7 Mostrar por pantalla los números mayores a 100 del siguiente array.*/

// let numeros = [160,23,120,60,1,-10,8,9483]

// let mayores= numeros.filter(numeros => numeros>100)

// console.log(mayores)

/*8 Generar en base a un array, un nuevo array que tenga todos sus números consecutivos, y otro con sus números precedentes. (Ejemplo: Si el número es 8 : En el array de consecutivos irá 9 , y en el array de precedentes irá 7). Al final mostrar por pantalla los tres array formados.*/

// let numeros = [15,28,32,40,11,-3,0,100]

// let consecutivos= numeros.forEach(element=>{
//     console.log("numero anterior a ", element, ":", element+1)
// })

// let precedente= numeros.forEach(element=>{
//     console.log("numero posterior ", element+1)
// })


/*9 Crear una función flecha que reciba un parámetro que indique el momento del día: “Mañana, tarde, noche” y en base a eso de un saludo personalizado. Ejemplo: “Buenos días, buenas tardes, buenas noches”.*/

// let fecha = new Date()
// let hora= fecha.getHours()
// let saludin="";

// const saludo=  momento => {

//     if(hora<12 && hora>6){
//         saludin= "dias"
//     }else if(hora>12 && hora<19){
//         saludin= "tardes"
//     }else{
//         saludin= "noches"
//     } return momento + saludin;
// }

// console.log(saludo("buenas "))


/*10 Mostrar del siguiente array los nombres que comiencen con “M”.*/

// let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor","Macarena","Flavio"]
// let nombres="";

// nombres= personas.forEach(element => {
//     if (element.charAt(0)==="M"){
//         console.log(element)
//     }
// });

/*11 Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings cuando corresponda: 
a) function despedir (nombre){
console.log("Adios" + nombre) }*/

// let despedir= nombre=> ("Adios ", nombre)

/*b) function cobrar (monto,pago){
return monto - pago;}
console.log("Su vuelto es: " + cobrar(monto,pago))*/

// let cobrar= cobro(monto,pago) => monto-pago
// console.log(`su vuelto es: ${cobrar}` )

/*c) function saludar () {
console.log("Hola")}*/ 

// let saludo= ()=> console.log("hola")



/*nota: con esto muestro el anterior, el elemento y el posterior del array
let numeros = [15,28,32,40,11,-3,0,100]

let consecutivos= numeros.forEach(element=>{
    console.log(element-1, element, element+1)
})

console.log(consecutivos)*/
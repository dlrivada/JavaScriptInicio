//var edad = prompt("Cuántos años tienes");
//if (edad < 18) {
//    alert("Menor de edad");
//} else if (edad > 66) {
//    alert("Jubilado");
//} else {
//    alert("A currar!");
//}

//For
//for (var i = 0; i < 15; i++) {
//    document.write("Vuelta número " + i + "<br />");
//}

// While
//var n = 0;
//while (n < 15) {
//    document.write("Vuelta número " + n + "<br />");
//    n++;
//}

// Primero compara luego incrementa
//var n = 0;
//while (n++ < 15) {
//    document.write("Vuelta número " + n + "<br />");
//    //n++;
//}

// Primero incrementa luego comnpara
//var n = 0;
//while (++n < 15) {
//    document.write("Vuelta número " + n + "<br />");
//}

//Do
//n=23
//do{
//    document.write("Vuelta número " + n + "<br />");
//    n++;
//} while (n < 4);

// While y Do bien hecho (no sustituibles por For
//while (confirm("¿Quiere un mensaje?")) document.write("Mensaje<br />");

//do document.write("Mensaje<br />"); while (confirm("¿Otro mensaje?"));

//switch
//switch (res) {
//    case 1:
//        document.write("1");
//        break;
//    case 2:
//        document.write("2");
//        break;
//    default:
//        document.write("defecto");
//        break;
//}

// Operador Ternario
//document.write(confirm("¿Es verdad?") ? "Sí" : "No");

//Funciones
//function suma(num1, num2) {
//    var resultado = num1 + num2;
//    return resultado;
//}

//var numero1 = 5;
//var numero2 = 6;

//var suma = suma(numero1, numero2);
//document.write(suma);

//Arrays

////Declaración
//var notas = new Array(5);
//// Inicialización
//for (var i = 0; i < notas.length; i++) notas[i] = i;
//// Visualización
//for (i = 0; i < notas.length; i++) document.write(notas[i] + "<br />");
////Añadir elementos al final del Array
//notas.push(7);
//// Visualización
//for (i = 0; i < notas.length; i++) document.write(notas[i] + "<br />");
////Quitar un elemento
//var ultimoElemento = notas.pop();
////Dar la vuelta a los elementos
//notas.reverse();
//// Visualización
//for (i = 0; i < notas.length; i++) document.write(notas[i] + "<br />");
////Splice
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "Lemon", "Kiwi");
//// Visualización
//for (i = 0; i < fruits.length; i++) document.write(fruits[i] + "<br />");
//// Ordenación Alfabética
//fruits.sort();
//// Visualización
//for (i = 0; i < fruits.length; i++) document.write(fruits[i] + "<br />");
////Ordenación numérica
//var points = [40, 100, 1, 5, 25, 10];
//points.sort(function (a, b) { return a - b });
//// Visualización
//for (i = 0; i < points.length; i++) document.write(points[i] + "<br />");

var arrAgenda = [];

function añadir() {
    var strNombre = document.getElementById("txtNombre").value;

    if (strNombre != "") arrAgenda.push(strNombre);
    pintaAgenda();

    return;
}

function borrar() {
    var intElementosABorrar = Number(document.getElementById("txtBorrar").value);

    if (!isNaN(intElementosABorrar)) {
        intElementosABorrar = (intElementosABorrar <= arrAgenda.length && intElementosABorrar > 0) ? intElementosABorrar : 0;

        arrAgenda.splice(arrAgenda.length - intElementosABorrar, intElementosABorrar);
        pintaAgenda();
    }
    return;
}

function pintaAgenda() {
    var divAgenda = document.getElementById("divAgenda");

    divAgenda.innerHTML = "Agenda<br />";
    for (var i = 0; i < arrAgenda.length; i++) divAgenda.innerHTML += arrAgenda[i] + "<br />";

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtBorrar").value = "";

    return;
}
alert ('Esta funcionando');
// for numeros impares del 1 al 100
/*1.for (var numero =1 ; numero <= 100; numero++){
    if (numero%2==0) {
        console.log(numero+1); //le quitamos el +1 para numeros pares
    }

}
*//*2. for de cinco en cinco hasta 100
for ( var inicial=0;inicial<=100 ;inicial ++) {
    if (inicial%5==0) {
        console.log(inicial)
    }
    
}*//*3. for en 6 en 6 hasta 100
for ( var inicial=0;inicial<=100 ;inicial ++) {
    if (inicial%6==0) {
        console.log(inicial)
    }
    
}*//*4.counter break
var year = 1900;

function fecha(year) {
    while (year !== 1998 ) {
       console.log('aun no ha nacido el profe');
       
       if (year==2022) {
          console.log('vamos a detener el counter'); 
       break;
    }
    year+=1;
    }
}

fecha(year);*/
/*5.break
var bandera=false;

for (var counter = 0; counter <=100; counter++) {
    console.log('el counter es:' + counter);
    if (counter == 60) {
        bandera=true;
    }
    if (bandera==true) {
        console.log('rompiendo el ciclo')
        break;
    }
    
}*//*6.
var tren= [135,'felipe',['sem','isaac','laura']];

console.log(tren[2][0]);
*/
/*
var tren =['sandias','papayas','fresas','kiwis'];

console.log(tren[0]);*/
/*7.
var tren = [520,5,98,64,2004];

 for (var i=0; i<tren.length; i++) {

  console.log(tren[i])
     
 }
*//*
var tren = [5,,15,35,'fresas','papayas','piñas'];

for (var  i= 0; i<tren.length; i++) {
   if (typeof(tren[i])== 'number') {
     console.log(tren[i]+' es un numero')  
   }
   if (typeof(tren[i])== 'string') {
    console.log(tren[i]+' es un texto')  
  }
    
}*/
// array practica
/*
var array_class = ['fresas','mangos','carambola'];

var array_class_mixto = ['fresas','mangos','carambola',5,10,15.4];
  // en el medio vale 0 // entoces  seria para las frutas 0 //numero 1 // numeros y texto 2
var array_con_array = [ [  ['fresas','mangos','carambola' ],[456,345,278],[1,5,'texto'] ] ];

console.log(array_con_array[0][2][2]);
                  //2 //1 //0
                          //0   //1
                        //0,,1  //0,1                                     
var array_numeros = [ [ [1,2],[2,4] ] ];

console.log(array_numeros [0][1][1]);
*/
/*
var cumpleaños = 12;

switch (cumpleaños) {
    case 12:
       alert('hoy es mi cumpleaños');
       break;
    case 25:
        alert('hoy es el cumpleaños de mi hermano')  
        break;
    default:
        alert('la fecha que ingreso no tiene el cum')
        break;
}
*/
/* switch
var cumpleaños = prompt ('digite su cumpleaños');

switch (parseInt(cumpleaños)) {
    case 19:
      console.log('cumpleaños de isaac'); 
        break;
    case 16:
        console.log('cumpleaños de laura');
        break;
    case 24:
        console.log('cumpleaños de alissa');
        break;
}
*/
/* for in
var tren = ['papayas','fresas','bananos'];

for (vagon in tren) {
console.log(tren[vagon])
    
}*/
/* for in
var arreglo = [1,2,3,4,5];

for(vagon in arreglo){
    console.log(arreglo[vagon]);

}*/
/*
var tren = ['mangos','kiwis','fresas',[1,2,3]];

for(vagon in tren){

if (typeof(tren[vagon])== 'string') {
    console.log(tren[vagon]);  
}if (typeof(tren[vagon]=='object')) {
    for(indice_temporal in tren[vagon]){
        console.log(tren[vagon][indice_temporal]); 
    }
}

}*/
/*
var tren = [345,['fresas','papayas']];

for(vagon in tren){//oliver entra al tren

if (typeof(tren)[vagon]=='number'){
 console.log(tren[vagon]);   
}

if (typeof(tren)[vagon]=='object') {// si oliver encuentra un vagon que contiene otros vagos
    for (objetos in tren [vagon]){
        console.log(tren[vagon][objetos]);
    }
}

}
*/

// index off
/*
var tren = ['fresas','papayas','caramnbolas'];

console.log (tren.indexOf['carambolas']);
*/

/* map index
var tren = ['fresas','papayas','carambolas',['pithaya','aguacate']]

console.log(tren.indexOf('carambolas'))

*/

/*
var numeros =[1,5,79,90]

numeros.forEach (function (numero,indice) {
    console.log(numero+1)
})
*/
/*practica 06-05-22
/*
arr.push(...items) – agrega items del final,
arr.pop() –  quita el item del final,
arr.shift() – quita un item del inicio,
arr.unshift(...items) –agrega  items al inicio.
*/



/*var tren = [1,5,7];

//tren.push('ultimo vagon');

//tren.pop();

console.log(tren);
*/

/*var tren = [1,5,7];

tren.shift();

console.log(tren);*/

/*var tren = [1,5,7];

tren.unshift('inicio del vagon');

console.log(tren);
*/

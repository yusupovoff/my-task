// let people ={
//     name:"sardor",
//     year:1995,
//     gender:"erkak",
//     adress:{
//         country:"uzbekistan",
//         city:"Khiva",
//     },
//     salolashish: function(){
//         console.log("Assalomu aleykum");
//     },
// };
// people.name="Azizbek"
// console.log(people.name);
// console.log(people.year);
// console.log(people.gender);
// console.log(people['gender']);
// console.log(people['year']);
// console.log(people['name']);
// people.salolashish();
// console.log(people.adress.city);
// console.log(people.name);
const fruits=["olma", "Uzum", "Anor","olma", "Uzum", "Anor","olma", "Uzum", "Anor","olma", "Uzum", "Anor"]
// fruits["olma"]="olcha"
// console.log(fruits);
const fructics=fruits.map(element=>{
    return element.toUpperCase()});
document.getElementById("carInf").innerHTML=fructics;

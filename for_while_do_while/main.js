// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// const person={name:"sardor",lname:"yusupov"}
// let text=""
// for (let x in person) {
//     text+=person[x]
// }
// console.log(text);
// let i=0;
// while (i<10) {
//     console.log(i);
//     i++;
// }
// let i=0;
// do {
//     console.log(i);
//     i++;
// } while (i<10);
for (let i=1; i<10; i++){
    if (i%2===0){
        console.log("juf",i);
        continue;
    }
    else{
        console.log("toq",i);
    }
}
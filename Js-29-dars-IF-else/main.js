// let exprence = 5;
// if (exprence <= 1) {
//     console.log("siz juniorsiz");
// }
// else if(exprence > 1 && exprence < 3){
//     console.log("siz middelsiz");
// }
// else{
//     console.log("siz seniorsiz");
// }
let numberOfDay = 5;
switch (numberOfDay){
    case 1:
        document.getElementById("day").innerHTML="dushanba";
        break;
    case 2:
        document.getElementById("day").innerHTML="Seshanba";
        break;
    case 3:
        document.getElementById("day").innerHTML="Chorshanba";
        break;
    case 4:
        document.getElementById("day").innerHTML="Payshanba";
        break;
    case 5:
        document.getElementById("day").innerHTML="Juma: bu hataning 5 kuni";
        break;
    case 6:
        document.getElementById("day").innerHTML="shanba";
        break;
    case 7:
        document.getElementById("day").innerHTML="Yakshanba";
        break;
    default :
    document.getElementById("day").innerHTML="Bunday kun mavjud emas";
    break;
}

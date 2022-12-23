let number=[5,23, 21, 56, 87, 32];
function maxOfarray(num){
let katasi=num[0];
let kichigi=num[0];
for (let i = 0; i < num.length; i++) {
    if (num[i] > katasi) {
        katasi=num[i];
    }
    if (num[i]< kichigi) {
        kichigi=num[i];
    }
}
let kataKichig = "kichigi " + kichigi.toString() + " " + "katasi " + katasi.toString();
return kataKichig;
}
const javob=maxOfarray(number);
console.log(javob);
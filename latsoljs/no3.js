let tb = 1.7;
let bb = 90;
let bmi = bb/(tb*tb);
console.log("Status berat badan Rhodey : ")
console.log("BMI Rhodey = " + bmi)
if(bmi < 18.5){
    console.log("Kekurangan berat badan");
}
else if(bmi > 18.5){
    console.log("Normal")
}
else if(bmi > 25){
    console.log("Kelebihan berat badan");
}
else{
    console.log("Obesitas");
}
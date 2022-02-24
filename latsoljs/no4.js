let all = 0;
let deret = (spertama,rasio,smulai,sakhir) =>{
for(let i=spertama;i<=sakhir;i++){
    let k = spertama*rasio**(i-1);
    all += k;
    console.log("Suku ke-"+i+" = "+k)
}
return all;
}
console.log("JML = " +deret(4,3,1,10));
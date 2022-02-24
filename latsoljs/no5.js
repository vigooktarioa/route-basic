class lingkaran{
    constructor(r){
        this.jari = r
        
    }
    luas = () => {
        return 22/7 * (this.jari*this.jari)
    }

    keliling = () => {
        return 22/7 * (this.jari*2)

    }
}

class tabung{
    constructor(r,t){
        this.tinggi = t
        this.jari = r
    }
    volume = () => {
        return 22/7 * (this.jari*this.jari) * this.tinggi
        
    }
    luaspermukaan = () => {
       return 2 * (22/7*this.jari*this.jari) + 2*22/7*this.jari*this.tinggi
    }
    luasselimut = () => {
        return 2 * 22/7 * this.jari * this.tinggi
    }
}

class kerucut{
    constructor(r,t){
        this.tinggi = t
        this.jari = r
    }
    volume = () => {
        return 1/3 * 22/7 * this.jari * this.jari * this.tinggi
    }
    luaspermukaan = () => {
        return 22/7 * this.jari * (Math.sqrt(this.jari*this.jari + this.tinggi*this.tinggi)) + 22/7 * this.jari * this.jari
    }
    luasselimut = () => {
        return 22/7 * this.jari * (Math.sqrt(this.jari*this.jari + this.tinggi*this.tinggi))
    }
}

class bola{
    constructor(r){
        this.jari = r
    }
    volume = () => {
        return 4/3 * 22/7 * this.jari * this.jari * this.jari
    }
    luaspermukaan = () => {
        return  4 * 22/7 * this.jari * this.jari
    }
}


// Output lingkaran
// constructor(r)
let ling = new lingkaran(5);
console.log("Luas Lingkaran = "+ling.luas());
console.log("Keliling lingkaran = "+ling.keliling());

// Output tabung
// constructor(r,t)
let tab = new tabung(12.5,50);
console.log("Volume tabung  = "+tab.volume());
console.log("LP tabung = "+tab.luaspermukaan());
console.log("LS tabung = "+tab.luasselimut())

// Output kerucut
// constructor(r,t)
let ker = new kerucut(10,40);
console.log("Volume kerucut = "+ker.volume());
console.log("LP kerucut = "+ker.luaspermukaan());
console.log("LS kerucut = "+ker.luasselimut());


// Output tabung
// constructor(r)
let bol = new bola(30);
console.log("Volume bola = "+bol.volume());
console.log("LP bola = "+bol.luaspermukaan());
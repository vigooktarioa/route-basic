let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5},
    { nama: "Gula", harga: 14000, jumlah: 5},
    { nama: "Telur", harga: 20000, jumlah: 2},
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10},
]

let total=0;
for(let key in barang){
    let hasil = (barang[key].harga*barang[key].jumlah);
    total += hasil
    console.log("Harga "+barang[key].jumlah+" "+barang[key].nama + " = Rp. " + hasil);
}
console.log("Total keseluruhan = Rp. " + total);
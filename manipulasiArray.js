// Manipulasi Array

// 1. Menambah isi Array
// var arr = ['a', 1 , true];

// console.log(arr[2]);

// var ari = [];
// ari [0] = 'randy'
// ari [1] = 2
// ari [2] = 'ramadhan'

// console.log(ari);

// 2. Menghapus isi Array
// var arr = ['a', 1 , true];
// arr [1] = undefined;

// console.log(arr);

// 3. Menampilkan is Array
// let arr = ['Randy', 'Ramadhan', 'Buyuang'];

// for( let i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke-' + (i+1) + ' ; ' + arr[i]);
// }

// 4. Metod pada Array
// 1. Join
// let arr = ['Randy', 'Ramadhan', 'Buyuang'];

// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Dodi', 'Uus');
// arr.pop();
// arr.pop();

// 3. unshift & shift
// arr.unshift('Dodi');
// arr.shift();

// console.log(arr.join(' - '));

// 4. splice
// let arr = ['Randy', 'Ramadhan', 'Buyuang'];
// splice(indexAwal, mauDihapusBerapa, elemenBAru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Dodi', 'Fitri')
// arr.splice(1, 2, 'Dodi', 'Fitri')

// console.log(arr.join(' - '));

// 5. slice
// let arr = ['Randy', 'Ramadhan', 'Buyuang', 'Soraya', "Fitri"];
// slice(awal,akhir); |index awal ikut, dan index akhir tidak. 'slice membuat array baru'
// let arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '))
// console.log(arr.join(' - ')) 

// 6.foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Randy', 'Ramadhan', 'Fitri'];
// for( var i = 0; i < angka.length; i++ ) {
//     console.log(angka[i]);
// }
// Bisa diganti dengan
// angka.forEach(function(e) {
//     console.log(e);
// })

// nama.forEach(function(e,i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e);
// })

// 7. map
// sama seperti foreach tapi lebih baik, dan menggembalikan array, sedangkan foreach tidak.
// var angka = [1,2,3,4,5,6,7,4];
// var angka2 = angka.map(function(e){
//     return e * 2;
// })

// console.log(angka2.join(' - ')); 

// sort
// var angka = [1,2,10,5,3,20,6,8,4];
// console.log(angka.join(' - '));

// angka.sort();
// console.log(angka.join(' - '));

// supaya yang sebelumnya bisa berurutan
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter
// untuk mencari nilai pada array dan mengembalikan dalam bentuk array
var angka = [1,2,10,5,3,20,6,8,4];

var angka = angka.filter(function(x){
    return x > 5;
});

console.log(angka.join(' - '));

// 10. find
// untuk mencari nilai pada array dan mengembalikan dalam bentuk bukan array
var angka = [1,2,10,5,3,20,6,8,4];

var angka = angka.find(function(x){
    return x > 5;
});

console.log(angka);

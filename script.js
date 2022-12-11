// // let s = '';
// // for(let i = 1; i < 5; i++) { 
// //     for ( let j = 0; j < 5 - i; j++) {
// //         s += ' ';
// //     }
// //     for( let p = 0; p <  2 * i - 1; p++ ) {
// //         if( i === 1 || i === 4 ) {
// //             s += '*';
// //         } else if( p === 0 || p === 2 * i - 2) {
// //             s += '*';
// //         } else {
// //             s += ' ';
// //         }
// //     }
// //     s += '\n';
// // }

// // console.log(s);

// // Membuat object
// // Object Literal
// var mhs = {
//     nama : 'Randy',
//     nim : '0929872',
//     email : 'mautau@gmail.com',
//     ips : [3.00, 2.50, 3.20],
//     alamat : {
//         jalan : 'Jl. abc No.123',
//         kota : 'Bandung',
//         provinsi : 'Jawa Barat'
//     }
// };

// // Functiuon Declaration
// function buatObjectMahasiswa(nama, nim, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nim =  nim;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs3 = buatObjectMahasiswa('Randy', '0923938', 'randy@gmail.com', 'Teknik Elektro')

// // Constructor 
// function Mahasiswa(nama, nim, email, jurusan) {
//     this.nama = nama;
//     this.nim = nim;
//     this.email = email;
//     this.jurusan =jurusan;
// }

// var mhs4 = new Mahasiswa('Ray', '0398457', 'ray@gmail.com', 'Teknik Mesin');


// // this

// // Kalau dibuat di scope global this adalah window
// var a = 10;
// console.log(this.a);

// // membuat object

// // cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo()
// this mengembalikan object global

// cara 2 - object literal
// var obj = {};
// obj.halo = function() {
//     consol.log(this)
//     console.log('halo');
// }
// obj.halo();
// // this mengembalikan object yang bersangkutan

// cara 3 - constructor
function halo() {
    console.log(this)
    console.log('halo');
}

new halo();









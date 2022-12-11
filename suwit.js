let tanya = true;
while ( tanya ) {
    // menangkap pilihan player
    let p = prompt('pilih : gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    let comp = Math.random();

    if(comp < 0.34 ) {
        comp ='gajah';
    } else if( comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    let hasil = '';
    // menenrukan rules
    if(p == comp) {
        hasil = 'SERI!';
    } else if( p == 'gajah') {
        // if ( comp == 'orang') {
        //     hasil = 'MENANG!'
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if(p == 'orang') {
        // if( comp == 'gajah') {
        //     hasil = 'KALAH!';
        // } else {
        //     hasil = 'MENANG!';
        // }
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if( comp == 'semut') {
        hasil = (comp =='orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukan pilihan yang salah';
    }


    // tampilkan hasil
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('Terima Kasih sudah bermain')
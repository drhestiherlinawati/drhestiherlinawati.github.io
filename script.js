function instagram() {
    document.location = "https://www.instagram.com/drhestiherlinawati/";
}

function pilihTempatKerja() {
    document.getElementById("tempatKerja").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.tombolPilih')) {
        var dropdowns = document.getElementsByClassName("pilihan");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function munculkanData(x) {
    // Semua blok data tetap tersembunyi — hanya dibaca isinya.
    // (Tidak ada yang di-unhide di sini.)

    // Referensi bagian layanan di header
    var icare = document.querySelector('#header .icare');
    var myKlinik = document.querySelector('#header .myKlinik');
    var inm = document.querySelector('#header .inm');
    var clinica = document.querySelector('#header .clinica');

    if (x === 'jatikita') {
        // Sembunyikan layanan lama, tampilkan Clinica Assist
        icare.hidden = true;
        myKlinik.hidden = true;
        inm.hidden = true;
        clinica.hidden = false;

        // Isi data Clinica Assist
        document.querySelector('#header .clinica .user').value =
            document.querySelector('#jatikita .clinica .user').innerHTML;
        document.querySelector('#header .clinica .password').value =
            document.querySelector('#jatikita .clinica .password').innerHTML;
    } else {
        // Tampilkan layanan lama, sembunyikan Clinica Assist
        icare.hidden = false;
        myKlinik.hidden = false;
        inm.hidden = false;
        clinica.hidden = true;

        // Isi data dari blok tersembunyi
        document.querySelector('#header .icare .user').value =
            document.querySelector('#' + x + ' .icare .user').innerHTML;
        document.querySelector('#header .icare .password').value =
            document.querySelector('#' + x + ' .icare .password').innerHTML;
        document.querySelector('#header .myKlinik .kode').value =
            document.querySelector('#' + x + ' .myKlinik .kode').innerHTML;
        document.querySelector('#header .myKlinik .user').value =
            document.querySelector('#' + x + ' .myKlinik .user').innerHTML;
        document.querySelector('#header .myKlinik .password').value =
            document.querySelector('#' + x + ' .myKlinik .password').innerHTML;
        document.querySelector('#header .inm .user').value =
            document.querySelector('#' + x + ' .inm .user').innerHTML;
        document.querySelector('#header .inm .password').value =
            document.querySelector('#' + x + ' .inm .password').innerHTML;
    }

    // Tutup dropdown
    var menu = document.getElementById('tempatKerja');
    if (menu) menu.classList.remove('show');
}

function menyalin(x) {
    var salin = document.querySelector("" + x + "");
    navigator.clipboard.writeText(salin.value);
}

function bukaWeb(x) {
    window.open("" + x + "");
}

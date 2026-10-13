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
    var icare = document.querySelector('#header .icare');
    var myKlinik = document.querySelector('#header .myKlinik');
    var inm = document.querySelector('#header .inm');
    var clinica = document.querySelector('#header .clinica');
    var kmscExtra = document.getElementById('kmscExtra');

    if (x === 'jatikita') {
        icare.hidden = true;
        myKlinik.hidden = true;
        inm.hidden = true;
        clinica.hidden = false;
        kmscExtra.hidden = true;

        document.querySelector('#header .clinica .user').value =
            document.querySelector('#jatikita .clinica .user').innerHTML;
        document.querySelector('#header .clinica .password').value =
            document.querySelector('#jatikita .clinica .password').innerHTML;
    } else {
        icare.hidden = false;
        myKlinik.hidden = false;
        inm.hidden = false;
        clinica.hidden = true;

        // Tombol tambahan hanya muncul kalau KMSC
        kmscExtra.hidden = (x !== 'kmsc');

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

/* ==== UID & PDF ==== */

function bukaUid() {
    document.getElementById('uidPopup').hidden = false;
}

function tutupUid() {
    document.getElementById('uidPopup').hidden = true;
}

function bukaPbdikti() {
    window.location.href = 'https://pddikti.kemdiktisaintek.go.id/detail-mahasiswa/cSenaRIUaBDa8yabCTFBK4YhhYhjXcFZvwcXk7rxoMgm3zJLRiwHo4VHw75d0kCeWcubaw==';
}

function bukaPdf(namaFile) {
    document.getElementById('uidPopup').hidden = true;

    var frame = document.getElementById('pdfFrame');
    frame.src = encodeURI(namaFile) + '#toolbar=0&navpanes=0&scrollbar=0&view=FitH';

    document.getElementById('pdfPopup').hidden = false;
}

function tutupPdf() {
    var frame = document.getElementById('pdfFrame');
    frame.src = '';
    document.getElementById('pdfPopup').hidden = true;
}

/* ==== Popup foto profil ==== */

function bukaFoto() {
    document.getElementById('fotoPopup').hidden = false;
}

function tutupFoto(event) {
    if (event.target.id === 'fotoPopup') {
        document.getElementById('fotoPopup').hidden = true;
    }
}

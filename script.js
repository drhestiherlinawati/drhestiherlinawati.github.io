function instagram(){
	document.location="https://www.instagram.com/drhestiherlinawati/"
	}

function pilihTempatKerja(){
     document.getElementById("tempatKerja").classList.toggle("show");
}

window.onclick = function(event) {
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
}

function munculkanData(x){
    document.querySelector("#header .icare .user").value = document.querySelector("#"+x+" .icare .user").innerHTML;
    document.querySelector("#header .icare .password").value = document.querySelector("#"+x+" .icare .password").innerHTML;
    document.querySelector("#header .myKlinik .kode").value = document.querySelector("#"+x+" .myKlinik .kode").innerHTML;
    document.querySelector("#header .myKlinik .user").value = document.querySelector("#"+x+" .myKlinik .user").innerHTML;
    document.querySelector("#header .myKlinik .password").value = document.querySelector("#"+x+" .myKlinik .password").innerHTML;
    document.querySelector("#header .inm .user").value = document.querySelector("#"+x+" .inm .user").innerHTML;
    document.querySelector("#header .inm .password").value = document.querySelector("#"+x+" .inm .password").innerHTML;
}

function menyalin(x){
	var salin = document.querySelector(""+x+"");
	navigator.clipboard.writeText(salin.value);
	}

function bukaWeb(x) {
  window.open(""+x+"");
}
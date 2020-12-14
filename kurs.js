function konversi(){

let tangkaps = document.getElementById("valas");
let dalam = tangkaps.value
let nilai = document.getElementById("in1");
let ambilnilai = Number(nilai.value)
let rupiah = document.getElementById("in2");
var hitung;

        if(dalam=="usd"){
            hitung = ambilnilai*9915;
            rupiah.value=hitung;
        }else if(dalam=="jpy"){
            hitung = ambilnilai*120;
            rupiah.value=hitung
        }else if(dalam=="sgd"){
            hitung = ambilnilai*13472;
            rupiah.value=hitung
        }else if(dalam=="myr"){
            hitung = ambilnilai*874;
            rupiah.value=hitung
        }else if(dalam=="sar"){
            hitung = ambilnilai*3592;
            rupiah.value=hitung
        }else if(dalam=="eur"){
            hitung = ambilnilai*15888;
            rupiah.value=hitung
        }
}




// function ambil(){  
   
//     tangkaps.onchange = function(){
//         hasil = tangkaps.value    
//         return hasil;
//     }
// }

// let tangkaps = document.getElementById("valas");
// // ambil selectnya
// let dalam = tangkaps.value
// // ambil value select
// let nilai = document.getElementById("in1");
// // ambil input nilai
// let ambilnilai = Number(nilai.value)
// // ambil value nilai
// let rupiah = document.getElementById("in2");
// // ambil input rupiah









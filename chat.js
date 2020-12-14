function send(){
    let ambilKotak = document.getElementById("tulis");
    let ambilTeks = ambilKotak.value
    // ambil isi dari input type
    ambilKotak.value="";
    // sudah ambil isi kotak input dan sudah clear kotak input

    let a = document.getElementById("space")
    const baru = document.createElement('p')
    const text =document.createTextNode(ambilTeks)
    baru.appendChild(text)
    a.appendChild(baru)
    // a.innerText=ambilTeks

}



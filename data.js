const nama = "uliya muizah"; //nilanya static
let usia = 2; //bisa diubah nilainya dimanapun

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    } 
    else if(usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if(usia > 30) {
        generasi = "generasi tua";
    }
    else if (usia < 10 && usia >2) {
        generasi = "generasi anak anak";
    }
    else{
        generasi = "bayi";
    }

    return biodata.innerHTML = generasi;
}



console.log(nama);
console.log(usia);
//uncomment below if u want to display the content
//generateBiodata();

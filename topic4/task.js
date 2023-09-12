/**
 * Konversi Array ke Objek
 * 
 * Diberikan sebuah array yang berisi string, [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ] dan sebuah array berisi number, [4, 6, 6, 5]. 
 * Ubahlah array tersebut menjadi objek dengan kunci berupa nama buah dan nilai berupa panjang dari nama buah tersebut.
 */
let fruits = [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ]
let amount = [4, 6, 6, 5]
let result2 = {}
for(let i = 0; i < fruits.length; i++){
   let key = fruits[i]
   let values = amount[i]
   result2[key] = values
}
console.log(result2);
// OUTPUT: { Apel: 4, Mangga: 6, Pisang: 6, Jeruk: 5 }


/**
 * Menghitung Kemunculan Kata
 * 
 * Diberikan sebuah kalimat, "saya suka makan nasi goreng dan saya juga suka minum teh". 
 * Buatlah sebuah objek yang menghitung berapa kali masing-masing kata muncul di dalam kalimat tersebut.
 */
let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh"
let myWord = favWord.split(" ")
let wordResult = {}

for (let i = 0; i < myWord.length; i++){
    let word = myWord[i]
    if (wordResult[word]){
        wordResult[word] += 1
    }else{
        wordResult[word] = 1
    }
}
 console.log(wordResult);
// OUTPUT:  { saya: 2, suka: 2, makan: 1, nasi: 1, goreng: 1, dan: 1, juga: 1, minum: 1, teh: 1 }


/**
 * Grup Orang Berdasarkan Usia
 * 
 * Diberikan sebuah array objek yang berisi nama dan usia.
 * 1. Akses umur Dewi
 * 2. Kelompokkan objek didalam array berdasarkan usia, dan keluarkan dalam bentuk objek
 * 
 */
const people = [
    { nama: "Budi", usia: 25 },
    { nama: "Ana", usia: 20 },
    { nama: "Citra", usia: 25 },
    { nama: "Dewi", usia: 32 },
    { nama: "Eka", usia: 30 }
  ]
  let umurDewi = 0
  for (i = 0; i < people.length; i++){
    if (people[i].nama === "Dewi"){
        umurDewi = people[i].usia
        break
    }
  }

  if (umurDewi !== 0){
    console.log(`umur Dewi adalah: ${umurDewi} tahun`);
  }else{
    console.log("invalid");
  }
// let umurDewi // OUTPUT: 32

let collectionUmur = {}
for (let i = 0; i < people.length; i++){
    let human = people[i]
    let usia = human.usia

    if (collectionUmur[usia]){
        collectionUmur[usia].push(human)
    }else{
        collectionUmur[usia] = [human]
  }

}

console.log(collectionUmur);

// OUTPUT:
// {
//     20: [ { nama: 'Ana', usia: 20 } ],
//     25: [ { nama: 'Budi', usia: 25 }, { nama: 'Citra', usia: 25 } ],
//     30: [ { nama: 'Eka', usia: 30 } ],
//     32: [ { nama: 'Dewi', usia: 20 } ]
// }


/**
 * Mengakses Properti Bertingkat
 * 
 * Diberikan sebuah objek bertingkat. Akses value dar key city
 */
const data = {
    user: {
        profile: {
            name: "John Doe",
            address: {
                city: "Jakarta",
                postalCode: "12345"
            }
        }
    }
};

let result = data.user.profile.address.city // "Jakarta"
console.log(result);

/**
 * Penghitungan Suara Pemilihan
 * 
 * Terdapat sebuah array berisi suara pemilihan. Hitunglah total suara untuk masing-masing kandidat dan kembalikan dalam bentuk objek.
 */
class vouting{
    constructor(suara){
        this.suara = suara
        this.result = {}
    }

    count(){
        for (const name of suara){
            if(this.result[name]){
                this.result[name] += 1
            }else{
                this.result[name] = 1 
            }
        }
        return this.result
    }
}
const suara = ['Budi', 'Ana', 'Budi', 'Citra', 'Ana', 'Budi', 'Dewi', 'Dewi', 'Ana'];
const counting = new vouting(suara)
const resultVoute = counting.count()
console.log(resultVoute);
// OUTPUT :
// { Budi: 3, Ana: 3, Citra: 1, Dewi: 2 }


/**
 * Menggabungkan Beberapa Objek
 * 
 * Terdapat beberapa objek dengan struktur yang sama. 
 * Gabungkan objek-objek tersebut sehingga setiap kunci memiliki nilai yang merupakan total dari ketiga objek tersebut.
 */
const obj1 = { a: 5, b: 7, c: 3 }
const obj2 = { a: 4, b: 1, c: 8 }
const obj3 = { a: 9, b: 2, c: 5 }

const objGabungan = {}
for (const key in obj1){
    objGabungan[key] = obj1[key] + obj2[key] + obj3[key]
}
console.log(objGabungan);
// OUTPUT:
// { a: 18, b: 10, c: 16 }


/**
 * Penyusunan Ulang Objek
 * 
 * Diberikan sebuah objek. Susun ulang objek tersebut agar semua informasi ada di tingkat yang sama,
 * tetapi namai kunci dengan kombinasi informasi yang mereka wakili
 */
function SusunOrang(orang){
    const SusunOrang = {
        nama : orang.nama,
        alamat_jalan: orang.alamat.jalan,
        alamat_kota: orang.alamat.kota,
        alamat_KodePos: orang.alamat.kodePos,
        kontak_email: orang.kontak.email,
        kontak_telpon: orang.kontak.telepon
    }
    return SusunOrang
}
const orang = {
    nama: "Budi",
    alamat: {
        jalan: "Jl. Raya",
        kota: "Jakarta",
        kodePos: "10000"
    },
    kontak: {
        email: "budi@mail.com",
        telepon: "080080080"
    }
};
let resultSususnOrang = SusunOrang(orang)
console.log(resultSususnOrang);
// OUTPUT
// {
//   nama: "Budi",
//   alamat_jalan: "Jl. Raya",
//   alamat_kota: "Jakarta",
//   alamat_kodePos: "10000",
//   kontak_email: "budi@mail.com",
//   kontak_telepon: "080080080"
// }


/**
 * Mencari Nilai Tertinggi dan tampilkan nama dan nilainya
 * 
 * Gunakan looping untuk mencarinya. Lalu resultnya menjadi string dengan pernyataan
 */
const mahasiswa = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ana", nilai: 90 },
    { nama: "Dono", nilai: 78 },
    { nama: "Dewi", nilai: 92 }
];

let maxValue = mahasiswa[0].nilai
let nameMahasiswa = mahasiswa[0].nama
for (i = 1; i < mahasiswa.length; i++){
    if (mahasiswa[i].nilai > maxValue){
        maxValue = mahasiswa[i].nilai
        nameMahasiswa = mahasiswa[i].nama
    }
}
let result3 = `mahasiswa yang bernilai tinggi adalah ${nameMahasiswa} dengan nilai ${maxValue}`
console.log(result3);
// OUPUT: Students yang mendapatkan nilai terbesar adalah ... dengan nilai ...
  

/**
 * Konversi Objek ke Array
 * 
 * Rubah objek menjadi array dengan metode looping yang dimana akan dinamis.
 */
const kota = {
    Jakarta: 10,
    Bandung: 5,
    Surabaya: 7,
    Medan: 4,
    lampung: 5
};
let kotaAarray = []
for(let key in kota){
    let city = {
        namaKota: key,
        nilai: kota[key]
    }
    kotaAarray.push(city)
}
console.log(kotaAarray);
// OUTPUT:
// [
//   { namaKota: "Jakarta", nilai: 10 },
//   ...
// ]

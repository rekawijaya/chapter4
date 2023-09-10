/**
 * Hapus item terkhir
 * 
 * let fruits = ['apple', 'banana', 'cherry']
 */
// bisa untung mengganti data array terakhir 
console.log("==menghapus item pada array terakhir==");
let fruits = ['apple', 'banana', 'cherry', ]
if (fruits.length > 2){
    fruits.length = fruits.length - 1
}
console.log(fruits);
// Output: ['apple', 'banana']

console.log("==menambah item pada array terakhir==");
let newItem = "pinapple"
let newLength = fruits.length + 1
let newBox = new Array(newLength)

for (let index = 0; index < fruits.length; index++) {
    newBox[index] = fruits[index]
}
 newBox[newLength - 1] = newItem
 fruits = newBox
console.log(fruits);



/**
 * Cari panjang array
 * 
 * Diberikan sebuah array ['a', 'b', 'c', 'd', 'e']. Tentukan panjang dari array tersebut.
 */
console.log("===mencari panjang array===");

let bulkAlphabet = ['a', 'b', 'c', 'd', 'e']
let lengthAlfabet = 0
for (i = 0; i < bulkAlphabet.length; i++){
    lengthAlfabet++
}
console.log(lengthAlfabet);
// Output: 5


/**
 * Cari nilai tertinggi dan terendah
 * 
 * Terdapat array [21, 19, 10, 89, 3, 20, 33, 34], tentukan nilai tertinggi dan nilai terendah. 
 * Setelah itu urutkan array tersebut tanpa menggunakan built in function
 */

console.log("===Cari nilai tertinggi dan terendah===");
let numbers = [21, 19, 10, 89, 3, 20, 33, 34]
let max = numbers[0];
let min = numbers[0];

// Menentukan nilai tertinggi dan terendah
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Nilai tertinggi: " + max);
console.log("Nilai terendah: " + min);


console.log("===urutkan dari yang terkecil ke yang terbesar===");
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers);

/**
 * Gabungkan Dua Array, berikut dengan ketentuan:
 * 1. Menggunakan built in function
 * 2. Tidak menggunakan built in function
 * 
 * [1, 2, 3] dan [4, 5, 6]
 */
console.log("===gabungan array===");
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
function joiningArray(arr1, arr2){
  for (let i = 0; i < arr2.length; i++){
    arr1[arr1.length] = arr2[i]
  }
  return arr1
}

let result1 = joiningArray(arr1, arr2) 
console.log(result1);
// Output : [1, 2, 3, 4, 5, 6]


/**
 * Filter huruf ganjil
 * 
 * Diberikan sebuah array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 
 * Buatlah sebuah array baru yang hanya berisi angka ganjil dari array tersebut.
 * 
 * Ketentuan tanpa menggunakan built in function
 */
console.log("===sleksi angka ganjil");
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let angkaGanjil = []
for (let i = 0; i < arr3.length; i++){
  if (arr3[i] % 2 == 1 ) {
    angkaGanjil.push(arr3[i]);
  }
}
console.log(angkaGanjil);



/**
 * Susun ulang array
 * 
 * Diberikan array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]. 
 * Urutkan array ini dari yang terkecil ke terbesar, kemudian balikkan urutannya. 
 * Setelah itu, hapus angka yang sama sehingga setiap angka hanya muncul sekali.
 * 
 * Bisa menggunakan built in function. Kisi2 sebagai berikut:
 * 1. Urutkan array terlebih dahulu
 * 2. Balik urutan array tersebut
 * 3. Hapus angka yang duplikat
 */
console.log("===susun ulang nilai array===");
let angkaKumupulan = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
for (let i = 0 ; i <= angkaKumupulan.length; i++ ){
    for (let x = 0; x <= angkaKumupulan.length - 1; x++){
        if(angkaKumupulan[x] > angkaKumupulan[x + 1]){
            let fix =angkaKumupulan[x]
            angkaKumupulan[x] = angkaKumupulan[x +1]
            angkaKumupulan[x + 1] = fix
        }
    }
}

let reverse = []
for (let i = angkaKumupulan.length - 1; i <= 0 ; i--){
    reverse.push(angkaKumupulan[i])
}
console.log();
console.log(angkaKumupulan);


// /**
//  * Menggabungkan Array dengan Spesifik
//  * Memiliki dua array, arr1 = [1, 2, 3] dan arr2 = ['a', 'b', 'c']. 
//  * Gabungkan kedua array tersebut sehingga mendapatkan hasil ['a', 1, 'b', 2, 'c', 3].
//  */
console.log("===gabungan array int dan string===");
let kumpulanAngka = [1, 2, 3]
let kumpulanHuruf = ["a", "b", "c"]
let result = []
for (i = 0; i< kumpulanAngka.length; i++){
    result.push(kumpulanAngka[i])
    result.push(kumpulanHuruf[i])
}
console.log(result);
/**
 * Subarray dengan jumlah terbesar
 *  
 * Dari sebuah array angka, temukan subarray (array dalam array) dengan jumlah elemen yang paling besar. 
 * Misalnya dari array [2, 3, -4, 5, 7, -8, 6, 4], subarray dengan jumlah terbesar adalah [2, 3, -4, 5, 7] dengan total 13.
 */




/**
 * Urutkan berdasarkan Frekuensi:
 * Dari sebuah array, urutkan elemennya berdasarkan frekuensi kemunculannya. 
 * Jika dua elemen memiliki frekuensi yang sama, urutkan berdasarkan angkanya. 
 * Misalnya dari array [3, 2, 2, 8, 3, 4, 4], hasil yang diharapkan adalah [3, 3, 2, 2, 4, 4, 8]
 */
let arr4 = [3, 2, 2, 8, 3, 4, 4]
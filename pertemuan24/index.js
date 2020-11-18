//Array

let nilai = [90, 80, 75, 95, 85];

for (let i = 0; i < nilai.length; i++){
    console.log("Nilai = ", nilai[i] + 5);
}

// nilai[2] = 90;
// console.log(nilai[nilai.length - 1]);

// let john = ["john", "Doe", 33, true];
// console.log(john[john.length -1]);
// console.log(john);

let john = ["john", "doe", 33, true];
console.log(john[john.length -1]);
console.log(john);

//toString()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push()
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift()
john.shift();
console.log(john.join(" - "));

//unshift()
john.unshift("john");
john.unshift("Prof");
console.log(john.join(" - "));



// SPLICE()
// let buah = ["Anggur", "nanas", "Apel", "markisa"];

// buah.splice(2, 1, "jeruk", "tomat");

// console.log(buah); 

// CONCAT()
// let buah = ["Nanas", "Markisa", "jeruk"];
// let sayur = ["kangkung", "katuk", "wortel"];
// let biji = ["kacang merah", "kacang tanah", "kacang polong"];

// let makanan = buah.concat(sayur, biji);

// console.log(makanan);

// //SLICE()
// let cemilan = ["kripik ubu", "gula-gula", "taro", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);

// console.log(cemilanGurih); 
// console.log(cemilanManis); 
// SORT()
// let buah = ["sirsak", "jambu", "Mangis", "Jambu"];

// buah.sort();

// console.log(buah); 

// let bilangan = [40, 6, 2, 3.5, 10, 20];

// bilangan.sort();

// console.log(bilangan); 


// let bilangan = [40, 6, 2, 3.5, 10, 20];


// let urutDariTerkecil = function(a, b) {
//   return a - b;
// };

// let urutDariTerbesar = function(a, b) {
//   return b - a;
// };

// console.log(bilangan.sort(urutDariTerkecil)); 
// console.log(bilangan.sort(urutDariTerbesar)); 


// //REVERSE()
// let buah = ["mangis", "sirsak", "durian", "Jambu"];

// buah.sort().reverse();

// console.log(buah); buah.reverse();

















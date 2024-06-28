let a = (prompt("Birinchi sonni kiriting (a):"));
let b = (prompt("Ikkinchi sonni kiriting (b):"));
let c = (prompt("Uchinchi sonni kiriting (c):"));

let largest;

if (a >= b && a >= c) {
  largest = a;
} else if (b >= a && b >= c) {
  largest = b;
} else {
  largest = c;
}

alert("Eng katta son: " + largest);
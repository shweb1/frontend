var student01 = {
    name: "Petya",
    height_m: 1.84,
}

var student02 = {
    name: "Vasya",
    height_m: 1.78,
}

var student03 = {
    name: "Yulya",
    height_m: 1.5,
}

avg_height = (student01.height_m + student02.height_m + student03.height_m)/3;

console.log("Student 1: " + student01.name + " height " + student01.height_m);
console.log("Student 2: " + student02.name + " height " + student02.height_m);
console.log("Student 3: " + student03.name + " height " + student03.height_m);

console.log("Avg " + avg_height);

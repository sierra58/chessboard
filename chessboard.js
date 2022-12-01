const size = 8;
let line = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        // (x + y) is for alternating odd and even
        if ((x + y) % 2 === 0) {    
            line += " ";
        } else {
            line += "#";
        }
    }
    line += "\n";
}

console.log(line);
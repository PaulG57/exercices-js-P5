//votre code ici

function printNumbers(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            string += i;
        } else {
            string += " " + i;
        }
    }
    return string;
}

export default printNumbers

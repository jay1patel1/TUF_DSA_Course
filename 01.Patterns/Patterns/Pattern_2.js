function pattern_2 (n) {
    for (let i = n; i >= 0; i--) {
        let printable = "";
        for (let j = 0; j < i; j++) {
            printable += "*";
        }
        console.log(printable);
    }
}

function pattern_2_2 (n) {
    for (let i = 0; i <= n; i++) {
        let printable = "";
        for (let j = 0; j < i; j++) {
            printable += "*";
        }
        console.log(printable);
    }
}

pattern_2(5)
pattern_2_2(5)

function pattern_4(n) {

    for (let i = 0; i <= n; i++) {
        let printable = ""
        for (let j = 0; j < i; j++) {
            printable += `${i}`;
        }
        console.log(printable)
    }
}

pattern_4(5);
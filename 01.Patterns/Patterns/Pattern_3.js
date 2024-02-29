function pattern_3(n) {

    for (let i = 0; i <= n; i++) {
        let printable = ""
        for (let j = 0; j < i; j++) {
            printable += `${j+1}`;
        }
        console.log(printable)
    }
}

pattern_3(5);
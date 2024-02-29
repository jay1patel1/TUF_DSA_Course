function nForest(row,col) {

    for (let i = 0; i < row; i++) {
        let printable = "";

        for (let j = 0; j < col; j++) {
            printable += "*"
        }
        console.log(printable);
    }

}

nForest(10,5);
nForest(5,10);
nForest(2,3);
nForest(3,2);
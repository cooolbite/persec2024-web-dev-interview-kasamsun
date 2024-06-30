function sortStringsByNumber(arr) {

    arr.sort((a, b) => {

        let numA = parseInt(a.match(/\d+/)[0]);
        let numB = parseInt(b.match(/\d+/)[0]);


        if (numA !== numB) {
            return numA - numB;
        } else {
            return a.localeCompare(b);
    });

    return arr;
}

function printNumbers(start, stop) {
    myArr = [];
    for (var i=start; i<stop+1; i++) {
    myArr.push(i);
    }
    return myArr;
}
document.write(printNumbers(1, 12)+ '<br>');

function whileNumbers(start, stop) {
    var i = start;
    var myArr = [];
    while (i < stop+1) {
        myArr.push(i);
        i++;
    }
    return myArr;
}

document.write(whileNumbers(1,10)+ '<br>');


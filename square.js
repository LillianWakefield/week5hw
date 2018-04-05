function square(num) {
    var myArr = [];
    var star = Array(num+1).join('*');
    for(var i=0; i<num; i++) {
        document.write(star)
        document.write('<br>')
    }
}

document.write(square(5)+ '<br>');
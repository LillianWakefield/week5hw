function box(w, h) {
    var top_bottom = Array(w+1).join('*');
    var sides = '*' + Array(w+1).join('&nbsp;') + '*';
    document.write(top_bottom+ '<br>');
    for (i=2; i<h; i++){
        document.write(sides + '<br>')
    }
    document.write(top_bottom+ '<br>');
}
document.write(box(6,4)+'<br>')
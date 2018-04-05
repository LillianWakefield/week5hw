function sum(input){
  var myArr = 0;
    for (var i=0;i<input.length; i++) {
        myArr += input[i];
    }
document.write(myArr+'<br>')
}
sum([1,2,3,4])
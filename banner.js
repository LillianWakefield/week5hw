function banner(input){
    var len = input.length
    fancy = Array(len+1).join('*');
    document.write(fancy + '<br>')
    document.write(input + '<br>')
    document.write(fancy + '<br>')
}
banner('fancy')
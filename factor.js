function factor(input) {
    for(i=1;i<input+1;i++){
        if((input % i) ==0){
            document.write(i +'<br>')
        }
    }
}
factor(12)

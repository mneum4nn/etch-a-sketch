function createSquareGrid (n){
    for (let i = 0; i < n; i++){
        for (let j=0; j<n;j++){
            $('.container').append("<div claass='grid'></div>")
        }
    }
    $('.grid').width(960/n);
    $('.grid').height(960/n);

}
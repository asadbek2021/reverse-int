module.exports =function reverse (n) {
    let arr = String(n).split('');
    if(n<0){
        arr.shift()
    }
    let bon = arr.reverse()
   
    let result = Number(bon.join(''));
    return result;
}


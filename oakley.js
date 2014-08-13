var radiansToDegrees = function( rads ){
    return rads * (180/Math.PI);
};

var degreesToRadians = function(degrees) {
    return degrees * Math.PI / 180;
};




queue.push( [ calculateResult, this, kase ] );

queue.forEach(function(calc){
    calc[0](calc[1],calc[2]);
    queue.shift();
})

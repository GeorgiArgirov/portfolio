
console.log(alert('Enter the size of LogoMM, then OPEN the console ;))'));

function getPatternString(n, numberOfMМ = 2) {
    
    
    var res = createEmptyGrid(n * 5, n + 1);
    
    
    var x = 0, y = n, goingUp = true;
    
    
    while (x <= n * 5 - n) {
      
      res[y].splice(x, n, ...new Array(n).fill('*'));
      
      if ((y === n && !goingUp) || (y === 0 && goingUp)) { goingUp = !goingUp; }
      x++;
      y+= goingUp ? -1 : 1;
    }

    if( (n < 2) || (n > 10000) || (n % 2 === 0)){
        console.log(alert(('Try with ODD and bigger than 2 and smallest than 10000')));
    } else {
        return res.map(row => loopStr(row.join(''), numberOfMМ)).join('\n');
    }
    
}
  
function createEmptyGrid(x, y) {
    return new Array(y).fill(null).map(function() {
      return new Array(x).fill('-');
    });
}
  
function loopStr(str, n) {
    
    return new Array(n).fill(str).join('');
}

var n = prompt('Enter the size of letter');

console.log(getPatternString(parseInt(n)));








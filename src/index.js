module.exports = function multiply(first, second) {
  var num1 = [];
  var num2 = [];
  var num3 = [];
  var cash = 0;

  num1 = first.split('');
  num2 = second.split('');

  for (var i = 0; i < first.length; i++){
    var num3 = [];
    
    for (var j = second.length - 1; j >= 0; j--){
      num3.push((num1[i] * num2[j] + cash) % 10);
      cash = Math.floor((num1[i] * num2[j] + cash) / 10);
    }

    if (cash != 0){
      num3.push(cash);
      cash = 0;
    }

    for (var n = 0; n < first.length - 1 - i; n++){
      num3.unshift(0);
    }

    if (i == 0){
      solution = num3;
    } else {
      for (var k = 0; k < num3.length; k++)
      {
        solution[k] = solution[k] + num3[k];
      }
      for (var l = 0; l < solution.length; l++){
        if (solution[l] >= 10){
          solution[l+1] = solution[l+1] + 1;
          solution[l] = solution[l] - 10;
        }
      }
    
    }
  }
  return solution.reverse().join('');
}

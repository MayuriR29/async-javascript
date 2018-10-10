var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  console.log('snack inside',snack)
  return snack;
}

console.log(getFood(false)); // undefined
console.log(snack);
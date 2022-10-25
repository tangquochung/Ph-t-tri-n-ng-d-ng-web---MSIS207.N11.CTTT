function filter() {
  var j = -1;
  for (var i = 1; i < arguments.length; i++) {
    j = arguments[0].indexOf(arguments[i]);
    if (j > -1) {
      arguments[0].splice(j, 1);
    }
  }
  return arguments[0];
}

console.log(filter([2, 4, 7, 8, 6, 10, 1, 3, 2], 1, 3, 5));

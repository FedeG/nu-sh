app.filter('formatoMoneda', function () {
  return function (input) {
    var valor = parseFloat(input);
    var out = "$ " + Math.floor(valor) + "." + ((valor * 100) % 100 + '00').substr(0, 2);
    return out;
  }
});

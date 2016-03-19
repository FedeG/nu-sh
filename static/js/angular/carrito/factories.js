app.factory('CarritoService', ['$http', function ($http) {
  var servicio = {};

  servicio.carrito = [];

  var filtrar = function (id) {
    for (var i = 0; i < servicio.carrito.length; i++) {
      if (servicio.carrito[i].Producto.Id == id) {
        return servicio.carrito[i];
      }
    }
    return null;
  };

  servicio.agregar = function (p) {
    var itemActual = filtrar(p.Id);

    if (!itemActual) {
      servicio.carrito.push({
        Producto: p,
        Cantidad: 1
      });
    } else {
      itemActual.Cantidad++;
    }

  };

  servicio.eliminar = function (item) {
    servicio.carrito.splice(servicio.carrito.indexOf(item), 1);
  };

  return servicio;
}]);

app.factory('ProductosService', ['$http', function ($http) {
  var servicio = {};

  var datos = [{
    "Id": "1",
    "Categoria": "Librería",
    "Producto": "Borrador Perfecto",
    "Precio": "0.5",
    "Imagen": "http://images.wikia.com/inciclopedia/images/5/57/Borrador.jpg"
  },
    {
      "Id": "2",
      "Categoria": "Librería",
      "Producto": "Lápiz Carboncito",
      "Precio": "1",
      "Imagen": "http://cd1.dibujos.net/dibujos/pintados/201110/45bdaddccd13fdcfd61764cc91302190.png"
    },
    {
      "Id": "3",
      "Categoria": "Librería",
      "Producto": "Regla Rectitud",
      "Precio": "1.2",
      "Imagen": "http://us.123rf.com/400wm/400/400/wayoutwest/wayoutwest0705/wayoutwest070500013/912524-una-regla-de-madera-de-30-centimetros-aislada-en-un-fondo-blanco-muevalo-de-un-tiron-encima-para-una.jpg"
    },
    {
      "Id": "4",
      "Categoria": "Baño",
      "Producto": "Jabón Cochinin",
      "Precio": "1.5",
      "Imagen": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tualetsapo.jpg/200px-Tualetsapo.jpg"
    },
    {
      "Id": "5",
      "Categoria": "Baño",
      "Producto": "Papel Higienico",
      "Precio": "0.7",
      "Imagen": "http://sobrecuriosidades.com/wp-content/uploads/2011/12/papel-higienico.jpg"
    },
    {
      "Id": "6",
      "Categoria": "Alimentos",
      "Producto": "Leche Gloria",
      "Precio": "2.5",
      "Imagen": "http://www.connuestroperu.com/images/stories/cosas/alimentos/lacteos/lata_leche_gloria.jpg"
    },
    {
      "Id": "7",
      "Categoria": "Alimentos",
      "Producto": "Mantequilla La Vaquita",
      "Precio": "2.8",
      "Imagen": "http://www.semillalandia.com/blog/wp-content/uploads/2012/02/mantequilla.jpg"
    },
    {
      "Id": "8",
      "Categoria": "Alimentos",
      "Producto": "Fideos El Flaco",
      "Precio": "2.9",
      "Imagen": "http://www.cukmi.com/wp-content/uploads/2010/09/pu%C3%B1ado2.jpg"
    }];

  servicio.listar = function (fc) {
    fc(datos);
  };

  return servicio;
}]);
var mongoose = require('./model.js').mongoose;

function deleteCollection(model){
  mongoose.model(model).remove(function (error) {
    if (error) throw error;
  });
}
function load(model, data){
  mongoose.model(model).create(data, function (error) {
    if (error) throw error;
  });
}

var contactos = [
  {'name': 'facebook', 'href': 'https://www.facebook.com/nushstyle', 'icon': 'fa-facebook'},
  {'name': 'mail', 'href': 'mailto:ventas@nush.com.ar', 'icon': 'fa-envelope'},
  {'name': 'instagram', 'href': 'https://www.instagram.com/nush_ambos/', 'icon': 'fa-instagram'}
];

var ambos = [
  {'name': 'ambo1', 'codigo': 'a1', 'tipo': 'ambo', 'imagen_completa': 'static/img/portfolio/ambo1.jpeg', 'imagen': ['static/img/portfolio/ambo1.jpeg'], 'precio': 800, 'stock': 0},
  {'name': 'ambo2', 'codigo': 'a2', 'tipo': 'ambo', 'imagen_completa': 'static/img/portfolio/ambo2.jpg', 'imagen': ['static/img/portfolio/ambo2.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'ambo3', 'codigo': 'a3', 'tipo': 'ambo', 'imagen_completa': 'static/img/portfolio/ambo3.jpg', 'imagen': ['static/img/portfolio/ambo3.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'ambo4', 'codigo': 'a4', 'tipo': 'ambo', 'imagen_completa': 'static/img/portfolio/ambo4.jpg', 'imagen': ['static/img/portfolio/ambo4.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'ambo5', 'codigo': 'a5', 'tipo': 'ambo', 'imagen_completa': 'static/img/portfolio/ambo5.jpg', 'imagen': ['static/img/portfolio/ambo5.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'ambo6', 'codigo': 'a6', 'tipo': 'ambo', 'imagen_completa': 'static/img/portfolio/ambo6.jpg', 'imagen': ['static/img/portfolio/ambo6.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'ambo7', 'codigo': 'a7', 'tipo': 'ambo', 'imagen_completa': 'static/img/portfolio/ambo7.jpg', 'imagen': ['static/img/portfolio/ambo7.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'ambo8', 'codigo': 'a8', 'tipo': 'ambo', 'imagen_completa': 'static/img/portfolio/ambo8.jpg', 'imagen': ['static/img/portfolio/ambo8.jpg'], 'precio': 800, 'stock': 0}
];

var chaquetas = [
  {'name': 'chaqueta1', 'codigo': 'c1', 'tipo': 'chaqueta', 'imagen_completa': 'static/img/portfolio/chaquetas1.jpeg', 'imagen': ['static/img/portfolio/chaquetas1.jpeg'], 'precio': 800, 'stock': 0},
  {'name': 'chaqueta2', 'codigo': 'c2', 'tipo': 'chaqueta', 'imagen_completa': 'static/img/portfolio/chaquetas2.jpeg', 'imagen': ['static/img/portfolio/chaquetas2.jpeg'], 'precio': 800, 'stock': 0},
  {'name': 'chaqueta3', 'codigo': 'c3', 'tipo': 'chaqueta', 'imagen_completa': 'static/img/portfolio/chaquetas3.jpg', 'imagen': ['static/img/portfolio/chaquetas3.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'chaqueta4', 'codigo': 'c4', 'tipo': 'chaqueta', 'imagen_completa': 'static/img/portfolio/chaquetas4.jpg', 'imagen': ['static/img/portfolio/chaquetas4.jpg'], 'precio': 800, 'stock': 0}
];

var pantalones = [
  {'name': 'pantalon1', 'codigo': 'p1', 'tipo': 'pantalon', 'imagen_completa': 'static/img/portfolio/pantalon1.jpg', 'imagen': ['static/img/portfolio/pantalon1.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'pantalon2', 'codigo': 'p2', 'tipo': 'pantalon', 'imagen_completa': 'static/img/portfolio/pantalon2.jpg', 'imagen': ['static/img/portfolio/pantalon2.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'pantalon3', 'codigo': 'p3', 'tipo': 'pantalon', 'imagen_completa': 'static/img/portfolio/pantalon1.jpg', 'imagen': ['static/img/portfolio/pantalon1.jpg'], 'precio': 800, 'stock': 0},
  {'name': 'pantalon4', 'codigo': 'p4', 'tipo': 'pantalon', 'imagen_completa': 'static/img/portfolio/pantalon2.jpg', 'imagen': ['static/img/portfolio/pantalon2.jpg'], 'precio': 800, 'stock': 0}
];

var talles = [
  {'size': 'xs', 'busto': '10 cm', 'alto': '5 cm'},
  {'size': 's', 'busto': '15 cm', 'alto': '10 cm'},
  {'size': 'm', 'busto': '20 cm', 'alto': '10 cm'},
  {'size': 'l', 'busto': '25 cm', 'alto': '20 cm'},
  {'size': 'xl', 'busto': '30 cm', 'alto': '21 cm'},
  {'size': 'xxl', 'busto': '35 cm', 'alto': '25 cm'}
];

deleteCollection('pedido');
deleteCollection('producto');
deleteCollection('contacto');
deleteCollection('encargo');
deleteCollection('talle');
deleteCollection('usuario');
deleteCollection('compra');
load('contacto', contactos);
load('pedido', [{name: 'nush'}]);
load('producto', ambos.concat(chaquetas).concat(pantalones));
load('talle', talles);
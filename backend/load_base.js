var mongoose = require('./model.js').mongoose;

function load(model, data){
  mongoose.model(model).remove(function (error) {
    if (error) throw error;
    if (data) {
      mongoose.model(model).create(data, function (error) {
        if (error) throw error;
      });
    }
  });
}

var contactos = [
  {'name': 'facebook', 'href': 'https://www.facebook.com/nushstyle', 'icon': 'fa-facebook'},
  {'name': 'mail', 'href': 'mailto:ventas@nush.com.ar', 'icon': 'fa-envelope'},
  {'name': 'instagram', 'href': 'https://www.instagram.com/nush_ambos/', 'icon': 'fa-instagram'}
];

var ambos = [
  {'name': 'Victory Flex', 'codigo': 'vf', 'tipo': 'ambo', 'imagen_completa': 'static/img/ambos/VictoriFlex.jpeg', 'imagen': ['static/img/ambos/VictoriFlex.jpeg', 'static/img/ambos/VictoryFlex.jpeg','static/img/ambos/VictoryFlex2.jpeg','static/img/ambos/VictoryFlex3.jpeg', 'static/img/ambos/VictoryFlex4.jpeg','static/img/ambos/VictoryFlex5.jpeg'], 'precio': 800, 'stock': 0},
  {'name': 'Victory Print', 'codigo': 'vp', 'tipo': 'ambo', 'imagen_completa': 'static/img/ambos/VictoryPrint.jpeg', 'imagen': ['static/img/ambos/VictoryPrint.jpeg', 'static/img/ambos/VictoryPrint1.jpeg', 'static/img/ambos/VictoryPrint2.jpeg', 'static/img/ambos/VictoryPrint3.jpeg', 'static/img/ambos/VictoryPrint4.jpeg', 'static/img/ambos/VictoryPrint5.jpeg'], 'precio': 750, 'stock': 0},
  {'name': 'Victory Sea', 'codigo': 'vse', 'tipo': 'ambo', 'imagen_completa': 'static/img/ambos/VictorySea.jpeg', 'imagen': ['static/img/ambos/VictorySea.jpeg', 'static/img/ambos/VictorySea1.jpeg', 'static/img/ambos/VictorySea2.jpeg', 'static/img/ambos/VictorySea3.jpeg', 'static/img/ambos/VictorySea4.jpeg', 'static/img/ambos/VictorySea5.jpeg'], 'precio': 750, 'stock': 0},
  {'name': 'Victory Spring', 'codigo': 'vsp', 'tipo': 'ambo', 'imagen_completa': 'static/img/ambos/VictorySpring.jpeg', 'imagen': ['static/img/ambos/VictorySpring.jpeg', 'static/img/ambos/VictorySpring1.jpeg', 'static/img/ambos/VictorySpring2.jpeg', 'static/img/ambos/VictorySprint3.jpeg', 'static/img/ambos/VictorySpring4.jpeg', 'static/img/ambos/VictorySpring5.jpeg'], 'precio': 750, 'stock': 0},
  {'name': 'Victory Sweet', 'codigo': 'vsw', 'tipo': 'ambo', 'imagen_completa': 'static/img/ambos/Victory sweet.jpeg', 'imagen': ['static/img/ambos/Victory sweet.jpeg', 'static/img/ambos/VictorySweet.jpeg', 'static/img/ambos/VictorySweet2.jpeg', 'static/img/ambos/VictorySweet3.jpeg', 'static/img/ambos/VictorySweet4.jpeg', 'static/img/ambos/VictorySweet5.jpeg'], 'precio': 750, 'stock': 0}
];

var chaquetas = [
  {'name': 'Victory Flex', 'codigo': 'vfc', 'tipo': 'chaqueta', 'imagen_completa': 'static/img/ambos/VictoryFlex4.jpeg', 'imagen': ['static/img/ambos/VictoryFlex4.jpeg','static/img/ambos/VictoryFlex5.jpeg'], 'precio': 800, 'stock': 0},
  {'name': 'Victory Print', 'codigo': 'vpc', 'tipo': 'chaqueta', 'imagen_completa': 'static/img/ambos/VictoryPrint2.jpeg', 'imagen': ['static/img/ambos/VictoryPrint2.jpeg', 'static/img/ambos/VictoryPrint1.jpeg'], 'precio': 750, 'stock': 0},
  {'name': 'Victory Sea', 'codigo': 'vsec', 'tipo': 'chaqueta', 'imagen_completa': 'static/img/ambos/VictorySea5.jpeg', 'imagen': ['static/img/ambos/VictorySea5.jpeg', 'static/img/ambos/VictorySea4.jpeg', 'static/img/ambos/VictorySea1.jpeg'], 'precio': 750, 'stock': 0},
  {'name': 'Victory Spring', 'codigo': 'vspc', 'tipo': 'chaqueta', 'imagen_completa': 'static/img/ambos/VictorySpring2.jpeg', 'imagen': ['static/img/ambos/VictorySpring2.jpeg', 'static/img/ambos/VictorySpring1.jpeg'], 'precio': 750, 'stock': 0},
  {'name': 'Victory Sweet', 'codigo': 'vswc', 'tipo': 'chaqueta', 'imagen_completa': 'static/img/ambos/VictorySweet2.jpeg', 'imagen': ['static/img/ambos/VictorySweet2.jpeg', 'static/img/ambos/VictorySweet.jpeg'], 'precio': 750, 'stock': 0}
];

var pantalones = [
  {'name': 'Victory Flex', 'codigo': 'vfp', 'tipo': 'pantalon', 'imagen_completa': 'static/img/ambos/VictoryFlex3.jpeg', 'imagen': ['static/img/ambos/VictoryFlex3.jpeg', 'static/img/ambos/VictoryFlex.jpeg','static/img/ambos/VictoryFlex2.jpeg'], 'precio': 800, 'stock': 0},
  {'name': 'Victory Print', 'codigo': 'vpp', 'tipo': 'pantalon', 'imagen_completa': 'static/img/ambos/VictoryPrint5.jpeg', 'imagen': ['static/img/ambos/VictoryPrint5.jpeg', 'static/img/ambos/VictoryPrint3.jpeg', 'static/img/ambos/VictoryPrint4.jpeg'], 'precio': 750, 'stock': 0},
  {'name': 'Victory Sea', 'codigo': 'vsep', 'tipo': 'pantalon', 'imagen_completa': 'static/img/ambos/VictorySea3.jpeg', 'imagen': ['static/img/ambos/VictorySea3.jpeg', 'static/img/ambos/VictorySea2.jpeg'], 'precio': 750, 'stock': 0},
  {'name': 'Victory Spring', 'codigo': 'vspp', 'tipo': 'pantalon', 'imagen_completa': 'static/img/ambos/VictorySprint3.jpeg', 'imagen': ['static/img/ambos/VictorySprint3.jpeg', 'static/img/ambos/VictorySpring4.jpeg', 'static/img/ambos/VictorySpring5.jpeg'], 'precio': 750, 'stock': 0},
  {'name': 'Victory Sweet', 'codigo': 'vswp', 'tipo': 'pantalon', 'imagen_completa': 'static/img/ambos/VictorySweet3.jpeg', 'imagen': ['static/img/ambos/VictorySweet3.jpeg', 'static/img/ambos/VictorySweet4.jpeg', 'static/img/ambos/VictorySweet5.jpeg'], 'precio': 750, 'stock': 0}
];

var talles = [
  {'size': 'xs', 'hombros': '40 cm', 'busto': '92 cm', 'largo_c': '62 cm', 'cadera': '88 cm', 'largo_p': '93 cm'},
  {'size': 's', 'hombros': '41 cm', 'busto': '96 cm', 'largo_c': '64 cm', 'cadera': '92 cm', 'largo_p': '96 cm'},
  {'size': 'm', 'hombros': '42 cm', 'busto': '100 cm', 'largo_c': '66 cm', 'cadera': '95 cm', 'largo_p': '100 cm'},
  {'size': 'l', 'hombros': '43 cm', 'busto': '104 cm', 'largo_c': '68 cm', 'cadera': '95 cm', 'largo_p': '108 cm'},
  {'size': 'xl', 'hombros': '44 cm', 'busto': '110 cm', 'largo_c': '72 cm', 'cadera': '104 cm', 'largo_p': '110 cm'},
  {'size': '8', 'hombros': '45 cm', 'busto': '120 cm', 'largo_c': '77 cm', 'cadera': '112 cm', 'largo_p': '114 cm'},
  {'size': '10', 'hombros': '46 cm', 'busto': '132 cm', 'largo_c': '78 cm', 'cadera': '127 cm', 'largo_p': '114 cm'}
];

load('usuario');
load('compra');
load('contacto', contactos);
load('pedido', [{name: 'nush'}]);
load('producto', ambos.concat(chaquetas).concat(pantalones));
load('talle', talles);
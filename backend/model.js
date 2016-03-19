var bcrypt   = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var baucis = require('baucis');

// Connect to the Mongo instance
mongoose.connect('mongodb://localhost/nush');

// Create a mongoose schema.
var Producto = new mongoose.Schema({
  name: String,
  size: {type: String, default: 'col-md-3'},
  codigo: String,
  tipo: String,
  imagen_completa: String,
  imagen: [String],
  precio: Number,
  stock: Number
});

// define the schema for our user model
var Usuario = mongoose.Schema({

  local            : {
    email        : String,
    password     : String
  },
  facebook         : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  },
  twitter          : {
    id           : String,
    token        : String,
    displayName  : String,
    username     : String
  },
  google           : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  }

});

var Compra = new mongoose.Schema({
  codigo: Number,
  usuario: [Usuario],
  carrito: [Producto]
});

var Talle = new mongoose.Schema({
  size: String,
  busto: String,
  alto: String
});

var Contacto = new mongoose.Schema({
  name: String,
  href: String,
  icon: String
});

var Encargo = new mongoose.Schema({
  full_name: String,
  email: String,
  talle: String,
  telephone: String,
  producto: Producto,
  number: Number
});

var Pedido = new mongoose.Schema({
  name: String,
  nextSeqNumber: { type: Number, default: 100 }
});

Encargo.pre('save', function(next) {
  var doc = this;
  console.log('Un encargo fue guardado en Mongo: %s.', doc.get('email'));
  mongoose.model('pedido').findOneAndUpdate({name: 'nush'}, { $inc: { nextSeqNumber: 1 } })
  .exec()
  .then((settings) => {
    doc.number = settings.nextSeqNumber - 1;
    next();
  })
  .catch(console.log);
});

Producto.pre('save', function(next) {
  console.log('Un producto fue guardado en Mongo: %s.', this.get('name'));
  next();
});

Usuario.pre('save', function(next) {
  console.log('Un usuario fue guardado en Mongo: %s.', this.get('username'));
  next();
});

Usuario.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

Usuario.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

Compra.pre('save', function(next) {
  console.log('Un compra fue guardado en Mongo: %s.', this.get('codigo'));
  next();
});

Talle.pre('save', function(next) {
  console.log('Un talle fue guardado en Mongo: %s.', this.get('size'));
  next();
});

Contacto.pre('save', function(next) {
  console.log('Un contacto fue guardado en Mongo: %s.', this.get('name'));
  next();
});

Pedido.pre('save', function(next) {
  console.log('Un pedido fue guardado en Mongo: %s.', this.get('name'));
  next();
});

// Register new models with mongoose.
mongoose.model('pedido', Pedido);
mongoose.model('producto', Producto);
mongoose.model('encargo', Encargo);
mongoose.model('usuario', Usuario);
mongoose.model('compra', Compra);
mongoose.model('talle', Talle);
mongoose.model('contacto', Contacto);
var usuario = mongoose.model('usuario', Usuario);

// Create a simple controller.  By default these HTTP methods
// are activated: HEAD, GET, POST, PUT, DELETE
baucis.rest('pedido');
baucis.rest('producto');
baucis.rest('contacto');
baucis.rest('encargo');
baucis.rest('talle');
baucis.rest('usuario');
baucis.rest('compra');

// Export baucis and mongoose
var exports = module.exports = {
  mongoose: mongoose,
  baucis: baucis,
  user: usuario
};

var nuShService = app.service('nuShService', function ($http, API_URL) {

  this.getId = function(){
    var id = location.search.split('id=')[1];
    var ids = [];
    ids = ids.concat(this.ambos);
    ids = ids.concat(this.chaquetas);
    ids = ids.concat(this.pantalones);
    ids = ids.filter(function(elem){
      return elem.id === id;
    });
    return [ids.pop()];
  };

  this.getAmbos = function () {
    return [
      {'size': 'col-sm-3', 'id': 'a1', 'imagen': 'static/img/portfolio/ambo1.jpeg'},
      {'size': 'col-sm-3', 'id': 'a2', 'imagen': 'static/img/portfolio/ambo2.jpg'},
      {'size': 'col-sm-3', 'id': 'a3', 'imagen': 'static/img/portfolio/ambo3.jpg'},
      {'size': 'col-sm-3', 'id': 'a4', 'imagen': 'static/img/portfolio/ambo4.jpg'},
      {'size': 'col-sm-3', 'id': 'a5', 'imagen': 'static/img/portfolio/ambo5.jpg'},
      {'size': 'col-sm-3', 'id': 'a6', 'imagen': 'static/img/portfolio/ambo6.jpg'},
      {'size': 'col-sm-3', 'id': 'a7', 'imagen': 'static/img/portfolio/ambo7.jpg'},
      {'size': 'col-sm-3', 'id': 'a8', 'imagen': 'static/img/portfolio/ambo8.jpg'}
    ]
  };

  this.getChaquetas = function () {
    return [
      {'size': 'col-sm-3', 'id': 'c1', 'imagen': 'static/img/portfolio/chaquetas1.jpeg'},
      {'size': 'col-sm-3', 'id': 'c2', 'imagen': 'static/img/portfolio/chaquetas2.jpeg'},
      {'size': 'col-sm-3', 'id': 'c3', 'imagen': 'static/img/portfolio/chaquetas3.jpg'},
      {'size': 'col-sm-3', 'id': 'c4', 'imagen': 'static/img/portfolio/chaquetas4.jpg'}
    ]
  };

  this.getPantalones = function () {
    return [
      {'size': 'col-sm-3', 'id': 'p1', 'imagen': 'static/img/portfolio/pantalon1.jpg'},
      {'size': 'col-sm-3', 'id': 'p2', 'imagen': 'static/img/portfolio/pantalon2.jpg'},
      {'size': 'col-sm-3', 'id': 'p3', 'imagen': 'static/img/portfolio/pantalon1.jpg'},
      {'size': 'col-sm-3', 'id': 'p4', 'imagen': 'static/img/portfolio/pantalon2.jpg'}
    ]
  };

  this.getContacts = function() {
    return [
      {'href': 'http://google.com.ar', 'icon': 'fa-facebook'},
      {'href': 'http://google.com.ar', 'icon': 'fa-twitter'},
      {'href': 'http://google.com.ar', 'icon': 'fa-instagram'}
    ]
  };

  this.getTalles = function () {
    return [
      {'size': 'xs', 'busto': '10 cm', 'alto': '5 cm'},
      {'size': 's', 'busto': '15 cm', 'alto': '10 cm'},
      {'size': 'm', 'busto': '20 cm', 'alto': '10 cm'},
      {'size': 'l', 'busto': '25 cm', 'alto': '20 cm'},
      {'size': 'xl', 'busto': '30 cm', 'alto': '21 cm'},
      {'size': 'xxl', 'busto': '35 cm', 'alto': '25 cm'}
    ]
  };

});

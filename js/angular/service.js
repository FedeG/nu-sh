var nuShService = app.service('nuShService', function ($http, API_URL) {

  this.getAmbos = function () {
    return [
      {'size': 'col-sm-3', 'modal': 'portfolioModal1', 'imagen': 'img/portfolio/ambo1.jpeg'},
      {'size': 'col-sm-3', 'modal': 'portfolioModal2', 'imagen': 'img/portfolio/ambo2.jpg'},
      {'size': 'col-sm-3', 'modal': 'portfolioModal3', 'imagen': 'img/portfolio/ambo3.jpg'},
      {'size': 'col-sm-3', 'modal': 'portfolioModal4', 'imagen': 'img/portfolio/ambo4.jpg'},
      {'size': 'col-sm-3', 'modal': 'portfolioModal5', 'imagen': 'img/portfolio/ambo5.jpg'},
      {'size': 'col-sm-3', 'modal': 'portfolioModal6', 'imagen': 'img/portfolio/ambo6.jpg'},
      {'size': 'col-sm-3', 'modal': 'portfolioModal7', 'imagen': 'img/portfolio/ambo7.jpg'},
      {'size': 'col-sm-3', 'modal': 'portfolioModal8', 'imagen': 'img/portfolio/ambo8.jpg'}
    ]
  };

  this.getChaquetas = function () {
    return [
      {'size': 'col-sm-3', 'modal': 'chaquetaModal1', 'imagen': 'img/portfolio/chaquetas1.jpeg'},
      {'size': 'col-sm-3', 'modal': 'chaquetaModal2', 'imagen': 'img/portfolio/chaquetas2.jpeg'},
      {'size': 'col-sm-3', 'modal': 'chaquetaModal3', 'imagen': 'img/portfolio/chaquetas3.jpg'},
      {'size': 'col-sm-3', 'modal': 'chaquetaModal4', 'imagen': 'img/portfolio/chaquetas4.jpg'}
    ]
  };

  this.getPantalones = function () {
    return [
      {'size': 'col-sm-3', 'modal': 'pantalonModal1', 'imagen': 'img/portfolio/pantalon1.jpg'},
      {'size': 'col-sm-3', 'modal': 'pantalonModal2', 'imagen': 'img/portfolio/pantalon2.jpg'},
      {'size': 'col-sm-3', 'modal': 'pantalonModal3', 'imagen': 'img/portfolio/pantalon1.jpg'},
      {'size': 'col-sm-3', 'modal': 'pantalonModal4', 'imagen': 'img/portfolio/pantalon2.jpg'}
    ]
  };

  this.getContacts = function() {
    return [
      {'href': 'http://google.com.ar', 'icon': 'fa-facebook'},
      {'href': 'http://google.com.ar', 'icon': 'fa-twitter'},
      {'href': 'http://google.com.ar', 'icon': 'fa-instagram'}
    ]
  }


});

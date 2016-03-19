$(document).ready(function() {
  var origin_html;
  $('#comprar').mouseenter(function () {
    origin_html = $('#comprar').html();
    $('#comprar').html('Comprar');
  });
  $('#comprar').mouseleave(function () {
    $('#comprar').html(origin_html);
  });

  var agregar_html;
  $('#agregar').mouseenter(function () {
    agregar_html = $('#agregar').html();
    $('#agregar').html('Agregar');
  });
  $('#agregar').mouseleave(function () {
    $('#agregar').html(agregar_html);
  });

  var encargar_html;
  $('#encargar').mouseenter(function () {
    encargar_html = $('#encargar').html();
    $('#encargar').html('Encargar');
  });
  $('#encargar').mouseleave(function () {
    $('#encargar').html(encargar_html);
  });
  
});
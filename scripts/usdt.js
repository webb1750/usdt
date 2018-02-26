var PREFIX = 'usdt';
var ACCORDION = '.' + PREFIX + '-accordion, .' + PREFIX + '-accordion-bordered';
var BUTTON = '.' + PREFIX + '-accordion-button[aria-controls]';
var EXPANDED = 'aria-expanded';
var MULTISELECTABLE = 'aria-multiselectable';


$(BUTTON).on('click', function(){
  var BTNid = $(this).attr('aria-controls');
  var CONT = $('.' + PREFIX + '-accordion-content#' + BTNid).attr('aria-hidden');
  if(CONT == 'true'){
    CONT = $('.' + PREFIX + '-accordion-content#' + BTNid).attr('aria-hidden','false');
    $(this).attr('aria-expanded','true');
  } else {
    CONT = $('.' + PREFIX + '-accordion-content#' + BTNid).attr('aria-hidden','true');
    $(this).attr('aria-expanded','false');
  }
});

$(".usdt-option").on('click', function() {
  $(this).toggleClass("on");
  $(this).next('.usdt-option-menu').toggleClass('hidden');
});

$(".usdt-side-nav-toggle").on('click', function() {
  var targetMenu = $(this).attr('aria-controls');
  $(this).toggleClass("open");
  $('#' + targetMenu).toggleClass('open');
});

$(".usdt-section-toggle").on('click', function() {
  var targetSection = $(this).attr('aria-controls');
  var condition = $('#' + targetSection).attr('aria-hidden');
  if(condition == 'true'){
    condition = $('#' + targetSection).attr('aria-hidden','false');
    $(this).attr('aria-expanded','true');
  } else {
    condition = $('#' + targetSection).attr('aria-hidden','true');
    $(this).attr('aria-expanded','false');
  }
});

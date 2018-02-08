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

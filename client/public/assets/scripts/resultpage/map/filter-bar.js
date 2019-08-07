$(document).ready(function() {
  // Filter switch button
  $('#filter__switch-type').bootstrapToggle('on');
  $("#filter__switch-type").change(function () {
    var $target = $(this),
      filterType = $("#filter-type")[0];
    filtersProject = $("#filters-project");
    filtersProperties = $("#filters-properties");

    // clear filter input
    clearFilterInput();

    if ($target.prop("checked")) {
      filterType.innerHTML = $('#filterType').find('.toggle-on')[0].innerHTML;
      filtersProject.addClass('show');
      filtersProperties.removeClass('show');
    } else {
      filterType.innerHTML = $('#filterType').find('.toggle-off')[0].innerHTML;
      filtersProject.removeClass('show');
      filtersProperties.addClass('show');
    }
  });
  // Trigger for dropdown menu
  // Clear input value
  function clearFilterInput() {
    $('.top-additional .dropdown-menu input[type="text"]').val('');
    $('.top-additional .dropdown-menu input[type="checkbox"]').prop('checked', false);
  }
  clearFilterInput();
  $('.top-additional .dropdown-menu').on('click', function (e) {
    e.stopPropagation();
    var $target = $(e.currentTarget);
  });

  $('.dropdown-menu .dropdown-item').on('click', function (e) {
    e.stopPropagation();
    var $target = $(e.currentTarget);
    // Checkbox input
    var inp = $target.find(".dropdown-item--checkbox .form-check-input");
    if (inp.length != 0) {
      $(inp).prop('checked', !$(inp).is(":checked"))
    }
  });
  $('.dropdown-menu .form-check-label').on('click', function (e) {
    e.stopPropagation();
    var $target = $(event.currentTarget),
      inp = $target.siblings(".form-check-input");
    $(inp).prop('checked', !$(inp).is(':checked'));
  });

  $('#filterRoom .dropdown-menu .dropdown-item, #filterStatus .dropdown-menu .dropdown-item').on('click', function (e) {
    var $target = $(e.currentTarget),
        inp = $target.siblings(".form-check-input");
        if(!$(inp).is(":checked")) {
          $target.siblings().find(".form-check-input").prop('checked', false);
        }
  });
  // FILTER TRADING
  function handleTradingFilter(e) {
    e.stopPropagation();
    var $target = $(e.currentTarget),
      $tradingText = $('#filterTradingList'),
      inp = $target.find(".dropdown-item--checkbox .form-check-input"),
      tradingType = inp.data('trading');
    $(inp).is(':checked') ? $tradingText.addClass(`has-${tradingType}`) : $tradingText.removeClass(`has-${tradingType}`);
  }
  $('#filterTrading .dropdown-menu .dropdown-item').on('click', function(e){
    handleTradingFilter(e);
  });
  //#region MIN-MAX PRICE 
  // MIN-MAX PRICE
  var $inpMin = $('.input-price-min'),
      $inpMax = $('.input-price-max'),
      $rangeMin = $('.min-options'),
      $rangeMax = $('.max-options');
  $('#filterPrice .dropdown-toggle').on('click', function() {
    // init
    $rangeMin.show();
    $rangeMax.hide();
    $inpMin.focus();
  });
  $('.input-price-min').focus(function(e){
    $rangeMin.show();
    $rangeMax.hide();
  });
  $('.input-price-max').focus(function(e){
    $rangeMax.show();
    $rangeMin.hide();
  });
  $('.min-options .dropdown-item').on('click', function(e) {
    var target = e.currentTarget,
        val = $(target).attr('tabindex');
    $inpMin.val(val);
    $inpMax.focus();
  });
  $('.max-options .dropdown-item').on('click', function(e) {
    var target = e.currentTarget;
        val = $(target).attr('tabindex');
    $inpMax.val(val);
    $('.filter-price .dropdown-menu').removeClass('show');
  });
  // Land square
  $('input[type="range"').on('change', function(e) {
    var $target = $(e.currentTarget),
        label = $target.val();
    $target.siblings('label').html(label + '+ m&sup2');
  });
  // Favorite
  $('.sr-item__favorite, .sr-item__non-favorite').on('click', function(e){
    var $target = $(e.currentTarget);
    $target.parents('.search-result__item').toggleClass('active')
  });
  //#endregion 
});
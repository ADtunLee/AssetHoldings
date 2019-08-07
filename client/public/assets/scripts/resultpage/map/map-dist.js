'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    // trigger check jQuery is ready
    if ($ || jQuery) {
      console.log('jQuery is ready!');
    }
    /* trigger dropdown-menu click do not close */
    var menus = document.querySelectorAll('.top-additional .dropdown-menu');
    var handleClickMenu = function handleClickMenu(e) {
      e.stopPropagation();
    };
    menus.forEach(function (menu) {
      return menu.addEventListener('click', function (e) {
        return handleClickMenu(e);
      });
    });

    /* HANDLE SWITCH TYPE FILTER */
    var filterTypeContainer = $('#filterType');
    var switchFilter = $('#filter__switch-type');
    var switchFilterText = $('#filter-type');
    var filterProject = $("#filters-project");
    var filterProperties = $("#filters-properties");

    var handleSwitchFilter = function handleSwitchFilter(event) {
      clearFilterInput();
      var target = $(event.currentTarget);
      if (target.prop('checked')) {
        switchFilterText.html(filterTypeContainer.find('.toggle-on')[0].innerHTML);
        filterProject.addClass('show');
        filterProperties.removeClass('show');
      } else {
        switchFilterText.html(filterTypeContainer.find('.toggle-off')[0].innerHTML);
        filterProperties.addClass('show');
        filterProject.removeClass('show');
      }
    };
    // init boostrap toggle
    $(switchFilter).bootstrapToggle('on');
    // add event switch filter
    switchFilter.on('change', function (event) {
      return handleSwitchFilter(event);
    });

    // HANDLE CHECKBOX ONCHANGE EVENTS
    var checkboxChangeAction = function checkboxChangeAction(event, input) {
      var changeProperties = {
        event: event,
        checkedList: getCheckboxChecked(input),
        currentInput: input,
        inputContainer: getInputContainer(input, '.top-additional--filter')
      };
      onCheckboxChange(changeProperties);
    };
    // get input container
    var getInputContainer = function getInputContainer(input, selector) {
      return $(input).parents(selector);
    };

    // get checkbox is checked
    var getCheckboxChecked = function getCheckboxChecked(input) {
      return $(input).parents('.dropdown-menu').find('input:checked');
    };

    // handleChangeCheckbox
    var onCheckboxChange = function onCheckboxChange(changeProperties) {
      // handle filter options total
      var optionType = '';
      var optionText = [];
      if (changeProperties.inputContainer.hasClass('filter-options-total')) {
        optionType = 'option-total';
      }
      if (optionType == 'option-total') {
        var optionTotalText = $(changeProperties.inputContainer).data('title');
        // get Option Total Text
        var options = $(changeProperties.checkedList).siblings('label');

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.entries(options)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                index = _step$value[0],
                item = _step$value[1];

            if (item.innerHTML) optionText.push(item.innerHTML);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (optionText.length > 0) {
          optionTotalText += ': ' + optionText.join(', ');
        }
        $(changeProperties.inputContainer).find('.filter--text').html(optionTotalText);
      }
      // Filter options radio
      if (changeProperties.inputContainer.hasClass('filter-options-radio')) {
        var _optionText = $(changeProperties.inputContainer).data('title');
        $(changeProperties.inputContainer).find('.form-check-input').prop('checked', false);
        $(changeProperties.currentInput).prop('checked', true);
        $(changeProperties.inputContainer).find('.filter--text').html(_optionText + ': ' + $(changeProperties.currentInput).siblings('.form-check-label').html());
      }
    };

    /* Handle Click checkbox */
    var inputs = document.querySelectorAll('.dropdown-menu .dropdown-item .form-check-input');
    // add events
    inputs.forEach(function (input) {
      return input.addEventListener('click', function (event) {
        return checkboxChangeAction(event, input);
      });
    });

    //#region MIN-MAX PRICE 
    // MIN-MAX PRICE
    var $inpMin = $('.input-price-min'),
        $inpMax = $('.input-price-max'),
        $rangeMin = $('.min-options'),
        $rangeMax = $('.max-options');
    var priceText = 'Mức giá';
    $('.filter-price').on('click', function () {
      // init
      $(this).find('.min-options').show();
      $(this).find('.max-options').hide();
      $(this).find('.input-price-min').focus();
    });
    $('.input-price-min').focus(function () {
      $rangeMin.show();
      $rangeMax.hide();
    });
    $('.input-price-max').focus(function () {
      $rangeMax.show();
      $rangeMin.hide();
    });

    $('.min-options .dropdown-item').on('click', function (e) {
      var target = e.currentTarget,
          val = Number($(target).attr('tabindex')),
          pricelistMin = $(target).parents('.pricelist-range'),
          optionMin = $(pricelistMin).find('.min-options'),
          pricelistMax = $(target).parents('.pricelist-range').siblings(),
          optionMax = $(pricelistMax).find('.max-options .dropdown-item'),
          inpMin = pricelistMin.find('.input-price-min'),
          inpMax = pricelistMax.find('.input-price-max');
      inpMin.val(val);
      inpMax.focus();
    });

    $('.max-options .dropdown-item').on('click', function (e) {
      var target = e.currentTarget,
          val = Number($(target).attr('tabindex')),
          pricelistMax = $(target).parents('.pricelist-range'),
          optionMax = $(pricelistMin).find('.max-options'),
          pricelistMin = $(target).parents('.pricelist-range').siblings(),
          optionMin = $(pricelistMin).find('.min-options .dropdown-item'),
          inpMin = pricelistMin.find('.input-price-min'),
          inpMax = pricelistMax.find('.input-price-max');
      if (val && val != -1) {
        inpMax.val(val);
        $('.filter-price .dropdown-menu').removeClass('show');
      } else {
        inpMax.val('');
        inpMax.focus();
      }
    });

    // Land square
    $('input[type="range"').on('change', function (e) {
      var $target = $(e.currentTarget),
          label = $target.val();
      $target.siblings('label').html(label + '+ m&sup2');
    });
    // Favorite
    $('.sr-item__favorite, .sr-item__non-favorite').on('click', function (e) {
      var $target = $(e.currentTarget);
      $target.parents('.search-result__item').toggleClass('active');
    });
    //#endregion 

    // handle clear input
    var clearFilterInput = function clearFilterInput() {
      var filterInput = $('.top-additional .dropdown-menu input[type="text"]');
      filterInput.toArray().forEach(function (input) {
        input.value = '';
        if (typeof $(input).tagsinput == 'function') {
          // $(input).tagsinput('removeAll');
          $('.bootstrap-tagsinput .tag').remove();
        }
      });
      var filterCheckbox = $('.top-additional .dropdown-menu input[type="checkbox"]');
      filterCheckbox.toArray().forEach(function (checkbox) {
        checkbox.checked = false;
      });
      var filterSelect = $('.top-additional .dropdown-menu select');
      filterSelect.toArray().forEach(function (select) {
        select.value = '';
      });
      var filterRange = $('.top-additional .dropdown-menu input[type="range"]');
      filterRange.toArray().forEach(function (range) {
        range.value = '0';
      });
      var filterNumber = $('.top-additional .dropdown-menu input[type="number"]');
      filterNumber.toArray().forEach(function (number) {
        number.value = '0';
      });
    };

    clearFilterInput();

    $('#filterRoom .dropdown-menu .dropdown-item').on('click', function (e) {
      var $target = $(e.currentTarget),
          inp = $target.siblings(".form-check-input");
      if (!$(inp).is(":checked")) {
        $target.siblings().find(".form-check-input").prop('checked', false);
      }
    });
    // FILTER TRADING
    var handleTradingFilter = function handleTradingFilter(e) {
      var $target = $(e.currentTarget),
          $tradingText = $('#filterTradingList'),
          inp = $target.find(".dropdown-item--checkbox .form-check-input"),
          tradingType = inp.data('trading');
      $(inp).is(':checked') ? $tradingText.addClass('has-' + tradingType) : $tradingText.removeClass('has-' + tradingType);
    };
    $('#filterTrading .dropdown-menu .dropdown-item').on('click', function (e) {
      handleTradingFilter(e);
    });
    // Handle checkbox radio area
    var handleRadioArea = function handleRadioArea(e) {
      var target = $(e.currentTarget);
      var inputs = target.parents('.checkbox-radio-area').find('input[type="checkbox"]');
      inputs.toArray().forEach(function (input) {
        return input.checked = false;
      });
      target.prop('checked', true);
    };
    $('.checkbox-radio-area input[type="checkbox"]').on('click', function (e) {
      return handleRadioArea(e);
    });
    // HANDLE INPUT FILTER COUNT
    $('.filter-options-count .filter-input-count').on('change', function (e) {
      return inputChangeAction(e);
    });
    var inputChangeAction = function inputChangeAction(e) {
      var target = $(e.currentTarget),
          filterOptionContainer = target.parents('.filter-options-count'),
          filterOptionText = filterOptionContainer.data('title'),
          filterOptionCount = filterOptionContainer.data('option-count'),
          filterTextElement = filterOptionContainer.find('.filter--text'),
          countTotal = 0;

      if (target.val() && target.val() != '') {
        var inputCountElements = filterOptionContainer.find('.filter-input-count');
        inputCountElements.toArray().forEach(function (input) {
          if (input.value && target.value != '') {
            if (($(input).hasClass('form-control-range') || $(input).hasClass('form-check-input') || $(input).prop('type') == 'number') && input.value == '0') return;
            if ($(input).prop('type') == 'checkbox' && input.checked == false) return;
            countTotal++;
          }
        });
      }
      // set
      filterOptionContainer.data('option-count', countTotal);
      filterTextElement.html(filterOptionText + (countTotal > 0 ? ': ' + countTotal : ''));
    };
  }
};
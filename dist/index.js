"use strict";

/* global HTMLInputElement */
module.exports = function tabto(input) {
  if (!(input instanceof HTMLInputElement)) {
    console.error('tabto() expect a DOM Input element.');
    return;
  }

  if (!input.dataset.tabTarget) {
    console.error('tabto() expect the DOM Input element to have a "data-tab-target" attribute.');
    return;
  }

  var maxLength = input.maxLength;
  var next = document.querySelector(input.dataset.tabTarget);

  if (!next || !maxLength) {
    console.error('tabto() a valid target and a maxLength on the provided input.');
    return;
  }

  var currentValue = input.value;
  input.addEventListener('input', function () {
    // If the value change, check for tab
    if (input.value !== currentValue) {
      if (input.value.length >= maxLength) {
        next.focus();
      }
    }

    currentValue = input.value;
  });
};
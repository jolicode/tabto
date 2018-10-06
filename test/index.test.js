/* eslint-env jest */

'use strict'

import tabto from '../index'

test('focus on the next field', () => {
  document.body.innerHTML =
    '<input id="one" data-tab-target="#two" maxlength="10" />\n' +
    '<input id="two" />'

  let firstInput = document.getElementById('one')
  let event = new window.Event('input')

  tabto(firstInput)

  firstInput.focus()
  expect(document.activeElement.id).toEqual(firstInput.id)

  // Length = 9
  firstInput.value = '123456789'

  // Fire keyup
  firstInput.dispatchEvent(event)

  // Still "one"
  expect(document.activeElement.id).toEqual(firstInput.id)

  // Length = 11
  firstInput.value = '12345678911'
  firstInput.dispatchEvent(event)

  // Jumped to "two" \o/
  expect(document.activeElement.id).toEqual('two')
})

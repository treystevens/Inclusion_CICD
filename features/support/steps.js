const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('a variable set to {int}', function(number) {
  this.setTo(number);
});

When('I increment the variable by {int}', function(number) {
  this.incrementBy(number);
});

Then('the variable should contain {int}', function(number) {
  expect(this.variable).to.eql(number);
});

// Given('a variable set to {int}', function(number) {
//   this.setTo(number);
// });

// When('I decrement the variable by {int}', function(number) {
//   this.decrementBy(number);
// });

// Then('the variable should contain {int}', function(number) {
//   expect(this.variable).to.eql(number);
// });

const generateTestEmail = () => `test+${Date.now()}${Math.floor(Math.random() * 1000)}@turbotenant.com`;

 function focusAndReplace(selector, text) {
   focusAndClean(selector);
   cy.get(selector).type(text);
}
 function focusAndClean(selector) {
   cy.get(selector).clear();

}
 function selectOption(selector, options) {
  const selectElement =  cy.get(selector);
   selectElement.select(options);
}

function clickElement(selector){
cy.get(selector).click();
}
function randomText(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

module.exports = {

  generateTestEmail,
  focusAndReplace,
  focusAndClean,
  selectOption,
  clickElement,
  randomText
};

describe('Testing of the Meta Weather API (No Location Specified):', () => {
 var response;
 var base_url = 'https://www.metaweather.com/api/location/';

 //date-related variables used throughout the test
 var no_location_url = base_url + '/';

 it('No Location => Validate the header:', () => {
  response = cy.request({
   url: no_location_url,
   failOnStatusCode: false
  })
  response.its('headers')
   .its('content-type')
   .should('include', 'text/html')
 })

 it('No Location => Validate the status:', () => {
  response = cy.request({
   url: no_location_url,
   failOnStatusCode: false
  })
  response.its('status')
   .should('equal', 404);
 })

 it('Not Location => Validate that the body is not empty and includes the Not Found message:', () => {
  response = cy.request({
   url: no_location_url,
   failOnStatusCode: false
  })
  response.its('body')
   .should('not.be.empty')
   .and('include', '<h1>404 - Page not found</h1>');
 })

})

describe('Testing of the Meta Weather API:', () => {
    var response;
    var base_url = 'https://www.metaweather.com/api/location/';

    //date-related variables used throughout the test
    var date = new Date();

    var tomorrow  = date.getDay() + 1;
    var today = date.getDay();
    var yesterday = date.getDay() - 1;

    var year = date.getFullYear();
    var month = date.getMonth();

    // town woeid
    var nottingham = '30720';
    var edinburgh = '19344';

    //request urls
    var nottingham_url = base_url + nottingham + '/' + year.toString() + '/' + month.toString() + '/' + tomorrow + '/';
    var edinburgh_url = base_url + edinburgh + '/' + year.toString() + '/' + month.toString() + '/' + yesterday + '/';

    it('Nottingham + Tomorow => Validate the header:', () => {
       response = cy.request(nottingham_url)
       response.its('headers')
             .its('content-type')
             .should('include', 'application/json')

    })

    it('Nottingham + Tomorow => Validate the status:', () => {
        response = cy.request(nottingham_url)
        response.its('status')
              .should('equal', 200);
     })

     it('Nottingham + Tomorow => Validate that the body is not empty:', () => {
        response = cy.request(nottingham_url)
        response.its('body')
              .should('not.be.empty');
     })

     it('Edinburgh + Yesterday => Validate the header:', () => {
        response = cy.request(edinburgh_url)
        response.its('headers')
              .its('content-type')
              .should('include', 'application/json')

     })

     it('Edinburgh + Yesterday => Validate the status:', () => {
         response = cy.request(edinburgh_url)
         response.its('status')
               .should('equal', 200);
      })

      it('Edinburgh + Yesterday => Validate that the body is not empty:', () => {
         response = cy.request(edinburgh_url)
         response.its('body')
               .should('not.be.empty');
      })
})

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

    var past_year = date.getFullYear() - 2;
    var other_month = date.getMonth() + 1;
    var other_day = date.getDate() + 3;

    // town woeid
    var nottingham = '30720';
    var edinburgh = '19344';

    var london = '44418';
    var bristol = '13963';

    //request urls
    var nottingham_url = base_url + nottingham + '/' + year.toString() + '/' + month.toString() + '/' + tomorrow + '/';
    var edinburgh_url = base_url + edinburgh + '/' + year.toString() + '/' + month.toString() + '/' + yesterday + '/';

    var london_url = base_url + london + '/' + year.toString() + '/' + month.toString() + '/' + today + '/';
    var bristol_url = base_url + bristol + '/' + past_year.toString() + '/' + other_month.toString() + '/' + other_day + '/';

    var invalid_location_url = base_url + '00000' + '/' + year.toString() + '/' + month.toString() + '/' + today + '/';

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

      it('London + Today => Validate the header:', () => {
         response = cy.request(london_url)
         response.its('headers')
               .its('content-type')
               .should('include', 'application/json')

      })

      it('London + Today => Validate the status:', () => {
          response = cy.request(london_url)
          response.its('status')
                .should('equal', 200);
       })

       it('London + Today => Validate that the body is not empty:', () => {
          response = cy.request(london_url)
          response.its('body')
                .should('not.be.empty');
       })

       it('Bristol 2018 => Validate the header:', () => {
          response = cy.request(bristol_url)
          response.its('headers')
                .its('content-type')
                .should('include', 'application/json')

       })

       it('Bristol 2018 => Validate the status:', () => {
           response = cy.request(bristol_url)
           response.its('status')
                 .should('equal', 200);
        })

        it('Bristol 2018 => Validate that the body is not empty:', () => {
           response = cy.request(bristol_url)
           response.its('body')
                 .should('not.be.empty');
        })

        it('Invalid Location => Validate the header:', () => {
           response = cy.request({url: invalid_location_url, failOnStatusCode: false})
           response.its('headers')
                 .its('content-type')
                 .should('include', 'application/json')

        })

        it('Invalid Location => Validate the status:', () => {
            response = cy.request({url: invalid_location_url, failOnStatusCode: false})
            response.its('status')
                  .should('equal', 404);
         })

         it('Invalid Location => Validate that the body is not empty and includes the Not Found message:', () => {
            response = cy.request({url: invalid_location_url, failOnStatusCode: false})
            response.its('body')
                  .should('not.be.empty')
                  .and('include', { detail: 'Not found.'});;
         })
})

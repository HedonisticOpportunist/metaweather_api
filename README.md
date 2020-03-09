# metaweather_api

## Background 

This test suite tests the MetaWeather API (https://www.metaweather.com/api/). The focus of the suite is testing specific dates
with a specific location (using Yahoo's woeid API). Invalid locations and dates have also been added. 

## Instructions 

Before running the test suite, please ensure that you have Node.js and Cypress installed. Instructions on 
how this is to be done can be found here: 

https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

Afterwards, depending on where the directory with the tests is located, run the following command(s): 

cd xxx/meta_weather_api/
node_modules/.bin/cypress open

This should open Cypress for you with the following screen: 

![Tests in Cypress:](https://github.com/HedonisticOpportunist/metaweather_api/blob/master/pic.png)

In order to the tests, you either select 'Run all specs' or click on the specific test you wish to run. 

## Issues and Bugs 

As setting up Node.js and Cypress took up the longest on my machine (issues with sudo and folder permissions), I was not able to find a reliable way on how to test the data returned from the response. 


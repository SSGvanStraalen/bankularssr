# Bankular

Hi welkome to the code of bankular. Here you find an exampke bank where we have been using angular with universal for server side rendering.

We are using at this time of writing [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

the only thing is at this moment the backend is not stubbed. we are using fiddler to do this. and proxy trough all calls to our ssr server that can be started with `npm start` this will compile your code to a ssr version. en will be started with the backend server. 


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## deploy the code on AWS

To deploy the code on AWS we where using an elastic beanstalk.
You have to create 2 environment variables.

* PORT = 8008
* DIST = /browser

you can run the command `npm run build:ssrAWS` to generate a zipped version of the application and you can basically upload this to your AWS elastic beanstalk. but before running that command you want to put the URL of your environment in `environments\environment.prod.ts` you can see en example commented out there. For the client version this is not needed. because the browser knows the host. somthing you dont know server side.

## client side version
you can find the client side version in this branch [here](https://github.com/SSGvanStraalen/bankularssr/tree/clientSide)

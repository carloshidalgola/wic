// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_microservice_usuario : "http://localhost:8090/service/usuario",
  url_microservice_producto: "http://localhost:8091/service/usuario",
  //url_microservice_parameters: "http://localhost:8083/parameters/",
  //url_microservice_novelties: "http://localhost:8080",
  //url_microservice_files: "http://localhost:8095/files/v1",
  //url_miroservice_commerce : "http://localhost:8090/commerce/"
  //url_microservice_parameters: "http://a69208b63c0a642f5be044cafc6c8532-70fbfe6018af2805.elb.us-west-2.amazonaws.com:8080/parameters/",
  //url_microservice_novelties: "http://ae8500e48eb334d4f824610e3e1bd609-9ad7d48393cdfb42.elb.us-west-2.amazonaws.com:8080",
  //url_microservice_files: "http://a0eb0160f529f471aa2f001877d6346d-1050a64ad3e89c5c.elb.us-west-2.amazonaws.com:8080/files/v1",
  //url_miroservice_commerce : "http://ab46a7c7de1c249a58a716ae18d62a57-0c7e05e47f0f05d3.elb.us-west-2.amazonaws.com:8080/commerce/"
  url_microservice_parameters: "http://localhost:8083/parameters/",
  url_microservice_novelties: "http://localhost:8080",
  url_microservice_files: "http://localhost:8095/files/v1",
  url_miroservice_commerce : "http://localhost:8090/commerce/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

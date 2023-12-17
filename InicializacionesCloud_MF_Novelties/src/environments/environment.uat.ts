// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_microservice_usuario : "http://localhost:8090/service/usuario",
  url_microservice_producto: "http://localhost:8091/service/usuario",
  //TEST
  url_microservice_parameters: "https://ws4l2lwxca.execute-api.us-east-1.amazonaws.com/test/parameters/",
  url_microservice_novelties: "https://l8mg18emic.execute-api.us-east-1.amazonaws.com/test",
  url_microservice_files: "https://add7z205z4.execute-api.us-east-1.amazonaws.com/test/files/v1",
  url_miroservice_commerce : "https://add7z205z4.execute-api.us-east-1.amazonaws.com/test/commerce/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

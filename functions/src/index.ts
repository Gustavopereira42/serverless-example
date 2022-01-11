// import * as Funcions from "firebase-functions";
import { FunctionParser } from "firebase-backend";

exports = new FunctionParser(__dirname, exports).exports;

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

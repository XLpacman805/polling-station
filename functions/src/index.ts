import * as functions from 'firebase-functions';
const cors = require('cors')({origin: true});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
});

export const createPoll = functions.https.onRequest((request, response) => {
   cors(request, response, () => {
      
   })
});

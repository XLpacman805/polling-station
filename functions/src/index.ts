import * as functions from 'firebase-functions';
import { Poll } from './models/Models';
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
      try {
         // Should create a new poll
         let poll = new Poll(request.body.poll);

         // Should write it to the database

         // Should return a response or an error.

         response.json(poll);
      } catch(err)  {
         response.json({error: err.toString()});
      }
   })
});

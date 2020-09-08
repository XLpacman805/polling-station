const cors = require('cors')({origin: true});
import { Poll } from './models/Models';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

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

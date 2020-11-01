const cors = require('cors')({origin: true});
import { Poll } from './models/Models';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();
const collections = {polls: 'polls'}

const serialize = (customObject: Object) : Object => {
   return JSON.parse(JSON.stringify(customObject));
}

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
         db.collection(collections.polls).add(serialize(poll))
            .then(value => response.json(value)) // Should return a response or an error.
            .catch(err => functions.logger.error(err));
      } catch(err)  {
         response.json({error: err.toString()});
      }
   })
});

export const authenticate = functions.https.onRequest((request, response) => {
   admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: "https://polling-station-488.firebaseio.com"
    });
   response.send("Hello from Firebase!");
});
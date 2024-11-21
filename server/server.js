import express from 'express';
import cors from 'cors';
import {
  openAiImageProcessing,
} from './controllers/imageProcessingController.js';
import openAiAltTextController from './controllers/openAiAltTextController.js';

const { queryOpenAI } = openAiAltTextController;

//import is compatible everywhere,
// where as "require" is only usable under certain circumstances so unless you are working
//with a legacy codebase that already uses "require" you should use "import" instead.
//import 'dotenv/config//

const app = express();

app.use(cors());
app.use(express.json());

app.post(
  '/alt-text',
  //userQuery,
  openAiImageProcessing,
  queryOpenAI,
  (req, res) => {
   // const simple = res.locals.simple;
    //const altText = 'alt test';
    //const complex = res.locals.complex;
    //const details = 'alt details';
    const analysisResult = res.locals.analysisResult;
    // return res.status(200).json(analysisResult); 
    return res.status(200).send(analysisResult);
  });
 
// app.post('/alt-text', (req, res) => {
//   console.log('hello');
//   res.status(200).json({ hello: 'hello' });
// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';
import { azureImageProcessing } from './controllers/imageProcessingController.js';

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
  azureImageProcessing,
  // openAiController middleware next
  (req, res) => {
    //const altText = res.locals.altText;
    //const altText = 'alt test';
    //const details = res.locals.details;
    //const details = 'alt details';
    const analysisResult = res.locals.analysisResult;
    console.log(analysisResult);
    res.status(200).json(res.locals.analysisResult);
  }
);

// app.post('/alt-text', (req, res) => {
//   console.log('hello');
//   res.status(200).json({ hello: 'hello' });
// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

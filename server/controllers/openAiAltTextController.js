import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAiAltTextController = {};

openAiAltTextController.queryOpenAI = async (req, res, next) => {
  const imageContext = '';
  const textContext = '';

  console.log('open ai controller');

  //const { imageContext, textContext } = res.locals;
  const { imageAnalysis } = res.locals; //this will be recieve from the azureController

  if (!imageAnalysis) {
    console.log('imageAnalysis not found');
    return next({
      log: 'Image analysis not found',
      status: 500,
      message: {
        err: 'An error occurred openAiAltTextController',
      },
    });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a professional creating alt text for a img tag, come up with prompt here utilizing ${imageAnalysis} `,
        },
        { role: 'user', content: `${imageContext}, ${textContext}` },
      ],
    });

    const completion = response.choices[0].message.content;

    if (!completion) {
      console.log('error in ai controller ', completion);
      return next({
        log: 'OpenAi did not return a response',
        status: 500,
        message: {
          err: 'An error occurred while querying openAI',
        },
      });
    }

    res.locals.altText = completion; //need to console.log completion to know what it inclues
    res.locals.details = completion; //need to console.log completion to know what it inclues
    console.log(completion);
    return next();
  } catch (err) {
    console.log('error from open ai ', err);
    return next({
      log: `Error in openAI middleware ${err}`,
      status: 500,
      message: {
        err: 'An error occurred while quering openAiAltTextController',
      },
    });
  }
};
export default openAiAltTextController;

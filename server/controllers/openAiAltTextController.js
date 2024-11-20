import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY,
});

const openAiAltTextController = {};

openAiAltTextController.queryOpenAI = async (req, res, next) => {
  const { imageContext, textContext } = res.locals;
  const { imageAnalysis } = res.locals; //this will be recieve from the azureController

  if (!imageAnalysis) {
    return next({
      log: 'Image analysis not found',
      status: 500,
      message: {
        err: 'An error occurred openAiAltTextController',
      },
    });
  }

  try {
    const response = await openai.chat.completion.create({
      model: 'gpt-4',
      message: [
        {
          role: 'system',
          content: `come up with prompt here utilizing ${imageAnalysis} `,
        },
        { role: 'user', content: `${imageContext}, ${textContext}` },
      ],
    });

    const completion = response.choices[0].message.content;

    if (!completion) {
      return next({
        log: 'OpenAi did not return a response',
        status: 500,
        message: {
          err: 'An error occurred while quering openAI',
        },
      });
    }

    res.locals.altText = completion; //need to console.log completion to know what it inclues
    res.locals.details = completion; //need to console.log completion to know what it inclues

    return next();
  } catch (err) {
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

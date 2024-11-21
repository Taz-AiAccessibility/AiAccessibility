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
	const { imageAnalysis } = res.locals; //this will be receive from the azureController
	const prompt = `Directions: 
  You are a professional creating alt text for an img tag. This alt text will be used by screen-readers to describe photographs to people who are visually impaired. Start by reading the ${imageAnalysis}, this is image analysis of a photograph. 
  Format of your response:
  Once you have read the image analysis, respond with the alt text. Format the output this way: 
  A JSON object with the properties "simple" and "complex". The value of "simple" should be a string with a less detailed version of the alt text, and the value of "complex" should be a string which is a more detailed version of the alt text. This gives the user two options, based on their use case. You should also include no other words or punctuation other than the valid JSON object in your response. Do not include line breaks.
  example input:   
  example output: 
  {
    "simple: A lively concert scene with a crowd raising their hands.",
    "complex: A vibrant concert scene featuring a large crowd of people enthusiastically raising their hands in the air. The stage is brightly illuminated with colorful lights, and there are smoke or fog effects in the air, creating an energetic atmosphere typical of a music festival or concert event"
  }`;


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
			model: 'gpt-4o-mini',
			messages: [
				{
					role: 'system',
					content: prompt,
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

		res.locals.simple = completion; //need to console.log completion to know what it inclues
		res.locals.complex = completion; //need to console.log completion to know what it inclues
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

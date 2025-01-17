import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

const openAiAltTextController = {};

openAiAltTextController.queryOpenAI = async (req, res, next) => {

	console.log('open ai controller');

	//const { imageContext, textContext } = res.locals;
	const { imageAnalysis, imageContext, textContext } = res.locals; //this will be receive from the Controller, imageContext = provides more context for what is inside the image and textContext = provides information about who is the audience that this alt text is specifically being written for
	const prompt = `Directions: 
  You are a professional creating alt text for an img tag within CSS code. This alt text will be used by screen-readers to describe images to people who are visually impaired. Start by reading the ${imageAnalysis}, this is the description of the image. Then, read the ${imageContext}, if provided, this is further context about the image provided by the user. Finally, read the ${textContext}, if provided, this is information about what audience the alt text is for. While the alt text is always for people who are visually impaired, this will tell you what the targeted demographic is. What you should consider is that if the text is for children, then use simpler more elementary language, if it is for a more professional demographic, then use more corporate language, for artists then use more descriptive, poetic language, etc- if ${textContext} is an empty string then assume it is for a general audience and maintain a descriptive, informative, but professional tone.
  Format of your response:
  Once you have read the image analysis, respond with the alt text. Format the output as a JSON object with the properties simple and complex. The value of simple should be a string with a less detailed version of the alt text, and the value of complex should be a string with a more detailed version of the alt text. This gives the user two options, based on their use case. You should not include any other words or punctuation other than the valid JSON object in your response. Do not include line breaks.
`;
  
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
        
		//console.log({ completion });
		res.locals.analysisResult = JSON.parse(completion);

		// res.locals.simple = completion; //need to console.log completion to know what it includes
		// res.locals.complex = completion; //need to console.log completion to know what it includes
		// console.log("simple", completion.simple);
		return next();
	} catch (err) {
		console.log('error from open ai ', err);
		return next({
			log: `Error in openAI middleware ${err}`,
			status: 500,
			message: {
				err: 'An error occurred while querying openAiAltTextController',
			},
		});
	}
};

export default openAiAltTextController;

//  "simple": "A young deer standing in a flower-filled field.",
//   "complex": "A young deer, known as a fawn, stands gracefully in a vibrant field filled with various blooming flowers. The fawn has a soft, spotted coat and is surrounded by lush greenery, creating a serene and picturesque natural setting."
// 
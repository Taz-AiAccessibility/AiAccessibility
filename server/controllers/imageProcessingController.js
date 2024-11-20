import axios from 'axios';
import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const AZURE_ENDPOINT = process.env.AZURE_ENDPOINT;
const AZURE_API_KEY = process.env.AZURE_API_KEY;

async function openAiDescription(imageUrl) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.7, // Controls randomness of the response
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'What’s in this image?' },
          {
            type: 'image_url',
            image_url: {
              url: imageUrl,
              detail: 'low',
            },
          },
        ],
      },
    ],
  });
  return response.choices[0];
}

// Middleware function to analyze an image using Azure Computer Vision
export const azureImageProcessing = async (req, res, next) => {
  //const { imageUrl } = req.body;

  const imageUrl = 'https://www.smuinballet.org/app/uploads/maggie-scaled.jpg';

  if (!imageUrl) {
    return res.status(400).json({ error: 'Image URL is required' });
  }

  try {
    const response = await axios.post(
      `${AZURE_ENDPOINT}/vision/v3.2/analyze`,
      { url: imageUrl }, // Send image URL to Azure
      {
        headers: {
          'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
          'Content-Type': 'application/json',
        },
        params: {
          visualFeatures: 'Categories,Description,Tags,Objects', // Features to extract
        },
      }
    );

    const response2 = await openAiDescription(imageUrl);

    // Attach the result to the request object for further processing
    const { data } = response;
    console.log('data from azure', data);
    console.log('description/caption', data.description.captions);
    console.log({ response2 });
    res.locals.analysisResult = data;
    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    console.error('Error analyzing image:', error.message);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
};

// import OpenAI from 'openai';

// const openai = new OpenAI();

// async function main() {
//   const response = await openai.chat.completions.create({
//     model: 'gpt-4o-mini',
//     messages: [
//       {
//         role: 'user',
//         content: [
//           { type: 'text', text: 'What’s in this image?' },
//           {
//             type: 'image_url',
//             image_url: {
//               url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg',
//               detail: 'low',
//             },
//           },
//         ],
//       },
//     ],
//   });
//   console.log(response.choices[0]);
// }
// main();

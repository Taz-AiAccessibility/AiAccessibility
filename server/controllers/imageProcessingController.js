import axios from 'axios';
import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openAiImageProcessing = async (req, res, next) => {
  const userUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2Vea7dgtTPHYBB9zKLbeoYR5uzaCl9GbHA&s';

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
              url: userUrl,
              detail: 'low',
            },
          },
        ],
      },
    ],
  });
  console.log({ response });
  console.log('response from open ai', response.choices[0]);
  const data = response.choices[0].message.content;

  res.locals.imageAnalysis = data;
  console.log('IMAGE ANALYSIS RESULT!!!!!!!!!!!!!:', data)
  return next();
};

// Middleware function to analyze an image using Azure Computer Vision
export const azureImageProcessing = async (req, res, next) => {
  // uncomment this line when its time to connect front and back rather than hard code the test examples
  //const { userUrl } = req.body;


  const userUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2Vea7dgtTPHYBB9zKLbeoYR5uzaCl9GbHA&s';

  if (!userUrl) {
    return res.status(400).json({ error: 'Image URL is required' });
  }

  try {
    const response = await axios.post(
      `${AZURE_ENDPOINT}/vision/v3.2/analyze`,
      { url: userUrl }, // Send image URL to Azure
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

    // Attach the result to the request object for further processing
    const { data } = response;
    console.log('data from azure', data);
    console.log('description/caption', data.description.captions);
    // console.log({ response2 });
    res.locals.imageAnalysis = data;
    return next(); // Pass control to the next middleware or route handler
  } catch (error) {
    console.error('Error analyzing image:', error.message);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
};

// import OpenAI from 'openai';
// const AZURE_ENDPOINT = process.env.AZURE_ENDPOINT;
// const AZURE_API_KEY = process.env.AZURE_API_KEY;
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

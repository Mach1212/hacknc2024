import OpenAI from 'openai';


const openai = new OpenAI({ apiKey: TOKEN, dangerouslyAllowBrowser: true });

export const queryChatGpt = async (systemPrompt: string, userPrompt: string) => {
  return openai.chat.completions
    .create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    })
    .then(response => response.choices[0].message.content);
};

export const spaceInfoPrompt = (question: string) => [
  `You are an AI teacher. Your job is to inspire and educate your students about space. Output a concise summary about a given space topic.`,
  `Question: ${question}`,
];

export const visualizePrompt = (information: string) => [
  `You are an AI visualizer for the blind. Your job is to describe a scene or some information in a visually engaging way. Your visualization should describe a cartoonish scene with great depth of detail.`,
  `Information: ${information}`,
];

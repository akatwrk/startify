import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface RefinedIdea {
  coreTruths: string[];
  assumptionsToChallenge: string[];
  minimumViableActions: string[];
  roadmapToPrototype: string[];
}

export const refineIdeaWithAI = async (idea: string): Promise<RefinedIdea> => {
  try {
    const prompt = `Act as an expert startup founder with a 200 IQ and deep knowledge of Elon Musk's First Principles thinking framework.
Here is a startup idea: "${idea}".
Guide me step-by-step on how to turn this into a real startup using only first principles reasoning.
Break it down into:
1. Core Truths
2. Assumptions to Challenge
3. Minimum Viable Actions
4. Roadmap to First Prototype.
Write clearly, concisely, and practically.`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4",
      temperature: 0.7,
      max_tokens: 1000,
    });

    const response = completion.choices[0].message.content;
    if (!response) {
      throw new Error('No response from OpenAI');
    }

    // Parse the response into structured data
    const sections = response.split('\n\n');
    const refinedIdea: RefinedIdea = {
      coreTruths: [],
      assumptionsToChallenge: [],
      minimumViableActions: [],
      roadmapToPrototype: [],
    };

    sections.forEach(section => {
      if (section.includes('Core Truths')) {
        refinedIdea.coreTruths = section
          .split('\n')
          .filter(line => line.trim() && !line.includes('Core Truths'))
          .map(line => line.replace(/^\d+\.\s*/, '').trim());
      } else if (section.includes('Assumptions to Challenge')) {
        refinedIdea.assumptionsToChallenge = section
          .split('\n')
          .filter(line => line.trim() && !line.includes('Assumptions to Challenge'))
          .map(line => line.replace(/^\d+\.\s*/, '').trim());
      } else if (section.includes('Minimum Viable Actions')) {
        refinedIdea.minimumViableActions = section
          .split('\n')
          .filter(line => line.trim() && !line.includes('Minimum Viable Actions'))
          .map(line => line.replace(/^\d+\.\s*/, '').trim());
      } else if (section.includes('Roadmap to First Prototype')) {
        refinedIdea.roadmapToPrototype = section
          .split('\n')
          .filter(line => line.trim() && !line.includes('Roadmap to First Prototype'))
          .map(line => line.replace(/^\d+\.\s*/, '').trim());
      }
    });

    return refinedIdea;
  } catch (error) {
    console.error('Error refining idea with AI:', error);
    throw new Error('Failed to refine idea with AI');
  }
}; 
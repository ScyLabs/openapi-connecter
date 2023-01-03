import { Configuration, OpenAIApi } from "openai";
import * as fs from "node:fs";

const func = async (): Promise<void> => {
  const configuration = new Configuration({
    apiKey: process.env.API_KEY || "",
  });
  const openai = new OpenAIApi(configuration);
  // respond to text

  /* const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "",
    max_tokens: 2048,
    temperature: 0,
  });*/

  // generate image
  const imageResponse = await openai.createImage({
    prompt: "Dessine moi un mouton",
    n: 1,
    size: "1024x1024",
  });

  console.log("🚀 ~ file: index.ts:14 ~ func ~ response", imageResponse.data);
};

func();

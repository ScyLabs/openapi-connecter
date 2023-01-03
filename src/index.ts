import { Configuration, OpenAIApi } from "openai";
import * as fs from "node:fs";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });
dotenv.config({ path: "./.env" });
const func = async (): Promise<void> => {
  const configuration = new Configuration({
    apiKey: process.env.API_KEY || "",
  });

  const openai = new OpenAIApi(configuration);
  // respond to text

  /*
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Un pokemon de wish",
    max_tokens: 2048,
    temperature: 0,
  });*/

  // generate image

  const response = await openai.createImage({
    prompt: "Dessine moi un mouton",
    n: 1,
    size: "1024x1024",
  });

  console.log("🚀 ~ file: index.ts:14 ~ func ~ response", response.data);
};

func();

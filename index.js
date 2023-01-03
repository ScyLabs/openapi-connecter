"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("openai");
const func = () => __awaiter(void 0, void 0, void 0, function* () {
    const configuration = new openai_1.Configuration({
        apiKey: "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",
    });
    const openai = new openai_1.OpenAIApi(configuration);
    const response = yield openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    console.log("🚀 ~ file: index.ts:14 ~ func ~ response", response);
});
func();

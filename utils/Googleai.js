import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLEAI_KEY } from "./ImageUrl";
export const genAI = new GoogleGenerativeAI(GOOGLEAI_KEY);